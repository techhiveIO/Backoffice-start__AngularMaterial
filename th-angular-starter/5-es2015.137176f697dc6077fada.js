(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YuuO:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return re}));var i=n("tyNb"),a=n("fXoL");let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Ib({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"auth-container"],[1,"content-col"],[1,"brand-col"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Pb(2,"router-outlet"),a.Tb(),a.Pb(3,"div",2),a.Tb())},directives:[i.e],styles:[".auth-container[_ngcontent-%COMP%]{display:flex}.auth-action[_ngcontent-%COMP%]{margin-top:2rem}.brand-col[_ngcontent-%COMP%], .content-col[_ngcontent-%COMP%]{height:100vh}.content-col[_ngcontent-%COMP%]{flex-basis:30%;padding:0 5rem}.brand-col[_ngcontent-%COMP%]{flex-grow:2;background:var(--color-secondary)}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),e})();var o=n("3Pt+"),c=n("kmnG"),s=n("nLfN"),m=n("8LU1"),l=n("EY2u"),h=n("XNiG"),d=(n("xgIS"),n("3UWI"),n("1G5W"),n("ofXK"));const b=Object(s.f)({passive:!0});let u=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return l.a;const t=Object(m.e)(e),n=this._monitoredElements.get(t);if(n)return n.subject.asObservable();const i=new h.a,a="cdk-text-field-autofilled",r=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(a)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>i.next({target:e.target,isAutofilled:!1}))):(t.classList.add(a),this._ngZone.run(()=>i.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",r,b),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:i,unlisten:()=>{t.removeEventListener("animationstart",r,b)}}),i.asObservable()}stopMonitoring(e){const t=Object(m.e)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(a.Yb(s.a),a.Yb(a.A))},e.\u0275prov=Object(a.Kb)({factory:function(){return new e(Object(a.Yb)(s.a),Object(a.Yb)(a.A))},token:e,providedIn:"root"}),e})(),p=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[s.b]]}),e})();var k=n("FKr1");const f=new a.r("MAT_INPUT_VALUE_ACCESSOR"),g=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let x=0;class _{constructor(e,t,n,i){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=n,this.ngControl=i}}const y=Object(k.s)(_);let v=(()=>{class e extends y{constructor(e,t,n,i,a,r,o,c,m){super(r,i,a,n),this._elementRef=e,this._platform=t,this.ngControl=n,this._autofillMonitor=c,this._uid=`mat-input-${x++}`,this.focused=!1,this.stateChanges=new h.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Object(s.e)().has(e));const l=this._elementRef.nativeElement,d=l.nodeName.toLowerCase();this._inputValueAccessor=o||l,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&m.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",e=>{let t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===d,this._isTextarea="textarea"===d,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=Object(m.c)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=Object(m.c)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Object(s.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Object(m.c)(e)}ngOnInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){if(g.indexOf(this._type)>-1)throw Error(`Input type "${this._type}" isn't supported by matInput.`)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focused||this.focus()}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(a.l),a.Ob(s.a),a.Ob(o.i,10),a.Ob(o.l,8),a.Ob(o.e,8),a.Ob(k.c),a.Ob(f,10),a.Ob(u),a.Ob(a.A))},e.\u0275dir=a.Jb({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:10,hostBindings:function(e,t){1&e&&a.cc("focus",(function(){return t._focusChanged(!0)}))("blur",(function(){return t._focusChanged(!1)}))("input",(function(){return t._onInput()})),2&e&&(a.Xb("disabled",t.disabled)("required",t.required),a.Db("id",t.id)("placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),a.Fb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher"},exportAs:["matInput"],features:[a.Bb([{provide:c.d,useExisting:e}]),a.zb,a.Ab]}),e})(),C=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},providers:[k.c],imports:[[p,c.e],p,c.e]}),e})();var O=n("R1ws"),w=n("GU7r"),T=n("u47x");const M=["input"],I=function(){return{enterDuration:150}},P=["*"],A=new a.r("mat-checkbox-default-options",{providedIn:"root",factory:function(){return{color:"accent",clickAction:"check-indeterminate"}}}),E=new a.r("mat-checkbox-click-action");let U=0;const L={provide:o.h,useExisting:Object(a.U)(()=>q),multi:!0};class N{}class z{constructor(e){this._elementRef=e}}const R=Object(k.u)(Object(k.p)(Object(k.q)(Object(k.r)(z))));let q=(()=>{class e extends R{constructor(e,t,n,i,r,o,c,s){super(e),this._changeDetectorRef=t,this._focusMonitor=n,this._ngZone=i,this._clickAction=o,this._animationMode=c,this._options=s,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId=`mat-checkbox-${++U}`,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new a.o,this.indeterminateChange=new a.o,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||{},this._options.color&&(this.color=this._options.color),this.tabIndex=parseInt(r)||0,this._focusMonitor.monitor(e,!0).subscribe(e=>{e||Promise.resolve().then(()=>{this._onTouched(),t.markForCheck()})}),this._clickAction=this._clickAction||this._options.clickAction}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(e){this._required=Object(m.c)(e)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){const t=Object(m.c)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(e){const t=e!=this._indeterminate;this._indeterminate=Object(m.c)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(e){let t=this._currentCheckState,n=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);const e=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(e)},1e3)})}}_emitChangeEvent(){const e=new N;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e)}toggle(){this.checked=!this.checked}_onInputClick(e){e.stopPropagation(),this.disabled||"noop"===this._clickAction?this.disabled||"noop"!==this._clickAction||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==this._clickAction&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(e="keyboard",t){this._focusMonitor.focusVia(this._inputElement,e,t)}_onInteractionEvent(e){e.stopPropagation()}_getAnimationClassForCheckStateTransition(e,t){if("NoopAnimations"===this._animationMode)return"";let n="";switch(e){case 0:if(1===t)n="unchecked-checked";else{if(3!=t)return"";n="unchecked-indeterminate"}break;case 2:n=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:n=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:n=1===t?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${n}`}_syncIndeterminate(e){const t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(a.l),a.Ob(a.h),a.Ob(T.e),a.Ob(a.A),a.Zb("tabindex"),a.Ob(E,8),a.Ob(O.a,8),a.Ob(A,8))},e.\u0275cmp=a.Ib({type:e,selectors:[["mat-checkbox"]],viewQuery:function(e,t){var n;1&e&&(a.Dc(M,!0),a.Dc(k.l,!0)),2&e&&(a.oc(n=a.dc())&&(t._inputElement=n.first),a.oc(n=a.dc())&&(t.ripple=n.first))},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(a.Xb("id",t.id),a.Db("tabindex",null),a.Fb("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[a.Bb([L]),a.zb],ngContentSelectors:P,decls:17,vars:19,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(a.kc(),a.Ub(0,"label",0,1),a.Ub(2,"div",2),a.Ub(3,"input",3,4),a.cc("change",(function(e){return t._onInteractionEvent(e)}))("click",(function(e){return t._onInputClick(e)})),a.Tb(),a.Ub(5,"div",5),a.Pb(6,"div",6),a.Tb(),a.Pb(7,"div",7),a.Ub(8,"div",8),a.fc(),a.Ub(9,"svg",9),a.Pb(10,"path",10),a.Tb(),a.ec(),a.Pb(11,"div",11),a.Tb(),a.Tb(),a.Ub(12,"span",12,13),a.cc("cdkObserveContent",(function(){return t._onLabelTextChange()})),a.Ub(14,"span",14),a.zc(15,"\xa0"),a.Tb(),a.jc(16),a.Tb(),a.Tb()),2&e){const e=a.pc(1),n=a.pc(13);a.Db("for",t.inputId),a.Cb(2),a.Fb("mat-checkbox-inner-container-no-side-margin",!n.textContent||!n.textContent.trim()),a.Cb(1),a.lc("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),a.Db("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked()),a.Cb(2),a.lc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",a.nc(18,I))}},directives:[k.l,w.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)}}),e})(),G=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[k.m,k.f,w.c,j],k.f,j]}),e})();var S=n("bTqV"),D=n("sYmb");function V(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"This field is required"),a.Tb())}function F(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"Please enter a valid email."),a.Tb())}function B(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1," You must enter a password to continue. "),a.Tb())}let X=(()=>{class e{constructor(e){this.formBuilder=e,this.isLoading=!1}ngOnInit(){this.formGroup=this.formBuilder.group({email:["",[o.n.required,o.n.email]],password:["",o.n.required],rememberMe:[!1]})}onSubmit(){this.isLoading=!0}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(o.c))},e.\u0275cmp=a.Ib({type:e,selectors:[["ng-component"]],decls:25,vars:11,consts:[[1,"auth-content"],["src","assets/brand/logo.svg",1,"brand-logo"],[3,"formGroup"],[1,"auth-subheader"],[1,"auth-header",3,"innerHTML"],["matInput","","formControlName","email","type","text","placeholder","Email"],[4,"ngIf"],["matInput","","formControlName","password","type","password","placeholder","********"],["formControlName","rememberMe"],["mat-raised-button","","color","primary",1,"auth-action",3,"disabled"],["routerLink","/auth/sign-up",1,"auth-navigation"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Pb(1,"img",1),a.Ub(2,"form",2),a.Ub(3,"h2",3),a.zc(4),a.hc(5,"translate"),a.Tb(),a.Pb(6,"h1",4),a.hc(7,"translate"),a.Ub(8,"mat-form-field"),a.Ub(9,"mat-label"),a.zc(10,"Email"),a.Tb(),a.Pb(11,"input",5),a.yc(12,V,2,0,"mat-error",6),a.yc(13,F,2,0,"mat-error",6),a.Tb(),a.Ub(14,"mat-form-field"),a.Ub(15,"mat-label"),a.zc(16,"Password"),a.Tb(),a.Pb(17,"input",7),a.yc(18,B,2,0,"mat-error",6),a.Tb(),a.Ub(19,"mat-checkbox",8),a.zc(20,"Remember Me"),a.Tb(),a.Ub(21,"button",9),a.zc(22," Sign in "),a.Tb(),a.Ub(23,"a",10),a.zc(24,"Create a new account here."),a.Tb(),a.Tb(),a.Tb()),2&e&&(a.Cb(2),a.lc("formGroup",t.formGroup),a.Cb(2),a.Ac(a.ic(5,7,"AUTH.GREETING")),a.Cb(2),a.lc("innerHTML",a.ic(7,9,"AUTH.SIGN_IN_HEADING"),a.sc),a.Cb(6),a.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.required),a.Cb(1),a.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.email),a.Cb(5),a.lc("ngIf",null==t.formGroup.controls.password.errors?null:t.formGroup.controls.password.errors.required),a.Cb(3),a.lc("disabled",!t.formGroup.valid||t.isLoading))},directives:[o.o,o.k,o.e,c.c,c.f,v,o.b,o.j,o.d,d.k,q,S.a,i.c,c.b],pipes:[D.c],styles:["[_nghost-%COMP%]{display:flex;height:100%}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),e})();var Y=n("NFeN");function H(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"This field is required"),a.Tb())}function Z(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"This field is required"),a.Tb())}function $(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"This field is required"),a.Tb())}function J(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1,"Please enter a valid email."),a.Tb())}function K(e,t){1&e&&(a.Ub(0,"mat-icon"),a.zc(1,"visibility_off"),a.Tb())}function W(e,t){1&e&&(a.Ub(0,"mat-icon"),a.zc(1,"visibility"),a.Tb())}function Q(e,t){1&e&&(a.Ub(0,"mat-error"),a.zc(1," You must enter a password to continue. "),a.Tb())}const ee=[{path:"",component:r,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:X},{path:"sign-up",component:(()=>{class e{constructor(e){this.formBuilder=e,this.isLoading=!1,this.hidden=!0}ngOnInit(){this.formGroup=this.formBuilder.group({firstName:["",o.n.required],lastName:["",o.n.required],email:["",[o.n.required,o.n.email]],password:["",o.n.required]})}toggleHidePassword(){this.hidden=!this.hidden}onSubmit(){this.isLoading=!0}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(o.c))},e.\u0275cmp=a.Ib({type:e,selectors:[["ng-component"]],decls:33,vars:10,consts:[[1,"auth-content"],["src","assets/brand/logo.svg",1,"brand-logo"],[3,"formGroup"],[1,"auth-header"],["matInput","","formControlName","firstName","type","text","placeholder","First Name"],[4,"ngIf"],["matInput","","formControlName","lastName","type","text","placeholder","Last Name"],["matInput","","formControlName","email","type","text","placeholder","Email"],["matInput","","formControlName","password","placeholder","********",3,"type"],["type","button","mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"auth-action",3,"disabled"],["routerLink","/auth/login",1,"auth-navigation"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Pb(1,"img",1),a.Ub(2,"form",2),a.Ub(3,"h1",3),a.zc(4,"Register a new account."),a.Tb(),a.Ub(5,"mat-form-field"),a.Ub(6,"mat-label"),a.zc(7,"First Name"),a.Tb(),a.Pb(8,"input",4),a.yc(9,H,2,0,"mat-error",5),a.Tb(),a.Ub(10,"mat-form-field"),a.Ub(11,"mat-label"),a.zc(12,"Last Name"),a.Tb(),a.Pb(13,"input",6),a.yc(14,Z,2,0,"mat-error",5),a.Tb(),a.Ub(15,"mat-form-field"),a.Ub(16,"mat-label"),a.zc(17,"Email"),a.Tb(),a.Pb(18,"input",7),a.yc(19,$,2,0,"mat-error",5),a.yc(20,J,2,0,"mat-error",5),a.Tb(),a.Ub(21,"mat-form-field"),a.Ub(22,"mat-label"),a.zc(23,"Password"),a.Tb(),a.Pb(24,"input",8),a.Ub(25,"button",9),a.cc("click",(function(){return t.toggleHidePassword()})),a.yc(26,K,2,0,"mat-icon",5),a.yc(27,W,2,0,"mat-icon",5),a.Tb(),a.yc(28,Q,2,0,"mat-error",5),a.Tb(),a.Ub(29,"button",10),a.zc(30," Create my account "),a.Tb(),a.Ub(31,"a",11),a.zc(32,"Already have an account?"),a.Tb(),a.Tb(),a.Tb()),2&e&&(a.Cb(2),a.lc("formGroup",t.formGroup),a.Cb(7),a.lc("ngIf",null==t.formGroup.controls.firstName.errors?null:t.formGroup.controls.firstName.errors.required),a.Cb(5),a.lc("ngIf",null==t.formGroup.controls.lastName.errors?null:t.formGroup.controls.lastName.errors.required),a.Cb(5),a.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.required),a.Cb(1),a.lc("ngIf",null==t.formGroup.controls.email.errors?null:t.formGroup.controls.email.errors.email),a.Cb(4),a.lc("type",t.hidden?"password":"text"),a.Cb(2),a.lc("ngIf",t.hidden),a.Cb(1),a.lc("ngIf",!t.hidden),a.Cb(1),a.lc("ngIf",null==t.formGroup.controls.password.errors?null:t.formGroup.controls.password.errors.required),a.Cb(1),a.lc("disabled",!t.formGroup.valid||t.isLoading))},directives:[o.o,o.k,o.e,c.c,c.f,v,o.b,o.j,o.d,d.k,S.a,c.g,i.c,c.b,Y.a],styles:["[_nghost-%COMP%]{display:flex;height:100%}",".auth-content[_ngcontent-%COMP%]{margin:40% auto auto 0}.brand-logo[_ngcontent-%COMP%]{margin-bottom:4rem;width:auto;height:5rem}.auth-header[_ngcontent-%COMP%]{margin-top:0}.auth-subheader[_ngcontent-%COMP%]{margin:0}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5rem}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:1rem 0}.auth-navigation[_ngcontent-%COMP%]{margin:.5rem 0 0 auto;font-style:italic}"]}),e})()},{path:"reset-password",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Ib({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&a.zc(0,"Hello Reset Password\n")},styles:[""]}),e})()}]}];let te=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(ee)],i.d]}),e})(),ne=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[k.f],k.f]}),e})();var ie=n("PCNd");const ae=[ne,C,G,S.b,Y.b];let re=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[ie.a,te,...ae]]}),e})()}}]);