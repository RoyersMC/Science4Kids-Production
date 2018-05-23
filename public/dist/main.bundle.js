webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¿Quiénes somos?</h1>\r\n\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mod_oceano_modulo_oceano_modulo_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-oceano/modulo-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mod_selva_modulo_selva_modulo_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-selva/modulo-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mod_cuerpo_humano_modulo_cuerpo_humano_modulo_cuerpo_humano_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mod_sistema_solar_modulo_sistema_solar_modulo_sistema_solar_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mod_oceano_modulo_juego_oceano_modulo_juego_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mod_selva_modulo_juego_selva_modulo_juego_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-juego-selva/modulo-juego-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mod_cuerpo_humano_modulo_juego_ch_modulo_juego_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mod_sistema_solar_modulo_juego_ss_modulo_juego_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mod_oceano_modulo_info_oceano_modulo_info_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mod_selva_modulo_info_selva_modulo_info_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mod_cuerpo_humano_modulo_info_ch_modulo_info_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mod_sistema_solar_modulo_info_ss_modulo_info_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//modulos de paginas principales







//modulos de juegos




//modulos de informacion




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */]
    },
    {
        path: 'oceano',
        component: __WEBPACK_IMPORTED_MODULE_5__mod_oceano_modulo_oceano_modulo_oceano_component__["a" /* ModuloOceanoComponent */]
    },
    {
        path: 'selva',
        component: __WEBPACK_IMPORTED_MODULE_6__mod_selva_modulo_selva_modulo_selva_component__["a" /* ModuloSelvaComponent */]
    },
    {
        path: 'cuerpoHumano',
        component: __WEBPACK_IMPORTED_MODULE_7__mod_cuerpo_humano_modulo_cuerpo_humano_modulo_cuerpo_humano_component__["a" /* ModuloCuerpoHumanoComponent */]
    },
    {
        path: 'sistemaSolar',
        component: __WEBPACK_IMPORTED_MODULE_8__mod_sistema_solar_modulo_sistema_solar_modulo_sistema_solar_component__["a" /* ModuloSistemaSolarComponent */]
    },
    //modulos de juegos
    {
        path: 'juegoOceano',
        component: __WEBPACK_IMPORTED_MODULE_9__mod_oceano_modulo_juego_oceano_modulo_juego_oceano_component__["a" /* ModuloJuegoOceanoComponent */]
    },
    {
        path: 'juegoSelva',
        component: __WEBPACK_IMPORTED_MODULE_10__mod_selva_modulo_juego_selva_modulo_juego_selva_component__["a" /* ModuloJuegoSelvaComponent */]
    },
    {
        path: 'juegoCuerpoHumano',
        component: __WEBPACK_IMPORTED_MODULE_11__mod_cuerpo_humano_modulo_juego_ch_modulo_juego_ch_component__["a" /* ModuloJuegoChComponent */]
    },
    {
        path: 'juegoSistemaSolar',
        component: __WEBPACK_IMPORTED_MODULE_12__mod_sistema_solar_modulo_juego_ss_modulo_juego_ss_component__["a" /* ModuloJuegoSsComponent */]
    },
    //modulos de informacion
    {
        path: 'infoOceano',
        component: __WEBPACK_IMPORTED_MODULE_13__mod_oceano_modulo_info_oceano_modulo_info_oceano_component__["a" /* ModuloInfoOceanoComponent */]
    },
    {
        path: 'infoSelva',
        component: __WEBPACK_IMPORTED_MODULE_14__mod_selva_modulo_info_selva_modulo_info_selva_component__["a" /* ModuloInfoSelvaComponent */]
    },
    {
        path: 'infoCuerpoHumano',
        component: __WEBPACK_IMPORTED_MODULE_15__mod_cuerpo_humano_modulo_info_ch_modulo_info_ch_component__["a" /* ModuloInfoChComponent */]
    },
    {
        path: 'infoSistemaSolar',
        component: __WEBPACK_IMPORTED_MODULE_16__mod_sistema_solar_modulo_info_ss_modulo_info_ss_component__["a" /* ModuloInfoSsComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <header>\r\n    <app-header></app-header>\r\n  </header>\r\n  \r\n  <main>\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n  \r\n  <footer>\r\n    <app-footer></app-footer>\r\n  </footer>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav({
            menuWidth: 200,
            edge: 'left',
            closeOnClick: true,
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__master_header_header_component__ = __webpack_require__("./src/app/master/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__master_footer_footer_component__ = __webpack_require__("./src/app/master/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mod_oceano_modulo_oceano_modulo_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-oceano/modulo-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mod_selva_modulo_selva_modulo_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-selva/modulo-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mod_cuerpo_humano_modulo_cuerpo_humano_modulo_cuerpo_humano_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mod_sistema_solar_modulo_sistema_solar_modulo_sistema_solar_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mod_oceano_modulo_juego_oceano_modulo_juego_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mod_oceano_modulo_info_oceano_modulo_info_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mod_selva_modulo_juego_selva_modulo_juego_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-juego-selva/modulo-juego-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mod_selva_modulo_info_selva_modulo_info_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mod_cuerpo_humano_modulo_juego_ch_modulo_juego_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mod_cuerpo_humano_modulo_info_ch_modulo_info_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mod_sistema_solar_modulo_juego_ss_modulo_juego_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__mod_sistema_solar_modulo_info_ss_modulo_info_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__master_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__master_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__mod_oceano_modulo_oceano_modulo_oceano_component__["a" /* ModuloOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mod_selva_modulo_selva_modulo_selva_component__["a" /* ModuloSelvaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mod_cuerpo_humano_modulo_cuerpo_humano_modulo_cuerpo_humano_component__["a" /* ModuloCuerpoHumanoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mod_sistema_solar_modulo_sistema_solar_modulo_sistema_solar_component__["a" /* ModuloSistemaSolarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mod_oceano_modulo_juego_oceano_modulo_juego_oceano_component__["a" /* ModuloJuegoOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mod_oceano_modulo_info_oceano_modulo_info_oceano_component__["a" /* ModuloInfoOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__mod_selva_modulo_juego_selva_modulo_juego_selva_component__["a" /* ModuloJuegoSelvaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__mod_selva_modulo_info_selva_modulo_info_selva_component__["a" /* ModuloInfoSelvaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__mod_cuerpo_humano_modulo_juego_ch_modulo_juego_ch_component__["a" /* ModuloJuegoChComponent */],
                __WEBPACK_IMPORTED_MODULE_19__mod_cuerpo_humano_modulo_info_ch_modulo_info_ch_component__["a" /* ModuloInfoChComponent */],
                __WEBPACK_IMPORTED_MODULE_20__mod_sistema_solar_modulo_juego_ss_modulo_juego_ss_component__["a" /* ModuloJuegoSsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__mod_sistema_solar_modulo_info_ss_modulo_info_ss_component__["a" /* ModuloInfoSsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Contáctenos!</h1>\r\n\r\n<div class=\"row\">\r\n  <form id=\"formulario\" class=\"col s12\" method=\"POST\" action=\"https://formspree.io/Science4kidsSupp@gmail.com\">\r\n    <div class=\"col m12\">\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"first_name\" type=\"text\" class=\"validate\" required>\r\n              <label for=\"first_name\">Nombre</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"last_name\" type=\"text\" class=\"validate\" required>\r\n              <label for=\"last_name\">Apellido</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input id=\"email\" type=\"email\" class=\"validate\" required>\r\n              <label for=\"email\">Correo Electrónico</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <textarea id=\"msj\" class=\"materialize-textarea validate\" required></textarea>\r\n              <label for=\"msj\">Mensaje</label>\r\n            </div>     \r\n          </div> \r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Enviar</button>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Aprende Jugando!</h1><br><br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s12 m6 l3\">\r\n    <a routerLink=\"selva\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/selvaGif2.gif\" class=\"circle responsive-img\"> \r\n    </a>\r\n    <h5 class=\"center-align\">La Selva</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3\">\r\n    <a routerLink=\"oceano\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/oceanoGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Océano</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3\">\r\n    <a routerLink=\"cuerpoHumano\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/cuerpoGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Cuerpo Humano</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3\">\r\n    <a routerLink=\"sistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/solarGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Sistema Solar</h5>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//declare var $:any;
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        //$('.parallax').parallax();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/master/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\r\n\r\n  <div id=\"foot\" class=\"footer-copyright\">\r\n    <div class=\"container center\">\r\n      Copyright © 2018 Science4Kids, Costa Rica. Derechos Reservados.\r\n    </div>\r\n  </div>\r\n\r\n</footer>  "

/***/ }),

/***/ "./src/app/master/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/master/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/master/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n  <nav class=\"nav-extended\">\r\n    <div class=\"nav-wrapper\">\r\n\r\n     <!-- <a routerLink=\"\" id=\"logo\" class=\"brand-logo\"><img src=\"/assets/images/logo5.png\" alt=\"Sience4Kids\" class=\"circle responsive-img\"></a> -->\r\n\r\n      <a routerLink=\"\" id=\"logo\" class=\"brand-logo\"><img src=\"/assets/images/log2.png\" alt=\"Sience4Kids\"></a>\r\n\r\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li><a routerLink=\"\">Inicio</a></li>\r\n        <li><a routerLink=\"contact\">Contacto</a></li>\r\n        <li><a routerLink=\"about-us\">Acerca de</a></li>\r\n      </ul>\r\n      <ul class=\"side-nav\" id=\"mobile-demo\">\r\n        <li><a routerLink=\"\">Inicio</a></li>\r\n        <li><a routerLink=\"contact\">Contacto</a></li>\r\n        <li><a routerLink=\"about-us\">Acerca de</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"nav-content\">\r\n      <ul class=\"tabs tabs-transparent\"></ul>\r\n      <ul class=\"tabs tabs-transparent\"></ul>\r\n    </div>\r\n  </nav>\r\n\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/master/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/master/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Aprende del Cuerpo Humano!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s4\">\r\n    <a routerLink=\"/infoCuerpoHumano\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Sabias que...</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n    <a href=\"https://www.youtube.com/watch?v=yBKV-W9nMQY\" target=\"_blank\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/video.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Videos</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n      <a routerLink=\"/juegoCuerpoHumano\">\r\n        <img id=\"menu\" src=\"/assets/images/iconos/juegos.gif\">\r\n      </a>\r\n      <h5 class=\"center\">Juegos</h5>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloCuerpoHumanoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloCuerpoHumanoComponent = /** @class */ (function () {
    function ModuloCuerpoHumanoComponent() {
    }
    ModuloCuerpoHumanoComponent.prototype.ngOnInit = function () {
    };
    ModuloCuerpoHumanoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-cuerpo-humano',
            template: __webpack_require__("./src/app/mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloCuerpoHumanoComponent);
    return ModuloCuerpoHumanoComponent;
}());



/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Sabías que...!</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/Cuerpo/oseo2.jpg\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Óseo</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Óseo</span>\r\n        <p>Está constituido por 206 huesos, 32 dientes y otras estructuras encargadas de conectar a los huesos entre sí.</p>\r\n        <p>Da forma al cuerpo humano y posibilita su movimiento.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/respiratorio2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Respiratorio</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Respiratorio</span>\r\n            <p>Es el encargado de llevar oxígeno a la sangre, para que esta lo distribuya a todos los tejidos del cuerpo.</p>\r\n            <p>También elimina el dióxido de carbono ya que no nos es útil y es muy tóxico.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/digestivo2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Digestivo</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Digestivo</span>\r\n            <p>Es el encargado de transformar los alimentos que consumimos en nutrientes necesarios para el cuerpo.</p>\r\n            <p>También elimina los desechos que el cuerpo ya no necesita.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n              <div class=\"card-image waves-effect waves-block waves-light\">\r\n                <img src=\"/assets/images/Cuerpo/muscular2.jpg\" class=\"activator\">\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Muscular</span>\r\n              </div>\r\n              <div class=\"card-reveal\">\r\n                <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Muscular</span>\r\n                <p>Está constituido por musculos y tendones.</p>\r\n                <p>Su funcion principal es generar movimiento y brindar soporte a los huesos y órganos del cuerpo.</p>\r\n              </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/nervioso2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Nervioso</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Nervioso</span>\r\n            <p>Está formado por el cerebro, la médula espinal y una red de nervios que llegan a todos los lugares del cuerpo.</p>\r\n            <p>Se encarga de regular y coordinar las funciones y actividades del cuerpo.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card\">\r\n            <div class=\"card-image waves-effect waves-block waves-light\">\r\n              <img src=\"/assets/images/Cuerpo/circulatorio2.jpg\" class=\"activator\">\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Circulatorio</span>\r\n            </div>\r\n            <div class=\"card-reveal\">\r\n              <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Circulatorio</span>\r\n              <p>Esta conformado por el corazón, las venas, arterias y la sangre.</p>\r\n              <p>Es el encargado de distribuir la sangre por todo el cuerpo con el fin de alimentarlo y recolectar los desechos.</p>\r\n            </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloInfoChComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloInfoChComponent = /** @class */ (function () {
    function ModuloInfoChComponent() {
    }
    ModuloInfoChComponent.prototype.ngOnInit = function () {
        $('.collapsible').collapsible();
    };
    ModuloInfoChComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-info-ch',
            template: __webpack_require__("./src/app/mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloInfoChComponent);
    return ModuloInfoChComponent;
}());



/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-juego-ch works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloJuegoChComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloJuegoChComponent = /** @class */ (function () {
    function ModuloJuegoChComponent() {
    }
    ModuloJuegoChComponent.prototype.ngOnInit = function () {
    };
    ModuloJuegoChComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-juego-ch',
            template: __webpack_require__("./src/app/mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloJuegoChComponent);
    return ModuloJuegoChComponent;
}());



/***/ }),

/***/ "./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-info-oceano works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloInfoOceanoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloInfoOceanoComponent = /** @class */ (function () {
    function ModuloInfoOceanoComponent() {
    }
    ModuloInfoOceanoComponent.prototype.ngOnInit = function () {
    };
    ModuloInfoOceanoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-info-oceano',
            template: __webpack_require__("./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloInfoOceanoComponent);
    return ModuloInfoOceanoComponent;
}());



/***/ }),

/***/ "./src/app/mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-juego-oceano works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloJuegoOceanoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloJuegoOceanoComponent = /** @class */ (function () {
    function ModuloJuegoOceanoComponent() {
    }
    ModuloJuegoOceanoComponent.prototype.ngOnInit = function () {
    };
    ModuloJuegoOceanoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-juego-oceano',
            template: __webpack_require__("./src/app/mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloJuegoOceanoComponent);
    return ModuloJuegoOceanoComponent;
}());



/***/ }),

/***/ "./src/app/mod-oceano/modulo-oceano/modulo-oceano.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Aprende del Oceano!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s4\">\r\n    <a routerLink=\"/infoOceano\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Sabias que...</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n    <a href=\"https://www.youtube.com/watch?v=AndIC7-A5Zo\" target=\"_blank\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/video.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Videos</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n      <a routerLink=\"/juegoOceano\">\r\n        <img id=\"menu\" src=\"/assets/images/iconos/juegos.gif\">\r\n      </a>\r\n      <h5 class=\"center\">Juegos</h5>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mod-oceano/modulo-oceano/modulo-oceano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloOceanoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloOceanoComponent = /** @class */ (function () {
    function ModuloOceanoComponent() {
    }
    ModuloOceanoComponent.prototype.ngOnInit = function () {
    };
    ModuloOceanoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-oceano',
            template: __webpack_require__("./src/app/mod-oceano/modulo-oceano/modulo-oceano.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloOceanoComponent);
    return ModuloOceanoComponent;
}());



/***/ }),

/***/ "./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-info-selva works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloInfoSelvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloInfoSelvaComponent = /** @class */ (function () {
    function ModuloInfoSelvaComponent() {
    }
    ModuloInfoSelvaComponent.prototype.ngOnInit = function () {
    };
    ModuloInfoSelvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-info-selva',
            template: __webpack_require__("./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloInfoSelvaComponent);
    return ModuloInfoSelvaComponent;
}());



/***/ }),

/***/ "./src/app/mod-selva/modulo-juego-selva/modulo-juego-selva.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-juego-selva works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-selva/modulo-juego-selva/modulo-juego-selva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloJuegoSelvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloJuegoSelvaComponent = /** @class */ (function () {
    function ModuloJuegoSelvaComponent() {
    }
    ModuloJuegoSelvaComponent.prototype.ngOnInit = function () {
    };
    ModuloJuegoSelvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-juego-selva',
            template: __webpack_require__("./src/app/mod-selva/modulo-juego-selva/modulo-juego-selva.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloJuegoSelvaComponent);
    return ModuloJuegoSelvaComponent;
}());



/***/ }),

/***/ "./src/app/mod-selva/modulo-selva/modulo-selva.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Aprende de la Selva!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s4\">\r\n   <a routerLink=\"/infoSelva\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Sabias que...</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n    <a href=\"https://www.youtube.com/watch?v=y-902ha1x08\" target=\"_blank\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/video.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Videos</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n      <a routerLink=\"/juegoSelva\">\r\n        <img id=\"menu\" src=\"/assets/images/iconos/juegos.gif\">\r\n      </a>\r\n      <h5 class=\"center\">Juegos</h5>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mod-selva/modulo-selva/modulo-selva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloSelvaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloSelvaComponent = /** @class */ (function () {
    function ModuloSelvaComponent() {
    }
    ModuloSelvaComponent.prototype.ngOnInit = function () {
    };
    ModuloSelvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-selva',
            template: __webpack_require__("./src/app/mod-selva/modulo-selva/modulo-selva.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloSelvaComponent);
    return ModuloSelvaComponent;
}());



/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-info-ss works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloInfoSsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloInfoSsComponent = /** @class */ (function () {
    function ModuloInfoSsComponent() {
    }
    ModuloInfoSsComponent.prototype.ngOnInit = function () {
    };
    ModuloInfoSsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-info-ss',
            template: __webpack_require__("./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloInfoSsComponent);
    return ModuloInfoSsComponent;
}());



/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modulo-juego-ss works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloJuegoSsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloJuegoSsComponent = /** @class */ (function () {
    function ModuloJuegoSsComponent() {
    }
    ModuloJuegoSsComponent.prototype.ngOnInit = function () {
    };
    ModuloJuegoSsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-juego-ss',
            template: __webpack_require__("./src/app/mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloJuegoSsComponent);
    return ModuloJuegoSsComponent;
}());



/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Aprende del Sistema Solar!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s4\">\r\n    <a routerLink=\"/infoSistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Sabias que...</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n    <a href=\"https://www.youtube.com/watch?v=ZykXgSqet6A\" target=\"_blank\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/video.gif\">\r\n    </a>\r\n    <h5 class=\"center\">Videos</h5>\r\n  </div>\r\n\r\n  <div class=\"col s4\">\r\n      <a routerLink=\"/juegoSistemaSolar\">\r\n        <img id=\"menu\" src=\"/assets/images/iconos/juegos.gif\">\r\n      </a>\r\n      <h5 class=\"center\">Juegos</h5>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloSistemaSolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuloSistemaSolarComponent = /** @class */ (function () {
    function ModuloSistemaSolarComponent() {
    }
    ModuloSistemaSolarComponent.prototype.ngOnInit = function () {
    };
    ModuloSistemaSolarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-sistema-solar',
            template: __webpack_require__("./src/app/mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloSistemaSolarComponent);
    return ModuloSistemaSolarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map