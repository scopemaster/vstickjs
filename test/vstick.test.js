'use strict';

/**
 * Demo on how to use the Joystick class 
 */

// CANVAS
var canvas = document.getElementById("vstick-canvas");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);


// STAGE
var canvasStage = new createjs.Stage("vstick-canvas");


// ARROW GRAPHICS
var arrowsComp = new VStickJS.Core.VSComponent();
arrowsComp.actualWidth = 450;
arrowsComp.actualHeight = 451;
arrowsComp.width = 140;
arrowsComp.height = 140;
arrowsComp.rotation = 0;
arrowsComp.backgroundColor = "#333";

// @see vstickjs.skins.vscomponent.js
arrowsComp.graphics = "vstickJSArrows1";


var arrowsParent = arrowsComp.draw();
arrowsParent.regX = 140 / 2;
arrowsParent.regY = 140 / 2;


// CAGE GRAPHICS
var cage = new VStickJS.Core.VSComponent();
cage.width = 150;
cage.height = 150;
// cage.backgroundColor = "#7D9C8D";
cage.backgroundColor = "rgba(0, 0, 0, 0.1)";
// cage.strokeStyle = [1];
cage.borderWidth = 4;
cage.borderColor = "rgba(0, 0, 0, 0.1)";
//cage.displayShadow = true;
cage.graphics = "vstickJSCage";
var cageParent1 = cage.draw();
cageParent1.regX = 150 / 2;
cageParent1.regY = 150 / 2;


var cage2 = new VStickJS.Core.VSComponent();
cage2.width = 100;
cage2.height = 100;
//cage2.backgroundColor = "#FFFFFF";
cage2.radialGradient = [["#F00","#00F"], [0, 1], [100, 100, 0, 100, 100, 200]];
//cage2.linearGradient = [["#000","#F0F"], [0, 0.5], [0, 20, 0, 120]];
//cage2.alpha = 0.8;
cage2.graphics = "vstickJSCage";
var cageParent2 = cage2.draw();
cageParent2.regX = 100 / 2;
cageParent2.regY = 100 / 2;



var cageParent = new createjs.Container();
cageParent.addChild(cageParent1, cageParent2);


// KNOB GRAPHICS
var knob = new VStickJS.Core.VSComponent();
knob.actualWidth = 210;
knob.actualHeight = 210;
knob.width = 50;
knob.height = 50;
knob.backgroundColor = "#FFC84B";
knob.graphics = "vstickJSKnob";

var knobParent = knob.draw();
knobParent.regX = 50 / 2;
knobParent.regY = 50 / 2;


// JOYSTICK MANAGER
var joystickManager = new VStickJS.Controls.JoyStick(canvasStage);
joystickManager.joystickPosY = window.innerHeight - 150;

joystickManager.setCageContainer(arrowsParent);
joystickManager.setCage(cageParent);
joystickManager.setKnob(knobParent);
joystickManager.enableMouseEvent = true;
joystickManager.draw();


// PLAYER GRAPHICS
var circle2 = new createjs.Shape();
circle2.graphics.beginFill("DeepSkyBlue").drawCircle(450, 50, 10);
canvasStage.addChild(circle2);


/**
 * [handleTick create stage tick handler
 * @param  {Object} event
 * @see <a href="http://www.createjs.com/"></a>
 * @see <a href="http://createjs.com/docs/easeljs/classes/Stage.html"></a>
 */
function handleTick(event) {
	if (!event.paused) {
		
		circle2.x = joystickManager.moveX;
		circle2.y = joystickManager.moveY;
		joystickManager.update();
	    canvasStage.update();
	}
}

createjs.Ticker.addEventListener("tick", handleTick);
//createjs.Ticker.paused = this.enableFramesUpdate;
createjs.Ticker.setFPS(60);
createjs.Touch.disable(canvasStage);


