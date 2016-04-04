System.register(['angular2/core', './result', './page-speed'], function(exports_1, context_1) {
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
    var core_1, result_1, page_speed_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (result_1_1) {
                result_1 = result_1_1;
            },
            function (page_speed_1_1) {
                page_speed_1 = page_speed_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(pageSpeed) {
                    this.pageSpeed = pageSpeed;
                    this.hasResults = false;
                    this.readyResult = {};
                }
                AppComponent.prototype.onSubmit = function (url) {
                    var _this = this;
                    var urlVal = url.value;
                    this.pageSpeed.getResult(urlVal)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.hasResults = true;
                        // this.pageSpeed.setResult(data);
                        _this.readyResult = data;
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        console.log('Result Complete');
                    });
                    url.value = '';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n    <div class=\"row\" style=\"padding-top:3%\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"jumbotron\">\n          <form [hidden]=\"hasResults\" class=\"col-lg-8\" (ngSubmit)=\"onSubmit(inputUrl)\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" #inputUrl placeholder=\"Type a url...\"/>\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-default\">Go!</button>\n              </span>\n            </div>\n          </form>\n          <result [res]=\"readyResult\"></result>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
                        directives: [result_1.ResultComponent],
                        providers: [page_speed_1.PageSpeed]
                    }), 
                    __metadata('design:paramtypes', [page_speed_1.PageSpeed])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map