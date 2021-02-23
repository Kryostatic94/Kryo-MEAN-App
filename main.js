(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Utente\Desktop\KryoHertz\src\main.ts */"zUnb");


/***/ }),

/***/ "8AQ7":
/*!************************************************!*\
  !*** ./src/app/modifica/modifica.component.ts ***!
  \************************************************/
/*! exports provided: ModificaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaComponent", function() { return ModificaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ModificaComponent_table_13_tbody_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificaComponent_table_13_tbody_15_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.flag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5[0].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5[0].descrizione);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, i_r5[0].prezzo_giornaliero, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, i_r5[0].prezzo_settimanale, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 11, i_r5[0].prezzo_mensile, "EUR"));
} }
function ModificaComponent_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Prezzo Giornaliero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prezzo Settimanale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prezzo Mensile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Opzioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModificaComponent_table_13_tbody_15_Template, 18, 14, "tbody", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categoria);
} }
function ModificaComponent_h2_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserisci i nuovi dati qui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModificaComponent_hr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function ModificaComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prezzo Giornaliero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prezzo Settimanale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Prezzo Mensile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificaComponent_div_17_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.retrieveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Inserisci");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModificaComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.boolflag = false;
        this.categoria = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    cercareInfo() {
        var desc2 = document.getElementById('descrizioneDaCercare').value;
        if (this.query.cercaCategoria(desc2)) {
            this.categoriaSub = this.query.getCategoriaListener()
                .subscribe((categoria) => {
                this.categoria = categoria;
            });
        }
        return this.descmod = desc2;
    }
    flag() {
        return this.boolflag = true;
    }
    retrieveInfo() {
        var desc = document.getElementById('descrizione').value;
        var prezzoGiornaliero = document.getElementById('prezzogiornaliero').value;
        var prezzoSettimana = document.getElementById('prezzosettimanale').value;
        var prezzoMensile = document.getElementById('prezzomensile').value;
        if (this.query.modificaCategoria(desc, parseFloat(prezzoGiornaliero), parseFloat(prezzoSettimana), parseFloat(prezzoMensile), this.descmod)) {
            alert("Categoria modificata con successo!");
            window.location.reload();
        }
    }
    svuotaCache() {
        window.location.reload();
    }
}
ModificaComponent.ɵfac = function ModificaComponent_Factory(t) { return new (t || ModificaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ModificaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModificaComponent, selectors: [["app-modifica"]], decls: 18, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "form-inline"], ["type", "search", "placeholder", "Inserisci la descrizione", "aria-label", "Search", "id", "descrizioneDaCercare", 1, "form-control", "mr-sm-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-toggle", "tooltip", "data-placement", "left", "title", "Cancella ricerche precedenti", 1, "btn", "btn-danger", 3, "click"], ["class", "table", 4, "ngIf"], [4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "form-group"], [1, "col-6"], ["for", "exampleInputPassword1"], ["type", "text", "id", "descrizione", 1, "form-control"], ["type", "text", "id", "prezzogiornaliero", 1, "form-control"], ["type", "text", "id", "prezzosettimanale", 1, "form-control"], ["type", "text", "id", "prezzomensile", 1, "form-control"]], template: function ModificaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modifica una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificaComponent_Template_button_click_7_listener() { return ctx.cercareInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificaComponent_Template_button_click_11_listener() { return ctx.svuotaCache(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Svuota Cache ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModificaComponent_table_13_Template, 16, 1, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModificaComponent_h2_15_Template, 2, 0, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ModificaComponent_hr_16_Template, 1, 0, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModificaComponent_div_17_Template, 33, 0, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoria.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boolflag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boolflag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boolflag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: right !important; \r\n}\r\n#descrizione[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n#descrizioneDaCercare[_ngcontent-%COMP%]{\r\n    text-align: left !important;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  animation: swing-in-top-fwd 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes swing-in-top-fwd {\r\n    0% {\r\n      transform: rotateX(-100deg);\r\n      transform-origin: top;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: rotateX(0deg);\r\n      transform-origin: top;\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZpY2EvbW9kaWZpY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdGQUF3RjtBQUM1RjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5RUFBeUU7SUFDekUsbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7RUFDRSw0RUFBNEU7QUFDOUU7QUFDQTtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixVQUFVO0lBQ1o7QUFDSjtBQUNBO0lBQ0k7TUFDRSw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsMkJBQTJCO01BQzNCLHFCQUFxQjtNQUNyQixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0VBQ0Y7QUFFQTtJQUNFO01BQ0UscURBQXFEO01BQ3JELDJCQUEyQjtNQUMzQixVQUFVO0lBQ1o7SUFDQTtNQUNFLDRDQUE0QztNQUM1Qyw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RpZmljYS9tb2RpZmljYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZiA7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWZ3ZCAwLjZzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuaW5wdXQgeyBcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyBcclxufVxyXG4jZGVzY3JpemlvbmV7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbiNkZXNjcml6aW9uZURhQ2VyY2FyZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gIGFuaW1hdGlvbjogc3dpbmctaW4tdG9wLWZ3ZCAycyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpIGJvdGg7XHJcbn1cclxuQGtleWZyYW1lcyBmb2N1cy1pbi1leHBhbmQge1xyXG4gICAgMCUge1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNWVtO1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlLWluLWZ3ZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtODBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzd2luZy1pbi10b3AtZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xMDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCkgcm90YXRlWSgzMGRlZykgc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlWSgwKSBzY2FsZSgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTgwMHB4IDUwJTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModificaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modifica',
                templateUrl: './modifica.component.html',
                styleUrls: ['./modifica.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ApO2":
/*!****************************************************!*\
  !*** ./src/app/visualizza/visualizza.component.ts ***!
  \****************************************************/
/*! exports provided: VisualizzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizzaComponent", function() { return VisualizzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function VisualizzaComponent_h2_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_h2_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.svuotaCache(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Svuota Cache ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.descmod, " ");
} }
function VisualizzaComponent_table_10_tbody_11_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r7.targa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r7.modello);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r7.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r7.descrizione);
} }
function VisualizzaComponent_table_10_tbody_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_table_10_tbody_11_tr_1_Template, 9, 4, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", i_r5);
} }
function VisualizzaComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Targa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Modello");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisualizzaComponent_table_10_tbody_11_Template, 2, 1, "tbody", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categoria);
} }
class VisualizzaComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.boolflag = false;
        this.categoria = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    cercareAuto() {
        var desc2 = document.getElementById('descrizioneDaCercare').value;
        if (this.query.cercaAuto(desc2)) {
            this.categoriaSub = this.query.getCategoriaListener()
                .subscribe((categoria) => {
                this.categoria = categoria;
            });
        }
        return this.descmod = desc2;
    }
    svuotaCache() {
        window.location.reload();
    }
}
VisualizzaComponent.ɵfac = function VisualizzaComponent_Factory(t) { return new (t || VisualizzaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VisualizzaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizzaComponent, selectors: [["app-visualizza"]], decls: 11, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "form-inline"], ["type", "search", "placeholder", "Inserisci la descrizione", "aria-label", "Search", "id", "descrizioneDaCercare", 1, "form-control", "mr-sm-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "table", 4, "ngIf"], ["type", "button", "data-toggle", "tooltip", "data-placement", "left", "title", "Cancella ricerche precedenti", 1, "btn", "btn-danger", 3, "click"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function VisualizzaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visualizza una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_Template_button_click_7_listener() { return ctx.cercareAuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VisualizzaComponent_h2_9_Template, 4, 1, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisualizzaComponent_table_10_Template, 12, 1, "table", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoria.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoria.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: right !important; \r\n}\r\n#descrizione[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n#descrizioneDaCercare[_ngcontent-%COMP%]{\r\n    text-align: left !important;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  animation: swing-in-top-fwd 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes swing-in-top-fwd {\r\n    0% {\r\n      transform: rotateX(-100deg);\r\n      transform-origin: top;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: rotateX(0deg);\r\n      transform-origin: top;\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXp6YS92aXN1YWxpenphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix3RkFBd0Y7QUFDNUY7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUVBQXlFO0lBQ3pFLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0FBQ0o7QUFDQTtJQUNJO01BQ0UsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGO0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtNQUMzQixxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtFQUNGO0FBRUE7SUFDRTtNQUNFLHFEQUFxRDtNQUNyRCwyQkFBMkI7TUFDM0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSw0Q0FBNEM7TUFDNUMsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXp6YS92aXN1YWxpenphLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1leHBhbmQgMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWVmIDtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tZWxsaXB0aWMtbGVmdC1md2QgMC43cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4tZndkIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5pbnB1dCB7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IFxyXG59XHJcbiNkZXNjcml6aW9uZXtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2Rlc2NyaXppb25lRGFDZXJjYXJle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgYW5pbWF0aW9uOiBzd2luZy1pbi10b3AtZndkIDJzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjI3NSkgYm90aDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC04MHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHN3aW5nLWluLXRvcC1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tZWxsaXB0aWMtbGVmdC1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KSByb3RhdGVZKDMwZGVnKSBzY2FsZSgwKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCUgNTAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxODAwcHggNTAlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizzaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visualizza',
                templateUrl: './visualizza.component.html',
                styleUrls: ['./visualizza.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BJ7M":
/*!**********************************************************!*\
  !*** ./src/app/reportnoleggi/reportnoleggi.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportnoleggiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportnoleggiComponent", function() { return ReportnoleggiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ReportnoleggiComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.nominativo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 5, i_r1.data_inizio, 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 9, i_r1.data_fine, 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.targa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.modello);
} }
class ReportnoleggiComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
    }
    ngOnInit() {
        this.start();
    }
    ngOnDestroy() {
        this.start();
    }
    start() {
        this.http.get('http://localhost:3000/api/storico/noleggi').subscribe((categoriaData) => {
            this.categoria = categoriaData.categoria;
            return this.categoria;
        });
    }
}
ReportnoleggiComponent.ɵfac = function ReportnoleggiComponent_Factory(t) { return new (t || ReportnoleggiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReportnoleggiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportnoleggiComponent, selectors: [["app-reportnoleggi"]], decls: 17, vars: 1, consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function ReportnoleggiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Storico Noleggi\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nominativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data inizio Noleggio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Data fine Noleggio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Modello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReportnoleggiComponent_tr_16_Template, 13, 13, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoria);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]{\r\n  animation: swing-in-top-fwd 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n}\r\n\r\n#nauto[_ngcontent-%COMP%]{\r\n  text-align: justify !important; \r\n}\r\n\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes swing-in-top-fwd {\r\n    0% {\r\n      transform: rotateX(-100deg);\r\n      transform-origin: top;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: rotateX(0deg);\r\n      transform-origin: top;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0bm9sZWdnaS9yZXBvcnRub2xlZ2dpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUM7O0FBRUE7RUFDRSw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0E7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0FBQ0o7O0FBQ0E7SUFDSTtNQUNFLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFO01BQ0UsMkJBQTJCO01BQzNCLHFCQUFxQjtNQUNyQixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLHFEQUFxRDtNQUNyRCwyQkFBMkI7TUFDM0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSw0Q0FBNEM7TUFDNUMsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0bm9sZWdnaS9yZXBvcnRub2xlZ2dpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1leHBhbmQgMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICBhbmltYXRpb246IHN3aW5nLWluLXRvcC1md2QgMnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMjc1KSBib3RoO1xyXG59XHJcblxyXG4jbmF1dG97XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50OyBcclxufVxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC04MHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHN3aW5nLWluLXRvcC1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tZWxsaXB0aWMtbGVmdC1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KSByb3RhdGVZKDMwZGVnKSBzY2FsZSgwKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCUgNTAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxODAwcHggNTAlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportnoleggiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reportnoleggi',
                templateUrl: './reportnoleggi.component.html',
                styleUrls: ['./reportnoleggi.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "H9RB":
/*!*********************************************!*\
  !*** ./src/app/inserimentoquery.service.ts ***!
  \*********************************************/
/*! exports provided: InserimentoqueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserimentoqueryService", function() { return InserimentoqueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class InserimentoqueryService {
    constructor(http) {
        this.http = http;
        this.categoria = [];
        this.categoriaUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addCliente(id, nominativo, patente, cc) {
        const clienteDaAggiungere = { id: id, nominativo: nominativo, patente: patente, cc: cc };
        this.http
            .post('http://localhost:3000/api/cliente', clienteDaAggiungere)
            .subscribe((responseData) => {
            console.log(responseData.message, responseData.risposta);
        });
        /*this.categoria.push(clienteDaAggiungere);
        this.categoriaUpdate.next([...this.categoria]);
        */
        return true;
    }
    noleggio(id, box, data_inizio, data_fine) {
        const noloDaAggiungere = { id: id, box: box, data_inizio: data_inizio, data_fine: data_fine };
        this.http
            .post('http://localhost:3000/api/nolo', noloDaAggiungere)
            .subscribe((responseData) => {
            console.log(responseData.message, responseData.risposta);
        });
        /*this.categoria.push(clienteDaAggiungere);
        this.categoriaUpdate.next([...this.categoria]);
        */
        return true;
    }
    getCategoria() {
        return this.http.get('http://localhost:3000/api/categoria').subscribe((categoriaData) => {
            this.categoria = categoriaData.categoria;
            this.categoriaUpdate.next([...this.categoria]);
        });
    }
    getCategoriaListener() {
        return this.categoriaUpdate.asObservable();
    }
    /*getAutoByTarga(targa:string){
      const categoriaDaCercare = {targa : targa};
      this.http
      .post<{message: string, risposta: any}>('http://localhost:3000/api/categoria/id_auto', categoriaDaCercare)
      .subscribe(
        (responseData)=>{
          console.log(responseData.message);
          return responseData.risposta;
        }
      )
    } */
    cercaTarga(targa) {
        const categoriaDaCercare = { targa: targa };
        let box;
        this.http
            .post('http://localhost:3000/api/categoria/preventivo', categoriaDaCercare)
            .subscribe((responseData) => {
            console.log(responseData.message);
            box = responseData.risposta;
            this.categoria.push(box);
            this.categoriaUpdate.next([...this.categoria]);
        });
        return true;
    }
    addCategoria(id, descrizione, prezzo_giornaliero, prezzo_settimanale, prezzo_mensile) {
        const categoriaDaAggiungere = { id: id, descrizione: descrizione, prezzo_giornaliero: prezzo_giornaliero,
            prezzo_settimanale: prezzo_settimanale, prezzo_mensile: prezzo_mensile };
        this.http
            .post('http://localhost:3000/api/categoria', categoriaDaAggiungere)
            .subscribe((responseData) => {
            console.log(responseData.message, responseData.risposta);
        });
        this.categoria.push(categoriaDaAggiungere);
        this.categoriaUpdate.next([...this.categoria]);
        return true;
    }
    cercaCategoria(descrizione) {
        const categoriaDaCercare = { descrizione: descrizione };
        let box;
        this.http
            .post('http://localhost:3000/api/categoria/ricerca', categoriaDaCercare)
            .subscribe((responseData) => {
            console.log(responseData.message);
            box = responseData.risposta;
            this.categoria.push(box);
            this.categoriaUpdate.next([...this.categoria]);
        });
        return this.categoria;
    }
    modificaCategoria(descrizione, prezzo_giornaliero, prezzo_settimanale, prezzo_mensile, descmod) {
        const categoriaDaModificare = { descrizione: descrizione, prezzo_giornaliero: prezzo_giornaliero,
            prezzo_settimanale: prezzo_settimanale, prezzo_mensile: prezzo_mensile, descmod: descmod };
        this.http
            .post('http://localhost:3000/api/modifica', categoriaDaModificare)
            .subscribe((responseData) => {
            console.log(responseData.message, responseData.risposta);
        });
        return true;
    }
    cercaAuto(descrizione) {
        const categoriaDaCercare = { descrizione: descrizione };
        let box;
        this.http
            .post('http://localhost:3000/api/categoria/parco', categoriaDaCercare)
            .subscribe((responseData) => {
            console.log(responseData.message);
            box = responseData.risposta;
            this.categoria.push(box);
            this.categoriaUpdate.next([...this.categoria]);
        });
        return true;
    }
    eliminaCategoria(descrizione) {
        const categoriaDaCercare = { descrizione: descrizione };
        let box;
        this.http
            .post('http://localhost:3000/api/elimina', categoriaDaCercare)
            .subscribe((responseData) => {
            console.log(responseData.message);
            box = responseData.risposta;
            this.categoria.push(box);
            this.categoriaUpdate.next([...this.categoria]);
        });
        return this.categoria;
    }
}
InserimentoqueryService.ɵfac = function InserimentoqueryService_Factory(t) { return new (t || InserimentoqueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InserimentoqueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InserimentoqueryService, factory: InserimentoqueryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InserimentoqueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LPDN":
/*!**************************************************!*\
  !*** ./src/app/inserisci/inserisci.component.ts ***!
  \**************************************************/
/*! exports provided: InserisciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InserisciComponent", function() { return InserisciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class InserisciComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
    }
    ngOnInit() {
        this.query.getCategoria();
        this.categoriaSub = this.query.getCategoriaListener()
            .subscribe((categoria) => {
            this.categoria = categoria;
        });
    }
    ngOnDestroy() {
        this.categoriaSub.unsubscribe();
    }
    retrieveInfo() {
        var id = document.getElementById('idint').value;
        var desc = document.getElementById('descrizione').value;
        var prezzoGiornaliero = document.getElementById('prezzogiornaliero').value;
        var prezzoSettimana = document.getElementById('prezzosettimanale').value;
        var prezzoMensile = document.getElementById('prezzomensile').value;
        if (this.query.addCategoria(parseInt(id), desc, parseFloat(prezzoGiornaliero), parseFloat(prezzoSettimana), parseFloat(prezzoMensile))) {
            alert("Categoria inserita con successo!");
            window.location.reload();
        }
    }
}
InserisciComponent.ɵfac = function InserisciComponent_Factory(t) { return new (t || InserisciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InserisciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InserisciComponent, selectors: [["app-inserisci"]], decls: 43, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "form-group"], [1, "col-6"], ["for", "exampleInputPassword1"], ["type", "text", "id", "idint", 1, "form-control"], ["type", "text", "id", "descrizione", 1, "form-control"], ["type", "text", "id", "prezzogiornaliero", 1, "form-control"], ["type", "text", "id", "prezzosettimanale", 1, "form-control"], ["type", "text", "id", "prezzomensile", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function InserisciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserisci una nuova categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Prezzo Giornaliero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prezzo Settimanale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prezzo Mensile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InserisciComponent_Template_button_click_41_listener() { return ctx.retrieveInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Inserisci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: right !important; \r\n}\r\n#descrizione[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJpc2NpL2luc2VyaXNjaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0ZBQXdGO0FBQzVGO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlFQUF5RTtJQUN6RSxtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0FBQ0o7QUFDQTtJQUNJO01BQ0UsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGO0FBRUE7SUFDRTtNQUNFLHFEQUFxRDtNQUNyRCwyQkFBMkI7TUFDM0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSw0Q0FBNEM7TUFDNUMsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5zZXJpc2NpL2luc2VyaXNjaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZiA7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWZ3ZCAwLjZzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuaW5wdXQgeyBcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyBcclxufVxyXG4jZGVzY3JpemlvbmV7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbkBrZXlmcmFtZXMgZm9jdXMtaW4tZXhwYW5kIHtcclxuICAgIDAlIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVlbTtcclxuICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZS1pbi1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTgwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tZWxsaXB0aWMtbGVmdC1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KSByb3RhdGVZKDMwZGVnKSBzY2FsZSgwKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogLTEwMCUgNTAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxODAwcHggNTAlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InserisciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inserisci',
                templateUrl: './inserisci.component.html',
                styleUrls: ['./inserisci.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["elenco"]; };
const _c1 = function () { return ["inserimento"]; };
const _c2 = function () { return ["cancella"]; };
const _c3 = function () { return ["modifica"]; };
const _c4 = function () { return ["visualizza"]; };
const _c5 = function () { return ["preventivo"]; };
const _c6 = function () { return ["noleggio"]; };
const _c7 = function () { return ["storico"]; };
class HomepageComponent {
    constructor() { }
    ngOnInit() {
        let d = new Date;
        let dataStringa = String(d);
        let array = dataStringa.split(" ");
        let f = `Oggi è il ${array[2]}/${array[1]}/${array[3]}`;
        let giorno = document.getElementById("giorno");
        giorno.innerText = f;
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 50, vars: 16, consts: [["id", "giorno"], ["id", "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-link"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse"], [1, "card-body"], [1, "row", "sinistra"], ["id", "Elenco", 1, "th", 3, "routerLink"], ["id", "Inserimento", 1, "th", 3, "routerLink"], ["id", "Cancellare", 1, "th", 3, "routerLink"], ["id", "Modificare", 1, "th", 3, "routerLink"], ["id", "Visualizzare", 1, "th", 3, "routerLink"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], [1, "th", 3, "routerLink"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Salve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Elenco categorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Inserisci nuova categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancella una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Modifica una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Visualizza una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Noleggio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Preventivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Noleggio a nuovo Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Storico Noleggi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n    margin-left: 20px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n    padding-left: 20px;\r\n}\r\n#headingOne[_ngcontent-%COMP%]{\r\n    animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n    animation-delay: 2s;\r\n}\r\n#headingTwo[_ngcontent-%COMP%]{\r\n    animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n    animation-delay: 2.5s;\r\n}\r\n#headingThree[_ngcontent-%COMP%]{\r\n    animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n    animation-delay: 3s;\r\n}\r\n.sinistra[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n    margin-left: 10px;\r\n    transition: all .6s ease;\r\n}\r\n.th[_ngcontent-%COMP%]{\r\n    transition: all .6s ease;\r\n    color:  rgba(50, 50, 50, 0.75);\r\n    background-color: white;\r\n    text-decoration: none;\r\n}\r\n.th[_ngcontent-%COMP%]:hover{\r\n    color: #fff;\r\n    background-color: #00aeef;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.sinistra[_ngcontent-%COMP%]:hover{\r\n    background-color: #00aeef;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes slide-in-blurred-right {\r\n    0% {\r\n      transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n      transform-origin: 0% 50%;\r\n      filter: blur(40px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) scaleY(1) scaleX(1);\r\n      transform-origin: 50% 50%;\r\n      filter: blur(0);\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvRkFBb0Y7SUFDcEYsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvRkFBb0Y7SUFDcEYscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvRkFBb0Y7SUFDcEYsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixVQUFVO0lBQ1o7QUFDSjtBQUVBO0lBQ0k7TUFDRSxxREFBcUQ7TUFDckQsd0JBQXdCO01BQ3hCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLDRDQUE0QztNQUM1Qyx5QkFBeUI7TUFDekIsZUFBZTtNQUNmLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1leHBhbmQgMnMgZWFzZS1vdXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbiNoZWFkaW5nT25le1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXJpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMwLCAxLjAwMCwgMC4zMjAsIDEuMDAwKSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG4jaGVhZGluZ1R3b3tcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYmx1cnJlZC1yaWdodCAwLjZzIGN1YmljLWJlemllcigwLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMCkgYm90aDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi41cztcclxufVxyXG4jaGVhZGluZ1RocmVle1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXJpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMwLCAxLjAwMCwgMC4zMjAsIDEuMDAwKSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG4uc2luaXN0cmF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGVhc2U7XHJcbn1cclxuLnRoe1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC42cyBlYXNlO1xyXG4gICAgY29sb3I6ICByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50aDpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4uc2luaXN0cmE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWVmO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1pbi1ibHVycmVkLXJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCkgc2NhbGVYKDIuNSkgc2NhbGVZKDAuMik7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgICAgZmlsdGVyOiBibHVyKDQwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'KryoHertz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XJ+q":
/*!********************************************!*\
  !*** ./src/app/elenco/elenco.component.ts ***!
  \********************************************/
/*! exports provided: ElencoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElencoComponent", function() { return ElencoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ElencoComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.car);
} }
class ElencoComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
    }
    ngOnInit() {
        this.start();
    }
    ngDoChek() {
        this.start();
    }
    ngOnDestroy() {
    }
    start() {
        this.http.get('http://localhost:3000/api/categoria').subscribe((categoriaData) => {
            this.categoria = categoriaData.categoria;
            return this.categoria;
        });
    }
}
ElencoComponent.ɵfac = function ElencoComponent_Factory(t) { return new (t || ElencoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ElencoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElencoComponent, selectors: [["app-elenco"]], decls: 11, vars: 1, consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function ElencoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Elenco delle Categorie\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ElencoComponent_tr_10_Template, 5, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoria);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]{\r\n  animation: swing-in-top-fwd 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n}\r\n\r\n#nauto[_ngcontent-%COMP%]{\r\n  text-align: justify !important; \r\n}\r\n\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes swing-in-top-fwd {\r\n    0% {\r\n      transform: rotateX(-100deg);\r\n      transform-origin: top;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: rotateX(0deg);\r\n      transform-origin: top;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbmNvL2VsZW5jby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDOztBQUVBO0VBQ0UsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLFVBQVU7SUFDWjtBQUNKOztBQUNBO0lBQ0k7TUFDRSw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtNQUMzQixxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxxREFBcUQ7TUFDckQsMkJBQTJCO01BQzNCLFVBQVU7SUFDWjtJQUNBO01BQ0UsNENBQTRDO01BQzVDLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2VsZW5jby9lbGVuY28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBhbmltYXRpb246IGZvY3VzLWluLWV4cGFuZCAycyBlYXNlLW91dDtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gIGFuaW1hdGlvbjogc3dpbmctaW4tdG9wLWZ3ZCAycyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpIGJvdGg7XHJcbn1cclxuXHJcbiNuYXV0b3tcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7IFxyXG59XHJcbkBrZXlmcmFtZXMgZm9jdXMtaW4tZXhwYW5kIHtcclxuICAgIDAlIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVlbTtcclxuICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZS1pbi1md2Qge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTgwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3dpbmctaW4tdG9wLWZ3ZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTAwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzbGlkZS1pbi1lbGxpcHRpYy1sZWZ0LWZ3ZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpIHJvdGF0ZVkoMzBkZWcpIHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJSA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDE4MDBweCA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElencoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-elenco',
                templateUrl: './elenco.component.html',
                styleUrls: ['./elenco.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _inserisci_inserisci_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inserisci/inserisci.component */ "LPDN");
/* harmony import */ var _modifica_modifica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifica/modifica.component */ "8AQ7");
/* harmony import */ var _cancella_cancella_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cancella/cancella.component */ "wqq1");
/* harmony import */ var _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visualizza/visualizza.component */ "ApO2");
/* harmony import */ var _elenco_elenco_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elenco/elenco.component */ "XJ+q");
/* harmony import */ var _raterequest_raterequest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./raterequest/raterequest.component */ "aYxo");
/* harmony import */ var _noleggionewcliente_noleggionewcliente_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noleggionewcliente/noleggionewcliente.component */ "kzPv");
/* harmony import */ var _reportnoleggi_reportnoleggi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reportnoleggi/reportnoleggi.component */ "BJ7M");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        _inserisci_inserisci_component__WEBPACK_IMPORTED_MODULE_8__["InserisciComponent"],
        _modifica_modifica_component__WEBPACK_IMPORTED_MODULE_9__["ModificaComponent"],
        _cancella_cancella_component__WEBPACK_IMPORTED_MODULE_10__["CancellaComponent"],
        _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_11__["VisualizzaComponent"],
        _elenco_elenco_component__WEBPACK_IMPORTED_MODULE_12__["ElencoComponent"],
        _raterequest_raterequest_component__WEBPACK_IMPORTED_MODULE_13__["RaterequestComponent"],
        _noleggionewcliente_noleggionewcliente_component__WEBPACK_IMPORTED_MODULE_14__["NoleggionewclienteComponent"],
        _reportnoleggi_reportnoleggi_component__WEBPACK_IMPORTED_MODULE_15__["ReportnoleggiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                    _inserisci_inserisci_component__WEBPACK_IMPORTED_MODULE_8__["InserisciComponent"],
                    _modifica_modifica_component__WEBPACK_IMPORTED_MODULE_9__["ModificaComponent"],
                    _cancella_cancella_component__WEBPACK_IMPORTED_MODULE_10__["CancellaComponent"],
                    _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_11__["VisualizzaComponent"],
                    _elenco_elenco_component__WEBPACK_IMPORTED_MODULE_12__["ElencoComponent"],
                    _raterequest_raterequest_component__WEBPACK_IMPORTED_MODULE_13__["RaterequestComponent"],
                    _noleggionewcliente_noleggionewcliente_component__WEBPACK_IMPORTED_MODULE_14__["NoleggionewclienteComponent"],
                    _reportnoleggi_reportnoleggi_component__WEBPACK_IMPORTED_MODULE_15__["ReportnoleggiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aYxo":
/*!******************************************************!*\
  !*** ./src/app/raterequest/raterequest.component.ts ***!
  \******************************************************/
/*! exports provided: RaterequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaterequestComponent", function() { return RaterequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class RaterequestComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
        this.prezzo = 0;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    cercareAuto() {
        var desc2 = document.getElementById('targa').value;
        var giorni = parseFloat(document.getElementById('giorni').value);
        if (this.query.cercaTarga(desc2)) {
            this.categoriaSub = this.query.getCategoriaListener()
                .subscribe((categoria) => {
                this.categoria = categoria;
                this.box = this.categoria[0][0];
                if (giorni === 30) {
                    this.prezzo = this.box.prezzo_mensile.toFixed(2);
                    return this.prezzo;
                }
                if (giorni === 7) {
                    this.prezzo = this.box.prezzo_settimanale.toFixed(2);
                    return this.prezzo;
                }
                if (giorni > 30) {
                    let quoziente30 = Math.floor(giorni / 30);
                    let pmese = quoziente30 * this.box.prezzo_mensile.toFixed(2);
                    let rimanenza = giorni - (quoziente30 * 30);
                    if (rimanenza >= 7) {
                        let quoziente7 = Math.floor(rimanenza / 7);
                        let psettimane = quoziente7 * this.box.prezzo_settimanale.toFixed(2);
                        let rimanenza2 = rimanenza - (quoziente7 * 7);
                        let pgiorno = rimanenza2 * this.box.prezzo_giornaliero.toFixed(2);
                        this.prezzo = pgiorno + psettimane + pmese;
                        return this.prezzo;
                    }
                    else {
                        let pgiorno = rimanenza * this.box.prezzo_giornaliero.toFixed(2);
                        this.prezzo = pgiorno + pmese;
                        return this.prezzo;
                    }
                }
                else if (giorni < 30 && giorni > 7) {
                    let quoziente7 = Math.floor(giorni / 7);
                    let psettimane = quoziente7 * this.box.prezzo_settimanale.toFixed(2);
                    let rimanenza2 = giorni - (quoziente7 * 7);
                    let pgiorno = rimanenza2 * this.box.prezzo_giornaliero.toFixed(2);
                    this.prezzo = pgiorno + psettimane;
                    return this.prezzo;
                }
                else {
                    let pgiorno = giorni * this.box.prezzo_giornaliero.toFixed(2);
                    this.prezzo = pgiorno;
                    return this.prezzo;
                }
            });
        }
    }
    svuotaCache() {
        window.location.reload();
    }
}
RaterequestComponent.ɵfac = function RaterequestComponent_Factory(t) { return new (t || RaterequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RaterequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RaterequestComponent, selectors: [["app-raterequest"]], decls: 39, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "form-group"], [1, "col-6"], ["for", "exampleInputPassword1"], ["type", "text", "id", "giorni", 1, "form-control"], ["type", "text", "id", "targa", 1, "form-control"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", 3, "click"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function RaterequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preventivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Giorni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaterequestComponent_Template_button_click_20_listener() { return ctx.cercareAuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Preventivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Preventivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaterequestComponent_Template_button_click_35_listener() { return ctx.svuotaCache(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Annulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RaterequestComponent_Template_button_click_37_listener() { return ctx.svuotaCache(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Continua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Prezzo : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 1, ctx.prezzo, "EUR"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: right !important; \r\n}\r\n#targa[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0ZXJlcXVlc3QvcmF0ZXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdGQUF3RjtBQUM1RjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5RUFBeUU7SUFDekUsbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLFVBQVU7SUFDWjtBQUNKO0FBQ0E7SUFDSTtNQUNFLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjtBQUVBO0lBQ0U7TUFDRSxxREFBcUQ7TUFDckQsMkJBQTJCO01BQzNCLFVBQVU7SUFDWjtJQUNBO01BQ0UsNENBQTRDO01BQzVDLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3JhdGVyZXF1ZXN0L3JhdGVyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1leHBhbmQgMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmJ0bntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWVmIDtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tZWxsaXB0aWMtbGVmdC1md2QgMC43cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBhbmltYXRpb246IGZhZGUtaW4tZndkIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5pbnB1dCB7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IFxyXG59XHJcbiN0YXJnYXtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuQGtleWZyYW1lcyBmb2N1cy1pbi1leHBhbmQge1xyXG4gICAgMCUge1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNWVtO1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlLWluLWZ3ZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtODBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzbGlkZS1pbi1lbGxpcHRpYy1sZWZ0LWZ3ZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpIHJvdGF0ZVkoMzBkZWcpIHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAtMTAwJSA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDE4MDBweCA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaterequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-raterequest',
                templateUrl: './raterequest.component.html',
                styleUrls: ['./raterequest.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backClicked() {
        this.router.navigate(['/homepage']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [["id", "mainrow", 1, "container-fluid"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " KryoHertz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#mainrow[_ngcontent-%COMP%]{\r\n    background-color: #00aeef;\r\n    padding-left: 36px;\r\n    width: 100%;\r\n    color: lavender;\r\n    padding-bottom: 10px;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    padding-top:10px;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWVmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5oMXtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kzPv":
/*!********************************************************************!*\
  !*** ./src/app/noleggionewcliente/noleggionewcliente.component.ts ***!
  \********************************************************************/
/*! exports provided: NoleggionewclienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoleggionewclienteComponent", function() { return NoleggionewclienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NoleggionewclienteComponent_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoleggionewclienteComponent_button_58_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getAuto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Controlla Targa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoleggionewclienteComponent_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoleggionewclienteComponent_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.retrieveInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserisci");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
class NoleggionewclienteComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
        this.flag = false;
        this.unlockflag2 = false;
    }
    ngOnInit() {
    }
    retrieveInfo() {
        var id = parseInt(document.getElementById('id').value);
        var data_inizio = document.getElementById('datainizio').value;
        var data_fine = document.getElementById('datafine').value;
        var nominativo = document.getElementById('nominativo').value;
        var patente = document.getElementById('patente').value;
        var cc = document.getElementById('cc').value;
        if (this.query.addCliente(id, nominativo, patente, cc)) {
            console.log(this.boxingres[0].id);
            let flagunlock = true;
            if (flagunlock) {
                if (this.query.noleggio(id, this.boxingres[0].id, data_inizio, data_fine)) {
                    this.flag = true;
                    alert("Noleggio effettuato con successo!");
                    window.location.reload();
                    return this.flag;
                }
                else {
                    alert("Errore Noleggio!");
                    return;
                }
            }
            else {
                alert("Errore Targa!");
                return;
            }
        }
        else {
            alert("Errore inserimento Cliente!");
            return;
        }
    }
    getAuto() {
        var targa = document.getElementById('targa').value;
        const categoriaDaCercare = { targa: targa };
        this.http
            .post('http://localhost:3000/api/categoria/id_auto', categoriaDaCercare)
            .subscribe((responseData) => {
            console.log(responseData.message);
            this.boxingres = responseData.risposta;
        });
        return this.unlockflag2 = true;
    }
    generatePdf() {
        const documentDefinition = document.getElementById('exampleModal');
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).download();
        alert("Download in corso");
        window.location.reload();
    }
}
NoleggionewclienteComponent.ɵfac = function NoleggionewclienteComponent_Factory(t) { return new (t || NoleggionewclienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_3__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NoleggionewclienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoleggionewclienteComponent, selectors: [["app-noleggionewcliente"]], decls: 60, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "form-group"], [1, "col-6"], ["for", "exampleInputPassword1"], ["type", "text", "id", "id", 1, "form-control"], ["type", "text", "id", "datainizio", 1, "form-control"], ["type", "text", "id", "datafine", 1, "form-control"], ["type", "text", "id", "nominativo", 1, "form-control"], ["type", "text", "id", "patente", 1, "form-control"], ["type", "text", "id", "cc", 1, "form-control"], ["type", "text", "id", "targa", 1, "form-control"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", "data-toggle", "modal", "data-target", "#exampleModal", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", 3, "click"]], template: function NoleggionewclienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Noleggio nuovo cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data inizio (AAAA-MM-GG)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Data fine (AAAA-MM-GG)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nominativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Patente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Carta di Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Targa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NoleggionewclienteComponent_button_58_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, NoleggionewclienteComponent_button_59_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.unlockflag2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unlockflag2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: left !important; \r\n}\r\n#id[_ngcontent-%COMP%]{\r\n  text-align: right !important;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9sZWdnaW9uZXdjbGllbnRlL25vbGVnZ2lvbmV3Y2xpZW50ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsd0ZBQXdGO0FBQzVGO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlFQUF5RTtJQUN6RSxtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsVUFBVTtJQUNaO0FBQ0o7QUFDQTtJQUNJO01BQ0UsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtFQUNGO0FBRUE7SUFDRTtNQUNFLHFEQUFxRDtNQUNyRCwyQkFBMkI7TUFDM0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSw0Q0FBNEM7TUFDNUMsNEJBQTRCO01BQzVCLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbm9sZWdnaW9uZXdjbGllbnRlL25vbGVnZ2lvbmV3Y2xpZW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZiA7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWZ3ZCAwLjZzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuaW5wdXQgeyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4jaWR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC04MHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCkgcm90YXRlWSgzMGRlZykgc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlWSgwKSBzY2FsZSgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTgwMHB4IDUwJTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoleggionewclienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noleggionewcliente',
                templateUrl: './noleggionewcliente.component.html',
                styleUrls: ['./noleggionewcliente.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_3__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cancella_cancella_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancella/cancella.component */ "wqq1");
/* harmony import */ var _elenco_elenco_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elenco/elenco.component */ "XJ+q");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _inserisci_inserisci_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inserisci/inserisci.component */ "LPDN");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _modifica_modifica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifica/modifica.component */ "8AQ7");
/* harmony import */ var _noleggionewcliente_noleggionewcliente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./noleggionewcliente/noleggionewcliente.component */ "kzPv");
/* harmony import */ var _raterequest_raterequest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./raterequest/raterequest.component */ "aYxo");
/* harmony import */ var _reportnoleggi_reportnoleggi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reportnoleggi/reportnoleggi.component */ "BJ7M");
/* harmony import */ var _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visualizza/visualizza.component */ "ApO2");














const routes = [
    {
        path: "homepage",
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: "homepage/inserimento",
        component: _inserisci_inserisci_component__WEBPACK_IMPORTED_MODULE_5__["InserisciComponent"]
    },
    {
        path: "homepage/modifica",
        component: _modifica_modifica_component__WEBPACK_IMPORTED_MODULE_7__["ModificaComponent"]
    },
    {
        path: "homepage/visualizza",
        component: _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_11__["VisualizzaComponent"]
    },
    {
        path: "homepage/cancella",
        component: _cancella_cancella_component__WEBPACK_IMPORTED_MODULE_2__["CancellaComponent"]
    },
    {
        path: "homepage/elenco",
        component: _elenco_elenco_component__WEBPACK_IMPORTED_MODULE_3__["ElencoComponent"]
    },
    {
        path: "homepage/preventivo",
        component: _raterequest_raterequest_component__WEBPACK_IMPORTED_MODULE_9__["RaterequestComponent"]
    },
    {
        path: "homepage/noleggio",
        component: _noleggionewcliente_noleggionewcliente_component__WEBPACK_IMPORTED_MODULE_8__["NoleggionewclienteComponent"]
    },
    {
        path: "homepage/storico",
        component: _reportnoleggi_reportnoleggi_component__WEBPACK_IMPORTED_MODULE_10__["ReportnoleggiComponent"]
    },
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    autorizzazione() {
        var usn = document.getElementById('usn').value;
        var psw = document.getElementById('psw').value;
        if (usn == "root" && psw == "root") {
            this.router.navigate(['homepage']);
            let landing = document.getElementById('cancella');
            landing.click();
            return true;
        }
        else {
            let landing = document.getElementById('cancella');
            landing.click();
            alert("Username o Password non corretti!");
            return false;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 0, consts: [["id", "ok1"], [1, "row", "centro"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", "data-whatever", "@mdo", 1, "btn", "btn-primary", "sinistra"], ["id", "ok2"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "form-group"], ["for", "recipient-name", 1, "col-form-label"], ["type", "text", "id", "usn", 1, "form-control"], ["for", "message-text", 1, "col-form-label"], ["type", "password", "id", "psw", 1, "form-control"], [1, "modal-footer"], ["id", "cancella", "type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "accesso", "type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Benvenuto in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Entra nel tuo portale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "KryoHertz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() { return ctx.autorizzazione(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["hr[_ngcontent-%COMP%]{\r\n    animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;\r\n}\r\n#ok1[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    animation: focus-in-expand 2s ease-out;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n    margin-bottom: 50px;\r\n}\r\n#ok2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    animation: focus-in-expand 2s ease-out;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    margin-right: 5px;\r\n\r\n}\r\n.centro[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.sinistra[_ngcontent-%COMP%]{\r\n    animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;\r\n    animation-delay: 1.5s;\r\n    border-radius: 50px !important;\r\n    box-shadow: 0px 15px 10px -10px rgba( 0,0,0,0.6);\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    width: 250px;\r\n    height: 50px;\r\n    \r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes puff-in-center {\r\n    0% {\r\n      transform: scale(2);\r\n      filter: blur(4px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes slide-in-blurred-left {\r\n    0% {\r\n      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);\r\n      transform-origin: 100% 50%;\r\n      filter: blur(40px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) scaleY(1) scaleX(1);\r\n      transform-origin: 50% 50%;\r\n      filter: blur(0);\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1GQUFtRjtBQUN2RjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw0RUFBNEU7SUFDNUUscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixVQUFVO0lBQ1o7QUFDSjtBQUNBO0lBQ0k7TUFDRSxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLFVBQVU7SUFDWjtJQUNBO01BQ0UsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixVQUFVO0lBQ1o7QUFDSjtBQUVBO0lBQ0k7TUFDRSxzREFBc0Q7TUFDdEQsMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLDRDQUE0QztNQUM1Qyx5QkFBeUI7TUFDekIsZUFBZTtNQUNmLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLWxlZnQgMC42cyBjdWJpYy1iZXppZXIoMC4yMzAsIDEuMDAwLCAwLjMyMCwgMS4wMDApIGJvdGg7XHJcbn1cclxuI29rMXtcclxuICAgIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1leHBhbmQgMnMgZWFzZS1vdXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNvazJ7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxufVxyXG5cclxuLmNlbnRyb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW5pc3RyYXtcclxuICAgIGFuaW1hdGlvbjogcHVmZi1pbi1jZW50ZXIgMC43cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoIDAsMCwwLDAuNik7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHB1ZmYtaW4tY2VudGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgICAgZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpIHNjYWxlWCgyLjUpIHNjYWxlWSgwLjIpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcclxuICAgICAgZmlsdGVyOiBibHVyKDQwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "wqq1":
/*!************************************************!*\
  !*** ./src/app/cancella/cancella.component.ts ***!
  \************************************************/
/*! exports provided: CancellaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellaComponent", function() { return CancellaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inserimentoquery.service */ "H9RB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CancellaComponent {
    constructor(query, http) {
        this.query = query;
        this.http = http;
        this.categoria = [];
        this.flag = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    avvisoDiSicurezza() {
        this.flag = true;
        var desc2 = document.getElementById('descrizioneDaCercare').value;
        if (this.query.eliminaCategoria(desc2)) {
            this.categoriaSub = this.query.getCategoriaListener()
                .subscribe((categoria) => {
                this.categoria = categoria;
            });
        }
        alert("Categoria eliminata con successo");
        window.location.reload();
        return true;
    }
}
CancellaComponent.ɵfac = function CancellaComponent_Factory(t) { return new (t || CancellaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CancellaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancellaComponent, selectors: [["app-cancella"]], decls: 25, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "form-inline"], ["type", "search", "placeholder", "Inserisci la descrizione", "aria-label", "Search", "id", "descrizioneDaCercare", 1, "form-control", "mr-sm-2"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function CancellaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Elimina una categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Attenzione!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " La cancellazione di una categoria \u00E8 irreversibile! Se sei davvero sicuro di cancellare clicca su Continua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Annulla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancellaComponent_Template_button_click_23_listener() { return ctx.avvisoDiSicurezza(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Continua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\r\n    color: rgba(50, 50, 50, 0.75);\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    animation: focus-in-expand 2s ease-out;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #00aeef ;\r\n    animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    border: 0.2px solid black;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    background-color: white;\r\n    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n    animation-delay: 1s;\r\n}\r\ninput[_ngcontent-%COMP%] { \r\n  text-align: right !important; \r\n}\r\n#descrizioneDaCercare[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n.modal-header[_ngcontent-%COMP%]{\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n@keyframes focus-in-expand {\r\n    0% {\r\n      letter-spacing: -0.5em;\r\n      filter: blur(12px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      filter: blur(0px);\r\n      opacity: 1;\r\n    }\r\n}\r\n@keyframes fade-in-fwd {\r\n    0% {\r\n      transform: translateZ(-80px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-elliptic-left-fwd {\r\n    0% {\r\n      transform: translateX(-800px) rotateY(30deg) scale(0);\r\n      transform-origin: -100% 50%;\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotateY(0) scale(1);\r\n      transform-origin: 1800px 50%;\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuY2VsbGEvY2FuY2VsbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdGQUF3RjtBQUM1RjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5RUFBeUU7SUFDekUsbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixVQUFVO0lBQ1o7QUFDSjtBQUNBO0lBQ0k7TUFDRSw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7QUFFQTtJQUNFO01BQ0UscURBQXFEO01BQ3JELDJCQUEyQjtNQUMzQixVQUFVO0lBQ1o7SUFDQTtNQUNFLDRDQUE0QztNQUM1Qyw0QkFBNEI7TUFDNUIsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYW5jZWxsYS9jYW5jZWxsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogZm9jdXMtaW4tZXhwYW5kIDJzIGVhc2Utb3V0O1xyXG59XHJcbi5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZiA7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWZ3ZCAwLjZzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuaW5wdXQgeyBcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyBcclxufVxyXG4jZGVzY3JpemlvbmVEYUNlcmNhcmV7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWV4cGFuZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC04MHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLWVsbGlwdGljLWxlZnQtZndkIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCkgcm90YXRlWSgzMGRlZykgc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IC0xMDAlIDUwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlWSgwKSBzY2FsZSgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTgwMHB4IDUwJTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancellaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cancella',
                templateUrl: './cancella.component.html',
                styleUrls: ['./cancella.component.css']
            }]
    }], function () { return [{ type: _inserimentoquery_service__WEBPACK_IMPORTED_MODULE_1__["InserimentoqueryService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map