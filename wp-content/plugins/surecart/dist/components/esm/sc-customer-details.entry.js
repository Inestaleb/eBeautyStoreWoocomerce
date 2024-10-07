import { r as registerInstance, h, a as getElement } from './index-644f5478.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-9943807e.js';
import { c as countryChoices } from './address-8d75115e.js';
import { z as zones } from './tax-79350864.js';

var lib = createCommonjsModule(function (module, exports) {
!function(n,A){module.exports=A();}(commonjsGlobal,(function(){return (()=>{var n={607:function(n,A,N){var C=this&&this.__assign||function(){return C=Object.assign||function(n){for(var A,N=1,C=arguments.length;N<C;N++)for(var O in A=arguments[N])Object.prototype.hasOwnProperty.call(A,O)&&(n[O]=A[O]);return n},C.apply(this,arguments)},O=this&&this.__values||function(n){var A="function"==typeof Symbol&&Symbol.iterator,N=A&&n[A],C=0;if(N)return N.call(n);if(n&&"number"==typeof n.length)return {next:function(){return n&&C>=n.length&&(n=void 0),{value:n&&n[C++],done:!n}}};throw new TypeError(A?"Object is not iterable.":"Symbol.iterator is not defined.")},Z=this&&this.__read||function(n,A){var N="function"==typeof Symbol&&n[Symbol.iterator];if(!N)return n;var C,O,Z=N.call(n),e=[];try{for(;(void 0===A||A-- >0)&&!(C=Z.next()).done;)e.push(C.value);}catch(n){O={error:n};}finally{try{C&&!C.done&&(N=Z.return)&&N.call(Z);}finally{if(O)throw O.error}}return e},e=this&&this.__spreadArray||function(n,A,N){if(N||2===arguments.length)for(var C,O=0,Z=A.length;O<Z;O++)!C&&O in A||(C||(C=Array.prototype.slice.call(A,0,O)),C[O]=A[O]);return n.concat(C||Array.prototype.slice.call(A))},r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(A,"__esModule",{value:!0}),A.formatAddress=void 0;var t=r(N(726)),o=function(n,A){return A in n},S={"%N":"name","%O":"organization","%A":"addressLines","%D":"dependentLocality","%C":"locality","%S":"administrativeArea","%Z":"postalCode","%X":"sortingCode"},a=function(n){return o(S,n)?S[n]:null},i=function(n,A){return !!A&&("addressLines"===A?n.addressLines&&n.addressLines.length>0:o(n,A)&&n[A])};A.formatAddress=function(n){var A,N,r,S=function(n){var A,N,C=[],Z="",e=!1;try{for(var r=O(n),t=r.next();!t.done;t=r.next()){var o=t.value;e?(e=!1,C.push("%"+o)):"%"===o?(Z.length>0&&(C.push(Z),Z=""),e=!0):Z+=o;}}catch(n){A={error:n};}finally{try{t&&!t.done&&(N=r.return)&&N.call(r);}finally{if(A)throw A.error}}return Z.length>0&&C.push(Z),C}((r=(r=(n=function(n){return C(C({},n),{addressLines:n.addressLines?n.addressLines.filter(Boolean):void 0})}(n)).postalCountry||"ZZ").toUpperCase(),o(t.default,r)?t.default[r]:t.default.ZZ)),l=function(n,A){var N,C,e=[];try{for(var r=O(n.entries()),t=r.next();!t.done;t=r.next()){var o=Z(t.value,2),S=o[0],l=o[1];if("%n"!==l){var s=a(l);s?i(A,s)&&e.push(l):(S===n.length-S||"%n"===n[S+1]||i(A,a(n[S+1])))&&(0===S||"%n"===n[S-1]||e.length>0&&null!==a(e[e.length-1]))&&e.push(l);}else e.push(l);}}catch(n){N={error:n};}finally{try{t&&!t.done&&(C=r.return)&&C.call(r);}finally{if(N)throw N.error}}return e}(S,n),s=[],u="";try{for(var f=O(l),d=f.next();!d.done;d=f.next()){var c=d.value;if("%n"!==c){var p=a(c);if(p)if("addressLines"===p){var h=n.addressLines;h.length>0&&(u+=h[0],h.length>1&&(s.push(u),u="",s.push.apply(s,e([],Z(h.splice(1)),!1))));}else u+=n[p];else u+=c;}else u.length>0&&(s.push(u),u="");}}catch(n){A={error:n};}finally{try{d&&!d.done&&(N=f.return)&&N.call(f);}finally{if(A)throw A.error}}return u.length>0&&s.push(u),s};},726:n=>{n.exports=JSON.parse('{"AC":"%N%n%O%n%A%n%C%n%Z","AD":"%N%n%O%n%A%n%Z %C","AE":"%N%n%O%n%A%n%S","AF":"%N%n%O%n%A%n%C%n%Z","AI":"%N%n%O%n%A%n%C%n%Z","AL":"%N%n%O%n%A%n%Z%n%C","AM":"%N%n%O%n%A%n%Z%n%C%n%S","AR":"%N%n%O%n%A%n%Z %C%n%S","AS":"%N%n%O%n%A%n%C %S %Z","AT":"%O%n%N%n%A%n%Z %C","AU":"%O%n%N%n%A%n%C %S %Z","AX":"%O%n%N%n%A%nAX-%Z %C%nÅLAND","AZ":"%N%n%O%n%A%nAZ %Z %C","BA":"%N%n%O%n%A%n%Z %C","BB":"%N%n%O%n%A%n%C, %S %Z","BD":"%N%n%O%n%A%n%C - %Z","BE":"%O%n%N%n%A%n%Z %C","BF":"%N%n%O%n%A%n%C %X","BG":"%N%n%O%n%A%n%Z %C","BH":"%N%n%O%n%A%n%C %Z","BL":"%O%n%N%n%A%n%Z %C %X","BM":"%N%n%O%n%A%n%C %Z","BN":"%N%n%O%n%A%n%C %Z","BR":"%O%n%N%n%A%n%D%n%C-%S%n%Z","BS":"%N%n%O%n%A%n%C, %S","BT":"%N%n%O%n%A%n%C %Z","BY":"%O%n%N%n%A%n%Z, %C%n%S","CA":"%N%n%O%n%A%n%C %S %Z","CC":"%O%n%N%n%A%n%C %S %Z","CH":"%O%n%N%n%A%nCH-%Z %C","CI":"%N%n%O%n%X %A %C %X","CL":"%N%n%O%n%A%n%Z %C%n%S","CN":"%Z%n%S%C%D%n%A%n%O%n%N","CO":"%N%n%O%n%A%n%C, %S, %Z","CR":"%N%n%O%n%A%n%S, %C%n%Z","CU":"%N%n%O%n%A%n%C %S%n%Z","CV":"%N%n%O%n%A%n%Z %C%n%S","CX":"%O%n%N%n%A%n%C %S %Z","CY":"%N%n%O%n%A%n%Z %C","CZ":"%N%n%O%n%A%n%Z %C","DE":"%N%n%O%n%A%n%Z %C","DK":"%N%n%O%n%A%n%Z %C","DO":"%N%n%O%n%A%n%Z %C","DZ":"%N%n%O%n%A%n%Z %C","EC":"%N%n%O%n%A%n%Z%n%C","EE":"%N%n%O%n%A%n%Z %C","EG":"%N%n%O%n%A%n%C%n%S%n%Z","EH":"%N%n%O%n%A%n%Z %C","ES":"%N%n%O%n%A%n%Z %C %S","ET":"%N%n%O%n%A%n%Z %C","FI":"%O%n%N%n%A%nFI-%Z %C","FK":"%N%n%O%n%A%n%C%n%Z","FM":"%N%n%O%n%A%n%C %S %Z","FO":"%N%n%O%n%A%nFO%Z %C","FR":"%O%n%N%n%A%n%Z %C","GB":"%N%n%O%n%A%n%C%n%Z","GE":"%N%n%O%n%A%n%Z %C","GF":"%O%n%N%n%A%n%Z %C %X","GG":"%N%n%O%n%A%n%C%nGUERNSEY%n%Z","GI":"%N%n%O%n%A%nGIBRALTAR%n%Z","GL":"%N%n%O%n%A%n%Z %C","GN":"%N%n%O%n%Z %A %C","GP":"%O%n%N%n%A%n%Z %C %X","GR":"%N%n%O%n%A%n%Z %C","GS":"%N%n%O%n%A%n%n%C%n%Z","GT":"%N%n%O%n%A%n%Z- %C","GU":"%N%n%O%n%A%n%C %Z","GW":"%N%n%O%n%A%n%Z %C","HK":"%S%n%C%n%A%n%O%n%N","HM":"%O%n%N%n%A%n%C %S %Z","HN":"%N%n%O%n%A%n%C, %S%n%Z","HR":"%N%n%O%n%A%nHR-%Z %C","HT":"%N%n%O%n%A%nHT%Z %C","HU":"%N%n%O%n%C%n%A%n%Z","ID":"%N%n%O%n%A%n%C%n%S %Z","IE":"%N%n%O%n%A%n%D%n%C%n%S%n%Z","IL":"%N%n%O%n%A%n%C %Z","IM":"%N%n%O%n%A%n%C%n%Z","IN":"%N%n%O%n%A%n%C %Z%n%S","IO":"%N%n%O%n%A%n%C%n%Z","IQ":"%O%n%N%n%A%n%C, %S%n%Z","IR":"%O%n%N%n%S%n%C, %D%n%A%n%Z","IS":"%N%n%O%n%A%n%Z %C","IT":"%N%n%O%n%A%n%Z %C %S","JE":"%N%n%O%n%A%n%C%nJERSEY%n%Z","JM":"%N%n%O%n%A%n%C%n%S %X","JO":"%N%n%O%n%A%n%C %Z","JP":"〒%Z%n%S%n%A%n%O%n%N","KE":"%N%n%O%n%A%n%C%n%Z","KG":"%N%n%O%n%A%n%Z %C","KH":"%N%n%O%n%A%n%C %Z","KI":"%N%n%O%n%A%n%S%n%C","KN":"%N%n%O%n%A%n%C, %S","KP":"%Z%n%S%n%C%n%A%n%O%n%N","KR":"%S %C%D%n%A%n%O%n%N%n%Z","KW":"%N%n%O%n%A%n%Z %C","KY":"%N%n%O%n%A%n%S %Z","KZ":"%Z%n%S%n%C%n%A%n%O%n%N","LA":"%N%n%O%n%A%n%Z %C","LB":"%N%n%O%n%A%n%C %Z","LI":"%O%n%N%n%A%nFL-%Z %C","LK":"%N%n%O%n%A%n%C%n%Z","LR":"%N%n%O%n%A%n%Z %C","LS":"%N%n%O%n%A%n%C %Z","LT":"%O%n%N%n%A%nLT-%Z %C","LU":"%O%n%N%n%A%nL-%Z %C","LV":"%N%n%O%n%A%n%C, %Z","MA":"%N%n%O%n%A%n%Z %C","MC":"%N%n%O%n%A%nMC-%Z %C %X","MD":"%N%n%O%n%A%nMD-%Z %C","ME":"%N%n%O%n%A%n%Z %C","MF":"%O%n%N%n%A%n%Z %C %X","MG":"%N%n%O%n%A%n%Z %C","MH":"%N%n%O%n%A%n%C %S %Z","MK":"%N%n%O%n%A%n%Z %C","MM":"%N%n%O%n%A%n%C, %Z","MN":"%N%n%O%n%A%n%C%n%S %Z","MO":"%A%n%O%n%N","MP":"%N%n%O%n%A%n%C %S %Z","MQ":"%O%n%N%n%A%n%Z %C %X","MT":"%N%n%O%n%A%n%C %Z","MU":"%N%n%O%n%A%n%Z%n%C","MV":"%N%n%O%n%A%n%C %Z","MW":"%N%n%O%n%A%n%C %X","MX":"%N%n%O%n%A%n%D%n%Z %C, %S","MY":"%N%n%O%n%A%n%D%n%Z %C%n%S","MZ":"%N%n%O%n%A%n%Z %C%S","NA":"%N%n%O%n%A%n%C%n%Z","NC":"%O%n%N%n%A%n%Z %C %X","NE":"%N%n%O%n%A%n%Z %C","NF":"%O%n%N%n%A%n%C %S %Z","NG":"%N%n%O%n%A%n%D%n%C %Z%n%S","NI":"%N%n%O%n%A%n%Z%n%C, %S","NL":"%O%n%N%n%A%n%Z %C","NO":"%N%n%O%n%A%n%Z %C","NP":"%N%n%O%n%A%n%C %Z","NR":"%N%n%O%n%A%n%S","NZ":"%N%n%O%n%A%n%D%n%C %Z","OM":"%N%n%O%n%A%n%Z%n%C","PA":"%N%n%O%n%A%n%C%n%S","PE":"%N%n%O%n%A%n%C %Z%n%S","PF":"%N%n%O%n%A%n%Z %C %S","PG":"%N%n%O%n%A%n%C %Z %S","PH":"%N%n%O%n%A%n%D, %C%n%Z %S","PK":"%N%n%O%n%A%n%C-%Z","PL":"%N%n%O%n%A%n%Z %C","PM":"%O%n%N%n%A%n%Z %C %X","PN":"%N%n%O%n%A%n%C%n%Z","PR":"%N%n%O%n%A%n%C PR %Z","PT":"%N%n%O%n%A%n%Z %C","PW":"%N%n%O%n%A%n%C %S %Z","PY":"%N%n%O%n%A%n%Z %C","RE":"%O%n%N%n%A%n%Z %C %X","RO":"%N%n%O%n%A%n%Z %C","RS":"%N%n%O%n%A%n%Z %C","RU":"%N%n%O%n%A%n%C%n%S%n%Z","SA":"%N%n%O%n%A%n%C %Z","SC":"%N%n%O%n%A%n%C%n%S","SD":"%N%n%O%n%A%n%C%n%Z","SE":"%O%n%N%n%A%nSE-%Z %C","SG":"%N%n%O%n%A%nSINGAPORE %Z","SH":"%N%n%O%n%A%n%C%n%Z","SI":"%N%n%O%n%A%nSI-%Z %C","SJ":"%N%n%O%n%A%n%Z %C","SK":"%N%n%O%n%A%n%Z %C","SM":"%N%n%O%n%A%n%Z %C","SN":"%N%n%O%n%A%n%Z %C","SO":"%N%n%O%n%A%n%C, %S %Z","SR":"%N%n%O%n%A%n%C%n%S","SV":"%N%n%O%n%A%n%Z-%C%n%S","SZ":"%N%n%O%n%A%n%C%n%Z","TA":"%N%n%O%n%A%n%C%n%Z","TC":"%N%n%O%n%A%n%C%n%Z","TH":"%N%n%O%n%A%n%D %C%n%S %Z","TJ":"%N%n%O%n%A%n%Z %C","TM":"%N%n%O%n%A%n%Z %C","TN":"%N%n%O%n%A%n%Z %C","TR":"%N%n%O%n%A%n%Z %C/%S","TV":"%N%n%O%n%A%n%C%n%S","TW":"%Z%n%S%C%n%A%n%O%n%N","TZ":"%N%n%O%n%A%n%Z %C","UA":"%N%n%O%n%A%n%C%n%S%n%Z","UM":"%N%n%O%n%A%n%C %S %Z","US":"%N%n%O%n%A%n%C, %S %Z","UY":"%N%n%O%n%A%n%Z %C %S","UZ":"%N%n%O%n%A%n%Z %C%n%S","VA":"%N%n%O%n%A%n%Z %C","VC":"%N%n%O%n%A%n%C %Z","VE":"%N%n%O%n%A%n%C %Z, %S","VG":"%N%n%O%n%A%n%C%n%Z","VI":"%N%n%O%n%A%n%C %S %Z","VN":"%N%n%O%n%A%n%C%n%S %Z","WF":"%O%n%N%n%A%n%Z %C %X","XK":"%N%n%O%n%A%n%Z %C","YT":"%O%n%N%n%A%n%Z %C %X","ZA":"%N%n%O%n%A%n%D%n%C%n%Z","ZM":"%N%n%O%n%A%n%Z %C","ZZ":"%N%n%O%n%A%n%C"}');}},A={};return function N(C){var O=A[C];if(void 0!==O)return O.exports;var Z=A[C]={exports:{}};return n[C].call(Z.exports,Z,Z.exports,N),Z.exports}(607)})()}));
});

const scCustomerDetailsCss = "";

const ScCustomerDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.heading = undefined;
    this.editLink = undefined;
    this.customer = undefined;
    this.loading = undefined;
    this.error = undefined;
  }
  renderContent() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this.loading) {
      return this.renderLoading();
    }
    if (!this.customer) {
      return this.renderEmpty();
    }
    return (h("sc-card", { "no-padding": true }, h("sc-stacked-list", null, !!((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.name) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Billing Name', 'surecart'))), h("div", null, (_b = this.customer) === null || _b === void 0 ? void 0 : _b.name), h("div", null))), !!((_c = this === null || this === void 0 ? void 0 : this.customer) === null || _c === void 0 ? void 0 : _c.email) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Billing Email', 'surecart'))), h("div", null, (_d = this.customer) === null || _d === void 0 ? void 0 : _d.email), h("div", null))), !!Object.keys(((_e = this === null || this === void 0 ? void 0 : this.customer) === null || _e === void 0 ? void 0 : _e.shipping_address) || {}).length && this.renderAddress(wp.i18n.__('Shipping Address', 'surecart'), this.customer.shipping_address), !!Object.keys((_f = this.customer) === null || _f === void 0 ? void 0 : _f.billing_address_display).length && this.renderAddress(wp.i18n.__('Billing Address', 'surecart'), this.customer.billing_address_display), !!((_g = this === null || this === void 0 ? void 0 : this.customer) === null || _g === void 0 ? void 0 : _g.phone) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Phone', 'surecart'))), h("div", null, (_h = this.customer) === null || _h === void 0 ? void 0 : _h.phone), h("div", null))), (() => {
      var _a, _b, _c, _d;
      const { number_type, number } = ((_a = this.customer) === null || _a === void 0 ? void 0 : _a.tax_identifier) || {};
      if (!number || !number_type)
        return;
      const label = ((_b = zones === null || zones === void 0 ? void 0 : zones[number_type]) === null || _b === void 0 ? void 0 : _b.label) || wp.i18n.__('Tax Id', 'surecart');
      const isInvalid = ((_d = (_c = this.customer) === null || _c === void 0 ? void 0 : _c.tax_identifier) === null || _d === void 0 ? void 0 : _d[`valid_${number_type}`]) === false;
      return (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, label)), h("div", null, number, " ", isInvalid && h("sc-tag", { type: "warning" }, wp.i18n.__('Invalid', 'surecart'))), h("div", null)));
    })())));
  }
  renderAddress(label = 'Address', address) {
    var _a;
    const { name, line_1, line_2, city, state, postal_code, country } = address;
    const countryName = (_a = countryChoices.find(({ value }) => value === country)) === null || _a === void 0 ? void 0 : _a.label;
    return (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, label)), h("div", null, lib.formatAddress({
      name,
      postalCountry: country,
      administrativeArea: state,
      locality: city,
      postalCode: postal_code,
      addressLines: [line_1, line_2],
    }).join('\n') +
      '\n' +
      countryName || country), h("div", null)));
  }
  renderEmpty() {
    return (h("div", null, h("sc-divider", { style: { '--spacing': '0' } }), h("slot", { name: "empty" }, h("sc-empty", { icon: "user" }, wp.i18n.__("You don't have any billing information.", 'surecart')))));
  }
  renderLoading() {
    return (h("sc-card", { "no-padding": true }, h("sc-stacked-list", null, h("sc-stacked-list-row", { style: { '--columns': '2' }, "mobile-size": 0 }, h("div", { style: { padding: '0.5em' } }, h("sc-skeleton", { style: { width: '30%', marginBottom: '0.75em' } }), h("sc-skeleton", { style: { width: '20%', marginBottom: '0.75em' } }), h("sc-skeleton", { style: { width: '40%' } }))))));
  }
  render() {
    var _a, _b, _c;
    return (h("sc-dashboard-module", { exportparts: "base, heading, heading-text, heading-title, heading-description", class: "customer-details", error: this.error }, h("span", { slot: "heading" }, this.heading || wp.i18n.__('Billing Details', 'surecart'), ' ', !!((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.id) && !((_b = this === null || this === void 0 ? void 0 : this.customer) === null || _b === void 0 ? void 0 : _b.live_mode) && (h("sc-tag", { exportparts: "base:test-tag__base, content:test-tag__content", type: "warning", size: "small" }, wp.i18n.__('Test', 'surecart')))), !!this.editLink && !!((_c = this.customer) === null || _c === void 0 ? void 0 : _c.id) && (h("sc-button", { exportparts: "base:button__base, label:button__label, prefix:button__prefix", type: "link", href: this.editLink, slot: "end" }, h("sc-icon", { name: "edit-3", slot: "prefix" }), wp.i18n.__('Update', 'surecart'))), this.renderContent()));
  }
  get el() { return getElement(this); }
};
ScCustomerDetails.style = scCustomerDetailsCss;

export { ScCustomerDetails as sc_customer_details };

//# sourceMappingURL=sc-customer-details.entry.js.map