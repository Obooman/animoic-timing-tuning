class EndPoint extends Point{

	constructor(x,y,leftCtl,rightCtl) {
		super(x,y);

		if( leftCtl ) {
			leftCtl.endPoint = this;

			leftCtl.deltaX = leftCtl.x - this.x;
			leftCtl.deltaY = leftCtl.y - this.y;
		}

		if( rightCtl ){
			rightCtl.endPoint = this;

			rightCtl.deltaX = rightCtl.x - this.x;
			rightCtl.deltaY = rightCtl.y - this.y;
		}

		this.leftCtl = leftCtl
		this.rightCtl = rightCtl

		this.movable = true;
		this.id = getRndStr();
	}

	getDeltaX(){
		var {
			x,leftCtl,rightCtl
		} = this;

		return {
			left: x - leftCtl.x,
			right: rightCtrl - x
		}
	}
}