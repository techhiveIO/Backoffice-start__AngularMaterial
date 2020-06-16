import {AuthApi} from './auth-api.service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {MOCKED_AUTH_API_STATE} from '../mocks/auth.mocks';
import {take} from 'rxjs/operators';
import {AuthStateInterface} from '../models/authState.model';

describe('Auth Api Service', () => {
  let service: AuthApi;
  let httpMock: HttpTestingController;

  const configureTestingModule: () => void = () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthApi,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthApi);
  };

  afterEach(() => {
    httpMock.verify();
  });

  describe('on login', () => {
    beforeEach(async(() => {
      configureTestingModule();
    }));

    it('should send a post request to the login endpoint', () => {
      service.login('ali@techhive.io', '123123')
        .pipe(take(1))
        .subscribe((state: AuthStateInterface) => {
          expect(state.user.id).toEqual(MOCKED_AUTH_API_STATE.user._id);
          expect(state.token).toBeTruthy();
        });

      const postLoginRequest: TestRequest = httpMock.expectOne({
        method: 'POST',
        url: `${environment.API}/login`,
      });

      postLoginRequest.flush({data: MOCKED_AUTH_API_STATE});
    });
  });
});
