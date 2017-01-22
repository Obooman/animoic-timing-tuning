
// sorted endpoint array for combind cubic bezier;
var endPoints = [];

// all beziers ready to draw
var bezierArr = [];


// access endPoint by id;
var endPointHub = {};


// define the globle scale size
var size = 400;

var startRight = new Controller(0,size);

var endLeft = new Controller(size,0);

var start = new EndPoint(0,size,null,startRight);
var end = new EndPoint(size,0,endLeft,null);

var totalBezier = new Bezier(start,end);

endPoints.push(start);
endPoints.push(end);

/*
 * generate end point at bezier curve with given x;
 * @param bezierObj Bezier the bezier object
 * @prarm x number target x coord
 * @return endPoint EndPoint generated end point
 */

function getEndPointByGivenCubicBezierPointsAndTargetX(bezierObj,x){
    var {
        controllerOne,
        controllerTwo,
        startEnd,
        finishEnd
    } = bezierObj;

    // the scale of current bezier curve
    var deltaX = finishEnd.x - startEnd.x;
    var deltaY = Math.abs(startEnd.y - finishEnd.y);

    // not sure which one bigger
    // var percentageY = Math.abs(startEnd.y - finishEnd.y);

    var bezierFunc = bezier(
        (controllerOne.x - startEnd.x)/deltaX,
        (deltaY - (controllerOne.y - startEnd.y))/deltaY,
        (controllerTwo.x - startEnd.x)/deltaX,
        (deltaY - (controllerTwo.y - startEnd.y))/deltaY
    )

    var requestX = (x - startEnd.x)/deltaX;
    var result = bezierFunc(requestX);

    var t = result.t;

    var point = bezierObj.calcWithT(t);

    var controls = bezierObj.getControls(t);

    return new EndPoint(
        point.x,
        point.y,
        controls.left,
        controls.right
    );
}