webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploads_uploads_component__ = __webpack_require__("../../../../../src/app/uploads/uploads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente_component__ = __webpack_require__("../../../../../src/app/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cliente_detail_cliente_detail_component__ = __webpack_require__("../../../../../src/app/cliente-detail/cliente-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productos_productos_component__ = __webpack_require__("../../../../../src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productos_detail_productos_detail_component__ = __webpack_require__("../../../../../src/app/productos-detail/productos-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__compras_compras_component__ = __webpack_require__("../../../../../src/app/compras/compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__compras_add_compras_component__ = __webpack_require__("../../../../../src/app/compras/add-compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ventas_ventas_component__ = __webpack_require__("../../../../../src/app/ventas/ventas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ventas_ventas_list_component__ = __webpack_require__("../../../../../src/app/ventas/ventas.list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var rutas = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__cliente_cliente_component__["a" /* ClienteComponent */] },
    { path: 'clientes', component: __WEBPACK_IMPORTED_MODULE_3__cliente_cliente_component__["a" /* ClienteComponent */], pathMatch: 'full' },
    { path: 'clientes/:id/edit', component: __WEBPACK_IMPORTED_MODULE_4__cliente_detail_cliente_detail_component__["a" /* ClienteDetailComponent */] },
    { path: 'clientes/new', component: __WEBPACK_IMPORTED_MODULE_4__cliente_detail_cliente_detail_component__["a" /* ClienteDetailComponent */], pathMatch: 'full' },
    { path: 'clientes/upload', component: __WEBPACK_IMPORTED_MODULE_0__uploads_uploads_component__["a" /* UploadsComponent */], pathMatch: 'full' },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_5__productos_productos_component__["a" /* ProductosComponent */], pathMatch: 'full' },
    //  {path: 'productos/:id/edit', component: ProductosNewComponent, pathMatch: 'full'},
    //  {path: 'productos/new', component: ProductosNewComponent, pathMatch: 'full'},
    { path: 'productos/varios', component: __WEBPACK_IMPORTED_MODULE_6__productos_detail_productos_detail_component__["a" /* ProductosDetailComponent */], pathMatch: 'full' },
    { path: 'compras', component: __WEBPACK_IMPORTED_MODULE_7__compras_compras_component__["a" /* ComprasComponent */], pathMatch: 'full' },
    { path: 'compras/new', component: __WEBPACK_IMPORTED_MODULE_8__compras_add_compras_component__["a" /* AddComprasComponent */], pathMatch: 'full' },
    { path: 'compras/:id/edit', component: __WEBPACK_IMPORTED_MODULE_8__compras_add_compras_component__["a" /* AddComprasComponent */], pathMatch: 'full' },
    { path: 'ventas', component: __WEBPACK_IMPORTED_MODULE_10__ventas_ventas_list_component__["a" /* VentasListComponent */], pathMatch: 'full' },
    { path: 'ventas/new', component: __WEBPACK_IMPORTED_MODULE_9__ventas_ventas_component__["a" /* VentasComponent */], pathMatch: 'full' },
    { path: 'ventas/:id/edit', component: __WEBPACK_IMPORTED_MODULE_9__ventas_ventas_component__["a" /* VentasComponent */], pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(rutas)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n}\r\n.app{\r\n    height: 95vh;    \r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\ndiv.form-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<section class=\"app container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <mat-toolbar color=\"primary\" class=\"mat-elevation-z10\">\n    <a mat-button (click)=toogleSideNav()> Menu</a>\n    Bienvenido a {{ title }}!\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"container\" fxFlex>\n    <mat-sidenav mode=\"side\" opened=\"{{showSideNav}}\" class=\"mat-elevation-z6\">\n\n      <mat-toolbar>\n        <span></span>\n        <div layout=\"column\" class=\"md-toolbar-tools-bottom\">\n          <span></span>\n          <div>Firstname Lastname</div>\n          <div>email@domainname.com</div>\n        </div>\n      </mat-toolbar>\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let item of menu\" routerLink=\"{{item.ruta}}\">\n          <a>\n            <div> {{item.titulo}}</div>\n          </a>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-sidenav>\n    <router-outlet></router-outlet>\n    \n  </mat-sidenav-container>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Facturacion V0.1';
        this.showSideNav = false;
        this.menu = [
            { titulo: 'Clientes', ruta: '/clientes' },
            //    { titulo: 'Nuevo Cliente', ruta: '/clientes/new' },
            { titulo: 'Productos', ruta: '/productos' },
            //    { titulo: 'Productos', ruta: '/productos/new' },
            { titulo: 'Ventas', ruta: '/ventas' },
            { titulo: 'Nueva Venta', ruta: '/ventas/new' },
            { titulo: 'Compras', ruta: '/compras' },
        ];
    }
    AppComponent.prototype.toogleSideNav = function () {
        this.showSideNav = !this.showSideNav;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cliente_cliente_component__ = __webpack_require__("../../../../../src/app/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cliente_detail_cliente_detail_component__ = __webpack_require__("../../../../../src/app/cliente-detail/cliente-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__productos_productos_component__ = __webpack_require__("../../../../../src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_productos_dialog__ = __webpack_require__("../../../../../src/app/dialog/productos.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_borrar_dialog__ = __webpack_require__("../../../../../src/app/dialog/borrar.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__productos_detail_productos_detail_component__ = __webpack_require__("../../../../../src/app/productos-detail/productos-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__uploads_uploads_component__ = __webpack_require__("../../../../../src/app/uploads/uploads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__compras_compras_component__ = __webpack_require__("../../../../../src/app/compras/compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__compras_add_compras_component__ = __webpack_require__("../../../../../src/app/compras/add-compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__compra_detalles_compra_detalles_component__ = __webpack_require__("../../../../../src/app/compra-detalles/compra-detalles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__servicios_compras_service__ = __webpack_require__("../../../../../src/app/servicios/compras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__servicios_productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__totales_total_general__ = __webpack_require__("../../../../../src/app/totales/total-general.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ventas_ventas_component__ = __webpack_require__("../../../../../src/app/ventas/ventas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ventas_ventas_list_component__ = __webpack_require__("../../../../../src/app/ventas/ventas.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forms_ventas_form__ = __webpack_require__("../../../../../src/app/forms/ventas.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__forms_productos_form__ = __webpack_require__("../../../../../src/app/forms/productos.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__forms_detalle_venta_form__ = __webpack_require__("../../../../../src/app/forms/detalle-venta.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ventas_tabla_venta_detalles__ = __webpack_require__("../../../../../src/app/ventas/tabla-venta-detalles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cliente_cliente_component__["a" /* ClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cliente_detail_cliente_detail_component__["a" /* ClienteDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__productos_productos_component__["a" /* ProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__productos_detail_productos_detail_component__["a" /* ProductosDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__uploads_uploads_component__["a" /* UploadsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__compras_compras_component__["a" /* ComprasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__compras_add_compras_component__["a" /* AddComprasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__compra_detalles_compra_detalles_component__["a" /* CompraDetallesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dialog_borrar_dialog__["a" /* BorrarDialog */],
                __WEBPACK_IMPORTED_MODULE_12__dialog_productos_dialog__["a" /* ProductosDialog */],
                __WEBPACK_IMPORTED_MODULE_8__cliente_cliente_component__["c" /* ClienteFormDialog */],
                __WEBPACK_IMPORTED_MODULE_8__cliente_cliente_component__["b" /* ClienteForm */],
                __WEBPACK_IMPORTED_MODULE_21__totales_total_general__["a" /* TotalGeneral */],
                __WEBPACK_IMPORTED_MODULE_22__ventas_ventas_component__["a" /* VentasComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ventas_ventas_list_component__["a" /* VentasListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__forms_ventas_form__["a" /* VentasForm */],
                __WEBPACK_IMPORTED_MODULE_25__forms_productos_form__["a" /* ProductosForm */],
                __WEBPACK_IMPORTED_MODULE_26__forms_detalle_venta_form__["a" /* DetalleVentaForm */],
                __WEBPACK_IMPORTED_MODULE_27__ventas_tabla_venta_detalles__["a" /* TablaVentaDetalles */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__dialog_borrar_dialog__["a" /* BorrarDialog */], __WEBPACK_IMPORTED_MODULE_12__dialog_productos_dialog__["a" /* ProductosDialog */], __WEBPACK_IMPORTED_MODULE_8__cliente_cliente_component__["c" /* ClienteFormDialog */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                //    Material
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatRadioModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__servicios_compras_service__["a" /* ComprasService */], __WEBPACK_IMPORTED_MODULE_20__servicios_productos_service__["a" /* ProductosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cliente-detail/cliente-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " div.cliente-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cliente-detail/cliente-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n\n    <h2 mat-card-title>\n        <p *ngIf=\"isEditing; else notShow \">  Cliente {{cliente.ruc}} </p>\n    </h2>\n\n    <ng-template #notShow>\n        <p>\n            Nuevo Cliente\n        </p>\n    </ng-template>\n    <mat-card-content>\n            \n        <div class=\"cliente-container\">\n            <cliente-form [cliente]=\"cliente\" [tipos]=\"tipos\" [isEditing]=\"isEditing\"></cliente-form>\n        </div>\n        \n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button (click)=\"back()\">Volver</button>\n        <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n        <button mat-button (click)=\"saveOrUpdate()\" [disabled]=\"clienteForm.form.invalid\">Si</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/cliente-detail/cliente-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__ = __webpack_require__("../../../../../src/app/modelo/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cliente_cliente_component__ = __webpack_require__("../../../../../src/app/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClienteDetailComponent = (function () {
    function ClienteDetailComponent(route, location, service, sb) {
        this.route = route;
        this.location = location;
        this.service = service;
        this.sb = sb;
        this.successMessage = "Guardado con exito!!!";
        this.errorMessage = "No se pudo guardar, verifique: RUC o Tipo de Cliente u otro, \n\
Información adicional: ";
        this.isEditing = false;
    }
    ClienteDetailComponent.prototype.ngOnInit = function () {
        this.getTipos();
        //chequear si es nuevo o no 
        this.cliente = new __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__["a" /* Cliente */]();
        if (this.location.path() != "/clientes/new") {
            //esta editando
            var id = +this.route.snapshot.paramMap.get('id');
            this.isEditing = true;
            this.getOne(id);
        }
        //        this.form = this.service.createForm(this.cliente)
        //        
        //        this.form.get("ruc").valueChanges.pipe(debounceTime(700)).subscribe(val => {
        //
        //            this.service.findByExample(val).subscribe(res => {
        //                if (res) {
        //                    this.form.get("ruc").setErrors({ "notUnique": true });
        //                }
        //            },error => {
        //                console.log(error);
        //            });
        //
        //        });
    };
    ClienteDetailComponent.prototype.getTipos = function () {
        var _this = this;
        this.service.getAllTipos().subscribe(function (res) { return _this.tipos = res; });
    };
    ClienteDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ClienteDetailComponent.prototype.getOne = function (id) {
        var _this = this;
        this.service.getOne(id).subscribe(function (res) {
            _this.cliente = res;
            _this.clienteForm.createForm(res);
        });
    };
    ClienteDetailComponent.prototype.saveOrUpdate = function () {
        var _this = this;
        this.service.saveOrUpdate(this.clienteForm.form.value).subscribe(function (res) { _this.sb.open(_this.successMessage, "", { duration: 3000 }); }, function (error) { _this.sb.open(_this.errorMessage + error.message, "", { duration: 3000 }); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__cliente_cliente_component__["b" /* ClienteForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__cliente_cliente_component__["b" /* ClienteForm */])
    ], ClienteDetailComponent.prototype, "clienteForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__["a" /* Cliente */])
    ], ClienteDetailComponent.prototype, "cliente", void 0);
    ClienteDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cliente-detail',
            template: __webpack_require__("../../../../../src/app/cliente-detail/cliente-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cliente-detail/cliente-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatSnackBar */]])
    ], ClienteDetailComponent);
    return ClienteDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cliente/cliente-form.dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n    <p *ngIf=\"isEditing; else notShow \">  Cliente {{cliente.ruc}} </p>\n</h2>\n\n<ng-template #notShow>\n  <p>\n    Nuevo Cliente\n  </p>\n</ng-template>\n\n<mat-dialog-content>\n    <cliente-form [cliente]=\"cliente\" [tipos]=\"tipos\" [isEditing]=\"isEditing\"></cliente-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"saveOrUpdate()\" [disabled]=\"clienteForm.form.invalid\">Si</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/cliente/cliente-form.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<form id=\"form\"[formGroup]=\"form\">\n       <div class=\"cliente-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Nombre\" formControlName=\"nombre\">\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput placeholder=\"Apellido\" formControlName=\"apellido\">\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput placeholder=\"CI o RUC\" [readonly]=\"isEditing\" autocomplete=\"off\" formControlName=\"ruc\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Telefono\" autocomplete=\"off\" formControlName=\"telefono\">\n        </mat-form-field>\n        \n          <mat-form-field>\n            <input matInput placeholder=\"Direccion 1\" formControlName=\"direccion1\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Direccion 2\" formControlName=\"direccion2\">\n          </mat-form-field>\n        \n          \n        \n        <mat-form-field>\n          <mat-select placeholder=\"Tipo\" formControlName=\"tipo\">\n            <mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo\">\n              {{ tipo }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        \n        <section>\n          <mat-checkbox #myCheckbox formControlName=\"activo\">Esta Activo?</mat-checkbox>\n        </section>\n        \n        \n        <mat-form-field>\n          <input matInput [matDatepicker]=\"myDatepicker\" autocomplete=\"off\" placeholder=\"Fecha Nacimiento\" formControlName=\"fechaNacimiento\">\n          <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #myDatepicker></mat-datepicker>\n        </mat-form-field> \n       </div>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/cliente/cliente.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Lista de clientes-->\n<div fxFlex>\n    <div>\n        <div class=\"alert alert-success\" *ngIf=\"showMsg\">\n            Eliminado con exito!!!;\n        </div>\n    </div>\n\n\n    <div>\n        <mat-table #clientes [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">  \n                    <mat-checkbox #myCheckbox (change)=\"aBorrar($event, item.id)\" > {{item.id}} </mat-checkbox>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"nombre\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\" > {{item.nombre}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"apellido\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Apellido </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.apellido}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"ruc\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> RUC </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.ruc}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"estado\">\n                <mat-header-cell *matHeaderCellDef> Estado </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.activo}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"tipo\">\n                <mat-header-cell *matHeaderCellDef> Tipo </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.tipo}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"direccion1\">\n                <mat-header-cell *matHeaderCellDef> Direccion 1 </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.direccion1}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"direccion2\">\n                <mat-header-cell *matHeaderCellDef> Direccion 2 </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.direccion2}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"fechaNacimiento\">\n                <mat-header-cell *matHeaderCellDef> Fecha Nac </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.fechaNacimiento}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"createdOn\">\n                <mat-header-cell *matHeaderCellDef> Registrado el</mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.createdOn}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"acciones\">\n                <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">\n                    <a mat-button routerLink=\"/clientes/{{item.id}}/edit\">Editar </a>\n                    <a mat-button (click)=edit(item.id)>Editar </a>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n        </mat-paginator>\n        <button mat-raised-button (click)=\"borrar()\"  color=\"warn\" [disabled]=\"borrarDisabled\">Borrar ({{ ids.length }})</button>\n        <button mat-raised-button color=\"primary\" routerLink=\"/clientes/new\">Nuevo</button>\n        <button mat-raised-button color=\"primary\" (click)=\"nuevo()\" >Ventana Nuevo</button>\n        <button mat-raised-button routerLink=\"/clientes/upload\">Desde Archivo</button>\n        <button mat-raised-button (click)=\"export()\">Exportar</button>\n    </div>\n\n</div>\n\n<div *ngIf=\"selectedCliente\" fxFlex=\"33\">\n\n    <app-cliente-detail [cliente]=\"selectedCliente\"></app-cliente-detail>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClienteForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ClienteFormDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__ = __webpack_require__("../../../../../src/app/modelo/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_borrar_dialog__ = __webpack_require__("../../../../../src/app/dialog/borrar.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ClienteForm = (function () {
    function ClienteForm(fb, service, global) {
        this.fb = fb;
        this.service = service;
        this.global = global;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__["a" /* Cliente */]();
        this.subscripciones = [];
    }
    ClienteForm.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    ClienteForm.prototype.ngOnInit = function () {
        console.log("ClienteForm OnInit");
        this.createForm(this.cliente);
    };
    ClienteForm.prototype.createForm = function (c) {
        var _this = this;
        this.form = this.fb.group({
            id: [c.id],
            nombre: [c.nombre, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            apellido: [c.apellido],
            ruc: [c.ruc, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            activo: c.activo,
            direccion1: c.direccion1,
            direccion2: c.direccion2,
            fechaNacimiento: [new Date(c.fechaNacimiento)],
            telefono: [c.telefono],
            tipo: [c.tipo, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.subscripciones.push(this.form.get("ruc").valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_debounceTime__["a" /* debounceTime */])(this.global.duration.short)).subscribe(function (val) {
            _this.service.findByRuc(val).subscribe(function (res) {
                if (res) {
                    _this.form.get("ruc").setErrors({ "notUnique": true });
                }
            }, function (error) {
                console.log(error);
            });
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__["a" /* Cliente */])
    ], ClienteForm.prototype, "cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ClienteForm.prototype, "tipos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClienteForm.prototype, "isEditing", void 0);
    ClienteForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cliente-form',
            template: __webpack_require__("../../../../../src/app/cliente/cliente-form.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */]],
            styles: [__webpack_require__("../../../../../src/app/cliente-detail/cliente-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]])
    ], ClienteForm);
    return ClienteForm;
}());

var ClienteFormDialog = (function () {
    function ClienteFormDialog(dialogRef, data, service, snackBar, global) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.snackBar = snackBar;
        this.global = global;
        this.cliente = data.cliente;
        this.isEditing = data.isEditing;
        console.log(this.global);
    }
    ClienteFormDialog.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ClienteFormDialog OnInit");
        //            this.createForm();
        this.service.getAllTipos().subscribe(function (res) {
            _this.tipos = res;
        });
    };
    ClienteFormDialog.prototype.saveOrUpdate = function () {
        var _this = this;
        this.service.saveOrUpdate(this.clienteForm.form.value).subscribe(function (res) { _this.dialogRef.close(true); }, function (error) { _this.showSnack(_this.global.messageError.guardar + error.message); });
    };
    //    private createForm()     {
    //        this.form = this.service.createForm(this.client    e);
    //        this.form = this.fb.grou    p({
    //            id: [this.cliente.i    d],
    //            nombre: [this.cliente.nombre, Validators.require    d],
    //            apellido: [this.cliente.apellid    o],
    //            ruc: [this.cliente.ruc, Validators.require    d],
    //            activo: this.cliente.acti    vo,
    //            direccion1: this.cliente.direccio    n1,
    //            direccion2: this.cliente.direccio    n2,
    //            fechaNacimiento: [new Date(this.cliente.fechaNacimiento    )],
    //            telefono: [this.cliente.telefon    o],
    //            tipo: [this.cliente.tipo, Validators.requir    ed]
    //            });
    //    }
    ClienteFormDialog.prototype.showSnack = function (message) {
        this.snackBar.open(message, "", { duration: this.global.duration.long });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(ClienteForm),
        __metadata("design:type", ClienteForm)
    ], ClienteFormDialog.prototype, "clienteForm", void 0);
    ClienteFormDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cliente-form-dialog',
            template: __webpack_require__("../../../../../src/app/cliente/cliente-form.dialog.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]])
    ], ClienteFormDialog);
    return ClienteFormDialog;
}());

var ClienteComponent = (function () {
    function ClienteComponent(snackBar, dialog, service, global) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.service = service;
        this.global = global;
        this.borrarDisabled = true;
        this.displayedColumns = ['id', 'nombre', 'apellido', 'ruc', 'direccion1', 'direccion2', 'estado', 'tipo', 'fechaNacimiento', 'createdOn', 'acciones'];
        this.ids = [];
    }
    ClienteComponent.prototype.ngOnInit = function () {
        this._buildMaterialTable();
        this.getClientes();
    };
    ClienteComponent.prototype.onSelect = function (cliente) {
        this.selectedCliente = cliente;
    };
    ClienteComponent.prototype.aBorrar = function (evt, id) {
        if (evt.checked) {
            this.ids.push(id);
        }
        else {
            // Item to remove
            this.ids = this.ids.filter(function (obj) { return obj !== id; });
        }
        this.borrarDisabled = !(this.ids.length > 0);
    };
    ClienteComponent.prototype.getClientes = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) {
            _this.dataSource.data = data;
            //this.dataSource = new MatTableDataSource<Cliente>(data);
            //        this.dataSource.connect()
            //this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        });
    };
    // Metodo para borrar
    ClienteComponent.prototype.borrar = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialog_borrar_dialog__["a" /* BorrarDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.service.delete(_this.ids).subscribe(function (res) {
                    _this.getClientes();
                    _this.ids = [];
                    _this.borrarDisabled = true;
                }, function (error) {
                    _this.showSnack(_this.global.messageError.elimiar + error.message);
                });
            }
        });
    };
    ClienteComponent.prototype.export = function () {
        window.open("api/clientes/exportar");
    };
    ClienteComponent.prototype.showSnack = function (message) {
        this.snackBar.open(message, "OK", { duration: 3000 });
    };
    ClienteComponent.prototype.nuevo = function () {
        //        const dialogConfig = new MatDialogConfig();
        var cliente = new __WEBPACK_IMPORTED_MODULE_5__modelo_cliente__["a" /* Cliente */]();
        var dialogData = { data: { cliente: cliente, isEditing: false }, width: '50%' };
        this._openDialod(dialogData);
    };
    ClienteComponent.prototype.edit = function (id) {
        var cliente;
        for (var i = 0; i < this.dataSource.data.length; i++) {
            if (this.dataSource.data[i].id == id) {
                cliente = this.dataSource.data[i];
                break;
            }
        }
        var dialogData = { data: { cliente: cliente, isEditing: true }, width: '50%' };
        this._openDialod(dialogData);
    };
    ClienteComponent.prototype._buildMaterialTable = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatTableDataSource */]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ClienteComponent.prototype._openDialod = function (dialogData) {
        var _this = this;
        var mensajeOK, mensajeNoOK;
        if (dialogData.data.isEditing) {
            mensajeOK = this.global.messageSuccess.editar;
            mensajeNoOK = this.global.messageError.editar;
        }
        else {
            mensajeOK = this.global.messageSuccess.guardar;
            mensajeNoOK = this.global.messageError.guardar;
        }
        var dialogRef = this.dialog.open(ClienteFormDialog, dialogData);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.showSnack(mensajeOK);
                _this.getClientes();
            }
        }, function (error) {
            _this.showSnack(mensajeNoOK + error.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatPaginator */])
    ], ClienteComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatSort */])
    ], ClienteComponent.prototype, "sort", void 0);
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cliente',
            template: __webpack_require__("../../../../../src/app/cliente/cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cliente/cliente.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/compra-detalles/compra-detalles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compra-detalles/compra-detalles.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n      <mat-table #compraDetalles [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> id </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.id}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"codigo\">\n          <mat-header-cell *matHeaderCellDef> codigo </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.codigo}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"nombre\">\n          <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.nombre}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"cantidad\">\n          <mat-header-cell *matHeaderCellDef> Cantidad </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.cantidad}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"precioCompra\">\n          <mat-header-cell *matHeaderCellDef> precio Compra</mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.precioCompra| currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"precioVenta\">\n          <mat-header-cell *matHeaderCellDef> precio Venta</mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.precioVenta | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"porcenIva\">\n          <mat-header-cell *matHeaderCellDef> Porcen IVA </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.porcenIva}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"excentas\">\n          <mat-header-cell *matHeaderCellDef> Excentas </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\" > {{ !!item.porcenIva==0?item.subTotal:0 | currency }} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"iva5\">\n          <mat-header-cell *matHeaderCellDef> IVA 5 </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{ (item.porcenIva==5)?item.subTotal+item.montoIva:0 | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"iva10\">\n          <mat-header-cell *matHeaderCellDef> IVA 10 </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{ (item.porcenIva==10)?item.subTotal+item.montoIva:0  | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"subTotal\">\n          <mat-header-cell *matHeaderCellDef> subTotal </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.subTotal | currency }} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"acciones\">\n          <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\">\n            <a mat-button (click)=\"edit(item)\"> Editar </a>\n            <a mat-button (click)=\"onBorrar(item)\"> Borrar </a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/compra-detalles/compra-detalles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraDetallesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompraDetallesComponent = (function () {
    function CompraDetallesComponent() {
        this.displayedColumns = [
            'nombre', 'codigo', 'cantidad', 'precioCompra',
            'precioVenta', 'excentas', 'iva5', 'iva10', 'acciones'
        ];
        this.subscripciones = [];
        this.detalles = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]();
        this.evtBorrar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CompraDetallesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("CompraDetallesComponent: onInit");
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTableDataSource */]();
        this.subscripciones.push(this.detalles.subscribe(function (data) {
            _this.dataSource.data = data;
        }));
    };
    CompraDetallesComponent.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    CompraDetallesComponent.prototype.onBorrar = function (item) {
        this.evtBorrar.emit(item);
    };
    CompraDetallesComponent.prototype.edit = function (item) {
        this.onSelect.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], CompraDetallesComponent.prototype, "detalles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CompraDetallesComponent.prototype, "evtBorrar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CompraDetallesComponent.prototype, "onSelect", void 0);
    CompraDetallesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-compra-detalles',
            template: __webpack_require__("../../../../../src/app/compra-detalles/compra-detalles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/compra-detalles/compra-detalles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompraDetallesComponent);
    return CompraDetallesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/compras/add-compras.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n\n    <form [formGroup]=\"formCompra\" novalidate>\n        <mat-card-header color=\"primary\">\n            Nueva Compra\n            <!-- <div *ngif=showMessage > {{ mensaje }}</div> -->\n        </mat-card-header>\n\n        <mat-card-content>\n\n\n            <div class=\"compra-container\">\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Proveedor\" formControlName=\"proveedor\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"Fecha Compra\" formControlName=\"fechaCompra\">\n                           <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n\n            </div>\n\n        </mat-card-content>\n\n    </form>\n</mat-card>\n\n<mat-card>\n    <form [formGroup]=\"formDetalles\">\n\n        <mat-form-field>\n\n            <input matInput placeholder=\"Producto\" formControlName=\"producto\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                <mat-option  *ngFor=\"let producto of productos | async\" [value]=\"producto\" >\n                    {{ producto.codigo }}, {{producto.nombre}}\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Cantidad\" type=\"number\" formControlName=\"cantidad\">\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput currency-mask placeholder=\"Precio Compra\" type=\"number\" formControlName=\"precioCompra\">\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Porcentaje Ganancia\" type=\"number\" formControlName=\"porcenGan\">\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput currency-mask placeholder=\"Precio Venta\"  type=\"number\" formControlName=\"precioVenta\">\n    </mat-form-field>\n    <mat-form-field>\n            <mat-select placeholder=\"IVA\" formControlName=\"porcenIva\">\n                <mat-option *ngFor=\"let iva of ivas\" [value]=\"iva\">\n                    {{iva}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n   \n    <mat-card-actions>\n        <button mat-raised-button [disabled]=\"formDetalles.invalid\" (click)=\"addDetalle()\" >Agregar</button>\n    </mat-card-actions>\n</form>\n</mat-card>\n\n<mat-card>\n\n    <div>\n        <app-compra-detalles (onSelect)=\"edit($event)\" (evtBorrar)=\"borrar($event)\" [detalles]=\"getCompraDetalles()\" ></app-compra-detalles>\n    </div>\n</mat-card>\n<mat-card>\n    <total-general [impositivo$]=\"getImpositivo$()\"></total-general>\n</mat-card>\n<mat-card>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"back()\" >Volver</button>\n        <button mat-raised-button (click)=\"guardar()\" >Guardar</button>\n    </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/compras/add-compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modelo_Compra__ = __webpack_require__("../../../../../src/app/modelo/Compra.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_CompraProductoService__ = __webpack_require__("../../../../../src/app/servicios/CompraProductoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddComprasComponent = (function () {
    function AddComprasComponent(servicio, fb, location, route, sb, global) {
        this.servicio = servicio;
        this.fb = fb;
        this.location = location;
        this.route = route;
        this.sb = sb;
        this.global = global;
        this.isEditing = false;
        this.ivas = [0, 5, 10];
        this.idProductos = [];
        this.subscripciones = [];
        this.compra$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.compraDetalles$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    AddComprasComponent.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    AddComprasComponent.prototype.ngOnInit = function () {
        console.log("AddComprasComponent: onInit");
        this.compra = new __WEBPACK_IMPORTED_MODULE_8__modelo_Compra__["a" /* Compra */]();
        this.compra.compraDetalles = [];
        this.compraDetalle = new __WEBPACK_IMPORTED_MODULE_8__modelo_Compra__["b" /* CompraDetalle */]();
        if (this.location.path() != "/compras/new") {
            //esta editando
            var id = +this.route.snapshot.paramMap.get('id');
            this.isEditing = true;
            this.getById(id);
        }
        this.createForm();
    };
    AddComprasComponent.prototype.createForm = function () {
        var _this = this;
        this.formCompra = this.fb.group({
            id: [this.compra.id],
            proveedor: [this.compra.proveedor, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            fechaCompra: [this.compra.fechaCompra]
        });
        this.formDetalles = this.fb.group({
            id: [this.compraDetalle.id],
            producto: [this.compraDetalle.producto, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            cantidad: [this.compraDetalle.cantidad, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            precioCompra: [this.compraDetalle.precioCompra, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            porcenGan: [this.compraDetalle.porcenGan, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            precioVenta: [this.compraDetalle.precioVenta, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            porcenIva: [this.compraDetalle.porcenIva, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
        });
        this.subscripciones.push(this.formDetalles.get('producto').valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_debounceTime__["a" /* debounceTime */])(700))
            .subscribe(function (data) {
            if (data && data.id) {
                _this._editarDetalles(data);
            }
            else {
                _this.productos = _this.servicio
                    .productoSrvc.search(data, _this.idProductos).pipe();
            }
        }));
        this.subscripciones.push(this.formDetalles.get('porcenGan').valueChanges.subscribe(function (data) {
            var precioCompra = _this.formDetalles.get('precioCompra').value;
            if (precioCompra != null) {
                var precioVenta = precioCompra * (1 + data / 100.0);
                _this.formDetalles.get('precioVenta').setValue(precioVenta, { emitEvent: false });
            }
        }));
        this.subscripciones.push(this.formDetalles.get('precioVenta').valueChanges.subscribe(function (data) {
            var precioCompra = _this.formDetalles.get('precioCompra').value;
            if (precioCompra != null) {
                var porcenGan = (data - precioCompra) * 100 / precioCompra;
                _this.formDetalles.get('porcenGan').setValue(porcenGan, { emitEvent: false });
            }
        }));
        this.subscripciones.push(this.formDetalles.get('precioCompra').valueChanges.subscribe(function (data) {
            var porcenGan = _this.formDetalles.get('porcenGan').value;
            if (porcenGan != null) {
                var precioVenta = data * (1 + porcenGan / 100.0);
                _this.formDetalles.get('precioVenta').setValue(precioVenta, { emitEvent: false });
            }
        }));
    };
    AddComprasComponent.prototype.guardar = function () {
        var _this = this;
        var detalles = this.compra.compraDetalles;
        this.compra = this.formCompra.value;
        this.compra.compraDetalles = detalles;
        console.log(this.compra);
        this.servicio.compraSrvc.save(this.compra).subscribe(function (data) {
            _this.sb.open(_this.global.messageSuccess.guardar, "", { duration: _this.global.duration.medium });
        }, function (error) { _this.sb.open(_this.global.messageError.guardar + error, "", { duration: _this.global.duration.medium }); });
        //limpiar texto
    };
    AddComprasComponent.prototype.addDetalle = function () {
        var p = this.formDetalles.get('producto').value;
        if (p == null || p.nombre === undefined) {
            this.sb.open(this.global.messageError.guardar, "", { duration: this.global.duration.long });
        }
        else {
            var cd = new __WEBPACK_IMPORTED_MODULE_8__modelo_Compra__["b" /* CompraDetalle */]();
            cd = this.formDetalles.value;
            cd.nombre = cd.producto.nombre;
            cd.codigo = cd.producto.codigo;
            this.formDetalles.reset();
            this._calcularTotal(cd, "addDetalle");
            this._agregarDetalle(cd);
        }
    };
    AddComprasComponent.prototype.getCompraDetalles = function () {
        return this.compraDetalles$.asObservable();
    };
    AddComprasComponent.prototype.displayFn = function (producto) {
        return producto ? producto.codigo + ', ' + producto.nombre : '';
    };
    AddComprasComponent.prototype._calcularTotal = function (det, llamado) {
        console.log("Calcular total: " + llamado);
        det.subTotal = det.cantidad * det.precioCompra;
        det.montoIva = det.subTotal * det.porcenIva / 100;
        return det;
    };
    AddComprasComponent.prototype.getById = function (id) {
        var _this = this;
        this.servicio.compraSrvc.getById(id).subscribe(function (compra) {
            _this.compra = compra;
            _this.compraDetalles$.next(_this.compra.compraDetalles);
            _this.compra$.next(_this.compra);
            _this.idProductos = _this._getProductoIds();
            _this.formCompra.setValue({
                id: _this.compra.id,
                proveedor: _this.compra.proveedor,
                fechaCompra: new Date(_this.compra.fechaCompra)
            });
        });
    };
    AddComprasComponent.prototype.getImpositivo$ = function () {
        return this.compra$.asObservable();
    };
    AddComprasComponent.prototype.borrar = function (event$) {
        this._removerDetalle(event$);
    };
    AddComprasComponent.prototype._agregarDetalle = function (cd) {
        switch (cd.porcenIva) {
            case 0:
                this.compra.totalExentas += cd.subTotal;
                break;
            case 5:
                this.compra.totalIva5 += cd.subTotal + cd.montoIva;
                break;
            case 10:
                this.compra.totalIva10 += cd.subTotal + cd.montoIva;
                break;
        }
        this.compra.totalGeneral = this.compra.totalExentas +
            this.compra.totalIva5 + this.compra.totalIva10;
        this.compra.compraDetalles.push(cd);
        this.idProductos.push(cd.producto.id.toString());
        this.compraDetalles$.next(this.compra.compraDetalles);
        this.compra$.next(this.compra);
    };
    AddComprasComponent.prototype._removerDetalle = function (cd) {
        var detalles = this.compra.compraDetalles;
        if (detalles.includes(cd)) {
            detalles.splice(detalles.indexOf(cd), 1);
            this.idProductos.splice(this.idProductos.indexOf(cd.producto.id.toString()), 1);
            this.compra.compraDetalles = detalles;
        }
        switch (cd.porcenIva) {
            case 0:
                this.compra.totalExentas -= cd.subTotal;
                break;
            case 5:
                this.compra.totalIva5 -= cd.subTotal + cd.montoIva;
                break;
            case 10:
                this.compra.totalIva10 -= cd.subTotal + cd.montoIva;
                break;
        }
        this.compra.totalGeneral = this.compra.totalExentas +
            this.compra.totalIva5 + this.compra.totalIva10;
        this.compra$.next(this.compra);
        this.compraDetalles$.next(this.compra.compraDetalles);
    };
    AddComprasComponent.prototype.back = function () {
        this.location.back();
    };
    AddComprasComponent.prototype.edit = function (cd) {
        this._removerDetalle(cd);
        this._editarDetalles(cd);
    };
    AddComprasComponent.prototype._editarDetalles = function (data) {
        console.log("data: $()" + data);
        var evt = { emitEvent: false };
        if (data.producto)
            this.formDetalles.get('producto').setValue(data.producto, evt);
        if (data.cantidad)
            this.formDetalles.get('cantidad').setValue(data.cantidad, evt);
        this.formDetalles.get('precioCompra').setValue(data.precioCompra, evt);
        this.formDetalles.get('porcenGan').setValue(data.porcenGan, evt);
        this.formDetalles.get('precioVenta').setValue(data.precioVenta, evt);
        this.formDetalles.get('porcenIva').setValue(data.porcenIva, evt);
    };
    AddComprasComponent.prototype._getProductoIds = function () {
        var result = [];
        for (var i = 0; i < this.compra.compraDetalles.length; i++) {
            result.push(this.compra.compraDetalles[i].producto.id.toString());
        }
        return result;
    };
    AddComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-compras',
            template: __webpack_require__("../../../../../src/app/compras/add-compras.component.html"),
            styles: [__webpack_require__("../../../../../src/app/compras/compras.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__servicios_CompraProductoService__["a" /* CompraProductoService */], __WEBPACK_IMPORTED_MODULE_10__globals__["a" /* Globals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__servicios_CompraProductoService__["a" /* CompraProductoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_10__globals__["a" /* Globals */]])
    ], AddComprasComponent);
    return AddComprasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/compras/compras.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/compras/compras.component.html":
/***/ (function(module, exports) {

module.exports = " <div>\n        <mat-table #compras [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">  \n                    <mat-checkbox #myCheckbox (change)=\"aBorrar($event, item.id)\" > {{item.id}} </mat-checkbox>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"proveedor\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Proveedor </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\" > {{item.proveedor}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"fechaCompra\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.fechaCompra | date  }}  </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"totalCompra\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Total Compra </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.totalGeneral | currency }} </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"acciones\">\n                <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">\n                    <a mat-button routerLink=\"/compras/{{item.id}}/edit\">Editar </a>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n        </mat-paginator>\n        <button mat-raised-button (click)=\"borrar()\"  color=\"warn\" [disabled]=\"borrarDisabled\">Borrar ({{ ids.length }})</button>\n        <button mat-raised-button color=\"primary\" routerLink=\"/compras/new\">Nuevo</button>\n        <button mat-raised-button routerLink=\"/clientes/upload\">Desde Archivo</button>\n        <button mat-raised-button (click)=\"export()\">Exportar</button>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/compras/compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_compras_service__ = __webpack_require__("../../../../../src/app/servicios/compras.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComprasComponent = (function () {
    function ComprasComponent(service) {
        this.service = service;
        this.displayedColumns = ['id', 'proveedor', 'fechaCompra', 'totalCompra', 'acciones'];
        this.borrarDisabled = true;
        this.ids = [];
    }
    ComprasComponent.prototype.ngOnInit = function () {
        this.getCompras();
    };
    ComprasComponent.prototype.getCompras = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTableDataSource */](data);
            //        this.dataSource.connect()
            //this.dataSource.paginator = this.paginator;
            //this.dataSource.sort = this.sort;
        });
    };
    ComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-compras',
            template: __webpack_require__("../../../../../src/app/compras/compras.component.html"),
            styles: [__webpack_require__("../../../../../src/app/compras/compras.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__servicios_compras_service__["a" /* ComprasService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_compras_service__["a" /* ComprasService */]])
    ], ComprasComponent);
    return ComprasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/borrar-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Borrar Todos</h2>\n<mat-dialog-content>Esta seguro?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button [mat-dialog-close]=\"true\">Si</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/dialog/borrar.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrarDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BorrarDialog = (function () {
    function BorrarDialog() {
    }
    BorrarDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "borrar-dialog",
            template: __webpack_require__("../../../../../src/app/dialog/borrar-dialog.html")
        })
    ], BorrarDialog);
    return BorrarDialog;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/productos-dialog.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<h2 mat-dialog-title>Nuevo producto</h2>\n\n<mat-dialog-content>\n    <app-productos-form [producto]=\"producto\"></app-productos-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"actualizar\">No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"saveOrUpdate()\">OK</button>\n  <button mat-button (click)=\"saveOrUpdate()\" [mat-dialog-close]=\"actualizar\" >Guardar y Cerrar</button>\n  \n  <h4>Total agregados: {{totalAgregado}}</h4>  \n\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/productos.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_productos_form__ = __webpack_require__("../../../../../src/app/forms/productos.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ProductosDialog = (function () {
    function ProductosDialog(snackBar, data, route, location, _srvc, global) {
        this.snackBar = snackBar;
        this.route = route;
        this.location = location;
        this._srvc = _srvc;
        this.global = global;
        this.totalAgregado = 0;
        this.actualizar = false;
        this.producto = data.producto;
        this.isEditing = data.isEditing;
        this.producto$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    ProductosDialog.prototype.ngOnInit = function () {
    };
    ProductosDialog.prototype._findOne = function (id) {
        this._srvc.getById(id).subscribe(function (res) {
            //            this.producto = res;
        });
    };
    ProductosDialog.prototype._showSnack = function (message) {
        this.snackBar.open(message, "OK", { duration: this.global.duration.long });
    };
    ProductosDialog.prototype.saveOrUpdate = function ($event) {
        var _this = this;
        this._srvc.save(this.productosForm.value()).subscribe(function (res) {
            _this._showSnack(_this.global.messageSuccess.guardar);
            //            this._srvc.updateStock().subscribe(res => {
            //                console.log("Update Stock")
            //                console.log(res)
            //            });
            _this.actualizar = true;
            _this.totalAgregado++;
            _this.productosForm.reset();
        }, function (error) {
            _this._showSnack(_this.global.messageError.guardar + error.message);
            console.log("No Guardado");
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__forms_productos_form__["a" /* ProductosForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__forms_productos_form__["a" /* ProductosForm */])
    ], ProductosDialog.prototype, "productosForm", void 0);
    ProductosDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'productos-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/productos-dialog.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBar */], Object, __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__servicios_productos_service__["a" /* ProductosService */],
            __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* Globals */]])
    ], ProductosDialog);
    return ProductosDialog;
}());



/***/ }),

/***/ "../../../../../src/app/forms/detalle-venta.form.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<h5>Producto: {{selectedProducto.descripcion}}</h5>\n<h5>Stock: {{selectedProducto.totalStock}}</h5>\n<form [formGroup]=\"form\" novalidate>\n      \n      <mat-form-field>\n        \n        <input matInput placeholder=\"Código\" formControlName=\"producto\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\">\n          <mat-option *ngFor=\"let producto of producto$ | async\" [value]=\"producto\" >\n            {{ producto.codigo }}, {{producto.nombre}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Cantidad\" type=\"number\" autocomplete=\"off\"formControlName=\"cantidad\">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput placeholder=\"Precio\" readonly formControlName=\"precio\">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput placeholder=\"% Descuento\" type=\"number\" autocomplete=\"off\" formControlName=\"porcenDesc\">\n      </mat-form-field>\n\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/forms/detalle-venta.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleVentaForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelo_Producto__ = __webpack_require__("../../../../../src/app/modelo/Producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleVentaForm = (function () {
    function DetalleVentaForm(srvc) {
        this.srvc = srvc;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            producto: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            codigo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            nombre: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            descripcion: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            cantidad: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            precio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            porcenDesc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].max(40)]),
            porcenIva: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
        });
        this.idProductos = [];
        this.suscripciones = [];
        this.selectedProducto = new __WEBPACK_IMPORTED_MODULE_2__modelo_Producto__["a" /* Producto */]();
    }
    DetalleVentaForm.prototype.ngOnInit = function () {
        var _this = this;
        this.suscripciones.push(this.form.get("producto").valueChanges
            .pipe()
            .subscribe(function (res) {
            if (res && res.id) {
                _this.selectedProducto = res;
                _this._setProducto(res);
            }
            else {
                _this.producto$ = _this.srvc.search(res, _this.idProductos).pipe();
            }
        }));
    };
    DetalleVentaForm.prototype.ngOnDestroy = function () {
        for (var i = 0; i < this.suscripciones.length; i++)
            this.suscripciones[i].unsubscribe();
    };
    DetalleVentaForm.prototype.getValue = function () {
        console.log(this.form);
        return this.form.value;
    };
    DetalleVentaForm.prototype.displayWith = function (p) {
        return p ? p.codigo + ', ' + p.nombre : '';
    };
    DetalleVentaForm.prototype._setValoresForm = function (vd) {
        var edit = {
            id: vd.id,
            producto: vd.producto,
            codigo: vd.codigo,
            nombre: vd.nombre,
            descripcion: vd.descripcion,
            cantidad: vd.cantidad,
            precio: vd.precio,
            porcenDesc: vd.porcenDesc,
            porcenIva: vd.porcenIva
        };
        this.form.setValue(edit);
    };
    DetalleVentaForm.prototype._setProducto = function (p) {
        var evt = { emitEvent: false };
        this.form.get("nombre").setValue(p.nombre, evt);
        this.form.get("codigo").setValue(p.codigo, evt);
        this.form.get("descripcion").setValue(p.descripcion, evt);
        this.form.get("precio").setValue(p.precioVenta, evt);
        this.form.get("porcenIva").setValue(p.porcenIva, evt);
        this.form.get("porcenDesc").setValue(p.porcenDesc, evt);
    };
    DetalleVentaForm.prototype.edit = function (vd) {
        this._setValoresForm(vd);
    };
    DetalleVentaForm.prototype.reset = function () {
        this.form.reset();
        this.selectedProducto = new __WEBPACK_IMPORTED_MODULE_2__modelo_Producto__["a" /* Producto */]();
    };
    DetalleVentaForm.prototype.cantidadInvalid = function () {
        return !(this.selectedProducto.totalStock >= this.form.get("cantidad").value);
    };
    DetalleVentaForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'detalle-venta-form',
            template: __webpack_require__("../../../../../src/app/forms/detalle-venta.form.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */]]
            //    styleUrls: ['./../cliente-detail/cliente-detail.component.css'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */]])
    ], DetalleVentaForm);
    return DetalleVentaForm;
}());



/***/ }),

/***/ "../../../../../src/app/forms/productos.form.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<form [formGroup]=\"formProducto\" novalidate>\n    <mat-card-header color=\"primary\">\n       \n    </mat-card-header>\n    \n    <mat-card-content>\n        <div class=\"form-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Codigo\" autocomplete=\"off\" formControlName=\"codigo\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Nombre\" autocomplete=\"off\" formControlName=\"nombre\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Descripcion\" autocomplete=\"off\" formControlName=\"descripcion\">\n        </mat-form-field>\n        \n        \n        <mat-form-field>\n          <input matInput placeholder=\"Notas\" autocomplete=\"off\" formControlName=\"notas\">\n        </mat-form-field>\n        \n        <mat-checkbox #myCheckbox formControlName=\"activo\">Esta Activo?</mat-checkbox>\n        \n        <mat-form-field>\n            <input matInput placeholder=\"Precio Compra\" autocomplete=\"off\" type=\"number\" formControlName=\"precioCompra\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Porcentaje Ganancia\"  autocomplete=\"off\" type=\"number\" formControlName=\"porcenGan\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Precio Venta\" autocomplete=\"off\" type=\"number\" formControlName=\"precioVenta\">\n        </mat-form-field>\n        \n        <mat-form-field>\n            <mat-select placeholder=\"IVA\" formControlName=\"porcenIva\">\n                <mat-option *ngFor=\"let iva of ivas\" [value]=\"iva\">\n                    {{iva}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n        \n        <mat-form-field>\n            <input matInput placeholder=\"Stock Inicial\" autocomplete=\"off\" type=\"number\" formControlName=\"stockInicial\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Stock Minimo\" autocomplete=\"off\" type=\"number\" formControlName=\"stockMinimo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Stock PreOrden\" autocomplete=\"off\" type=\"number\" formControlName=\"stockPreOrden\">\n        </mat-form-field>\n    </div>\n        \n    </mat-card-content>\n</form>\n    \n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/forms/productos.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelo_Producto__ = __webpack_require__("../../../../../src/app/modelo/Producto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductosForm = (function () {
    function ProductosForm(fb) {
        this.fb = fb;
        this.isEditing = false;
        this.subscripciones = [];
        this.ivas = [0, 5, 10];
    }
    ProductosForm.prototype.ngOnInit = function () {
        this.createForm();
    };
    //Metodo para crear el formulario
    ProductosForm.prototype.createForm = function () {
        this.formProducto = this.fb.group({
            id: [this.producto.id],
            codigo: [this.producto.codigo, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            nombre: [this.producto.nombre, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            descripcion: [this.producto.descripcion],
            notas: [this.producto.notas],
            activo: [this.producto.activo],
            precioCompra: [this.producto.precioCompra],
            porcenGan: [this.producto.porcenGan],
            precioVenta: [this.producto.precioVenta],
            porcenIva: [this.producto.porcenIva],
            stockInicial: [this.producto.stockInicial],
            stockMinimo: [this.producto.stockMinimo],
            stockPreOrden: [this.producto.stockPreOrden],
        });
        this.setListeners();
    };
    ProductosForm.prototype.setListeners = function () {
        var _this = this;
        //Setear los listeners
        this.subscripciones.push(this.formProducto.get('precioCompra').valueChanges.subscribe(function (data) {
            var porcenGan = _this.formProducto.get('porcenGan').value;
            if (porcenGan != null) {
                var precioVenta = data * (1 + porcenGan / 100.0);
                _this.formProducto.get('precioVenta').setValue(precioVenta, { emitEvent: false });
            }
        }));
        this.subscripciones.push(this.formProducto.get('precioVenta').valueChanges.subscribe(function (data) {
            var precioCompra = _this.formProducto.get('precioCompra').value;
            if (precioCompra != null) {
                var porcenGan = (data - precioCompra) * 100 / precioCompra;
                _this.formProducto.get('porcenGan').setValue(porcenGan, { emitEvent: false });
            }
        }));
        this.subscripciones.push(this.formProducto.get('porcenGan').valueChanges.subscribe(function (data) {
            var precioCompra = _this.formProducto.get('precioCompra').value;
            if (precioCompra != null) {
                var precioVenta = precioCompra * (1 + data / 100.0);
                _this.formProducto.get('precioVenta').setValue(precioVenta, { emitEvent: false });
            }
        }));
    };
    ProductosForm.prototype.value = function () {
        return this.formProducto.value;
    };
    ProductosForm.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    ProductosForm.prototype.reset = function () {
        this.formProducto.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modelo_Producto__["a" /* Producto */])
    ], ProductosForm.prototype, "producto", void 0);
    ProductosForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productos-form',
            template: __webpack_require__("../../../../../src/app/forms/productos.form.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ProductosForm);
    return ProductosForm;
}());



/***/ }),

/***/ "../../../../../src/app/forms/ventas.form.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n\n<h5>\nCliente: {{selectedCliente.nombre}}\n</h5> \n<h5> \nCliente RUC: {{selectedCliente.ruc}}\n</h5> \n\n<form [formGroup]=\"form\" novalidate>\n    <mat-form-field>\n        <input matInput placeholder=\"Cliente\" formControlName=\"cliente\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\">\n            <mat-option *ngFor=\"let cliente of clientes | async\" [value]=\"cliente\" >\n                {{ cliente.nombre }}, {{cliente.apellido}}\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n\n<mat-form-field>\n    <input matInput placeholder=\"Vendedor\" formControlName=\"vendedor\">\n</mat-form-field>\n<mat-radio-group formControlName=\"condicionVenta\">\n        <mat-radio-button value=\"contado\">Contado</mat-radio-button>\n        <mat-radio-button value=\"credito\">Credito</mat-radio-button>\n</mat-radio-group>\n    \n\n    \n<mat-form-field>\n        <mat-select placeholder=\"Tipo Doc\" formControlName=\"tipoDocumento\">\n            <mat-option *ngFor=\"let tipoDoc of tipoDocumentos\" [value]=\"tipoDoc\">\n                {{tipoDoc}}\n        </mat-option>\n    </mat-select>\n</mat-form-field>    \n    \n<mat-form-field>\n    <input matInput placeholder=\"Numero Documento\" autocomplete=\"off\" formControlName=\"numeroDocumento\">\n</mat-form-field>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"myDatepicker\" autocomplete=\"off\" placeholder=\"Fecha Venta\" formControlName=\"fechaVenta\">\n           <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n    <mat-datepicker #myDatepicker></mat-datepicker>\n</mat-form-field>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/ventas.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_cliente__ = __webpack_require__("../../../../../src/app/modelo/cliente.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VentasForm = (function () {
    function VentasForm(service, global) {
        this.service = service;
        this.global = global;
        this.selectedCliente = new __WEBPACK_IMPORTED_MODULE_3__modelo_cliente__["a" /* Cliente */]();
        this.tipoDocumentos = ['Factura', 'Presupuesto', 'Recibo', 'Remision'];
        this.estados = ['Pendiente', 'Pagado', 'Anulado'];
        this.subscripciones = [];
    }
    VentasForm.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.subscripciones.push(this.form.get("cliente").valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_debounceTime__["a" /* debounceTime */])(this.global.duration.short))
            .subscribe(function (res) {
            if (res && res.id) {
                _this.selectedCliente = res;
            }
            else {
                _this.clientes = _this.service.findAll(res).pipe();
            }
        }));
    };
    VentasForm.prototype.getValue = function () {
        return this.form.value;
    };
    VentasForm.prototype.displayWith = function (cliente) {
        return cliente ? cliente.nombre + ', ' + cliente.apellido : '';
    };
    VentasForm.prototype.createForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            cliente: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            condicionVenta: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            vendedor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            //            estado:   new FormControl(null, Validators.required),
            //Tipo documento Recibo Factura, Nota Credito
            tipoDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Factura'),
            numeroDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            fechaVenta: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
        });
    };
    VentasForm.prototype.reset = function () {
        this.form.reset();
    };
    VentasForm.prototype.setValues = function (data) {
        var value = {
            id: data.id,
            cliente: data.cliente,
            condicionVenta: data.condicionVenta,
            vendedor: data.vendedor,
            tipoDocumento: data.tipoDocumento,
            numeroDocumento: data.numeroDocumento,
            fechaVenta: data.fechaVenta,
        };
        this.form.setValue(value);
    };
    VentasForm.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    VentasForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ventas-form',
            template: __webpack_require__("../../../../../src/app/forms/ventas.form.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */]]
            //    styleUrls: ['./../cliente-detail/cliente-detail.component.css'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__servicios_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */]])
    ], VentasForm);
    return VentasForm;
}());



/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.messageSuccess = {
            guardar: "Guardado Con Exito!!!",
            editar: "Editado Con Exito!!!",
            elimiar: "Eliminado/s Con Exito!!!"
        };
        this.messageError = {
            guardar: "No se pudo guardar, verifique los datos del formulario, \n\
                Información adicional: ",
            editar: "No se pudo editar, verifique los datos del formulario, \n\
                Información adicional: ",
            elimiar: "No se pudo eliminar, verifique los datos del formulario, \n\
                Información adicional: ",
        };
        this.duration = {
            short: 700,
            medium: 1500,
            long: 3000,
        };
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/PageableResponse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageableResponse */
/* harmony export (immutable) */ __webpack_exports__["a"] = PageableRequestOptions;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var PageableResponse = (function () {
    function PageableResponse() {
    }
    return PageableResponse;
}());

function PageableRequestOptions(page, sort) {
    var options = {};
    if (page) {
        options = {
            params: {
                size: page.pageSize,
                page: page.pageIndex,
            }
        };
    }
    if (typeof sort !== "undefined" && sort.active) {
        options['params']['sort'] = sort.active + ',' + sort.direction;
    }
    return options;
}


/***/ }),

/***/ "../../../../../src/app/modelo/Compra.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CompraDetalle; });
var Compra = (function () {
    function Compra() {
        this.totalExentas = 0.0;
        this.totalIva5 = 0.0;
        this.totalIva10 = 0.0;
        this.totalGeneral = 0.0;
        this.totalDesc = 0;
    }
    return Compra;
}());

var CompraDetalle = (function () {
    function CompraDetalle() {
    }
    return CompraDetalle;
}());



/***/ }),

/***/ "../../../../../src/app/modelo/Producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
/**
 * Clase que representa un producto de la base de datos
 */
var Producto = (function () {
    function Producto() {
        this.porcenDesc = 0;
        //Stock
        this.stockInicial = 0.0;
        this.stockMinimo = 0.0;
        this.stockPreOrden = 0.0;
        //calculados
        this.totalIngreso = 0.0;
        this.totalSalida = 0.0;
        this.totalStock = 0.0;
    }
    return Producto;
}());



/***/ }),

/***/ "../../../../../src/app/modelo/cliente.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* unused harmony export Tipo */
/* unused harmony export Direccion */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Cliente = (function () {
    function Cliente() {
        this.tipo = new Tipo();
    }
    return Cliente;
}());

var Tipo = (function () {
    function Tipo() {
    }
    return Tipo;
}());

var Direccion = (function () {
    function Direccion() {
    }
    return Direccion;
}());



/***/ }),

/***/ "../../../../../src/app/productos-detail/productos-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productos-detail/productos-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form >\n    <mat-card-header color=\"primary\">\n      Agregar Producto desde archivos CSV\n      <label for=\"uploadFile\" class=\"upload-file\">\n           {{ archivoNombre }}\n     </label>\n      <!-- <div *ngif=showMessage > {{ mensaje }}</div> -->\n    </mat-card-header>\n    \n    <mat-card-content>\n        \n            \n          \n\n          <label for=\"uploadFile\" class=\"upload-file\">\n            Subir archivo\n         </label>\n         <input type=\"file\"\n                id=\"uploadFile\"\n                class=\"hidden-input\"\n                (change)=\"handleFileInput($event.target.files[0])\">\n\n                <mat-card-actions>\n                  <button mat-button (click)=back()>Volver</button>\n                  <button mat-button (click)=sentToServer()>Guardar</button>\n                  \n                </mat-card-actions>\n\n    </mat-card-content>\n  </form>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/productos-detail/productos-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Servicios

var ProductosDetailComponent = (function () {
    function ProductosDetailComponent(service, fb, location) {
        this.service = service;
        this.fb = fb;
        this.location = location;
        this.archivoNombre = "Nada Seleccionado";
    }
    ProductosDetailComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ProductosDetailComponent.prototype.subirImagen = function (imagen) { };
    ProductosDetailComponent.prototype.createForm = function () {
    };
    ProductosDetailComponent.prototype.handleFileInput = function (file) {
        console.log("Archivo: ");
        console.log(file);
        this.fileToUpload = file;
        this.archivoNombre = this.fileToUpload.name;
    };
    ProductosDetailComponent.prototype.back = function () {
        this.location.back();
    };
    /**
     * Enviar al servidor
     */
    ProductosDetailComponent.prototype.sentToServer = function () {
        console.log("Enviando al servidor");
        this.service.postFile(this.fileToUpload).subscribe(function (resp) {
            console.log(resp);
        }, function (error) {
            console.log("Error: ");
            console.log(error);
        });
    };
    ProductosDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-productos-detail',
            template: __webpack_require__("../../../../../src/app/productos-detail/productos-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productos-detail/productos-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], ProductosDetailComponent);
    return ProductosDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productos/productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showMessage\" > {{ mensaje }}</div> \n\n<div>\n    <mat-table #productos [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> \n              <mat-checkbox #myCheckbox \n                  (change)=\"aBorrar($event, item.id)\"\n                  [checked]=\"exists(item.id)\"\n                 > {{item.id}} </mat-checkbox>\n            </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"codigo\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Codigo </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.codigo}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"nombre\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.nombre}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"descripcion\">\n            <mat-header-cell *matHeaderCellDef  mat-sort-header> Descripcion </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.descripcion}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"precioVenta\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Precio </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.precioVenta}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"stockInicial\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Stock Inicial</mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.stockInicial}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"totalIngreso\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Total Ingreso</mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.totalIngreso}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"totalSalida\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Total Salida</mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.totalSalida}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"totalStock\" >\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Total Stock</mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{item.totalStock}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"iva\">\n            <mat-header-cell *matHeaderCellDef>% I.V.A</mat-header-cell>\n            <mat-cell *matCellDef=\"let item\"> {{ item.porcenIva }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"acciones\">\n            <mat-header-cell *matHeaderCellDef> acciones </mat-header-cell>\n            <mat-cell *matCellDef=\"let item\">\n                <a mat-button (click)=\"edit(item.id)\">Editar </a>\n            </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\n    </mat-table>\n    <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n    </mat-paginator>\n    <button mat-raised-button (click)=\"borrar()\"  color=\"warn\" [disabled]=\"borrarDisabled\">Borrar ({{ ids.length }})</button>\n    <button mat-raised-button color=\"primary\" (click)=\"nuevo()\" >Nuevo</button>\n    <button mat-button routerLink=\"/productos/varios\">Desde Archivo</button>\n    <button mat-button>Editar</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_Producto__ = __webpack_require__("../../../../../src/app/modelo/Producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_borrar_dialog__ = __webpack_require__("../../../../../src/app/dialog/borrar.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_productos_dialog__ = __webpack_require__("../../../../../src/app/dialog/productos.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_PageableResponse__ = __webpack_require__("../../../../../src/app/helpers/PageableResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductosComponent = (function () {
    function ProductosComponent(snackBar, _srvc, dialog, global) {
        this.snackBar = snackBar;
        this._srvc = _srvc;
        this.dialog = dialog;
        this.global = global;
        this.displayedColumns = ['id', 'codigo', 'nombre', 'descripcion', 'precioVenta', 'iva', 'stockInicial', 'totalIngreso', 'totalSalida', 'totalStock', 'acciones'];
        this.ids = [];
        this.borrarDisabled = true;
        this.message = "No se puede eliminar Productos que tienen Registros asociados en compras o ventas";
        this.showMessage = false;
        this.subscripciones = [];
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    // }
    ProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildMaterialTable();
        this._cargarTabla();
        this.subscripciones.push(this.sort.sortChange.subscribe(this.paginator.firstPage()));
        //suscribir a los dos cambios
        var merged$ = this.paginator.page.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* merge */])(this.sort.sortChange));
        this.subscripciones.push(merged$.subscribe(function (ev) {
            return _this._cargarTabla(_this.paginator, _this.sort);
        }));
    };
    ProductosComponent.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    /**
     * Retorna la lista de productos desde el servidor
     */
    ProductosComponent.prototype._cargarTabla = function (page, sort) {
        var _this = this;
        var options = Object(__WEBPACK_IMPORTED_MODULE_7__helpers_PageableResponse__["a" /* PageableRequestOptions */])(page, sort);
        return this._srvc.getAll(options).subscribe(function (data) {
            _this.dataSource.data = data.content;
            _this.paginator.length = data.totalElements;
            _this.paginator.pageSize = data.size;
            _this.paginator.pageIndex = data.number;
        });
    };
    //Agregado el 2019-01-24
    ProductosComponent.prototype.aBorrar = function (evt, id) {
        if (evt.checked) {
            this.ids.push(id);
        }
        else {
            // Item to remove
            this.ids = this.ids.filter(function (obj) { return obj !== id; });
        }
        this.borrarDisabled = !(this.ids.length > 0);
    };
    ProductosComponent.prototype.borrar = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialog_borrar_dialog__["a" /* BorrarDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this._srvc.delete(_this.ids).subscribe(function (res) {
                    //falta mejorar para cumplir con el paginado y ordenado
                    _this.dataSource.data = res;
                    _this.ids = [];
                    _this.borrarDisabled = true;
                }, function (error) {
                    _this.showSnack(_this.message + error.message);
                    //Que hacer marcar todos los tildados o no
                });
            }
        });
    };
    ProductosComponent.prototype.buildMaterialTable = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTableDataSource */]();
    };
    ProductosComponent.prototype.showSnack = function (message) {
        this.snackBar.open(message, "OK", { duration: 3000 });
    };
    ProductosComponent.prototype.nuevo = function () {
        var dialogData = { data: { producto: new __WEBPACK_IMPORTED_MODULE_4__modelo_Producto__["a" /* Producto */](), isEditing: false }, width: '60%' };
        this._openDialog(dialogData);
    };
    ProductosComponent.prototype.edit = function (id) {
        var producto;
        for (var i = 0; i < this.dataSource.data.length; i++) {
            if (this.dataSource.data[i].id === id) {
                producto = this.dataSource.data[i];
                break;
            }
        }
        var dialogData = { data: { producto: producto, isEditing: true }, width: '60%' };
        this._openDialog(dialogData);
    };
    ProductosComponent.prototype._openDialog = function (dialogData) {
        var _this = this;
        var mensajeOK, mensajeNoOK;
        if (dialogData.data.isEditing) {
            mensajeOK = this.global.messageSuccess.editar;
            mensajeNoOK = this.global.messageError.editar;
        }
        else {
            mensajeOK = this.global.messageSuccess.guardar;
            mensajeNoOK = this.global.messageError.guardar;
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialog_productos_dialog__["a" /* ProductosDialog */], dialogData);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this._srvc.updateStock().subscribe(function (res) {
                    _this._cargarTabla();
                });
            }
            ;
        }, function (error) {
            _this.showSnack(mensajeNoOK + error.message);
        });
    };
    ProductosComponent.prototype.exists = function (item) {
        return this.ids.indexOf(item) > -1;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */])
    ], ProductosComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSort */])
    ], ProductosComponent.prototype, "sort", void 0);
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productos',
            template: __webpack_require__("../../../../../src/app/productos/productos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productos/productos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_8__globals__["a" /* Globals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_productos_service__["a" /* ProductosService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_8__globals__["a" /* Globals */]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/CompraProductoService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraProductoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compras_service__ = __webpack_require__("../../../../../src/app/servicios/compras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_service__ = __webpack_require__("../../../../../src/app/servicios/productos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompraProductoService = (function () {
    function CompraProductoService(compraSrvc, productoSrvc) {
        this.compraSrvc = compraSrvc;
        this.productoSrvc = productoSrvc;
    }
    CompraProductoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__compras_service__["a" /* ComprasService */], __WEBPACK_IMPORTED_MODULE_2__productos_service__["a" /* ProductosService */]])
    ], CompraProductoService);
    return CompraProductoService;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/clientes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesService = (function () {
    function ClientesService(location, http) {
        this.location = location;
        this.http = http;
        this.clientesUrl = 'api/clientes';
        this.delteUrl = this.clientesUrl + '/delete';
        this.query = '/search?search=';
        this.ruc = this.clientesUrl + '/ruc';
        this.tiposUrl = this.clientesUrl + '/tipos';
        this.exportar = this.clientesUrl + '/exportar';
    }
    ClientesService.prototype.getAll = function () {
        // return of(CLIENTES);
        return this.http.get(this.clientesUrl);
    };
    ClientesService.prototype.findAll = function (search) {
        // return of(CLIENTES);
        return this.http.get(this.clientesUrl + this.query + search);
    };
    ClientesService.prototype.getAllTipos = function () {
        return this.http.get(this.tiposUrl);
    };
    ClientesService.prototype.getOne = function (id) {
        return this.http.get(this.clientesUrl + '/' + id);
    };
    ClientesService.prototype.saveOrUpdate = function (item) {
        return this.http.post(this.clientesUrl, item);
    };
    ClientesService.prototype.delete = function (ids) {
        return this.http.post(this.delteUrl, ids);
    };
    /**
     * Traer el archivo desde el servidor
     * Paso dos filtrar por IDS
     */
    ClientesService.prototype.getFile = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'Application/json; charset=UTF-8'
            }),
            responseType: 'text'
        };
        return this.http.get(this.exportar, httpOptions);
    };
    //Traer por ejemplos
    ClientesService.prototype.findByRuc = function (ruc) {
        return this.http.get(this.ruc + '?ruc=' + ruc);
    };
    ClientesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ClientesService);
    return ClientesService;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/compras.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComprasService = (function () {
    function ComprasService(http) {
        this.http = http;
        this.urls = {
            compraUrl: 'api/compras',
            compraDetalleUrl: 'api/compraDetalles'
        };
    }
    ComprasService.prototype.getAll = function () {
        // return of(CLIENTES);
        return this.http.get(this.urls.compraUrl);
    };
    ComprasService.prototype.save = function (compra) {
        return this.http.post(this.urls.compraUrl + '/save', compra);
    };
    ComprasService.prototype.getById = function (id) {
        return this.http.get(this.urls.compraUrl + '/' + id);
    };
    ComprasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
        //
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ComprasService);
    return ComprasService;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/productos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosService = (function () {
    function ProductosService(http) {
        this.http = http;
        this.urls = {
            productosUrl: 'api/productos',
            productosUpdate: 'api/productos/updateStock',
            productosDeleteUrl: 'api/productos/delete',
            productosSearchUrl: 'api/productos/search'
        };
    }
    /**
     * Retorna la lista de productos desde el servidor
     */
    ProductosService.prototype.getAll = function (options) {
        return this.http.get(this.urls.productosUrl, options);
    };
    /**
     * Retorna la lista de compras
     */
    ProductosService.prototype.search = function (search, ids) {
        // return of(CLIENTES);
        var options = {
            params: {
                'search': search,
                'ids': ids,
            }
        };
        return this.http.get(this.urls.productosSearchUrl, options);
    };
    /**
     * Enviar archivos al servidor
     */
    ProductosService.prototype.postFile = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.urls.productosUrl + '/upload', formData);
    };
    /**
     * Guardar Producto
     */
    ProductosService.prototype.save = function (prod) {
        return this.http.post(this.urls.productosUrl, prod);
    };
    ProductosService.prototype.getById = function (id) {
        return this.http.get(this.urls.productosUrl + '/' + id);
    };
    ProductosService.prototype.delete = function (ids) {
        return this.http.post(this.urls.productosDeleteUrl, ids);
    };
    //actualizar el stock
    ProductosService.prototype.updateStock = function () {
        return this.http.post(this.urls.productosUpdate, {});
    };
    ProductosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/uploads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadsService = (function () {
    function UploadsService(http) {
        this.http = http;
        this.apiUrl = 'api/uploads';
    }
    /**
     * Enviar archivos al servidor
     */
    UploadsService.prototype.postClienteFile = function (file, url) {
        //Averiguar desde donde esta siendo invocado
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.apiUrl + url, formData);
    };
    UploadsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadsService);
    return UploadsService;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/ventas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VentaImpl = (function () {
    function VentaImpl() {
        this.totalDesc = 0;
        this.ventaDetalles = [];
        this.totalExentas = 0;
        this.totalIva5 = 0;
        this.totalIva10 = 0;
        this.totalGeneral = 0;
    }
    return VentaImpl;
}());
var VentaDetalleImpl = (function () {
    function VentaDetalleImpl() {
        this.cantidad = 0;
        this.precio = 0;
        this.porcenDesc = 0;
        this.montoDesc = 0;
        this.porcenIva = 0;
        this.montoIva = 0;
        this.subTotal = 0;
    }
    return VentaDetalleImpl;
}());
var VentasService = (function () {
    function VentasService(clienteService, http) {
        this.clienteService = clienteService;
        this.http = http;
        this._url = { venta: 'api/ventas', anular: 'api/ventas/anular' };
    }
    VentasService.prototype.getAllClientes = function () {
        return this.clienteService.getAll();
    };
    VentasService.prototype.findAllClientes = function (search) {
        return this.clienteService.findAll(search);
    };
    VentasService.prototype.getClienteSrvc = function () {
        return this.clienteService;
    };
    VentasService.prototype.newVenta = function () {
        return new VentaImpl();
    };
    VentasService.prototype.newVentaDetalle = function () {
        return new VentaDetalleImpl();
    };
    /**
     * Guardar una venta
     */
    VentasService.prototype.save = function (v) {
        return this.http.post(this._url.venta, v);
    };
    VentasService.prototype.anular = function (ids) {
        return this.http.post(this._url.anular, ids);
    };
    /**
     * Consultar todos los registros
     */
    VentasService.prototype.getAll = function () {
        return this.http.get(this._url.venta);
    };
    VentasService.prototype.getById = function (id) {
        return this.http.get(this._url.venta + '/' + id);
    };
    VentasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VentasService);
    return VentasService;
}());



/***/ }),

/***/ "../../../../../src/app/totales/total-general.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<mat-grid-list cols=\"4\" rowHeight=\"50px\">\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > Exentas   {{ impositivo.totalExentas | currency }}</mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > IVA 5     {{ impositivo.totalIva5 | currency}}</mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > IVA 10    {{ impositivo.totalIva10 | currency}} </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\" > <h4>Total General {{ impositivo.totalGeneral | currency}}</h4></mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > IVA 5     {{ iva5 | currency}}</mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > IVA 10    {{ iva10 | currency}}</mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" > TOTAL IVA {{ iva5 + iva10| currency }}</mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/totales/total-general.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalGeneral; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalGeneral = (function () {
    function TotalGeneral() {
        this.iva5 = 0;
        this.iva10 = 0;
        this.subscripciones = [];
        this.impositivo = { totalExentas: 0, totalIva5: 0, totalIva10: 0, totalGeneral: 0, totalDesc: 0 };
    }
    TotalGeneral.prototype.ngOnInit = function () {
        var _this = this;
        this.subscripciones.push(this.impositivo$.subscribe(function (data) {
            console.log("Impositivo: ");
            console.log(data);
            _this.impositivo = data;
            _this.iva5 = data.totalIva5 / 21;
            _this.iva10 = data.totalIva10 / 11;
        }));
    };
    TotalGeneral.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], TotalGeneral.prototype, "impositivo$", void 0);
    TotalGeneral = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'total-general',
            template: __webpack_require__("../../../../../src/app/totales/total-general.html")
        }),
        __metadata("design:paramtypes", [])
    ], TotalGeneral);
    return TotalGeneral;
}());



/***/ }),

/***/ "../../../../../src/app/uploads/uploads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uploads/uploads.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form >\n    <mat-card-header color=\"primary\">\n      Agregar Producto desde archivos CSV\n      <label for=\"uploadFile\" class=\"upload-file\">\n           {{ archivoNombre }}\n     </label>\n      <!-- <div *ngif=showMessage > {{ mensaje }}</div> -->\n    </mat-card-header>\n    \n    <mat-card-content>\n        \n            \n          \n\n          <label for=\"uploadFile\" class=\"upload-file\">\n            Subir archivo\n         </label>\n         <input type=\"file\"\n                id=\"uploadFile\"\n                class=\"hidden-input\"\n                (change)=\"handleFileInput($event.target.files[0])\">\n\n                <mat-card-actions>\n                  <button mat-button (click)=back()>Volver</button>\n                  <button mat-button (click)=sentToServer()>Guardar</button>\n                  \n                </mat-card-actions>\n\n    </mat-card-content>\n  </form>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/uploads/uploads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_uploads_service__ = __webpack_require__("../../../../../src/app/servicios/uploads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadsComponent = (function () {
    function UploadsComponent(service, location) {
        this.service = service;
        this.location = location;
        this.archivoNombre = "Nada Seleccionado";
    }
    UploadsComponent.prototype.ngOnInit = function () {
    };
    UploadsComponent.prototype.handleFileInput = function (file) {
        this.fileToUpload = file;
        this.archivoNombre = this.fileToUpload.name;
    };
    UploadsComponent.prototype.sentToServer = function () {
        console.log("Enviando al servidor!!!");
        this.service.postClienteFile(this.fileToUpload, "/clientes").subscribe(function (resp) {
            console.log(resp);
        }, function (error) {
            console.log("Error: ");
            console.log(error);
        });
    };
    UploadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-uploads',
            template: __webpack_require__("../../../../../src/app/uploads/uploads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/uploads/uploads.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_uploads_service__["a" /* UploadsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_uploads_service__["a" /* UploadsService */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]])
    ], UploadsComponent);
    return UploadsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ventas/tabla-venta-detalles.html":
/***/ (function(module, exports) {

module.exports = "<div>\n      <mat-table #compraDetalles [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> id </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.id}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"codigo\">\n          <mat-header-cell *matHeaderCellDef> codigo </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.codigo}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"nombre\">\n          <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.nombre}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"cantidad\">\n          <mat-header-cell *matHeaderCellDef> Cantidad </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.cantidad}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"precio\">\n          <mat-header-cell *matHeaderCellDef> Precio </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.precio| currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"porcenDesc\">\n          <mat-header-cell *matHeaderCellDef>% Descuento</mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.porcenDesc | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"porcenIva\">\n          <mat-header-cell *matHeaderCellDef>IVA</mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.porcenIva}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"excentas\">\n          <mat-header-cell *matHeaderCellDef> Excentas </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\" > {{ !!item.porcenIva==0?item.subTotal:0 | currency }} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"iva5\">\n          <mat-header-cell *matHeaderCellDef> IVA 5 </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{ (item.porcenIva==5)?item.subTotal+item.montoIva:0 | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"iva10\">\n          <mat-header-cell *matHeaderCellDef> IVA 10 </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{ (item.porcenIva==10)?item.subTotal+item.montoIva:0  | currency}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"montoDesc\">\n          <mat-header-cell *matHeaderCellDef> Monto Desc. </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\"> {{item.montoDesc | currency }} </mat-cell>\n        </ng-container>\n       \n        <ng-container matColumnDef=\"acciones\">\n          <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n          <mat-cell *matCellDef=\"let item\">\n            <a mat-button (click)=\"edit(item)\"> Editar </a>\n            <a mat-button (click)=\"borrar(item)\"> Borrar </a>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/ventas/tabla-venta-detalles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablaVentaDetalles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablaVentaDetalles = (function () {
    function TablaVentaDetalles() {
        this.displayedColumns = [
            'nombre', 'codigo', 'cantidad',
            'precio', 'excentas', 'iva5', 'iva10', 'montoDesc', 'acciones'
        ];
        this.subscripciones = [];
        this.detalles = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBorrar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TablaVentaDetalles.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTableDataSource */]();
        console.log("TablaVentaDetalles: OnInit");
        this.subscripciones.push(this.detalles.subscribe(function (data) {
            _this.dataSource.data = data;
        }));
    };
    TablaVentaDetalles.prototype.ngOnDestroy = function () {
        this.subscripciones.forEach(function (i) { i.unsubscribe(); });
    };
    TablaVentaDetalles.prototype.edit = function (item) {
        this.onSelect.emit(item);
    };
    TablaVentaDetalles.prototype.borrar = function (item) {
        this.onBorrar.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], TablaVentaDetalles.prototype, "detalles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TablaVentaDetalles.prototype, "onBorrar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TablaVentaDetalles.prototype, "onSelect", void 0);
    TablaVentaDetalles = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabla-venta-detalles',
            template: __webpack_require__("../../../../../src/app/ventas/tabla-venta-detalles.html"),
            styles: [__webpack_require__("../../../../../src/app/ventas/ventas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablaVentaDetalles);
    return TablaVentaDetalles;
}());



/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\r\n    margin: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n    \n    <ventas-form></ventas-form>\n</mat-card>\n\n<mat-card>\n\n\n    <detalle-venta-form></detalle-venta-form>\n\n    <mat-card-actions>\n        <button mat-raised-button [disabled]=\"detalleInvalido()\" (click)=\"agregarDetalle()\">Agregar</button>\n    </mat-card-actions>\n</mat-card>\n\n\n\n<mat-card>\n    <tabla-venta-detalles (onSelect)=\"editar($event)\" (onBorrar)=\"borrar($event)\" [detalles]=\"getVentaDetalles$()\"></tabla-venta-detalles>\n</mat-card>\n<mat-card>\n\n    <total-general [impositivo$]=\"getImpositivo$()\"></total-general>\n\n\n</mat-card> \n\n<mat-card>\n    <mat-card-actions>\n        <button mat-raised-button routerLink=\"/ventas\" >Volver</button>\n        <button mat-raised-button color=\"primary\" [disabled]=\"facturaInvalida()\" (click)=\"guardar()\">Guardar</button>\n    </mat-card-actions>\n</mat-card>    \n\n"

/***/ }),

/***/ "../../../../../src/app/ventas/ventas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_ventas_form__ = __webpack_require__("../../../../../src/app/forms/ventas.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_detalle_venta_form__ = __webpack_require__("../../../../../src/app/forms/detalle-venta.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_ventas_service__ = __webpack_require__("../../../../../src/app/servicios/ventas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VentasComponent = (function () {
    function VentasComponent(_srvc, sb, global, route, location) {
        this._srvc = _srvc;
        this.sb = sb;
        this.global = global;
        this.route = route;
        this.location = location;
        this.isEditing = false;
        this.venta$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.ventaDetalles$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.venta = this._srvc.newVenta();
    }
    VentasComponent.prototype.ngOnInit = function () {
        //determinar si esta editando o esta creando
        if (this.location.path() != "/ventas/new") {
            //esta editando
            var id = +this.route.snapshot.paramMap.get('id');
            this.getById(id);
            //desabilitar botones guardar!!!
        }
    };
    VentasComponent.prototype.getById = function (id) {
        var _this = this;
        this._srvc.getById(id).subscribe(function (res) {
            _this.venta = res;
            _this.form.setValues(res);
            _this.venta$.next(_this.venta);
            _this.ventaDetalles$.next(_this.venta.ventaDetalles);
            _this.isEditing = true;
        });
    };
    VentasComponent.prototype.onClick = function () {
    };
    VentasComponent.prototype.getImpositivo$ = function () {
        return this.venta$.asObservable();
    };
    VentasComponent.prototype.agregarDetalle = function () {
        var det = this.formDetalle.getValue();
        this._calcularSubTotal(det);
        this._agregarDetalle(det);
        this.formDetalle.reset();
    };
    VentasComponent.prototype._calcularSubTotal = function (det) {
        if (det.porcenDesc) {
            det.montoDesc = det.cantidad * det.precio * det.porcenDesc / 100;
            det.subTotal = det.cantidad * det.precio - det.montoDesc;
        }
        else {
            det.subTotal = det.cantidad * det.precio;
            det.montoDesc = 0;
        }
        det.montoIva = det.subTotal * det.porcenIva / 100;
        return det;
    };
    VentasComponent.prototype._agregarDetalle = function (det) {
        switch (det.porcenIva) {
            case 0:
                this.venta.totalExentas += det.subTotal;
                break;
            case 5:
                this.venta.totalIva5 += det.subTotal + det.montoIva;
                break;
            case 10:
                this.venta.totalIva10 += det.subTotal + det.montoIva;
                break;
        }
        this.venta.totalDesc += det.montoDesc;
        this.venta.totalGeneral = this.venta.totalExentas +
            this.venta.totalIva5 + this.venta.totalIva10;
        this.venta.ventaDetalles.push(det);
        this.venta$.next(this.venta);
        this.ventaDetalles$.next(this.venta.ventaDetalles);
    };
    VentasComponent.prototype._removerDetalle = function (det) {
        var detalles = this.venta.ventaDetalles;
        if (detalles.includes(det)) {
            detalles.splice(detalles.indexOf(det), 1);
            //            this.idProductos.splice(
            //                this.idProductos.indexOf(det.producto.id.toString()),1
            //            );
            this.venta.ventaDetalles = detalles;
        }
        switch (det.porcenIva) {
            case 0:
                this.venta.totalExentas -= det.subTotal;
                break;
            case 5:
                this.venta.totalIva5 -= det.subTotal + det.montoIva;
                break;
            case 10:
                this.venta.totalIva10 -= det.subTotal + det.montoIva;
                break;
        }
        this.venta.totalDesc -= det.montoDesc;
        this.venta.totalGeneral = this.venta.totalExentas +
            this.venta.totalIva5 + this.venta.totalIva10;
        this.venta$.next(this.venta);
        this.ventaDetalles$.next(this.venta.ventaDetalles);
    };
    VentasComponent.prototype.getVentaDetalles$ = function () {
        return this.ventaDetalles$.asObservable();
    };
    VentasComponent.prototype.borrar = function (item) {
        this._removerDetalle(item);
    };
    VentasComponent.prototype.editar = function (item) {
        this.formDetalle.edit(item);
        this._removerDetalle(item);
    };
    VentasComponent.prototype.guardar = function () {
        var _this = this;
        var detalles = this.venta.ventaDetalles;
        this.venta = this.form.getValue();
        this.venta.ventaDetalles = detalles;
        this._srvc.save(this.venta).subscribe(function (res) { _this._showMsg(true); }, function (res) { _this._showMsg(false, res.error.message); });
    };
    VentasComponent.prototype._showMsg = function (success, msg) {
        if (success) {
            this.sb.open(this.global.messageSuccess.guardar, "", { duration: this.global.duration.long });
        }
        else {
            this.sb.open(this.global.messageError.guardar + msg, "", { duration: this.global.duration.medium });
        }
    };
    VentasComponent.prototype.detalleInvalido = function () {
        return this.formDetalle.form.invalid || this.formDetalle.cantidadInvalid();
    };
    VentasComponent.prototype.facturaInvalida = function () {
        return this.form.form.invalid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__forms_ventas_form__["a" /* VentasForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__forms_ventas_form__["a" /* VentasForm */])
    ], VentasComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__forms_detalle_venta_form__["a" /* DetalleVentaForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__forms_detalle_venta_form__["a" /* DetalleVentaForm */])
    ], VentasComponent.prototype, "formDetalle", void 0);
    VentasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ventas',
            template: __webpack_require__("../../../../../src/app/ventas/ventas.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_7__servicios_ventas_service__["a" /* VentasService */], __WEBPACK_IMPORTED_MODULE_8__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_9__globals__["a" /* Globals */]],
            styles: [__webpack_require__("../../../../../src/app/ventas/ventas.component.css")]
        })
        /**
         * En la version V0.1 se permite agregar valores duplicados de productos
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__servicios_ventas_service__["a" /* VentasService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_9__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], VentasComponent);
    return VentasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ventas/ventas.list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n        <mat-table #ventas [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> id </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">  \n                    <mat-checkbox #myCheckbox (change)=\"aAnular($event, item.id)\" > {{item.id}} </mat-checkbox>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"condicionVenta\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> condicionVenta </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\" > {{item.condicionVenta}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"cliente\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> cliente </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{item.cliente.nombre }}, {{item.cliente.ruc }}  </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"vendedor\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> vendedor </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.vendedor }} </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"tipoDocumento\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo Doc</mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.tipoDocumento }} </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"numeroDocumento\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>N° Doc</mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.numeroDocumento }} </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"estado\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Estado</mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.estado }} </mat-cell>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"fechaVenta\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Fecha</mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.fechaVenta }} </mat-cell>\n            </ng-container>\n            \n            \n            <ng-container matColumnDef=\"totalGeneral\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Total </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\"> {{ item.totalGeneral | currency}} </mat-cell>\n            </ng-container>\n            \n           \n            \n            <ng-container matColumnDef=\"acciones\">\n                <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n                <mat-cell *matCellDef=\"let item\">\n                    <a mat-button routerLink=\"/ventas/{{item.id}}/edit\">Ver</a>\n                    <a mat-button (click)=\"aAnular(item.id);anular()\">Anular</a>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n        </mat-paginator>\n        <button mat-raised-button (click)=\"anular()\"  color=\"warn\" [disabled]=\"anularDisabled\">Anular ({{ ids.length }})</button>\n        <button mat-raised-button color=\"primary\" routerLink=\"/ventas/new\">Nuevo</button>\n        <button mat-raised-button routerLink=\"/ventas/upload\">Desde Archivo</button>\n        <button mat-raised-button (click)=\"export()\">Exportar</button>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/ventas/ventas.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_ventas_service__ = __webpack_require__("../../../../../src/app/servicios/ventas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_clientes_service__ = __webpack_require__("../../../../../src/app/servicios/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_borrar_dialog__ = __webpack_require__("../../../../../src/app/dialog/borrar.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VentasListComponent = (function () {
    function VentasListComponent(service, snackBar, dialog, global) {
        this.service = service;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.global = global;
        this.displayedColumns = ['id',
            'condicionVenta',
            'cliente',
            'vendedor',
            'estado',
            'tipoDocumento',
            'numeroDocumento',
            'totalGeneral',
            'fechaVenta',
            'acciones'];
        this.anularDisabled = true;
        this.ids = [];
    }
    VentasListComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTableDataSource */]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVentas();
    };
    VentasListComponent.prototype.getVentas = function () {
        var _this = this;
        this.service.getAll().subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    VentasListComponent.prototype.aAnular = function (evt, id) {
        if (evt.checked) {
            this.ids.push(id);
        }
        else {
            // Item to remove
            this.ids = this.ids.filter(function (obj) { return obj !== id; });
        }
        this.anularDisabled = !(this.ids.length > 0);
    };
    VentasListComponent.prototype._showSnack = function (message) {
        this.snackBar.open(message, "", { duration: this.global.duration.long });
    };
    VentasListComponent.prototype._dialogAnular = function (message) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_borrar_dialog__["a" /* BorrarDialog */], { data: message });
        return dialogRef.afterClosed();
    };
    VentasListComponent.prototype.anular = function () {
        var _this = this;
        this._dialogAnular("En realidad desea anular estos Items?").subscribe(function (succ) {
            if (succ) {
                _this.service.anular(_this.ids).subscribe(function (data) {
                    _this.ids = [];
                    _this.anularDisabled = true;
                    _this.getVentas();
                });
            }
            else {
                console.log('NO envar al server');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatPaginator */])
    ], VentasListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSort */])
    ], VentasListComponent.prototype, "sort", void 0);
    VentasListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ventas-list',
            template: __webpack_require__("../../../../../src/app/ventas/ventas.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ventas/ventas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__servicios_ventas_service__["a" /* VentasService */], __WEBPACK_IMPORTED_MODULE_3__servicios_clientes_service__["a" /* ClientesService */], __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_ventas_service__["a" /* VentasService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */]])
    ], VentasListComponent);
    return VentasListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map