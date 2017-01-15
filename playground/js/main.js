
// sorted endpoint array for combind cubic bezier;
var endPoints = [];

// all beziers ready to draw
var bezierArr = [];


// access endPoint by id;
var endPointHub = {};

var startRight = new Controller(0,400);

var endLeft = new Controller(400,0);

var start = new EndPoint(0,400,null,startRight);
var end = new EndPoint(400,0,endLeft,null);

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

    var percentageX = finishEnd.x - startEnd.x;

    // not sure which one bigger
    var percentageY = Math.abs(finishEnd.y - startEnd.y);

    var bezierFunc = bezier(
        controllerOne.x/percentageX,
        1 - controllerOne.y/percentageY,
        controllerTwo.x/percentageX,
        1 - controllerTwo.y/percentageY
    )

    var requestX = (x - startEnd.x)/percentageX;

    var t = bezierFunc(requestX).t;
    var y = (1-bezierFunc(requestX).y)* 400;

    var point = bezierObj.calcWithT(t);

    var controls = bezierObj.getControls(t);

    return new EndPoint(
        x,
        y,
        controls.left,
        controls.right
    );
}