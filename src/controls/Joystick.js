/*!
* VStickJS
* Visit http://vstickjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2015 vstickjs.com
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

//##############################################################################
// JoyStick.js
// Joystick class for 2d and 3d mobile game development
//##############################################################################


'use strict';

// Global Properties
VStickJS.Global.JoystickProperty = {
	isDragging: false,
	joyStickMouseX: 0
}

/**
 * Creates a new instance of class JoyStick
 * @class JoyStick
 * @constructor JoyStick
 * @param {Class} _stage - stage class from CreateJS
 * @see CreateJS - http://www.createjs.com/
 */
VStickJS.Controls.JoyStick = function(_stage) {

	/**
	 * A property that holds a reference to the stage class from CreateJS
	 * @property stage
	 * @type {Stage}
	 * @default undefined
	 */
	this.stage = _stage;
	
	/**
	 * Set property to true or false to enable or disable mouse event
	 * @property enableMouseEvent
	 * @type {Boolean}
	 * @default false
	 */
	this.enableMouseEvent = false;

	/**
	 * Set property to true or false to enable or disable touch event
	 * @property enableTouchEvent
	 * @type {Boolean}
	 * @default false
	 */
	this.enableTouchEvent = false;

	/**
	 * Cage display object section of the joystick
	 * If there is a need to use this property, then make sure to call after [update] function
	 * @property cage
	 * @type {DisplayObject}
	 * @default null
	 */
	this.cage = null;

	/**
	 * Knob display object section of the joystick
	 * If there is a need to use this property, then make sure to call after [update] function
	 * @property knob
	 * @type {DisplayObject}
	 * @default null
	 */
	this.knob = null;

	/**
	 * Extra Cage container display object for adding more graphic to the joystick
	 * If there is a need to use this property, then make sure to call after [update] function
	 * @property cageContainer
	 * @type {DisplayObject}
	 * @default null
	 */
	this.cageContainer = null;

	/**
	 * Extra Knob container display object for adding more graphic to the joystick
	 * If there is a need to use this property, then make sure to call after [update] function
	 * @property knobContainer
	 * @type {DisplayObject}
	 * @default null
	 */
	this.knobContainer = null;

	/**
	 * Display object container holding the entire joystick graphics
	 * If there is a need to use this property, then make sure to call after [update] function
	 * @property joystick
	 * @type {DisplayObject}
	 * @default null
	 */
	this.joystick = null;
	
	/**
	 * container y position on screen
	 * @property joystickPosX
	 * @type {Number}
	 * @default 150
	 * @see {joystick}
	 */
	this.joystickPosX = 150;

	/**
	 * container x position on screen
	 * @property joystickPosY
	 * @type {Number}
	 * @default 150
	 */
	this.joystickPosY = 150;
	
	/**
	 * returns the x position value on screen
	 * @property moveX
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.moveX = 0;

	/**
	 * returns the y position value on screen
	 * @property moveY
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.moveY = 0;

	/**
	 * returns the vertical move value on the joystick
	 * @property vertical
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.vertical = 0;

	/**
	 * returns the horizontal move value on the joystick
	 * @property horizontal
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.horizontal = 0;

	/**
	 * @property startX
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.startX = 0;

	/**
	 * @property startY
	 * @type {Number}
	 * @default 0
	 * @readonly
	 */
	this.startY = 0;
	
	/**
	 * Holds the angular position of the knob on the joystick
	 * @property angle
	 * @type {Number}
	 * @default 0
	 * @see {joystick}
	 * @readonly
	 */
	this.angle = 0;
	
	/**
	 * determines how long it takes for the knob to return to it original position(center)
	 * @property delay
	 * @type {Number}
	 * @default 0.6
	 */
	this.delay = 0.6;

	/**
	 * 
	 * @property speedX
	 * @type {Number}
	 * @default 5
	 */
	this.speedX = 5;

	/**
	 * determines the rotation area radius of the knob
	 * @property radius
	 * @type {Number}
	 * @default 50
	 */
	this.radius = 50;

	/**
	 * determines the move tension on the knob when moving to it's default position
	 * note: currently bounces the knob before setting in it's default position
	 * @property tension
	 * @type {Number}
	 * @default 0.5
	 */
	this.tension = 0.5;

	/**
	 * determines the move speed value of the object controlled by the joystick
	 * @property moveSpeed
	 * @type {Number}
	 * @default 10
	 * @see {joystick}
	 */
	this.moveSpeed = 10;

	/**
	 * a flag for checking the state of the knob. Set to true if knob moves and false if not.
	 * @property isMoving
	 * @type {Boolean}
	 * @default false
	 */
	this.isMoving = false;
}

/**
 * Sets a cage property on the joystick
 * @param {VSComponent} _cage
 */
VStickJS.Controls.JoyStick.prototype.setCage = function(_cage) {
	this.cage = _cage;
}

/**
 * Sets a knob property on the joystick
 * @param {VSComponent} _knob
 */
VStickJS.Controls.JoyStick.prototype.setKnob = function(_knob) {
	this.knob = _knob;
}

/**
 * Sets a cageContainer property on the joystick
 * @param {[type]} _cage [description]
 */
VStickJS.Controls.JoyStick.prototype.setCageContainer = function(_cage2) {
	this.cageContainer = _cage2;
}

/**
 * Sets a knobContainer property on the joystick
 * @param {[type]} _knob [description]
 */
VStickJS.Controls.JoyStick.prototype.setKnobContainer = function(_knob2) {
	this.knobContainer = _knob2;
}

/**
 * Adds joystick graphics and its children to stage 
 * @see CreateJS
 */
VStickJS.Controls.JoyStick.prototype.draw = function() {

	if(this.cage !== null && this.knob !== null) {

		if(this.cageContainer !== null) {
			this.cageContainer.x = this.joystickPosX;
			this.cageContainer.y = this.joystickPosY;
			this.stage.addChild(this.cageContainer);
		}

		if(this.knobContainer !== null) {
			this.knobContainer.x = this.joystickPosX;
			this.knobContainer.y = this.joystickPosY;
			this.stage.addChild(this.knobContainer);
		}

		// JOYSTICK
		this.joystick = new createjs.Container();
		this.joystick.x = this.joystickPosX;
		this.joystick.y = this.joystickPosY;
			
		this.joystick.addChild(this.cage, this.knob);
		this.stage.addChild(this.joystick);
	
		this.startX = this.joystick.x;
		this.startY = this.joystick.y;

		// MOUSE EVENT HANDLERS
		if(this.enableMouseEvent === true) {
			this.joystick.addEventListener("mousedown", this.mouseDownHandler);
			this.joystick.addEventListener("pressup", this.pressUpHandler);
			this.joystick.addEventListener("pressmove", this.pressMoveHandler);
		}

		// TOUCH EVENT HANDLERS
		if(this.enableTouchEvent === true) {
			//TODO:
		}
	}
}

/**
 * Sets isDragging property to true if mouse down on joystick
 * @see CreateJS - MouseEvents
 */
VStickJS.Controls.JoyStick.prototype.mouseDownHandler = function() {
	VStickJS.Global.JoystickProperty.isDragging = true;
}

/**
 * Sets isDragging property to false if press up on joystick
 * @see CreateJS - MouseEvents
 */
VStickJS.Controls.JoyStick.prototype.pressUpHandler = function() {
	VStickJS.Global.JoystickProperty.isDragging = false;
}

/**
 * Sets joyStickMouseX property on joystick to the value of event.localX value
 * @param  {Object} evt
 * @see CreateJS - MouseEvents
 */
VStickJS.Controls.JoyStick.prototype.pressMoveHandler = function(evt) {
	VStickJS.Global.JoystickProperty.joyStickMouseX = evt.localX;
}

/**
 * Constructs the logic for the joystick.
 * must be called in an update frame function for joystick to work.
 */
VStickJS.Controls.JoyStick.prototype.update = function() {
	if(this.cage !== null && this.knob !== null) {
		if(VStickJS.Global.JoystickProperty.isDragging === true) {

			this.isMoving = true;
			this.angle = Math.atan2(this.stage.mouseY - this.startY, this.stage.mouseX - this.startX) / (Math.PI / 180);
			
			this.joystick.rotation = this.angle;
			this.knob.rotation = -this.angle;
			
			this.knob.x = VStickJS.Global.JoystickProperty.joyStickMouseX;

			if(this.knob.x > this.radius) {
				this.knob.x = this.radius;
			}
			
			this.moveX += Math.cos(this.angle * (Math.PI / 180)) * (this.knob.x / this.moveSpeed);
			this.moveY += Math.sin(this.angle * (Math.PI / 180)) * (this.knob.x / this.moveSpeed);

			this.horizontal = Math.cos(this.angle * (Math.PI / 180));
			this.vertical = Math.sin(this.angle * (Math.PI / 180));
		}
		else {
			this.isMoving = false;
			this.speedX = -this.knob.x * this.tension + (this.speedX * this.delay);
			this.knob.x += this.speedX;
			this.horizontal = 0;
			this.vertical = 0;
		}
	}
}
