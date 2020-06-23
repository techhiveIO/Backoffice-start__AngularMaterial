import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavigationStart, Router, RouterEvent} from '@angular/router';
import {of, Subject} from 'rxjs';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {EventEmitter} from '@angular/core';

describe('AppComponent', () => {
  const onLangChangeSubject: Subject<{ lang: string }> = new Subject<{ lang: string }>();
  const routerEventsSubject: Subject<RouterEvent> = new Subject<RouterEvent>();

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockedTranslateService: jasmine.SpyObj<TranslateService>;
  let mockedRouter: Partial<Router>;

  const configureTestingModule: () => void = () => {
    mockedTranslateService = {
      ...jasmine.createSpyObj(TranslateService, ['use', 'get']),
      onLangChange: onLangChangeSubject.asObservable(),
      onTranslationChange: new EventEmitter(),
      onDefaultLangChange: new EventEmitter(),
      get: () => of(''),
    };

    mockedRouter = {
      events: routerEventsSubject.asObservable(),
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        TranslateModule.forRoot(),
      ],
      providers: [
        {provide: Router, useValue: mockedRouter},
        {provide: TranslateService, useValue: mockedTranslateService},
      ],
    }).compileComponents();
  };

  const initializeTestComponent: () => void = (): void => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  };

  describe('OnInit', () => {
    describe('when the route is a locked one', () => {
      beforeEach(async(() => {
        configureTestingModule();
      }));

      beforeEach(() => {
        initializeTestComponent();
      });

      it('should set the layout for authenticated pages', () => {
        routerEventsSubject.next(new NavigationStart(0, '/users'));
        expect(component.loadMembersLayout).toBe(true);
      });
    });

    describe('when the route is a public route', () => {
      beforeEach(async(() => {
        configureTestingModule();
      }));

      beforeEach(() => {
        initializeTestComponent();
      });

      it('should set the layout for no-auth pages', () => {
        routerEventsSubject.next(new NavigationStart(0, '/auth'));
        expect(component.loadMembersLayout).toBe(false);
      });
    });
  });

  describe('ToggleDrawer', () => {
    beforeEach(async(() => {
      configureTestingModule();
    }));

    beforeEach(() => {
      initializeTestComponent();
    });

    it('should open the drawer if it was closed', () => {
      component.drawerOpened = true;
      fixture.detectChanges();

      component.toggleDrawer();
      expect(component.drawerOpened).toBe(false);
    });
  });

  describe('changeLanguage', () => {
    beforeEach(async(() => {
      configureTestingModule();
    }));

    beforeEach(() => {
      initializeTestComponent();
    });

    it('should tell the TranslateService to use the provided language', () => {
      const mockedNewLanguage = 'ar';
      component.changeLanguage(mockedNewLanguage);

      expect(mockedTranslateService.use).toHaveBeenCalledTimes(1);
      expect(mockedTranslateService.use).toHaveBeenCalledWith(mockedNewLanguage);
    });
  });
});