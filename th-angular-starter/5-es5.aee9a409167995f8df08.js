function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YuuO:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return ke}));var i,a,o,r,c,s,l,m,u=n("tyNb"),h=n("fXoL"),d=((i=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=h.Ib({type:i,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"auth-container"],[1,"content-col"],[1,"brand-col"]],template:function(e,t){1&e&&(h.Ub(0,"div",0),h.Ub(1,"div",1),h.Pb(2,"router-outlet"),h.Tb(),h.Pb(3,"div",2),h.Tb())},directives:[u.d],styles:[".auth-container[_ngcontent-%COMP%]{display:flex}.auth-action[_ngcontent-%COMP%]{margin-top:2rem}.brand-col[_ngcontent-%COMP%], .content-col[_ngcontent-%COMP%]{height:100vh}.content-col[_ngcontent-%COMP%]{flex-basis:30%;padding:0 5rem}.brand-col[_ngcontent-%COMP%]{flex-grow:2;background:var(--color-secondary)}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),i),b=n("3Pt+"),f=n("kmnG"),k=n("nLfN"),p=n("8LU1"),g=n("EY2u"),_=n("XNiG"),y=(n("xgIS"),n("3UWI"),n("1G5W"),n("ofXK")),x=Object(k.f)({passive:!0}),v=((o=function(){function e(t,n){_classCallCheck(this,e),this._platform=t,this._ngZone=n,this._monitoredElements=new Map}return _createClass(e,[{key:"monitor",value:function(e){var t=this;if(!this._platform.isBrowser)return g.a;var n=Object(p.e)(e),i=this._monitoredElements.get(n);if(i)return i.subject.asObservable();var a=new _.a,o="cdk-text-field-autofilled",r=function(e){"cdk-text-field-autofill-start"!==e.animationName||n.classList.contains(o)?"cdk-text-field-autofill-end"===e.animationName&&n.classList.contains(o)&&(n.classList.remove(o),t._ngZone.run((function(){return a.next({target:e.target,isAutofilled:!1})}))):(n.classList.add(o),t._ngZone.run((function(){return a.next({target:e.target,isAutofilled:!0})})))};return this._ngZone.runOutsideAngular((function(){n.addEventListener("animationstart",r,x),n.classList.add("cdk-text-field-autofill-monitored")})),this._monitoredElements.set(n,{subject:a,unlisten:function(){n.removeEventListener("animationstart",r,x)}}),a.asObservable()}},{key:"stopMonitoring",value:function(e){var t=Object(p.e)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}},{key:"ngOnDestroy",value:function(){var e=this;this._monitoredElements.forEach((function(t,n){return e.stopMonitoring(n)}))}}]),e}()).\u0275fac=function(e){return new(e||o)(h.Yb(k.a),h.Yb(h.A))},o.\u0275prov=Object(h.Kb)({factory:function(){return new o(Object(h.Yb)(k.a),Object(h.Yb)(h.A))},token:o,providedIn:"root"}),o),C=((a=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:a}),a.\u0275inj=h.Lb({factory:function(e){return new(e||a)},imports:[[k.b]]}),a),O=n("FKr1"),w=new h.r("MAT_INPUT_VALUE_ACCESSOR"),P=["button","checkbox","file","hidden","image","radio","range","reset","submit"],T=0,I=Object(O.q)((function e(t,n,i,a){_classCallCheck(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=a})),M=((c=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a,o,r,c,s,l,m){var u;_classCallCheck(this,n),(u=t.call(this,c,o,r,a))._elementRef=e,u._platform=i,u.ngControl=a,u._autofillMonitor=l,u._uid="mat-input-".concat(T++),u.focused=!1,u.stateChanges=new _.a,u.controlType="mat-input",u.autofilled=!1,u._disabled=!1,u._required=!1,u._type="text",u._readonly=!1,u._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter((function(e){return Object(k.e)().has(e)}));var h=u._elementRef.nativeElement,d=h.nodeName.toLowerCase();return u._inputValueAccessor=s||h,u._previousNativeValue=u.value,u.id=u.id,i.IOS&&m.runOutsideAngular((function(){e.nativeElement.addEventListener("keyup",(function(e){var t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))}))})),u._isServer=!u._platform.isBrowser,u._isNativeSelect="select"===d,u._isTextarea="textarea"===d,u._isNativeSelect&&(u.controlType=h.multiple?"mat-native-select-multiple":"mat-native-select"),u}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((function(t){e.autofilled=t.isAutofilled,e.stateChanges.next()}))}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}},{key:"focus",value:function(e){this._elementRef.nativeElement.focus(e)}},{key:"_focusChanged",value:function(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}},{key:"_onInput",value:function(){}},{key:"_dirtyCheckNativeValue",value:function(){var e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}},{key:"_validateType",value:function(){if(P.indexOf(this._type)>-1)throw Error('Input type "'.concat(this._type,"\" isn't supported by matInput."))}},{key:"_isNeverEmpty",value:function(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}},{key:"_isBadInput",value:function(){var e=this._elementRef.nativeElement.validity;return e&&e.badInput}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"onContainerClick",value:function(){this.focused||this.focus()}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(p.c)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(p.c)(e)}},{key:"type",get:function(){return this._type},set:function(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Object(k.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}},{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=Object(p.c)(e)}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"shouldLabelFloat",get:function(){if(this._isNativeSelect){var e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}}]),n}(I)).\u0275fac=function(e){return new(e||c)(h.Ob(h.l),h.Ob(k.a),h.Ob(b.i,10),h.Ob(b.l,8),h.Ob(b.e,8),h.Ob(O.c),h.Ob(w,10),h.Ob(v),h.Ob(h.A))},c.\u0275dir=h.Jb({type:c,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:10,hostBindings:function(e,t){1&e&&h.cc("focus",(function(){return t._focusChanged(!0)}))("blur",(function(){return t._focusChanged(!1)}))("input",(function(){return t._onInput()})),2&e&&(h.Xb("disabled",t.disabled)("required",t.required),h.Db("id",t.id)("placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),h.Fb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher"},exportAs:["matInput"],features:[h.Bb([{provide:f.d,useExisting:c}]),h.zb,h.Ab]}),c),E=((r=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:r}),r.\u0275inj=h.Lb({factory:function(e){return new(e||r)},providers:[O.c],imports:[[C,f.e],C,f.e]}),r),R=n("R1ws"),A=n("GU7r"),U=n("u47x"),L=["input"],N=function(){return{enterDuration:150}},j=["*"],q=new h.r("mat-checkbox-default-options",{providedIn:"root",factory:function(){return{color:"accent",clickAction:"check-indeterminate"}}}),S=new h.r("mat-checkbox-click-action"),G=0,D={provide:b.h,useExisting:Object(h.U)((function(){return F})),multi:!0},z=function e(){_classCallCheck(this,e)},V=Object(O.s)(Object(O.n)(Object(O.o)(Object(O.p)((function e(t){_classCallCheck(this,e),this._elementRef=t}))))),F=((m=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a,o,r,c,s,l){var m;return _classCallCheck(this,n),(m=t.call(this,e))._changeDetectorRef=i,m._focusMonitor=a,m._ngZone=o,m._clickAction=c,m._animationMode=s,m._options=l,m.ariaLabel="",m.ariaLabelledby=null,m._uniqueId="mat-checkbox-".concat(++G),m.id=m._uniqueId,m.labelPosition="after",m.name=null,m.change=new h.o,m.indeterminateChange=new h.o,m._onTouched=function(){},m._currentAnimationClass="",m._currentCheckState=0,m._controlValueAccessorChangeFn=function(){},m._checked=!1,m._disabled=!1,m._indeterminate=!1,m._options=m._options||{},m._options.color&&(m.color=m._options.color),m.tabIndex=parseInt(r)||0,m._focusMonitor.monitor(e,!0).subscribe((function(e){e||Promise.resolve().then((function(){m._onTouched(),i.markForCheck()}))})),m._clickAction=m._clickAction||m._options.clickAction,m}return _createClass(n,[{key:"ngAfterViewInit",value:function(){this._syncIndeterminate(this._indeterminate)}},{key:"ngAfterViewChecked",value:function(){}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"_isRippleDisabled",value:function(){return this.disableRipple||this.disabled}},{key:"_onLabelTextChange",value:function(){this._changeDetectorRef.detectChanges()}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this._controlValueAccessorChangeFn=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"_getAriaChecked",value:function(){return this.checked?"true":this.indeterminate?"mixed":"false"}},{key:"_transitionCheckState",value:function(e){var t=this._currentCheckState,n=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);var i=this._currentAnimationClass;this._ngZone.runOutsideAngular((function(){setTimeout((function(){n.classList.remove(i)}),1e3)}))}}},{key:"_emitChangeEvent",value:function(){var e=new z;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e)}},{key:"toggle",value:function(){this.checked=!this.checked}},{key:"_onInputClick",value:function(e){var t=this;e.stopPropagation(),this.disabled||"noop"===this._clickAction?this.disabled||"noop"!==this._clickAction||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==this._clickAction&&Promise.resolve().then((function(){t._indeterminate=!1,t.indeterminateChange.emit(t._indeterminate)})),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}},{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"keyboard",t=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._inputElement,e,t)}},{key:"_onInteractionEvent",value:function(e){e.stopPropagation()}},{key:"_getAnimationClassForCheckStateTransition",value:function(e,t){if("NoopAnimations"===this._animationMode)return"";var n="";switch(e){case 0:if(1===t)n="unchecked-checked";else{if(3!=t)return"";n="unchecked-indeterminate"}break;case 2:n=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:n=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:n=1===t?"indeterminate-checked":"indeterminate-unchecked"}return"mat-checkbox-anim-".concat(n)}},{key:"_syncIndeterminate",value:function(e){var t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(p.c)(e)}},{key:"checked",get:function(){return this._checked},set:function(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){var t=Object(p.c)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}},{key:"indeterminate",get:function(){return this._indeterminate},set:function(e){var t=e!=this._indeterminate;this._indeterminate=Object(p.c)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}}]),n}(V)).\u0275fac=function(e){return new(e||m)(h.Ob(h.l),h.Ob(h.h),h.Ob(U.d),h.Ob(h.A),h.Zb("tabindex"),h.Ob(S,8),h.Ob(R.a,8),h.Ob(q,8))},m.\u0275cmp=h.Ib({type:m,selectors:[["mat-checkbox"]],viewQuery:function(e,t){var n;1&e&&(h.Cc(L,!0),h.Cc(O.j,!0)),2&e&&(h.oc(n=h.dc())&&(t._inputElement=n.first),h.oc(n=h.dc())&&(t.ripple=n.first))},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(h.Xb("id",t.id),h.Db("tabindex",null),h.Fb("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[h.Bb([D]),h.zb],ngContentSelectors:j,decls:17,vars:19,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(h.kc(),h.Ub(0,"label",0,1),h.Ub(2,"div",2),h.Ub(3,"input",3,4),h.cc("change",(function(e){return t._onInteractionEvent(e)}))("click",(function(e){return t._onInputClick(e)})),h.Tb(),h.Ub(5,"div",5),h.Pb(6,"div",6),h.Tb(),h.Pb(7,"div",7),h.Ub(8,"div",8),h.fc(),h.Ub(9,"svg",9),h.Pb(10,"path",10),h.Tb(),h.ec(),h.Pb(11,"div",11),h.Tb(),h.Tb(),h.Ub(12,"span",12,13),h.cc("cdkObserveContent",(function(){return t._onLabelTextChange()})),h.Ub(14,"span",14),h.yc(15,"\xa0"),h.Tb(),h.jc(16),h.Tb(),h.Tb()),2&e){var n=h.pc(1),i=h.pc(13);h.Db("for",t.inputId),h.Cb(2),h.Fb("mat-checkbox-inner-container-no-side-margin",!i.textContent||!i.textContent.trim()),h.Cb(1),h.lc("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),h.Db("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked()),h.Cb(2),h.lc("matRippleTrigger",n)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",h.nc(18,N))}},directives:[O.j,A.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),m),B=((l=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:l}),l.\u0275inj=h.Lb({factory:function(e){return new(e||l)}}),l),X=((s=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:s}),s.\u0275inj=h.Lb({factory:function(e){return new(e||s)},imports:[[O.k,O.f,A.c,B],O.f,B]}),s),Y=n("bTqV");function Z(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"This field is required"),h.Tb())}function H(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"Please enter a valid email."),h.Tb())}function J(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1," You must enter a password to continue. "),h.Tb())}var K,W=((K=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t,this.isLoading=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.formGroup=this.formBuilder.group({email:["",[b.n.required,b.n.email]],password:["",b.n.required],rememberMe:[!1]})}},{key:"onSubmit",value:function(){this.isLoading=!0}}]),e}()).\u0275fac=function(e){return new(e||K)(h.Ob(b.c))},K.\u0275cmp=h.Ib({type:K,selectors:[["ng-component"]],decls:24,vars:5,consts:[[1,"auth-content"],["src","assets/brand/logo.svg",1,"brand-logo"],[3,"formGroup"],[1,"auth-subheader"],[1,"auth-header"],["matInput","","formControlName","email","type","text","placeholder","Email"],[4,"ngIf"],["matInput","","formControlName","password","type","password","placeholder","********"],["formControlName","rememberMe"],["mat-raised-button","","color","primary",1,"auth-action",3,"disabled"],["routerLink","/auth/sign-up",1,"auth-navigation"]],template:function(e,t){1&e&&(h.Ub(0,"div",0),h.Pb(1,"img",1),h.Ub(2,"form",2),h.Ub(3,"h2",3),h.yc(4,"Hello,"),h.Tb(),h.Ub(5,"h1",4),h.yc(6,"Sign in to TechHive.IO"),h.Tb(),h.Ub(7,"mat-form-field"),h.Ub(8,"mat-label"),h.yc(9,"Email"),h.Tb(),h.Pb(10,"input",5),h.xc(11,Z,2,0,"mat-error",6),h.xc(12,H,2,0,"mat-error",6),h.Tb(),h.Ub(13,"mat-form-field"),h.Ub(14,"mat-label"),h.yc(15,"Password"),h.Tb(),h.Pb(16,"input",7),h.xc(17,J,2,0,"mat-error",6),h.Tb(),h.Ub(18,"mat-checkbox",8),h.yc(19,"Remember Me"),h.Tb(),h.Ub(20,"button",9),h.yc(21," Sign in "),h.Tb(),h.Ub(22,"a",10),h.yc(23,"Create a new account here."),h.Tb(),h.Tb(),h.Tb()),2&e&&(h.Cb(2),h.lc("formGroup",t.formGroup),h.Cb(9),h.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.required),h.Cb(1),h.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.email),h.Cb(5),h.lc("ngIf",null==t.formGroup.controls.password.errors?null:t.formGroup.controls.password.errors.required),h.Cb(3),h.lc("disabled",!t.formGroup.valid||t.isLoading))},directives:[b.o,b.k,b.e,f.c,f.f,M,b.b,b.j,b.d,y.k,F,Y.a,u.b,f.b],styles:["[_nghost-%COMP%]{display:flex;height:100%}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),K),Q=n("NFeN");function $(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"This field is required"),h.Tb())}function ee(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"This field is required"),h.Tb())}function te(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"This field is required"),h.Tb())}function ne(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1,"Please enter a valid email."),h.Tb())}function ie(e,t){1&e&&(h.Ub(0,"mat-icon"),h.yc(1,"visibility_off"),h.Tb())}function ae(e,t){1&e&&(h.Ub(0,"mat-icon"),h.yc(1,"visibility"),h.Tb())}function oe(e,t){1&e&&(h.Ub(0,"mat-error"),h.yc(1," You must enter a password to continue. "),h.Tb())}var re,ce,se,le,me,ue=[{path:"",component:d,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:W},{path:"sign-up",component:(ce=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t,this.isLoading=!1,this.hidden=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.formGroup=this.formBuilder.group({firstName:["",b.n.required],lastName:["",b.n.required],email:["",[b.n.required,b.n.email]],password:["",b.n.required]})}},{key:"toggleHidePassword",value:function(){this.hidden=!this.hidden}},{key:"onSubmit",value:function(){this.isLoading=!0}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(h.Ob(b.c))},ce.\u0275cmp=h.Ib({type:ce,selectors:[["ng-component"]],decls:33,vars:10,consts:[[1,"auth-content"],["src","assets/brand/logo.svg",1,"brand-logo"],[3,"formGroup"],[1,"auth-header"],["matInput","","formControlName","firstName","type","text","placeholder","First Name"],[4,"ngIf"],["matInput","","formControlName","lastName","type","text","placeholder","Last Name"],["matInput","","formControlName","email","type","text","placeholder","Email"],["matInput","","formControlName","password","placeholder","********",3,"type"],["type","button","mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"auth-action",3,"disabled"],["routerLink","/auth/login",1,"auth-navigation"]],template:function(e,t){1&e&&(h.Ub(0,"div",0),h.Pb(1,"img",1),h.Ub(2,"form",2),h.Ub(3,"h1",3),h.yc(4,"Register a new account."),h.Tb(),h.Ub(5,"mat-form-field"),h.Ub(6,"mat-label"),h.yc(7,"First Name"),h.Tb(),h.Pb(8,"input",4),h.xc(9,$,2,0,"mat-error",5),h.Tb(),h.Ub(10,"mat-form-field"),h.Ub(11,"mat-label"),h.yc(12,"Last Name"),h.Tb(),h.Pb(13,"input",6),h.xc(14,ee,2,0,"mat-error",5),h.Tb(),h.Ub(15,"mat-form-field"),h.Ub(16,"mat-label"),h.yc(17,"Email"),h.Tb(),h.Pb(18,"input",7),h.xc(19,te,2,0,"mat-error",5),h.xc(20,ne,2,0,"mat-error",5),h.Tb(),h.Ub(21,"mat-form-field"),h.Ub(22,"mat-label"),h.yc(23,"Password"),h.Tb(),h.Pb(24,"input",8),h.Ub(25,"button",9),h.cc("click",(function(){return t.toggleHidePassword()})),h.xc(26,ie,2,0,"mat-icon",5),h.xc(27,ae,2,0,"mat-icon",5),h.Tb(),h.xc(28,oe,2,0,"mat-error",5),h.Tb(),h.Ub(29,"button",10),h.yc(30," Create my account "),h.Tb(),h.Ub(31,"a",11),h.yc(32,"Already have an account?"),h.Tb(),h.Tb(),h.Tb()),2&e&&(h.Cb(2),h.lc("formGroup",t.formGroup),h.Cb(7),h.lc("ngIf",null==t.formGroup.controls.firstName.errors?null:t.formGroup.controls.firstName.errors.required),h.Cb(5),h.lc("ngIf",null==t.formGroup.controls.lastName.errors?null:t.formGroup.controls.lastName.errors.required),h.Cb(5),h.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.required),h.Cb(1),h.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.email),h.Cb(4),h.lc("type",t.hidden?"password":"text"),h.Cb(2),h.lc("ngIf",t.hidden),h.Cb(1),h.lc("ngIf",!t.hidden),h.Cb(1),h.lc("ngIf",null==t.formGroup.controls.password.errors?null:t.formGroup.controls.password.errors.required),h.Cb(1),h.lc("disabled",!t.formGroup.valid||t.isLoading))},directives:[b.o,b.k,b.e,f.c,f.f,M,b.b,b.j,b.d,y.k,Y.a,f.g,u.b,f.b,Q.a],styles:["[_nghost-%COMP%]{display:flex;height:100%}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),ce)},{path:"reset-password",component:(re=function e(){_classCallCheck(this,e)},re.\u0275fac=function(e){return new(e||re)},re.\u0275cmp=h.Ib({type:re,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&h.yc(0,"Hello Reset Password\n")},styles:[""]}),re)}]}],he=((le=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:le}),le.\u0275inj=h.Lb({factory:function(e){return new(e||le)},imports:[[u.c.forChild(ue)],u.c]}),le),de=((se=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:se}),se.\u0275inj=h.Lb({factory:function(e){return new(e||se)},imports:[[O.f],O.f]}),se),be=n("PCNd"),fe=[de,E,X,Y.b,Q.b],ke=((me=function e(){_classCallCheck(this,e)}).\u0275mod=h.Mb({type:me}),me.\u0275inj=h.Lb({factory:function(e){return new(e||me)},imports:[[be.a,he].concat(fe)]}),me)}}]);