class Bezier {
    constructor(endPointOne,endPointTwo) {
        this.points = [endPointOne,endPointTwo];

        this.startEnd = endPointOne;
        this.finishEnd = endPointTwo;

        this.controllerOne = endPointOne.rightCtl;
        this.controllerTwo = endPointTwo.leftCtl;
    }

    toString() {
        var {
            points:[
            	left,right
            ]
        } = this;

        return `C ${
        	left.rightCtl.x
        },${
        	left.rightCtl.y
        } ${
        	right.leftCtl.x
        },${
        	right.leftCtl.y
        } ${
        	right.x
        },${
        	right.y
        }`
    }

    calcWithT(t){
    	var {
    	    points:[
    	    	left,right
    	    ]
    	} = this;

    	return {
    		x:this._getCoords(
    			left.x,
    			left.rightCtl.x,
    			right.leftCtl.x,
    			right.x,
			t),
    		y:this._getCoords(
    			left.y,
    			left.rightCtl.y,
    			right.leftCtl.y,
    			right.y,
    		t)
    	}
    }

    _getCoords(p0,p1,p2,p3,t){

    	// B(t) = P0(1-t)³ + 3P1t(1-t)² + 3P2t²(1-t) + P3t³

    	return (
    		p0*pow(1-t,3) + 
    		p1*3*t*pow(1-t,2) + 
    		p2*3*pow(t,2)*(1-t) + 
    		p3*pow(t,3)
    	)
    }

    getControls(t){
    	return this._getControlPointForT(t);
    }

    _getControlPointForT(t){

    	var {
    		controllerOne,
    		controllerTwo,
    		startEnd,
    		finishEnd
    	} = this;

    	var Q0 = new Point(
    		startEnd.x + t*(controllerOne.x - startEnd.x),
    		startEnd.y + t*(controllerOne.y - startEnd.y)
		);

    	var Q1 = new Point(
    		controllerOne.x + t*(controllerTwo.x - controllerOne.x),
    		controllerOne.y + t*(controllerTwo.y - controllerOne.y)
		);

    	var Q2 = new Point(
    		controllerTwo.x + t*(finishEnd.x - controllerTwo.x),
    		controllerTwo.y + t*(finishEnd.y - controllerTwo.y)
		);

    	var A0 = new Controller(
    		Q0.x + t*(Q1.x - Q0.x),
    		Q0.y + t*(Q1.y - Q0.y)
		)

    	var A1 = new Controller(
    		Q1.x + t*(Q2.x - Q1.x),
    		Q1.y + t*(Q2.y - Q1.y)
    	)

    	return {
    		left:A0,
    		right:A1
    	}
    }
}
