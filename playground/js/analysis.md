The tuning pad will be split to several parts;

First I have given start point and end point;

Then I cound click on start or end point to show there control point,as is known to all start point has only right handler and end point has only left point;

The target path can be clicked to create a middle-point for more rich timing function customization,every point between start and end point(which is called 'middle-point') will have two control points,as they are both end point for the previous bezier curve and start point for the next curve.

As the tuing pad is a 't(ime)/p(ercentage)' function line, it meas that there is only one percentage with given t,so control points have there limitations:x coord value of control point won't less than start point's x value and won't more than end point's x value;

When control points be moved to change the curve,another control point will change too to keep the curve smooth in this point.If the Ctrl key has been pressed,another control point shouldn't act to the movement.

Double clicking can change the move active handler with middle points.default when we click down on the point and move mouse the point should follow our movement,after double clicking when we drag it we are draging control points.Double click again we will cancel the control point at this middle point,and the point will acting like a corner of polygons.

continuing.