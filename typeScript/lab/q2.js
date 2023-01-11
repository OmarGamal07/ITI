var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.displaylength = function (p, p2) {
        var xline = Math.pow((p.x - p2.x), 2);
        var yline = Math.pow((p.y - p2.y), 2);
        return Math.sqrt(xline + yline);
    };
    return point;
}());
var po = new point(2, 3);
var po2 = new point(6, 5);
console.log(point.displaylength(po, po2));
