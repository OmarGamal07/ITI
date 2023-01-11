var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rectangle = /** @class */ (function () {
    function rectangle(w, h) {
        this.w = w;
        this.h = h;
    }
    rectangle.prototype.CalcCircumference = function () {
        return 2 * this.w * this.h;
    };
    rectangle.WhoAmI = function () {
        return "iam rect";
    };
    return rectangle;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(length) {
        return _super.call(this, length, length) || this;
    }
    square.prototype.CalcCircumference = function () {
        return 2 * this.w * this.h;
    };
    square.WhoAmI = function () {
        return "iam square";
    };
    return square;
}(rectangle));
var rec = new rectangle(2, 2);
console.log(rec.CalcCircumference());
console.log(rectangle.WhoAmI());
var s = new square(2);
console.log(s.CalcCircumference());
console.log(square.WhoAmI());
