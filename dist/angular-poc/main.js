(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddEmployeeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEmployeeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEmployeeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Salary is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddEmployeeComponent {
    constructor(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            employee_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employee_age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employee_salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profile_image: []
        });
    }
    onSubmit() {
        this.apiService.addData(this.addForm.value)
            .subscribe(data => {
            if (data.status == "success") {
                alert("Employee Added sucessfully");
            }
            else {
                alert("Failed to add data");
            }
            this.router.navigate(['employees']);
        });
    }
}
AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) { return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AddEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEmployeeComponent, selectors: [["app-add-employee"]], decls: 21, vars: 4, consts: [[1, "col-md-6", "user-container"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "employee_name", "placeholder", "Employee Name", "name", "username", "id", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "age"], ["type", "number", "formControlName", "employee_age", "placeholder", "Age", "name", "age", "id", "age", 1, "form-control"], ["for", "salary"], ["type", "number", "formControlName", "employee_salary", "placeholder", "Salary", "name", "salary", "id", "salary", 1, "form-control"], [1, "btn", "btn-success"], [1, "alert", "alert-danger"]], template: function AddEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddEmployeeComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Employee Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddEmployeeComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddEmployeeComponent_div_13_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddEmployeeComponent_div_18_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("employee_name").touched && ctx.addForm.get("employee_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("employee_age").touched && ctx.addForm.get("employee_age").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("employee_salary").touched && ctx.addForm.get("employee_salary").invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".user-container[_ngcontent-%COMP%]{\r\n    left: 25% !important;\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWNvbnRhaW5lcntcclxuICAgIGxlZnQ6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-employee',
                templateUrl: './add-employee.component.html',
                styleUrls: ['./add-employee.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/edit-employee/edit-employee.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'employees', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"] },
    { path: 'add-employee', component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"] },
    { path: 'edit-employee', component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: '**', redirectTo: '/not-found' }
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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular-poc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 0, consts: [[1, "heading"], ["role", "main", 1, "content"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [1, "card-container", "placement"], [1, "card", "card-front"], [1, "card-body"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "card", "card-back"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "POC On Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hover : me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " POC on Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Mohammed Saad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["svg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n  .heading[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n    background-color: aliceblue;\r\n  }\r\n  .card-container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width:20rem;\r\n    perspective: 200rem;\r\n    \r\n}\r\n  .placement[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 90%;\r\n  left: 80%;\r\n}\r\n  .card-container[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%]{\r\n    transform: rotateX(180deg);\r\n}\r\n  .card-container[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%]{\r\n    transform: rotateX(0deg);\r\n    \r\n}\r\n  .card-back[_ngcontent-%COMP%]{\r\n    transform: rotateX(180deg);\r\n}\r\n  .card[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    border: 1px solid grey;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    transition: all 0.9s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    box-shadow: 3px 4px #888888;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCO0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDtFQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0VBRUE7SUFDSSx3QkFBd0I7O0FBRTVCO0VBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuICAuaGVhZGluZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDoyMHJlbTtcclxuICAgIHBlcnNwZWN0aXZlOiAyMDByZW07XHJcbiAgICBcclxufVxyXG5cclxuLnBsYWNlbWVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MCU7XHJcbiAgbGVmdDogODAlO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAuY2FyZC1mcm9udHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIgLmNhcmQtYmFja3tcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIFxyXG59XHJcbi5jYXJkLWJhY2t7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAzcHggNHB4ICM4ODg4ODg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/edit-employee/edit-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"],
        _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
        _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeeComponent"],
        _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_10__["EditEmployeeComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"],
                    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
                    _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeeComponent"],
                    _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_10__["EditEmployeeComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");







function DataTableComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions);
} }
class DataTableComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.isDataLoaded = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        console.log(this.options);
    }
    ngOnInit() {
        const scope = this;
        this.options.dataTableOptions.columns.push({ title: "Action", data: "id" });
        this.options.columnDefs = [
            {
                targets: 2,
                render: function (data, type, row) {
                    return `<span class="text-center">${data}</span>`;
                }
            },
            {
                targets: 3,
                render: function (data, type, row) {
                    return `<span class="text-center">${data}</span>`;
                }
            },
            {
                targets: 4,
                render: function (data, type, row) {
                    return `                        
          <button class="edit btn btn-primary" title = "Edit"> Edit </button>
          <button class="delete btn btn-danger" title = "Delete"> Delete </button>`;
                },
                fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).find('button.edit').on('click', () => {
                        console.log("edit", oData, "  ", sData);
                        //functions.openModalIPM(sData);
                        editData(oData);
                    });
                    $(nTd).find('button.delete').on('click', () => {
                        console.log("delete button clicked", oData);
                        deleteData(oData.id);
                    });
                }
            }
        ];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8,
            responsive: true,
            lengthChange: false,
            data: [],
            columns: this.options.dataTableOptions.columns,
            columnDefs: this.options.columnDefs,
        };
        this.apiService.getData(this.options.baseUrl + this.options.Get)
            .subscribe(result => {
            this.dtOptions.data = result.data;
            console.log(result.data);
            this.dtTrigger.next();
            this.isDataLoaded = true;
        });
        function editData(data) {
            localStorage.removeItem('empData');
            localStorage.setItem('empData', JSON.stringify(data));
            scope.router.navigate(['edit-employee']);
        }
        function deleteData(id) {
            console.log(id);
            scope.apiService.deleteData(scope.options.baseUrl + scope.options.delete, id)
                .subscribe(result => {
                if (result.message == "success") {
                    alert("Record has been deleted successfully..");
                }
                else {
                    alert("Failed to delete the record..");
                }
            });
        }
    }
    addemployee() {
        this.router.navigate(['add-employee']);
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], inputs: { options: "options" }, decls: 3, vars: 1, consts: [[1, "btn", "btn-primary", "placement", 3, "click"], ["datatable", "", "class", "row-border hover", 3, "dtOptions", 4, "ngIf"], ["datatable", "", 1, "row-border", "hover", 3, "dtOptions"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_Template_button_click_0_listener() { return ctx.addemployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_table_2_Template, 1, 1, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: [".placement[_ngcontent-%COMP%]{\r\n    margin-top: 52px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjZW1lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MnB4O1xyXG59XHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.css']
            }]
    }], function () { return [{ type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-employee/edit-employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EditEmployeeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditEmployeeComponent_div_0_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Employee Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Salary:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.editForm);
} }
class EditEmployeeComponent {
    constructor(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
        this.showForm = false;
    }
    ngOnInit() {
        this.employee = JSON.parse(localStorage.getItem('empData'));
        this.editForm = this.formBuilder.group({
            id: [],
            employee_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employee_age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employee_salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profile_image: []
        });
        this.editForm.setValue(this.employee);
        this.showForm = true;
    }
    onSubmit() {
        this.apiService.editData(this.editForm.value)
            .subscribe(data => {
            if (data.status == "success") {
                alert('Employee updated successfully.');
            }
            else {
                alert('Failed to update the data');
            }
            this.router.navigate(['employees']);
        });
        console.log(this.editForm.value);
    }
}
EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) { return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
EditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditEmployeeComponent, selectors: [["app-edit-employee"]], decls: 1, vars: 1, consts: [["class", "col-md-6 user-container", 4, "ngIf"], [1, "col-md-6", "user-container"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "employee_name", "placeholder", "Employee Name", "name", "username", "id", "name", 1, "form-control"], ["for", "age"], ["type", "number", "formControlName", "employee_age", "placeholder", "Age", "name", "age", "id", "age", 1, "form-control"], ["for", "salary"], ["type", "number", "formControlName", "employee_salary", "placeholder", "Salary", "name", "salary", "id", "salary", 1, "form-control"], [1, "btn", "btn-success"]], template: function EditEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditEmployeeComponent_div_0_Template, 18, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".user-container[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    left: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1lbXBsb3llZS9lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1lbXBsb3llZS9lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMjUlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-employee',
                templateUrl: './edit-employee.component.html',
                styleUrls: ['./edit-employee.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");





class EmployeeComponent {
    // dtOptions: DataTables.Settings = {};
    // dtTrigger: Subject<any> = new Subject();
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ngOnInit() {
        const scope = this;
        function deleteEmployee(id) {
            this.employeeId = id;
        }
        this.options = {
            baseUrl: 'http://dummy.restapiexample.com/api/v1/',
            Get: 'employees',
            edit: 'update/:id',
            add: "create",
            delete: "delete/",
            dataTableOptions: {
                columns: [
                    { title: "Id", data: "id", format: "number", visible: false },
                    { title: "Name", data: "employee_name", class: "text-center", format: "text" },
                    { title: "Age", data: "employee_age", class: "text-center", format: "number" },
                    { title: "Salary", data: "employee_salary", class: "text-center", format: "amount" }
                ]
            },
            events: {
                edited: function () { },
                added: function () { },
                deleted: function () { },
            }
        };
        //  function editEmployee(data:EmployeeModel) {
        //    scope.apiService.getData
        //   localStorage.removeItem('empData');
        //   localStorage.setItem('empData', JSON.stringify(data));
        //   this.router.navigate(['edit-employee']);
        // }
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "col-md-12", "placement"], [3, "options"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-data-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]], styles: [".placement[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 43%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhY2VtZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MyU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee',
                templateUrl: './employee.component.html',
                styleUrls: ['./employee.component.css']
            }]
    }], function () { return [{ type: _service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(function () {
            this.router.navigate(['/employees']);
        }.bind(this), 4000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "text-animation"], ["id", "logo", "width", "350", "height", "65", "viewBox", "0 0 314 49", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "path-1-outside-1", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "314", "height", "49", "fill", "black"], ["fill", "white", "width", "314", "height", "49"], ["d", "M63.2599 2.56802L50.1712 46.5582H43.562L33.0652 11.1515L22.1795 46.5582L15.6351 46.6213L3 2.56802H9.28517L19.1341 39.8682L30.0198 2.56802H36.6289L46.9962 39.7419L56.9099 2.56802H63.2599Z"], ["d", "M75.609 7.23843V21.9439H92.0671V26.6774H75.609V41.8247H94.011V46.5582H69.7126V2.50491H94.011V7.23843H75.609Z"], ["d", "M108.829 41.8878H124.64V46.5582H102.933V2.56802H108.829V41.8878Z"], ["d", "M128.698 24.5316C128.698 20.2398 129.692 16.3899 131.679 12.9818C133.666 9.53156 136.366 6.83871 139.778 4.90323C143.234 2.96774 147.057 2 151.247 2C156.172 2 160.47 3.15708 164.142 5.47125C167.813 7.78541 170.492 11.0673 172.176 15.317H165.113C163.861 12.6662 162.046 10.6255 159.671 9.19495C157.338 7.76438 154.53 7.04909 151.247 7.04909C148.094 7.04909 145.264 7.76438 142.759 9.19495C140.254 10.6255 138.288 12.6662 136.863 15.317C135.437 17.9257 134.724 20.9972 134.724 24.5316C134.724 28.0238 135.437 31.0954 136.863 33.7461C138.288 36.3548 140.254 38.3745 142.759 39.8051C145.264 41.2356 148.094 41.9509 151.247 41.9509C154.53 41.9509 157.338 41.2567 159.671 39.8682C162.046 38.4376 163.861 36.3969 165.113 33.7461H172.176C170.492 37.9537 167.813 41.2146 164.142 43.5288C160.47 45.8008 156.172 46.9369 151.247 46.9369C147.057 46.9369 143.234 45.9902 139.778 44.0968C136.366 42.1613 133.666 39.4895 131.679 36.0813C129.692 32.6732 128.698 28.8233 128.698 24.5316Z"], ["d", "M201.429 47C197.239 47 193.416 46.0533 189.96 44.1599C186.504 42.2244 183.761 39.5526 181.731 36.1445C179.744 32.6943 178.75 28.8233 178.75 24.5316C178.75 20.2398 179.744 16.3899 181.731 12.9818C183.761 9.53156 186.504 6.85975 189.96 4.96634C193.416 3.03085 197.239 2.06311 201.429 2.06311C205.662 2.06311 209.507 3.03085 212.963 4.96634C216.418 6.85975 219.14 9.51052 221.127 12.9187C223.114 16.3268 224.107 20.1978 224.107 24.5316C224.107 28.8654 223.114 32.7363 221.127 36.1445C219.14 39.5526 216.418 42.2244 212.963 44.1599C209.507 46.0533 205.662 47 201.429 47ZM201.429 42.014C204.582 42.014 207.412 41.2987 209.917 39.8682C212.466 38.4376 214.453 36.3969 215.878 33.7461C217.347 31.0954 218.081 28.0238 218.081 24.5316C218.081 20.9972 217.347 17.9257 215.878 15.317C214.453 12.6662 212.487 10.6255 209.982 9.19495C207.476 7.76438 204.625 7.04909 201.429 7.04909C198.232 7.04909 195.381 7.76438 192.876 9.19495C190.37 10.6255 188.383 12.6662 186.915 15.317C185.489 17.9257 184.776 20.9972 184.776 24.5316C184.776 28.0238 185.489 31.0954 186.915 33.7461C188.383 36.3969 190.37 38.4376 192.876 39.8682C195.424 41.2987 198.276 42.014 201.429 42.014Z"], ["d", "M277.702 2.88359V46.5582H271.806V13.9916L256.903 46.5582H252.756L237.788 13.9285V46.5582H231.891V2.88359H238.241L254.829 38.9846L271.417 2.88359H277.702Z"], ["d", "M293.598 7.23843V21.9439H310.056V26.6774H293.598V41.8247H312V46.5582H287.702V2.50491H312V7.23843H293.598Z"], ["d", "M63.2599 2.56802L50.1712 46.5582H43.562L33.0652 11.1515L22.1795 46.5582L15.6351 46.6213L3 2.56802H9.28517L19.1341 39.8682L30.0198 2.56802H36.6289L46.9962 39.7419L56.9099 2.56802H63.2599Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M75.609 7.23843V21.9439H92.0671V26.6774H75.609V41.8247H94.011V46.5582H69.7126V2.50491H94.011V7.23843H75.609Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M108.829 41.8878H124.64V46.5582H102.933V2.56802H108.829V41.8878Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M128.698 24.5316C128.698 20.2398 129.692 16.3899 131.679 12.9818C133.666 9.53156 136.366 6.83871 139.778 4.90323C143.234 2.96774 147.057 2 151.247 2C156.172 2 160.47 3.15708 164.142 5.47125C167.813 7.78541 170.492 11.0673 172.176 15.317H165.113C163.861 12.6662 162.046 10.6255 159.671 9.19495C157.338 7.76438 154.53 7.04909 151.247 7.04909C148.094 7.04909 145.264 7.76438 142.759 9.19495C140.254 10.6255 138.288 12.6662 136.863 15.317C135.437 17.9257 134.724 20.9972 134.724 24.5316C134.724 28.0238 135.437 31.0954 136.863 33.7461C138.288 36.3548 140.254 38.3745 142.759 39.8051C145.264 41.2356 148.094 41.9509 151.247 41.9509C154.53 41.9509 157.338 41.2567 159.671 39.8682C162.046 38.4376 163.861 36.3969 165.113 33.7461H172.176C170.492 37.9537 167.813 41.2146 164.142 43.5288C160.47 45.8008 156.172 46.9369 151.247 46.9369C147.057 46.9369 143.234 45.9902 139.778 44.0968C136.366 42.1613 133.666 39.4895 131.679 36.0813C129.692 32.6732 128.698 28.8233 128.698 24.5316Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M201.429 47C197.239 47 193.416 46.0533 189.96 44.1599C186.504 42.2244 183.761 39.5526 181.731 36.1445C179.744 32.6943 178.75 28.8233 178.75 24.5316C178.75 20.2398 179.744 16.3899 181.731 12.9818C183.761 9.53156 186.504 6.85975 189.96 4.96634C193.416 3.03085 197.239 2.06311 201.429 2.06311C205.662 2.06311 209.507 3.03085 212.963 4.96634C216.418 6.85975 219.14 9.51052 221.127 12.9187C223.114 16.3268 224.107 20.1978 224.107 24.5316C224.107 28.8654 223.114 32.7363 221.127 36.1445C219.14 39.5526 216.418 42.2244 212.963 44.1599C209.507 46.0533 205.662 47 201.429 47ZM201.429 42.014C204.582 42.014 207.412 41.2987 209.917 39.8682C212.466 38.4376 214.453 36.3969 215.878 33.7461C217.347 31.0954 218.081 28.0238 218.081 24.5316C218.081 20.9972 217.347 17.9257 215.878 15.317C214.453 12.6662 212.487 10.6255 209.982 9.19495C207.476 7.76438 204.625 7.04909 201.429 7.04909C198.232 7.04909 195.381 7.76438 192.876 9.19495C190.37 10.6255 188.383 12.6662 186.915 15.317C185.489 17.9257 184.776 20.9972 184.776 24.5316C184.776 28.0238 185.489 31.0954 186.915 33.7461C188.383 36.3969 190.37 38.4376 192.876 39.8682C195.424 41.2987 198.276 42.014 201.429 42.014Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M277.702 2.88359V46.5582H271.806V13.9916L256.903 46.5582H252.756L237.788 13.9285V46.5582H231.891V2.88359H238.241L254.829 38.9846L271.417 2.88359H277.702Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"], ["d", "M293.598 7.23843V21.9439H310.056V26.6774H293.598V41.8247H312V46.5582H287.702V2.50491H312V7.23843H293.598Z", "stroke", "white", "stroke-width", "4", "mask", "url(#path-1-outside-1)"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mask", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n}\r\n.text-animation[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: rgb(32,35,48) \r\n}\r\n#logo[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n   stroke-dasharray: 352.59; \r\n   stroke-dashoffset: 352.59;\r\n   animation: line-anim 2s ease forwards;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n   stroke-dasharray: 206.42; \r\n   stroke-dashoffset: 206.42;\r\n   animation: line-anim 2s ease forwards 0.3s;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n   stroke-dasharray: 131.39; \r\n   stroke-dashoffset: 131.39;\r\n   animation: line-anim 2s ease forwards 0.6s;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n   stroke-dasharray: 226.37;\r\n   stroke-dashoffset: 226.37;\r\n   animation: line-anim 2s ease forwards 0.9s;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n   stroke-dasharray: 251.26; \r\n   stroke-dashoffset: 251.26;\r\n   animation: line-anim 2s ease forwards 1.2s;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\r\n   stroke-dasharray: 332.29; \r\n   stroke-dashoffset: 332.29;\r\n   animation: line-anim 2s ease forwards 1.5s;\r\n}\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\r\n   stroke-dasharray: 206.42; \r\n   stroke-dashoffset: 206.42;\r\n   animation: line-anim 2s ease forwards 1.9s;\r\n}\r\n@keyframes line-anim{\r\n   to{\r\n       stroke-dashoffset: 0;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsK0JBQStCO0FBQ25DO0FBR0E7R0FDRyx3QkFBd0I7R0FDeEIseUJBQXlCO0dBQ3pCLHFDQUFxQztBQUN4QztBQUNBO0dBQ0csd0JBQXdCO0dBQ3hCLHlCQUF5QjtHQUN6QiwwQ0FBMEM7QUFDN0M7QUFDQTtHQUNHLHdCQUF3QjtHQUN4Qix5QkFBeUI7R0FDekIsMENBQTBDO0FBQzdDO0FBQ0E7R0FDRyx3QkFBd0I7R0FDeEIseUJBQXlCO0dBQ3pCLDBDQUEwQztBQUM3QztBQUNBO0dBQ0csd0JBQXdCO0dBQ3hCLHlCQUF5QjtHQUN6QiwwQ0FBMEM7QUFDN0M7QUFDQTtHQUNHLHdCQUF3QjtHQUN4Qix5QkFBeUI7R0FDekIsMENBQTBDO0FBQzdDO0FBQ0E7R0FDRyx3QkFBd0I7R0FDeEIseUJBQXlCO0dBQ3pCLDBDQUEwQztBQUM3QztBQUVBO0dBQ0c7T0FDSSxvQkFBb0I7R0FDeEI7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnRleHQtYW5pbWF0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLDM1LDQ4KSBcclxufVxyXG4jbG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuXHJcblxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcclxuICAgc3Ryb2tlLWRhc2hhcnJheTogMzUyLjU5OyBcclxuICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM1Mi41OTtcclxuICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgzKXtcclxuICAgc3Ryb2tlLWRhc2hhcnJheTogMjA2LjQyOyBcclxuICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwNi40MjtcclxuICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjNzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDQpe1xyXG4gICBzdHJva2UtZGFzaGFycmF5OiAxMzEuMzk7IFxyXG4gICBzdHJva2UtZGFzaG9mZnNldDogMTMxLjM5O1xyXG4gICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNnM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNSl7XHJcbiAgIHN0cm9rZS1kYXNoYXJyYXk6IDIyNi4zNztcclxuICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIyNi4zNztcclxuICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjlzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDYpe1xyXG4gICBzdHJva2UtZGFzaGFycmF5OiAyNTEuMjY7IFxyXG4gICBzdHJva2UtZGFzaG9mZnNldDogMjUxLjI2O1xyXG4gICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDEuMnM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNyl7XHJcbiAgIHN0cm9rZS1kYXNoYXJyYXk6IDMzMi4yOTsgXHJcbiAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMzIuMjk7XHJcbiAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMS41cztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCg4KXtcclxuICAgc3Ryb2tlLWRhc2hhcnJheTogMjA2LjQyOyBcclxuICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwNi40MjtcclxuICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxLjlzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbXtcclxuICAgdG97XHJcbiAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "placement"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This page was not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".placement[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:40%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYWNlbWVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo0MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://dummy.restapiexample.com/api/v1/';
        this.cors = 'https://cors-anywhere.herokuapp.com/';
    }
    getData(url) {
        return this.http.get(url);
    }
    addData(data) {
        return this.http.post(this.baseUrl + 'create', data);
    }
    editData(data) {
        return this.http.put(this.baseUrl + 'update/' + data.id, data);
    }
    deleteData(url, id) {
        return this.http.delete(this.cors + url + id.toString());
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular-poc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map