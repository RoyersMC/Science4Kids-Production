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

module.exports = "<h1 class=\"center\">¿Quiénes somos?</h1>\r\n<br>\r\n<div id=\"formulario\" class=\"row\">\r\n  \r\n   <div id=\"about\" class=\"col s12 m12 l6\">\r\n       Somos una empresa dedicada a diseñar y construir sistemas web enfocados en la ciencia, donde los niños y niñas podrán aprender de una forma dinámica, mediante información interesante, videos y juegos sobre:\r\n       <br>&emsp;* El Cuerpo Humano.\r\n       <br>&emsp;* El Sistema Solar.\r\n       <br>&emsp;* El Océano.\r\n       <br>&emsp;* La Selva.\r\n       <br>\r\n       <br>\r\n       Equipo:\r\n       <br>\r\n       &emsp;* Denisse González Salas.<br>\r\n       &emsp;* Royers Murillo Castro.<br>\r\n       &emsp;* Juan José Guerrero Conejo.<br>\r\n       &emsp;* Luis Diego Quirós Rodríguez.\r\n       <br>\r\n  \r\n   </div>\r\n\r\n   <div class=\"col s12 m12 l6\">\r\n       <img id=\"imgAbout\" src=\"/assets/images/logo5.png\" alt=\"Sience4Kids\" class=\"circle responsive-img\">\r\n   </div>\r\n\r\n</div>\r\n\r\n<a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn \">\r\n  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mod_cuerpo_humano_modulo_video_ch_modulo_video_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mod_oceano_modulo_video_oceano_modulo_video_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-video-oceano/modulo-video-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mod_selva_modulo_video_selva_modulo_video_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-video-selva/modulo-video-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mod_sistema_solar_modulo_video_ss_modulo_video_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-video-ss/modulo-video-ss.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//modulos de paginas principales







//modulos de juegos




//modulos de informacion




//modulos de videos




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
    },
    //modulos de videos
    {
        path: 'videoCuerpoHumano',
        component: __WEBPACK_IMPORTED_MODULE_17__mod_cuerpo_humano_modulo_video_ch_modulo_video_ch_component__["a" /* ModuloVideoChComponent */]
    },
    {
        path: 'videoOceano',
        component: __WEBPACK_IMPORTED_MODULE_18__mod_oceano_modulo_video_oceano_modulo_video_oceano_component__["a" /* ModuloVideoOceanoComponent */]
    },
    {
        path: 'videoSistemaSolar',
        component: __WEBPACK_IMPORTED_MODULE_20__mod_sistema_solar_modulo_video_ss_modulo_video_ss_component__["a" /* ModuloVideoSsComponent */]
    },
    {
        path: 'videoSelva',
        component: __WEBPACK_IMPORTED_MODULE_19__mod_selva_modulo_video_selva_modulo_video_selva_component__["a" /* ModuloVideoSelvaComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                window.gtag('config', 'UA-120714705-1', { 'page_path': event.urlAfterRedirects });
            }
        });
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
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mod_cuerpo_humano_modulo_video_ch_modulo_video_ch_component__ = __webpack_require__("./src/app/mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mod_oceano_modulo_video_oceano_modulo_video_oceano_component__ = __webpack_require__("./src/app/mod-oceano/modulo-video-oceano/modulo-video-oceano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mod_selva_modulo_video_selva_modulo_video_selva_component__ = __webpack_require__("./src/app/mod-selva/modulo-video-selva/modulo-video-selva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mod_sistema_solar_modulo_video_ss_modulo_video_ss_component__ = __webpack_require__("./src/app/mod-sistema-solar/modulo-video-ss/modulo-video-ss.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */], __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_8__master_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_9__master_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_10__mod_oceano_modulo_oceano_modulo_oceano_component__["a" /* ModuloOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mod_selva_modulo_selva_modulo_selva_component__["a" /* ModuloSelvaComponent */], __WEBPACK_IMPORTED_MODULE_12__mod_cuerpo_humano_modulo_cuerpo_humano_modulo_cuerpo_humano_component__["a" /* ModuloCuerpoHumanoComponent */], __WEBPACK_IMPORTED_MODULE_13__mod_sistema_solar_modulo_sistema_solar_modulo_sistema_solar_component__["a" /* ModuloSistemaSolarComponent */], __WEBPACK_IMPORTED_MODULE_14__mod_oceano_modulo_juego_oceano_modulo_juego_oceano_component__["a" /* ModuloJuegoOceanoComponent */], __WEBPACK_IMPORTED_MODULE_15__mod_oceano_modulo_info_oceano_modulo_info_oceano_component__["a" /* ModuloInfoOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__mod_selva_modulo_juego_selva_modulo_juego_selva_component__["a" /* ModuloJuegoSelvaComponent */], __WEBPACK_IMPORTED_MODULE_17__mod_selva_modulo_info_selva_modulo_info_selva_component__["a" /* ModuloInfoSelvaComponent */], __WEBPACK_IMPORTED_MODULE_18__mod_cuerpo_humano_modulo_juego_ch_modulo_juego_ch_component__["a" /* ModuloJuegoChComponent */], __WEBPACK_IMPORTED_MODULE_19__mod_cuerpo_humano_modulo_info_ch_modulo_info_ch_component__["a" /* ModuloInfoChComponent */], __WEBPACK_IMPORTED_MODULE_20__mod_sistema_solar_modulo_juego_ss_modulo_juego_ss_component__["a" /* ModuloJuegoSsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__mod_sistema_solar_modulo_info_ss_modulo_info_ss_component__["a" /* ModuloInfoSsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__mod_cuerpo_humano_modulo_video_ch_modulo_video_ch_component__["a" /* ModuloVideoChComponent */],
                __WEBPACK_IMPORTED_MODULE_24__mod_oceano_modulo_video_oceano_modulo_video_oceano_component__["a" /* ModuloVideoOceanoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__mod_selva_modulo_video_selva_modulo_video_selva_component__["a" /* ModuloVideoSelvaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__mod_sistema_solar_modulo_video_ss_modulo_video_ss_component__["a" /* ModuloVideoSsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__["a" /* DndModule */].forRoot()
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

module.exports = "<h1 class=\"center\">¡Contáctenos!</h1>\r\n\r\n<div class=\"row\">\r\n  <form action=\"https://formspree.io/science4kidssupp@gmail.com\" method=\"POST\" class=\"col s12\">\r\n    <div class=\"col m12\">\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"first_name\" type=\"text\" class=\"validate\" name=\"Nombre\" required>\r\n              <label for=\"first_name\">Nombre</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"last_name\" type=\"text\" class=\"validate\" name=\"Apellido\" required>\r\n              <label for=\"last_name\">Apellido</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input id=\"email\" type=\"email\" class=\"validate\" name=\"Email\" required>\r\n              <label for=\"email\">Correo Electrónico</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <textarea id=\"msj\" class=\"materialize-textarea validate\" name=\"Mensaje\" required></textarea>\r\n              <label for=\"msj\">Mensaje</label>\r\n            </div>     \r\n          </div> \r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input id=\"subject\" type=\"hidden\" name=\"_subject\" value=\"Contacto Science4Kids\" class=\"validate\" required=\"required\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col s6\">\r\n                <a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n                  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n            </div>\r\n\r\n            <div class=\"col s6\">\r\n              <button class=\"btn waves-effect waves-light right\" type=\"submit\"><i class=\"material-icons left\">send</i>Enviar</button>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    \r\n  </form>\r\n</div>\r\n\r\n"

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

module.exports = "<h1 class=\"center\">¡Aprende Jugando!</h1><br><br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s12 m6 l3 center\">\r\n    <a routerLink=\"selva\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/selvaGif2.gif\" class=\"circle responsive-img\"> \r\n    </a>\r\n    <h5 class=\"center-align\">La Selva</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3 center\">\r\n    <a routerLink=\"oceano\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/oceanoGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Océano</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3 center\">\r\n    <a routerLink=\"cuerpoHumano\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/cuerpoGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Cuerpo Humano</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l3 center\">\r\n    <a routerLink=\"sistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/modulos/solarGif2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">El Sistema Solar</h5>\r\n  </div>\r\n</div>"

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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
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

module.exports = "<footer class=\"page-footer\">\r\n\r\n  <div id=\"foot\" class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      <div id=\"infoFooter\" class=\"row\">\r\n        <div class=\"col s10 m10 l10 center\">\r\n          Copyright © 2018 Science4Kids, Costa Rica. Derechos Reservados.\r\n        </div>\r\n        <div class=\"col s2 m2 l2\">\r\n          <a href=\"https://www.facebook.com/Science4KidsCR\" target=\"_blank\"><img id=\"face\" src=\"/assets/images/iconos/facebook.png\" class=\"circle responsive-img\"></a>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </div>\r\n\r\n</footer>  "

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

module.exports = "<header>\r\n\r\n  <nav class=\"nav-extended\">\r\n    <div class=\"nav-wrapper\">\r\n\r\n     <!-- <a routerLink=\"\" id=\"logo\" class=\"brand-logo\"><img src=\"/assets/images/logo5.png\" alt=\"Sience4Kids\" class=\"circle responsive-img\"></a> -->\r\n\r\n      <a routerLink=\"\" id=\"logo\" class=\"brand-logo\"><img src=\"/assets/images/log2.png\" alt=\"Sience4Kids\"></a>\r\n\r\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li><a routerLink=\"\">Inicio</a></li>\r\n        <li><a routerLink=\"contact\">Contacto</a></li>\r\n        <li><a routerLink=\"about-us\">Acerca de</a></li>\r\n        <li><a id=\"btnPlay\" (click)=\"video()\" class=\"btn-floating pulse\"><i class=\"material-icons\">play_circle_filled</i></a></li>\r\n      </ul>\r\n      <ul class=\"side-nav\" id=\"mobile-demo\">\r\n        <li><a routerLink=\"\">Inicio</a></li>\r\n        <li><a routerLink=\"contact\">Contacto</a></li>\r\n        <li><a routerLink=\"about-us\">Acerca de</a></li>\r\n        <li><a (click)=\"videoPequenno()\"><i class=\"material-icons\">play_circle_filled</i></a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"nav-content\">\r\n      <ul class=\"tabs tabs-transparent\"></ul>\r\n      <ul class=\"tabs tabs-transparent\"></ul>\r\n    </div>\r\n  </nav>\r\n\r\n</header>\r\n\r\n<div id=\"spotFondo\" (click)=\"cerrarVideo()\">\r\n    <video id =\"videoSpot\" width=\"1080\" height=\"590\" class=\"center\">\r\n      <source src=\"/assets/videos/video.mp4\" type=\"video/mp4\">\r\n    </video>\r\n    <div id=\"btnVideo\" class=\"col offset-m6 center\">\r\n        <a class=\"waves-effect waves-light btn center\" (click)=\"cerrarVideo()\"><i class=\"material-icons left\">close</i>Cerrar</a>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"spotFondoPequenno\" (click)=\"cerrarVideoPequenno()\">\r\n  <video id =\"videoSpotPequenno\" width=\"640\" height=\"360\" class=\"center\">\r\n    <source src=\"/assets/videos/video.mp4\" type=\"video/mp4\">\r\n  </video>\r\n  <div id=\"btnVideoPequenno\" class=\"col offset-m6 center\">\r\n      <a class=\"waves-effect waves-light btn center\" (click)=\"cerrarVideoPequenno()\"><i class=\"material-icons left\">close</i>Cerrar</a>\r\n  </div>\r\n</div>"

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
    HeaderComponent.prototype.video = function () {
        $("#spotFondo").show();
        var v = document.getElementsByTagName("video")[0];
        v.play();
    };
    HeaderComponent.prototype.cerrarVideo = function () {
        document.getElementById('spotFondo').style.display = 'none';
        var v = document.getElementsByTagName("video")[0];
        v.pause();
        v.currentTime = 0;
    };
    //Video Responsive
    HeaderComponent.prototype.videoPequenno = function () {
        $("#spotFondoPequenno").show();
        var v = document.getElementsByTagName("video")[1];
        v.play();
    };
    HeaderComponent.prototype.cerrarVideoPequenno = function () {
        document.getElementById('spotFondoPequenno').style.display = 'none';
        var v = document.getElementsByTagName("video")[1];
        v.pause();
        v.currentTime = 0;
    };
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

module.exports = "<h1 class=\"center\">¡Aprende del Cuerpo Humano!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n <div class=\"col s12 m6 l4 center\">\r\n    <a routerLink=\"/infoCuerpoHumano\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias4.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">¿Sabías que...?</h5>\r\n</div>\r\n\r\n <div class=\"col s12 m6 l4 center\">\r\n  <a routerLink=\"/videoCuerpoHumano\">\r\n     <img id=\"menu\" src=\"/assets/images/iconos/video2.gif\" class=\"circle responsive-img\">\r\n   </a>\r\n   <h5 class=\"center-align\">Videos</h5>\r\n </div>\r\n\r\n <div class=\"col s12 offset-m3 m6 l4 center\">\r\n     <a routerLink=\"/juegoCuerpoHumano\">\r\n       <img id=\"menu\" src=\"/assets/images/iconos/juegos2.gif\" class=\"circle responsive-img\">\r\n     </a>\r\n     <h5 class=\"center-align\">Juegos</h5>\r\n   </div>\r\n  \r\n</div>\r\n\r\n<a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n\r\n"

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

module.exports = "<h1 class=\"center\">¿Sabías que...?</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/Cuerpo/oseo2.jpg\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Óseo</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Óseo</span>\r\n        <p>Está constituido por 206 huesos, 32 dientes y otras estructuras encargadas de conectar a los huesos entre sí.</p>\r\n        <p>Da forma al cuerpo humano y posibilita su movimiento.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/respiratorio2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Respiratorio</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Respiratorio</span>\r\n            <p>Es el encargado de llevar oxígeno a la sangre, para que esta lo distribuya a todos los tejidos del cuerpo.</p>\r\n            <p>También elimina el dióxido de carbono ya que no nos es útil y es muy tóxico.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/digestivo2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Digestivo</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Digestivo</span>\r\n            <p>Es el encargado de transformar los alimentos que consumimos en nutrientes necesarios para el cuerpo.</p>\r\n            <p>También elimina los desechos que el cuerpo ya no necesita.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n                <img src=\"/assets/images/Cuerpo/muscular2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Muscular</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Muscular</span>\r\n            <p>Está constituido por músculos y tendones.</p>\r\n            <p>Su función principal es generar movimiento y brindar soporte a los huesos y órganos del cuerpo.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/Cuerpo/nervioso2.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Nervioso</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Nervioso</span>\r\n            <p>Está formado por el cerebro, la médula espinal y una red de nervios que llegan a todos los lugares del cuerpo.</p>\r\n            <p>Se encarga de regular y coordinar las funciones y actividades del cuerpo.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n            <div class=\"card-image waves-effect waves-block waves-light\">\r\n              <img src=\"/assets/images/Cuerpo/circulatorio2.jpg\" class=\"activator\">\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Circulatorio</span>\r\n            </div>\r\n            <div class=\"card-reveal\">\r\n              <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Sistema Circulatorio</span>\r\n              <p>Está conformado por el corazón, las venas, arterias y la sangre.</p>\r\n              <p>Es el encargado de distribuir la sangre por todo el cuerpo con el fin de alimentarlo y recolectar los desechos.</p>\r\n            </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s6\">\r\n      <a routerLink=\"/cuerpoHumano\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n        <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n    <div class=\"col s6\"> \r\n        <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n          <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n      </div>\r\n</div>"

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
    ModuloInfoChComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloInfoChComponent.prototype.ngOnInit = function () {
        // Make Reveal animate up and display when mouseenter
        $(document).on('mouseenter.hover-reveal', '.hover-reveal', function (e) {
            $(e.target).closest('.card').css('overflow', 'hidden');
            $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
            $(this).find('.card-reveal').css({ display: 'block' })
                .velocity("stop", false)
                .velocity({ translateY: '-100%' }, { duration: 300,
                queue: false,
                easing: 'easeInOutQuad' });
        });
        // Make Reveal animate down and display none when mouseleave
        $(document).on('mouseleave.hover-reveal', '.hover-reveal', function (e) {
            $(this).find('.card-reveal').velocity({ translateY: 0 }, {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function () { $(this).css({ display: 'none' }); }
            });
            $(this).find('.card-content>span').attr('style', '');
        });
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

module.exports = "<h1 class=\"center\">Juguemos!</h1>\r\n\r\n<h4>Arrastra el nombre al órgano correspondiente</h4>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s10 m10 l10\">\r\n    <!--Droppable-->\r\n    <div id=\"cuadroJuegoHumano\">\r\n\r\n      <body id=\"cuerpoHumano\">\r\n        <div id=\"pos1Humano\" dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessOjo($event)\" >\r\n          <h5 id=\"numeroHumano\" class=\"center-align\">1</h5>\r\n          <div id=\"borderHumano\">\r\n            <div [hidden]=\"!receivedDataOjo.length > 0\" *ngFor=\"let data of receivedDataOjo; let last = last\" [ngClass]=\"{ last: last }\">\r\n              <div *ngIf=\"last\">\r\n                <div *ngIf=\"data.dragData.id==1;else noOrgano\">\r\n                  <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarOjo()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos2Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessDiente($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">2</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataDiente.length > 0\" *ngFor=\"let data of receivedDataDiente; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==2;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarDiente()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos3Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessPulmon($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">3</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataPulmon.length > 0\" *ngFor=\"let data of receivedDataPulmon; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==3;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarPulmon()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos4Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessHigado($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">4</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataHigado.length > 0\" *ngFor=\"let data of receivedDataHigado; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==4;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarHigado()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos5Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessPiel($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">5</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataPiel.length > 0\" *ngFor=\"let data of receivedDataPiel; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==5;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarPiel()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos6Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessCerebro($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">6</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataCerebro.length > 0\" *ngFor=\"let data of receivedDataCerebro; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==6;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarCerebro()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos7Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessCorazon($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">7</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataCorazon.length > 0\" *ngFor=\"let data of receivedDataCorazon; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==7;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarCorazon()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos8Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessEstomago($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">8</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataEstomago.length > 0\" *ngFor=\"let data of receivedDataEstomago; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==8;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarEstomago()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos9Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessRinnon($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">9</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataRinnon.length > 0\" *ngFor=\"let data of receivedDataRinnon; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==9;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarRinnon()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos10Humano\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessIntestino($event)\">\r\n            <h5 id=\"numeroHumano\" class=\"center-align\">10</h5>\r\n            <div id=\"borderHumano\">\r\n              <div [hidden]=\"!receivedDataIntestino.length > 0\" *ngFor=\"let data of receivedDataIntestino; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==10;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarIntestino()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"receivedDataGanador.length == 10\">\r\n          <div id=\"fondoJuego\" (click)=\"cerrarGanador()\">\r\n              <div id=\"msg\">\r\n                  <h5  id =\"numero\" class=\"center-align\">Bien hecho, has completado el cuerpo humano!</h5>\r\n                  <img id= \"cohete\" src=\"/assets/images/Cuerpo/ganador.gif\">\r\n                  <div class=\"col offset-m4\">\r\n                      <a class=\"waves-effect waves-light btn right\" (click)=\"cerrarGanador()\"><i class=\"material-icons left\">thumb_up</i>OK!</a>\r\n                  </div>\r\n                 </div>\r\n          </div>\r\n        </div>\r\n      </body>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s2 m2 l2\">\r\n    <!--Draggable-->\r\n    <div id=\"elementos\" class=\"row\">\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 5, src: '/assets/images/juegoCuerpoHumano/piel.JPG'}\">\r\n        <div id=\"div5\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/piel.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 7, src: '/assets/images/juegoCuerpoHumano/corazon.JPG'}\">\r\n        <div id=\"div7\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/corazon.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 4, src: '/assets/images/juegoCuerpoHumano/higado.JPG'}\">\r\n        <div id=\"div4\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/higado.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 6, src: '/assets/images/juegoCuerpoHumano/cerebro.JPG'}\">\r\n        <div id=\"div6\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/cerebro.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 9, src: '/assets/images/juegoCuerpoHumano/rinnon.JPG'}\">\r\n        <div id=\"div9\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/rinnon.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 2, src: '/assets/images/juegoCuerpoHumano/diente.JPG'}\">\r\n        <div id=\"div2\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/diente.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 8, src: '/assets/images/juegoCuerpoHumano/estomago.JPG'}\">\r\n        <div id=\"div8\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/estomago.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 1, src: '/assets/images/juegoCuerpoHumano/ojo.JPG'}\">\r\n        <div id=\"div1\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/ojo.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 10, src: '/assets/images/juegoCuerpoHumano/intestino.JPG'}\">\r\n        <div id=\"div10\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/intestino.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 3, src: '/assets/images/juegoCuerpoHumano/pulmon.JPG'}\">\r\n        <div id=\"div3\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/juegoCuerpoHumano/pulmon.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s4 m4 l4\"> \r\n        <a routerLink=\"/cuerpoHumano\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4 center-align\"> \r\n        <a href=\"/juegoCuerpoHumano\" class=\"waves-effect waves-light btn center\">\r\n          <i class=\"material-icons left\">replay</i>Reiniciar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4\">\r\n        <a class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n            <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noOrgano>\r\n  <img id=\"iconHumano\" src=\"/assets/images/x.png\" alt=\"\" class=\"circle responsive-img\">\r\n</ng-template>"

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
        this.receivedDataOjo = [];
        this.receivedDataDiente = [];
        this.receivedDataPulmon = [];
        this.receivedDataHigado = [];
        this.receivedDataPiel = [];
        this.receivedDataCerebro = [];
        this.receivedDataCorazon = [];
        this.receivedDataEstomago = [];
        this.receivedDataRinnon = [];
        this.receivedDataIntestino = [];
        this.receivedDataGanador = [];
    }
    ModuloJuegoChComponent.prototype.transferDataSuccessOjo = function ($event) {
        this.receivedDataOjo.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessDiente = function ($event) {
        this.receivedDataDiente.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessPulmon = function ($event) {
        this.receivedDataPulmon.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessHigado = function ($event) {
        this.receivedDataHigado.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessPiel = function ($event) {
        this.receivedDataPiel.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessCerebro = function ($event) {
        this.receivedDataCerebro.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessCorazon = function ($event) {
        this.receivedDataCorazon.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessEstomago = function ($event) {
        this.receivedDataEstomago.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessRinnon = function ($event) {
        this.receivedDataRinnon.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessIntestino = function ($event) {
        this.receivedDataIntestino.push($event);
    };
    ModuloJuegoChComponent.prototype.transferDataSuccessGanador = function ($event) {
        this.receivedDataGanador.push($event);
    };
    ModuloJuegoChComponent.prototype.ocultarOjo = function () {
        document.getElementById('div1').style.display = 'none';
        document.getElementById("pos1Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarDiente = function () {
        document.getElementById('div2').style.display = 'none';
        document.getElementById("pos2Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarPulmon = function () {
        document.getElementById('div3').style.display = 'none';
        document.getElementById("pos3Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarHigado = function () {
        document.getElementById('div4').style.display = 'none';
        document.getElementById("pos4Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarPiel = function () {
        document.getElementById('div5').style.display = 'none';
        document.getElementById("pos5Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarCerebro = function () {
        document.getElementById('div6').style.display = 'none';
        document.getElementById("pos6Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarCorazon = function () {
        document.getElementById('div7').style.display = 'none';
        document.getElementById("pos7Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarEstomago = function () {
        document.getElementById('div8').style.display = 'none';
        document.getElementById("pos8Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarRinnon = function () {
        document.getElementById('div9').style.display = 'none';
        document.getElementById("pos9Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.ocultarIntestino = function () {
        document.getElementById('div10').style.display = 'none';
        document.getElementById("pos10Humano").style.pointerEvents = "none";
    };
    ModuloJuegoChComponent.prototype.cerrarGanador = function () {
        document.getElementById('msg').style.display = 'none';
        document.getElementById('fondoJuego').style.display = 'none';
    };
    ModuloJuegoChComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
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

/***/ "./src/app/mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Aprendamos un poco más!</h1>\r\n\r\n<div  class=\"row\">\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/zabVr2bGrik\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/w8PnlLptHXE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/YeHAxnApHQw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n  \r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/N3ozAS0JxRw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div> \r\n\r\n</div>  \r\n\r\n<div class=\"row\">\r\n        <div class=\"col s6\">\r\n            <a routerLink=\"/cuerpoHumano\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n                <i class=\"material-icons left\">reply</i>Regresar</a>  \r\n        </div>\r\n        <div class=\"col s6\"> \r\n            <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n              <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n          </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloVideoChComponent; });
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

var ModuloVideoChComponent = /** @class */ (function () {
    function ModuloVideoChComponent() {
    }
    ModuloVideoChComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloVideoChComponent.prototype.ngOnInit = function () {
    };
    ModuloVideoChComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-video-ch',
            template: __webpack_require__("./src/app/mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ModuloVideoChComponent);
    return ModuloVideoChComponent;
}());



/***/ }),

/***/ "./src/app/mod-oceano/modulo-info-oceano/modulo-info-oceano.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¿Sabí­as que...?</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/oceano/trench.jpg\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Fosa de las Marianas</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>La Fosa de las Marianas</span>\r\n        <p>Es la parte más profunda del océano con 11000 metros bajo el nivel del mar.</p>\r\n        <p>A tanta profundidad no llega la luz del sol.</p>\r\n        <p>La mayoria de animales que viven ahí, son de un color transparente.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/oceano/whale.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Mamíferos Marinos</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Los Mamíferos Marinos</span>\r\n            <p>Aunque no lo parezca, las ballenas y delfines no son peces sino mamíferos.</p>\r\n            <p>El cachalote es el mamífero que más profundo se sumerge, llegando a los 1500 metros.</p>\r\n            <p>Algunos mamíferos acuáticos ven con el oído, es decir, con un sentido llamado ecolocación.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/oceano/vela.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Peces más rápidos</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Los Peces más rápidos</span>\r\n            <p>El pez más rápido del mundo es el tiburón mako, con una velocidad de 114 kilómetros por hora.</p>\r\n            <p>En el segundo lugar está el pez Vela, con una velocidad de 110 kilómetros por hora.</p>\r\n            <p>Por último, en tercer lugar se encuentra el Marlín, con velocidades de hasta 80 kilómetros por hora.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n                <img src=\"/assets/images/oceano/medusa.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Animales Bioluminiscentes</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Los Animales Bioluminiscentes</span>\r\n            <p>Animales como la Medusa arcoiris producen luz de forma natural.</p>\r\n            <p>El uso de esta luz es para comunicación o atraer a su presa.</p>\r\n            <p>Insectos como luciérnagas o carbuncos también producen luz de forma natural.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/oceano/celacanto.jpg\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Fósiles Vivientes</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Los Fósiles Vivientes</span>\r\n            <p>Algunas criaturas no han cambiado desde hace millones de años, a estos se les conoce como fósiles vivientes.</p>\r\n            <p>El celacanto es un pez que se creía extinto, pero en 1998 se encontró un ejemplar, posee una estructura ósea externa como armadura.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n            <div class=\"card-image waves-effect waves-block waves-light\">\r\n              <img src=\"/assets/images/oceano/cora.jpg\" class=\"activator\">\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Corales</span>\r\n            </div>\r\n            <div class=\"card-reveal\">\r\n              <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Los Corales</span>\r\n              <p>Aunque parezcan que son rocas, los corales son animales.</p>\r\n              <p>Cuando los corales nacen son pequeños pólipos (tejidos), después se asientan en una roca y toman la forma que todos conocemos.</p>\r\n            </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s6\">\r\n        <a routerLink=\"/oceano\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n    <div class=\"col s6\"> \r\n        <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n          <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n      </div>\r\n</div>\r\n\r\n"

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
    ModuloInfoOceanoComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloInfoOceanoComponent.prototype.ngOnInit = function () {
        // Make Reveal animate up and display when mouseenter
        $(document).on('mouseenter.hover-reveal', '.hover-reveal', function (e) {
            $(e.target).closest('.card').css('overflow', 'hidden');
            $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
            $(this).find('.card-reveal').css({ display: 'block' })
                .velocity("stop", false)
                .velocity({ translateY: '-100%' }, { duration: 300,
                queue: false,
                easing: 'easeInOutQuad' });
        });
        // Make Reveal animate down and display none when mouseleave
        $(document).on('mouseleave.hover-reveal', '.hover-reveal', function (e) {
            $(this).find('.card-reveal').velocity({ translateY: 0 }, {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function () { $(this).css({ display: 'none' }); }
            });
            $(this).find('.card-content>span').attr('style', '');
        });
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

module.exports = "<h1 class=\"center\">Juguemos!</h1>\r\n\r\n<h4>Encuentre Los Animales</h4>\r\n\r\n<div id=\"elementos\" class=\"row\">\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img1\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/tortuga.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img11\" style=\"display: none\">\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/tortugat.jpg\" class=\"responsive-img\" >\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img2\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/pulpo.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img22\" style=\"display: none\" >\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/pulpot.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img3\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/anguila.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img33\" style=\"display: none\">\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/anguilat.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img4\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/cangrejo.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img44\" style=\"display: none\">\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/cangrejot.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img5\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/pezangel.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img55\" style=\"display: none\">\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/pezangelt.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img6\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/estrellademar.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img66\" style=\"display: none\">\r\n        <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/estrellademart.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img7\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/cangrejoermitano.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img77\" style=\"display: none\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/cangrejoermitanot.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\" >\r\n    <div class=\"col s1\" id=\"img8\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/labrido.jpg\" class=\"responsive-img\">\r\n    </div>\r\n    <div class=\"col s1\" id=\"img88\" style=\"display: none\">\r\n      <img id=\"icon2\" src=\"../../../assets/images/oceanojuego/labridot.jpg\" class=\"responsive-img\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div id = \"cuadroJuegoOceano\">\r\n  <body id=\"cuerpoOceano\" >\r\n      <div id=\"an1\" (click)=\"ocultartortuga()\" style=\"cursor: pointer\">\r\n          <div id=\"bordert\"></div>\r\n      </div>\r\n      <div id=\"an2\" (click)=\"ocultarpulpo()\" style=\"cursor: pointer\">\r\n          <div id=\"borderO\"></div>\r\n      </div>\r\n      <div id=\"an3\" (click)=\"ocultaranguila()\" style=\"cursor: pointer\">\r\n          <div id=\"bordera\"></div>\r\n      </div>\r\n      <div id=\"an4\" (click)=\"ocultarcangrejo()\" style=\"cursor: pointer\">\r\n          <div id=\"borderc\"></div>\r\n      </div>\r\n      <div id=\"an5\" (click)=\"ocultarpezangel()\" style=\"cursor: pointer\">\r\n        <div id=\"borderp\"></div>\r\n      </div>\r\n      <div id=\"an6\" (click)=\"ocultarestrella()\" style=\"cursor: pointer\">\r\n        <div id=\"borderestrella\"></div>\r\n      </div>\r\n      <div id=\"an7\" (click)=\"ocultarcangre()\" style=\"cursor: pointer\">\r\n        <div id=\"bordercangre\"></div>\r\n      </div>\r\n      <div id=\"an8\" (click)=\"ocultarlabrido()\" style=\"cursor: pointer\">\r\n        <div id=\"borderlabrido\"></div>\r\n      </div>\r\n  </body>\r\n\r\n  <div id=\"fondoJuego\" (click)=\"cerrarGanador()\" style=\"display: none\">\r\n    <!--  style=\"display: none\" -->\r\n    <div id=\"msg2\" style=\"display: none\">\r\n      <h5  id =\"numero\" class=\"center-align\">Exelente, Has encontrado todos los animales!</h5>\r\n      <img id= \"tortuga\" src=\"../../../assets/images/oceanojuego/tortuga2.gif\">\r\n      <div class=\"col offset-m4\">\r\n          <a class=\"waves-effect waves-light btn\" (click)=\"cerrarGanador()\"><i class=\"material-icons left\">thumb_up</i>OK!</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s4 m4 l4\"> \r\n        <a routerLink=\"/oceano\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4 center-align\"> \r\n        <a href=\"/juegoOceano\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">replay</i>Reiniciar </a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4\">\r\n        <a class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n            <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noAn>\r\n    <img id=\"icon\" src=\"/assets/images/x.png\" alt=\"\" class=\"circle responsive-img\">\r\n  </ng-template>\r\n"

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
        this.contador = 0;
        this.contador1 = 0;
        this.contador2 = 0;
        this.contador3 = 0;
        this.contador4 = 0;
        this.contador5 = 0;
        this.contador6 = 0;
        this.contador7 = 0;
        this.contador8 = 0;
    }
    ModuloJuegoOceanoComponent.prototype.ocultartortuga = function () {
        if (this.contador1 < 1) {
            this.contador1++;
            this.contador = this.contador + 1;
            document.getElementById('img1').style.display = 'none';
            document.getElementById('img11').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarpulpo = function () {
        if (this.contador2 < 1) {
            this.contador2++;
            this.contador++;
            document.getElementById('img2').style.display = 'none';
            document.getElementById('img22').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultaranguila = function () {
        if (this.contador3 < 1) {
            this.contador3++;
            this.contador++;
            document.getElementById('img3').style.display = 'none';
            document.getElementById('img33').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarcangrejo = function () {
        if (this.contador4 < 1) {
            this.contador4++;
            this.contador++;
            document.getElementById('img4').style.display = 'none';
            document.getElementById('img44').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarpezangel = function () {
        if (this.contador5 < 1) {
            this.contador5++;
            this.contador++;
            document.getElementById('img5').style.display = 'none';
            document.getElementById('img55').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarestrella = function () {
        if (this.contador6 < 1) {
            this.contador6++;
            this.contador++;
            document.getElementById('img6').style.display = 'none';
            document.getElementById('img66').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarcangre = function () {
        if (this.contador7 < 1) {
            this.contador7++;
            this.contador++;
            document.getElementById('img7').style.display = 'none';
            document.getElementById('img77').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ocultarlabrido = function () {
        if (this.contador8 < 1) {
            this.contador8++;
            this.contador++;
            document.getElementById('img8').style.display = 'none';
            document.getElementById('img88').style.display = 'block';
            this.ganar();
        }
    };
    ModuloJuegoOceanoComponent.prototype.ganar = function () {
        if (this.contador > 7) {
            document.getElementById('msg2').style.display = 'block';
            document.getElementById('fondoJuego').style.display = 'block';
        }
    };
    ModuloJuegoOceanoComponent.prototype.cerrarGanador = function () {
        document.getElementById('msg2').style.display = 'none';
        document.getElementById('fondoJuego').style.display = 'none';
    };
    ModuloJuegoOceanoComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
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

module.exports = "<h1 class=\"center\">¡Aprende del Océano!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n <div class=\"col s12 m6 l4 center\">\r\n   <a routerLink=\"/infoOceano\">\r\n     <img id=\"menu\" src=\"/assets/images/iconos/sabias4.gif\" class=\"circle responsive-img\">\r\n   </a>\r\n   <h5 class=\"center-align\">¿Sabías que...?</h5>\r\n </div>\r\n\r\n <div class=\"col s12 m6 l4 center\">\r\n  <a routerLink=\"/videoOceano\">\r\n     <img id=\"menu\" src=\"/assets/images/iconos/video2.gif\" class=\"circle responsive-img\">\r\n   </a>\r\n   <h5 class=\"center-align\">Videos</h5>\r\n </div>\r\n\r\n <div class=\"col s12 offset-m3 m6 l4 center\">\r\n     <a routerLink=\"/juegoOceano\">\r\n       <img id=\"menu\" src=\"/assets/images/iconos/juegos2.gif\" class=\"circle responsive-img\">\r\n     </a>\r\n     <h5 class=\"center-align\">Juegos</h5>\r\n   </div>\r\n</div>\r\n\r\n<a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n"

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

/***/ "./src/app/mod-oceano/modulo-video-oceano/modulo-video-oceano.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Aprendamos un poco más!</h1>\r\n\r\n<div  class=\"row\">\r\n\r\n  <div class=\"col s12 m12 l6 center\">\r\n      <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/B5zzAHlalbk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      <br><br>\r\n  </div>\r\n\r\n  <div class=\"col s12 m12 l6 center\">\r\n      <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/6UFu3fCvAxY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      <br><br>\r\n  </div>\r\n\r\n  <div class=\"col s12 m12 l6 center\">\r\n      <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/daw_Yg_u6Gw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      <br><br>\r\n  </div>\r\n\r\n  <div class=\"col s12 m12 l6 center\">\r\n      <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/9kXfZYXKys8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      <br><br>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n        <div class=\"col s6\">\r\n            <a routerLink=\"/oceano\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n                <i class=\"material-icons left\">reply</i>Regresar</a> \r\n        </div>\r\n        <div class=\"col s6\"> \r\n            <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n              <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n          </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mod-oceano/modulo-video-oceano/modulo-video-oceano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloVideoOceanoComponent; });
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

var ModuloVideoOceanoComponent = /** @class */ (function () {
    function ModuloVideoOceanoComponent() {
    }
    ModuloVideoOceanoComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloVideoOceanoComponent.prototype.ngOnInit = function () {
    };
    ModuloVideoOceanoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-video-oceano',
            template: __webpack_require__("./src/app/mod-oceano/modulo-video-oceano/modulo-video-oceano.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ModuloVideoOceanoComponent);
    return ModuloVideoOceanoComponent;
}());



/***/ }),

/***/ "./src/app/mod-selva/modulo-info-selva/modulo-info-selva.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¿Sabías que...?</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/selva/leon.gif\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">León</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El León</span>\r\n        <p>El león recibe el título del \"Rey de la Selva\".</p>\r\n        <p>No se alimentan de hierba, ni de frutos o vegetales, se alimentan únicamente de carne de otros animales, por lo tanto son carnívoros.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/selva/cebra.gif\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\" face= \"fuente\">Cebra</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>La Cebra</span>\r\n            <p>La cebra es un animal de piel negra con rayas blancas en todo su cuerpo, menos en el vientre.</p>\r\n            <p>Se alimenta principalmente de hierba, hojas, brotes, arbustos, ramas, cortezas y frutas.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/selva/elefante.gif\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Elefante</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Elefante</span>\r\n            <p>Los elefantes son los animales terrestres más grandes.</p>\r\n            <p>No pueden saltar pero les gusta mucho el agua y saben nadar.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n              <div class=\"card-image waves-effect waves-block waves-light\">\r\n                <img src=\"/assets/images/selva/jirafa.gif\" class=\"activator\">\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Jirafa</span>\r\n              </div>\r\n              <div class=\"card-reveal\">\r\n                <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>La Jirafa</span>\r\n                <p>Llega a medir hasta 6 metros de alto. Su cuello es muy largo, puede medir más de 2 metros.</p>\r\n                <p>Las jirafas tienen muy buen oído y vista, tienen una lengua muy fuerte y larga.</p>\r\n              </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <img src=\"/assets/images/selva/guepardo.gif\" class=\"activator\">\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Guepardo</span>\r\n          </div>\r\n          <div class=\"card-reveal\">\r\n            <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>EL Guepardo</span>\r\n            <p>El Guepardo es el animal más veloz sobre la tierra, alcanza una velocidad de 110 kilómetros por hora.</p>\r\n            <p>Tienen la agilidad de los gatos, se parece en su cabeza pequeña y redondeada, su pelo y su larga cola.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n            <div class=\"card-image waves-effect waves-block waves-light\">\r\n              <img src=\"/assets/images/selva/mono.gif\" class=\"activator\">\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Mono</span>\r\n            </div>\r\n            <div class=\"card-reveal\">\r\n              <span id=\"letra\" class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>El Mono</span>\r\n              <p>Los monos son pequeños, curiosos, inteligentes, muy graciosos y divertidos. </p>\r\n              <p>Su cuerpo generalmente es de color marrón pero también puede ser más oscuro.</p>\r\n            </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s6\">\r\n      <a routerLink=\"/selva\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n        <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n    <div class=\"col s6\"> \r\n        <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n          <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n      </div>\r\n</div>"

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
    ModuloInfoSelvaComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloInfoSelvaComponent.prototype.ngOnInit = function () {
        // Make Reveal animate up and display when mouseenter
        $(document).on('mouseenter.hover-reveal', '.hover-reveal', function (e) {
            $(e.target).closest('.card').css('overflow', 'hidden');
            $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
            $(this).find('.card-reveal').css({ display: 'block' })
                .velocity("stop", false)
                .velocity({ translateY: '-100%' }, { duration: 300,
                queue: false,
                easing: 'easeInOutQuad' });
        });
        // Make Reveal animate down and display none when mouseleave
        $(document).on('mouseleave.hover-reveal', '.hover-reveal', function (e) {
            $(this).find('.card-reveal').velocity({ translateY: 0 }, {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function () { $(this).css({ display: 'none' }); }
            });
            $(this).find('.card-content>span').attr('style', '');
        });
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

module.exports = "<h1 class=\"center\">Juguemos!</h1>\r\n\r\n<h4>Arrastra el nombre al animal correspondiente</h4>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s10 m10 l10\">\r\n    <!--Droppable-->\r\n    <div id=\"cuadroselva\">\r\n\r\n      <body id=\"cuerposelva\">\r\n        <div id=\"pos1selva\" dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessOjo($event)\" >\r\n          <h5 id=\"numeroselva\" class=\"center-align\">1</h5>\r\n          <div id=\"borderselva\">\r\n            <div [hidden]=\"!receivedDataOjo.length > 0\" *ngFor=\"let data of receivedDataOjo; let last = last\" [ngClass]=\"{ last: last }\">\r\n              <div *ngIf=\"last\">\r\n                <div *ngIf=\"data.dragData.id==1;else noOrgano\">\r\n                  <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarOjo()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos2selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessDiente($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">2</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataDiente.length > 0\" *ngFor=\"let data of receivedDataDiente; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==2;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarDiente()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos3selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessPulmon($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">3</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataPulmon.length > 0\" *ngFor=\"let data of receivedDataPulmon; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==3;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarPulmon()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos4selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessHigado($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">4</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataHigado.length > 0\" *ngFor=\"let data of receivedDataHigado; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==4;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarHigado()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos5selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessPiel($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">5</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataPiel.length > 0\" *ngFor=\"let data of receivedDataPiel; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==5;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarPiel()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos6selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessCerebro($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">6</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataCerebro.length > 0\" *ngFor=\"let data of receivedDataCerebro; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==6;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarCerebro()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos7selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessCorazon($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">7</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataCorazon.length > 0\" *ngFor=\"let data of receivedDataCorazon; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==7;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarCorazon()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos8selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessEstomago($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">8</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataEstomago.length > 0\" *ngFor=\"let data of receivedDataEstomago; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==8;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarEstomago()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"pos9selva\">\r\n          <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessIntestino($event)\">\r\n            <h5 id=\"numeroselva\" class=\"center-align\">9</h5>\r\n            <div id=\"borderselva\">\r\n              <div [hidden]=\"!receivedDataIntestino.length > 0\" *ngFor=\"let data of receivedDataIntestino; let last = last\" [ngClass]=\"{ last: last }\">\r\n                <div *ngIf=\"last\">\r\n                  <div *ngIf=\"data.dragData.id==9;else noOrgano\">\r\n                    <img id=\"iconHumano\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarIntestino()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p>{{receivedDataGanador.length }}</p>\r\n        <div *ngIf=\"receivedDataGanador.length == 3\">\r\n          <div id=\"fondoJuego\" (click)=\"cerrarGanador()\">\r\n              <div id=\"msg\">\r\n                  <h5  id =\"numero\" class=\"center-align\">Bien hecho, has encontrado a los animales!</h5>\r\n                  <img id= \"cohete\" src=\"/assets/images/JuegoSelva/selvagano.gif\">\r\n                  <div class=\"col offset-m4\">\r\n                      <a class=\"waves-effect waves-light btn right\" (click)=\"cerrarGanador()\"><i class=\"material-icons left\">thumb_up</i>OK!</a>\r\n                  </div>\r\n                 </div>\r\n          </div>\r\n        </div>\r\n      </body>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s2 m2 l2\">\r\n    <!--Draggable-->\r\n    <div id=\"elementos\" class=\"row\">\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 5, src: '/assets/images/JuegoSelva/piel.JPG'}\">\r\n        <div id=\"div5\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/piel.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 7, src: '/assets/images/JuegoSelva/corazon.JPG'}\">\r\n        <div id=\"div7\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/corazon.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 4, src: '/assets/images/JuegoSelva/higado.JPG'}\">\r\n        <div id=\"div4\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/higado.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 6, src: '/assets/images/JuegoSelva/cerebro.JPG'}\">\r\n        <div id=\"div6\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/cerebro.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 3, src: '/assets/images/JuegoSelva/pulmon.JPG'}\">\r\n        <div id=\"div3\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/pulmon.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 2, src: '/assets/images/JuegoSelva/diente.JPG'}\">\r\n        <div id=\"div2\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/diente.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 8, src: '/assets/images/JuegoSelva/estomago.JPG'}\">\r\n        <div id=\"div8\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/estomago.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 1, src: '/assets/images/JuegoSelva/ojo.JPG'}\">\r\n        <div id=\"div1\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/ojo.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 9, src: '/assets/images/JuegoSelva/intestino.JPG'}\">\r\n        <div id=\"div10\" class=\"col s12 center-align\">\r\n          <img id=\"iconHumano\" src=\"/assets/images/JuegoSelva/intestino.JPG\" class=\"circle responsive-img\">\r\n        </div>\r\n      </div>\r\n      <div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s4 m4 l4\"> \r\n      <a routerLink=\"/selva\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n        <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4 center-align\"> \r\n        <a href=\"/juegoSelva\" class=\"waves-effect waves-light btn center\">\r\n          <i class=\"material-icons left\">replay</i>Reiniciar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4\">\r\n        <a class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n            <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noOrgano>\r\n  <img id=\"iconHumano\" src=\"/assets/images/x.png\" alt=\"\" class=\"circle responsive-img\">\r\n</ng-template>"

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
        this.receivedDataOjo = [];
        this.receivedDataDiente = [];
        this.receivedDataPulmon = [];
        this.receivedDataHigado = [];
        this.receivedDataPiel = [];
        this.receivedDataCerebro = [];
        this.receivedDataCorazon = [];
        this.receivedDataEstomago = [];
        this.receivedDataIntestino = [];
        this.receivedDataGanador = [];
    }
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessOjo = function ($event) {
        this.receivedDataOjo.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessDiente = function ($event) {
        this.receivedDataDiente.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessPulmon = function ($event) {
        this.receivedDataPulmon.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessHigado = function ($event) {
        this.receivedDataHigado.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessPiel = function ($event) {
        this.receivedDataPiel.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessCerebro = function ($event) {
        this.receivedDataCerebro.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessCorazon = function ($event) {
        this.receivedDataCorazon.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessEstomago = function ($event) {
        this.receivedDataEstomago.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessIntestino = function ($event) {
        this.receivedDataIntestino.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.transferDataSuccessGanador = function ($event) {
        this.receivedDataGanador.push($event);
    };
    ModuloJuegoSelvaComponent.prototype.ocultarOjo = function () {
        document.getElementById('div1').style.display = 'none';
        document.getElementById("pos1Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarDiente = function () {
        document.getElementById('div2').style.display = 'none';
        document.getElementById("pos2Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarPulmon = function () {
        document.getElementById('div3').style.display = 'none';
        document.getElementById("pos3Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarHigado = function () {
        document.getElementById('div4').style.display = 'none';
        document.getElementById("pos4Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarPiel = function () {
        document.getElementById('div5').style.display = 'none';
        document.getElementById("pos5Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarCerebro = function () {
        document.getElementById('div6').style.display = 'none';
        document.getElementById("pos6Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarCorazon = function () {
        document.getElementById('div7').style.display = 'none';
        document.getElementById("pos7Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarEstomago = function () {
        document.getElementById('div8').style.display = 'none';
        document.getElementById("pos8Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.ocultarIntestino = function () {
        document.getElementById('div10').style.display = 'none';
        document.getElementById("pos10Humano").style.pointerEvents = "none";
    };
    ModuloJuegoSelvaComponent.prototype.cerrarGanador = function () {
        document.getElementById('msg').style.display = 'none';
        document.getElementById('fondoJuego').style.display = 'none';
    };
    ModuloJuegoSelvaComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
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

module.exports = "<h1 class=\"center\">¡Aprende de la Selva!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n <div class=\"col s12 m6 l4 center\">\r\n  <a routerLink=\"/infoSelva\">\r\n     <img id=\"menu\" src=\"/assets/images/iconos/sabias4.gif\" class=\"circle responsive-img\">\r\n   </a>\r\n   <h5 class=\"center-align\">¿Sabías que...?</h5>\r\n </div>\r\n\r\n <div class=\"col ss12 m6 l4 center\">\r\n  <a routerLink=\"/videoSelva\">\r\n     <img id=\"menu\" src=\"/assets/images/iconos/video2.gif\" class=\"circle responsive-img\">\r\n   </a>\r\n   <h5 class=\"center-align\">Videos</h5>\r\n </div>\r\n\r\n <div class=\"col s12 offset-m3 m6 l4 center\">\r\n     <a routerLink=\"/juegoSelva\">\r\n       <img id=\"menu\" src=\"/assets/images/iconos/juegos2.gif\" class=\"circle responsive-img\">\r\n     </a>\r\n     <h5 class=\"center-align\">Juegos</h5>\r\n   </div>\r\n</div>\r\n\r\n<a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n"

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

/***/ "./src/app/mod-selva/modulo-video-selva/modulo-video-selva.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Aprendamos un poco más!</h1>\r\n\r\n<div  class=\"row\">\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/YBw3u1c9Oic\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/cbmhRx6nQRE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/q52l7Y7v0UM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n  \r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/2k2IZceeytQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div> \r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n        <div class=\"col s6\">\r\n             <a routerLink=\"/selva\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n                <i class=\"material-icons left\">reply</i>Regresar</a>\r\n        </div>\r\n        <div class=\"col s6\"> \r\n            <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n              <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n          </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mod-selva/modulo-video-selva/modulo-video-selva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloVideoSelvaComponent; });
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

var ModuloVideoSelvaComponent = /** @class */ (function () {
    function ModuloVideoSelvaComponent() {
    }
    ModuloVideoSelvaComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloVideoSelvaComponent.prototype.ngOnInit = function () {
    };
    ModuloVideoSelvaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-video-selva',
            template: __webpack_require__("./src/app/mod-selva/modulo-video-selva/modulo-video-selva.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ModuloVideoSelvaComponent);
    return ModuloVideoSelvaComponent;
}());



/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-info-ss/modulo-info-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">\r\n  ¿Sabías que...?</h1>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/SistemaSolar.jpg\" width=\"250\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sistema Solar</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>El Sistema Solar</span>\r\n        <p>Se le llama Sistema Solar porque su centro es el Sol.</p>\r\n        <p>Tiene aproximadamente 4.5 o 4.6 miles de millones de años.</p>\r\n        <p>Consta de 8 planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno; y una estrella: El Sol.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Sol.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Sol</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>El Sol</span>\r\n        <p>Es una estrella y es el centro de nuestro sistema solar. Todos los planetas giran alrededor de él.</p>\r\n        <p>Tiene una temperatura de 6,000 grados centígrados, y una superficie de 6 billones de kilómetros cuadrados.</p>\r\n        <p>La mayor parte de la energía utilizada por los seres vivos procede del Sol.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Luna.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Luna</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>La Luna</span>\r\n        <p>La Luna es un satélite natural que gira en torno a la Tierra.</p>\r\n        <p>Tiene cuatro fases:luna nueva, cuarto creciente, luna llena y cuarto menguante.</p>\r\n        <p>Neil A. Armstrong fue el primer ser humano que pisó la superficie de la luna.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Mercurio.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Mercurio</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Mercurio</span>\r\n        <p>Es el planeta más pequeño del Sistema Solar y el más cercano al Sol.</p>\r\n        <p>Mide unos 5.000 kilómetros de diámetro.</p>\r\n        <p>La temperatura en la superficie de Mercurio iluminada por el Sol puede alcanzar los 430 grados centígrados.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Venus.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Venus</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Venus</span>\r\n        <p>Después del Sol, Venus es el lugar más caliente, su temperatura ronda los 450ºC.</p>\r\n        <p>Tiene un diámetro de 12.103,6 km2</p>\r\n        <p>Venus rota de forma sumamente lenta. Mientras que un día en la Tierra dura 24 horas, un día en Venus dura 243 días\r\n          terrestres.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Tierra.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Tierra</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Tierra</span>\r\n        <p>Es el único planeta en el que se ha podido constatar que hay vida.</p>\r\n        <p>Se formó hace aproximadamente 4.500 millones de años y cuenta con una temperatura media de unos 15ºC.</p>\r\n        <p>Cuenta con un satélite natural, la Luna, y es el único planeta que tiene agua en forma líquida en su superficie.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Marte.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Marte</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Marte</span>\r\n        <p>Tiene una coloración rojiza, debido a la gran cantidad de óxido de hierro en su superficie.</p>\r\n        <p>Tiene un diámetro de 6794,4 km2 y una temperatura media de –46ºC.</p>\r\n        <p>El robot Curiosity fue enviado desde la Tierra a Marte para realizar investigaciones.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Jupiter.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\" style=\"font-weight: bold;\">Júpiter</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\" style=\"font-weight: bold;\">\r\n          <i class=\"material-icons right\">close</i>Júpiter</span>\r\n        <p>Tiene un diámetro de 142,984 km2.</p>\r\n        <p>Tiene una temperatura media de -121,15ºC.</p>\r\n        <p>Es el planeta más grande del Sistema Solar.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Saturno.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\" style=\"font-weight: bold;\">Saturno</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\" style=\"font-weight: bold;\">\r\n          <i class=\"material-icons right\">close</i>Saturno</span>\r\n        <p>Los anillos de Saturno están hechos de pedazos de hielo y roca.</p>\r\n        <p>Es el segundo planeta más grande del sistema solar con un diámetro de 120,536 km2.</p>\r\n        <p>Tiene una temperatura media de -130,15ºC.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Urano.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Urano</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Urano</span>\r\n        <p>Tiene un diámetro de 51.118 km2.</p>\r\n        <p>Tiene una temperatura media de -205,2ºC.</p>\r\n        <p>Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Neptuno.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Neptuno</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Neptuno</span>\r\n        <p>Neptuno es oscuro, frío y muy ventoso.</p>\r\n        <p>Tiene un diámetro de 49.572 km2.</p>\r\n        <p>Tiene una temperatura media de -220ºC3.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4\">\r\n    <div class=\"card hover-reveal\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img src=\"/assets/images/planetas/Estrellas.gif\" width=\"243\" height=\"270\" class=\"activator\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span id=\"letra\" class=\"card-title activator grey-text text-darken-4 center\">Estrellas Fugaces</span>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span id=\"letra\" class=\"card-title grey-text text-darken-4\">\r\n          <i class=\"material-icons right\">close</i>Las Estrellas Fugaces</span>\r\n        <p>Son meteoros pequeños que al entrar a gran velocidad en la atmósfera de la Tierra se \"queman\"\r\n          por la fricción y producen el trazo luminoso en el cielo, estos se pueden observar en cualquier noche despejada.</p>\r\n        <p>El origen de estas partículas está en los cometas, que a su paso van perdiendo material y dejándolo atras.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col s6\">\r\n          <a routerLink=\"/sistemaSolar\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n            <i class=\"material-icons left\">reply</i>Regresar</a>\r\n      </div>\r\n      <div class=\"col s6\"> \r\n          <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n            <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n        </div>\r\n  </div>"

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
    ModuloInfoSsComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloInfoSsComponent.prototype.ngOnInit = function () {
        // Make Reveal animate up and display when mouseenter
        $(document).on('mouseenter.hover-reveal', '.hover-reveal', function (e) {
            $(e.target).closest('.card').css('overflow', 'hidden');
            $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
            $(this).find('.card-reveal').css({ display: 'block' })
                .velocity("stop", false)
                .velocity({ translateY: '-100%' }, { duration: 300,
                queue: false,
                easing: 'easeInOutQuad' });
        });
        // Make Reveal animate down and display none when mouseleave
        $(document).on('mouseleave.hover-reveal', '.hover-reveal', function (e) {
            $(this).find('.card-reveal').velocity({ translateY: 0 }, {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function () { $(this).css({ display: 'none' }); }
            });
            $(this).find('.card-content>span').attr('style', '');
        });
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

module.exports = "<h1 class=\"center\">Juguemos!</h1>\r\n\r\n<h4>Arrastre el planeta al lugar que corresponde</h4>\r\n\r\n<!--Draggable-->\r\n<div id=\"elementos\" class=\"row\">\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 5, src: '/assets/images/iconos/jupiterIcon.png'}\">\r\n    <div id=\"div5\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/jupiterIcon.png\" class=\"circle responsive-img\">\r\n      <div>Júpiter</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 7, src: '/assets/images/iconos/uranoIcon.png'}\">\r\n    <div id=\"div7\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/uranoIcon.png\" class=\"circle responsive-img\">\r\n      <div>Urano</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 4, src: '/assets/images/iconos/marteIcon.png'}\">\r\n    <div id=\"div4\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/marteIcon.png\" class=\"circle responsive-img\">\r\n      <div>Marte</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 6, src: '/assets/images/iconos/saturnoIcon.png'}\">\r\n    <div id=\"div6\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/saturnoIcon.png\" class=\"circle responsive-img\">\r\n      <div>Saturno</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 1, src: '/assets/images/iconos/mercurioIcon.png'}\">\r\n    <div id=\"div1\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/mercurioIcon.png\" class=\"circle responsive-img\">\r\n      <div>Mercurio</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 2, src: '/assets/images/iconos/venusIcon.png'}\">\r\n    <div id=\"div2\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/venusIcon.png\" class=\"circle responsive-img\">\r\n      <div>Venus</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 8, src: '/assets/images/iconos/neptunoIcon.png'}\">\r\n    <div id=\"div8\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/neptunoIcon.png\" class=\"circle responsive-img\">\r\n      <div>Neptuno</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"{id: 3, src: '/assets/images/iconos/tierraIcon.png'}\">\r\n    <div id=\"div3\" class=\"col s1 m1 l1\">\r\n      <img id=\"icon\" src=\"/assets/images/iconos/tierraIcon.png\" class=\"circle responsive-img\">\r\n      <div>Tierra</div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <div class=\"col s1\">\r\n      <div>\r\n        <br>\r\n      </div>\r\n      <div>\r\n        <br>\r\n      </div>\r\n      <div>\r\n        <br>\r\n      </div>\r\n      <div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Droppable-->\r\n\r\n<div id=\"cuadroJuego\">\r\n\r\n  <body id=\"cuerpo\">\r\n    <div id=\"pos1\" dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessMercurio($event)\">\r\n      <h5 id=\"numero\" class=\"center-align\">1</h5>\r\n      <div id=\"border\">\r\n        <div [hidden]=\"!receivedDataMercurio.length > 0\" *ngFor=\"let data of receivedDataMercurio; let last = last\" [ngClass]=\"{ last: last }\">\r\n          <div *ngIf=\"last\">\r\n            <div *ngIf=\"data.dragData.id==1;else noPlanet\">\r\n              <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarMercurio()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div id=\"pos2\" dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessVenus($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">2</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataVenus.length > 0\" *ngFor=\"let data of receivedDataVenus; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==2;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarVenus()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos3\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessTierra($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">3</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataTierra.length > 0\" *ngFor=\"let data of receivedDataTierra; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==3;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarTierra()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos4\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessMarte($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">4</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataMarte.length > 0\" *ngFor=\"let data of receivedDataMarte; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==4;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarMarte()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos5\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessJurpiter($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">5</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataJupiter.length > 0\" *ngFor=\"let data of receivedDataJupiter; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==5;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarJupiter()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos6\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessSaturno($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">6</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataSaturno.length > 0\" *ngFor=\"let data of receivedDataSaturno; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==6;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarSaturno()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos7\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessUrano($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">7</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataUrano.length > 0\" *ngFor=\"let data of receivedDataUrano; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==7;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarUrano()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"pos8\">\r\n      <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccessNeptuno($event)\">\r\n        <h5 id=\"numero\" class=\"center-align\">8</h5>\r\n        <div id=\"border\">\r\n          <div [hidden]=\"!receivedDataNeptuno.length > 0\" *ngFor=\"let data of receivedDataNeptuno; let last = last\" [ngClass]=\"{ last: last }\">\r\n            <div *ngIf=\"last\">\r\n              <div *ngIf=\"data.dragData.id==8;else noPlanet\">\r\n                <img id=\"icon\" src=\"{{data.dragData.src}}\" class=\"circle responsive-img\" (mouseenter)=\"ocultarNeptuno()\" (mouseenter)=\"transferDataSuccessGanador($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"receivedDataGanador.length == 8\">\r\n      <div id=\"fondoJuego\" (click)=\"cerrarGanador()\">\r\n          <div id=\"msg\">\r\n              <h5  id =\"numero\" class=\"center-align\">Bien hecho, has completado el sistema solar!</h5>\r\n              <img id= \"cohete\" src=\"/assets/images/planetas/cohete.gif\">\r\n              <div class=\"col offset-m4\">\r\n                  <a class=\"waves-effect waves-light btn\" (click)=\"cerrarGanador()\"><i class=\"material-icons left\">thumb_up</i>OK!</a>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s4 m4 l4\"> \r\n        <a routerLink=\"/sistemaSolar\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">reply</i>Regresar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4 center-align\"> \r\n        <a href=\"/juegoSistemaSolar\" class=\"waves-effect waves-light btn\">\r\n          <i class=\"material-icons left\">replay</i>Reiniciar</a>\r\n    </div>\r\n\r\n    <div class=\"col s4 m4 l4\">\r\n        <a class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n            <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #noPlanet>\r\n  <img id=\"icon\" src=\"/assets/images/x.png\" alt=\"\" class=\"circle responsive-img\">\r\n</ng-template>"

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
        this.receivedDataMercurio = [];
        this.receivedDataVenus = [];
        this.receivedDataTierra = [];
        this.receivedDataMarte = [];
        this.receivedDataJupiter = [];
        this.receivedDataSaturno = [];
        this.receivedDataUrano = [];
        this.receivedDataNeptuno = [];
        this.receivedDataGanador = [];
    }
    ModuloJuegoSsComponent.prototype.transferDataSuccessMercurio = function ($event) {
        this.receivedDataMercurio.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessVenus = function ($event) {
        this.receivedDataVenus.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessTierra = function ($event) {
        this.receivedDataTierra.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessMarte = function ($event) {
        this.receivedDataMarte.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessJurpiter = function ($event) {
        this.receivedDataJupiter.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessSaturno = function ($event) {
        this.receivedDataSaturno.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessUrano = function ($event) {
        this.receivedDataUrano.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessNeptuno = function ($event) {
        this.receivedDataNeptuno.push($event);
    };
    ModuloJuegoSsComponent.prototype.transferDataSuccessGanador = function ($event) {
        this.receivedDataGanador.push($event);
    };
    ModuloJuegoSsComponent.prototype.ocultarMercurio = function () {
        document.getElementById('div1').style.display = 'none';
        document.getElementById("pos1").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarVenus = function () {
        document.getElementById('div2').style.display = 'none';
        document.getElementById("pos2").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarTierra = function () {
        document.getElementById('div3').style.display = 'none';
        document.getElementById("pos3").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarMarte = function () {
        document.getElementById('div4').style.display = 'none';
        document.getElementById("pos4").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarJupiter = function () {
        document.getElementById('div5').style.display = 'none';
        document.getElementById("pos5").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarSaturno = function () {
        document.getElementById('div6').style.display = 'none';
        document.getElementById("pos6").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarUrano = function () {
        document.getElementById('div7').style.display = 'none';
        document.getElementById("pos7").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.ocultarNeptuno = function () {
        document.getElementById('div8').style.display = 'none';
        document.getElementById("pos8").style.pointerEvents = "none";
    };
    ModuloJuegoSsComponent.prototype.cerrarGanador = function () {
        document.getElementById('msg').style.display = 'none';
        document.getElementById('fondoJuego').style.display = 'none';
    };
    ModuloJuegoSsComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
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

module.exports = "<h1 class=\"center\">¡Aprende del Sistema Solar!</h1>\r\n<br>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col s12 m6 l4 center\">\r\n    <a routerLink=\"/infoSistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/sabias4.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">¿Sabías que...?</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 m6 l4 center\">\r\n    <a routerLink=\"/videoSistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/video2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">Videos</h5>\r\n  </div>\r\n\r\n  <div class=\"col s12 offset-m3 m6 l4 center\">\r\n    <a routerLink=\"/juegoSistemaSolar\">\r\n      <img id=\"menu\" src=\"/assets/images/iconos/juegos2.gif\" class=\"circle responsive-img\">\r\n    </a>\r\n    <h5 class=\"center-align\">Juegos</h5>\r\n  </div>\r\n</div>\r\n\r\n<a routerLink=\"/\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n"

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

/***/ "./src/app/mod-sistema-solar/modulo-video-ss/modulo-video-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">¡Aprendamos un poco más!</h1>\r\n\r\n<div  class=\"row\">\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/yg_A80TMhaM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/WZZvTo21smA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/UymxMp7j7Ps\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div>\r\n  \r\n    <div class=\"col s12 m12 l6 center\">\r\n        <iframe width=\"510\" height=\"315\" src=\"https://www.youtube.com/embed/ci3Mn8VGCuE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        <br><br>\r\n    </div> \r\n\r\n</div>  \r\n\r\n<div class=\"row\">\r\n        <div class=\"col s6\">\r\n                <a routerLink=\"/sistemaSolar\" id=\"btnBack\" class=\"waves-effect waves-light btn\">\r\n                  <i class=\"material-icons left\">reply</i>Regresar</a>\r\n        </div>\r\n        <div class=\"col s6\"> \r\n            <a id=\"btnBack\" class=\"waves-effect waves-light btn right\" (click)=\"topFunction()\">\r\n              <i class=\"material-icons left\">arrow_upward</i>Subir</a>\r\n          </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mod-sistema-solar/modulo-video-ss/modulo-video-ss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloVideoSsComponent; });
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

var ModuloVideoSsComponent = /** @class */ (function () {
    function ModuloVideoSsComponent() {
    }
    ModuloVideoSsComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    ModuloVideoSsComponent.prototype.ngOnInit = function () {
    };
    ModuloVideoSsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo-video-ss',
            template: __webpack_require__("./src/app/mod-sistema-solar/modulo-video-ss/modulo-video-ss.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ModuloVideoSsComponent);
    return ModuloVideoSsComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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