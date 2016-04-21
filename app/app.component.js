System.register(['angular2/core', './item-detail.component', './main-menu.component', './footer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_detail_component_1, main_menu_component_1, footer_component_1;
    var AppComponent, ITEMS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_detail_component_1_1) {
                item_detail_component_1 = item_detail_component_1_1;
            },
            function (main_menu_component_1_1) {
                main_menu_component_1 = main_menu_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Programming Tech';
                    this.location = 'Milano,Italy';
                    this.items = ITEMS;
                }
                AppComponent.prototype.onSelect = function (item) { this.selectedItem = item; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<main-menu-detail></main-menu-detail>\n    \t\t\t<h1>Welcome to {{title}}</h1>\n    \t\t\t\n    \t\t\t <h2>Courses offered</h2>\n\t\t\t\t<ul class=\"items\">\n\t\t\t\t  <li *ngFor=\"#item of items\" \n\t\t\t\t   [class.selected]=\"item === selectedItem\"\n\t\t\t\t   (click)=\"onSelect(item)\" >\n\t\t\t\t    <!-- each hero goes here -->\n\t\t\t\t      <span class=\"badge\">{{item.id}}</span>  {{item.name}}\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t\t<my-item-detail [item]=\"selectedItem\"></my-item-detail>\n\t\t\t\t<footer-detail></footer-detail>\n\n    \t\t  ",
                        styles: ["\n\t\t\t  .selected {\n\t\t\t    background-color: #999 !important;\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .items {\n\t\t\t    margin: 0 0 2em 0;\n\t\t\t    list-style-type: none;\n\t\t\t    padding: 0;\n\t\t\t    width: 15em;\n\t\t\t  }\n\t\t\t  .items li {\n\t\t\t    cursor: pointer;\n\t\t\t    position: relative;\n\t\t\t    left: 0;\n\t\t\t    background-color: #3E8BC3;\n\t\t\t    margin: .5em;\n\t\t\t    padding: .3em 0;\n\t\t\t    height: 1.6em;\n\t\t\t    border-radius: 0px;\n\t\t\t    color: #fff;\n\t\t\t  }\n\t\t\t  .items li.selected:hover {\n\t\t\t    background-color: #BBD8DC !important;\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .items li:hover {\n\t\t\t    color: #607D8B;\n\t\t\t    background-color: #DDD;\n\t\t\t    left: .1em;\n\t\t\t  }\n\t\t\t  .items .text {\n\t\t\t    position: relative;\n\t\t\t    top: -3px;\n\t\t\t  }\n\t\t\t  .items .badge {\n\t\t\t    display: inline-block;\n\t\t\t    font-size: small;\n\t\t\t    color: white;\n\t\t\t    padding: 0.8em 0.7em 0 0.7em;\n\t\t\t    background-color: #424242;\n\t\t\t    line-height: 1em;\n\t\t\t    position: relative;\n\t\t\t    left: -1px;\n\t\t\t    top: -4px;\n\t\t\t    height: 1.8em;\n\t\t\t    margin-right: .8em;\n\t\t\t    border-radius: 4px 0 0 4px;\n\t\t\t  }\n\t\t\t"],
                        directives: [item_detail_component_1.ItemDetailComponent, footer_component_1.FooterComponent, main_menu_component_1.MainMenuComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ITEMS = [
                { id: 1, name: 'PHP' },
                { id: 2, name: 'C++' },
                { id: 3, name: 'c#' },
                { id: 4, name: 'Angular 1' },
                { id: 5, name: 'Angular 2' },
                { id: 6, name: 'Bootstrap' },
                { id: 7, name: 'Lisp' },
                { id: 8, name: 'VB6' },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map