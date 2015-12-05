# vstickjs
VStickJS is simple graphics library built on top of CreateJS with HTML5, CSS and Javascript. It has a UIComponent called (VSComponent) that allows developers to quickly create and manipulate vector graphics with ease to improve workflow and also has a ready made virtual joystick for game developers to integrate into their 2D or 3D games.  The workflow allows developers to easily import and manipulate (with properties) any vector graphics created in their favourite image editor like GIMP or Photoshop.

##### HOW TO CREATE A VIRTUAL JOYSTICK  
---
##### STEPS  
1. Create a canvas element  
2. Create cage shape(s)  
3. Create knob shape(s)  
4. Add to joystick  
5. Update joytick on every frame  
6. Update stage on every frame  

---
*Create a canvas element*   
```html
<script>
	var canvas = document.getElementById("vstick-canvas");
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
</script>
```
*Create a stage*  
```html
<script>
	var canvasStage = new createjs.Stage("vstick-canvas");
</script>
```
*Create your vector shapes*  
```html
<script>
// ARROWS SHAPE
	var arrowsComp = new VStickJS.Core.VSComponent();
	arrowsComp.actualWidth = 450;
	arrowsComp.actualHeight = 451;
	arrowsComp.width = 140;
	arrowsComp.height = 140;
	arrowsComp.rotation = 0;
	arrowsComp.backgroundColor = "#333";
	arrowsComp.graphics = "vstickJSArrows1";
	var arrowsParent = arrowsComp.draw();
	arrowsParent.regX = 140 / 2;
	arrowsParent.regY = 140 / 2;
</script>
```

```html
<script>
	// CAGE SHAPE
	var cage = new VStickJS.Core.VSComponent();
	cage.width = 150;
	cage.height = 150;
	cage.backgroundColor = "rgba(0, 0, 0, 0.1)";
	cage.borderWidth = 4;
	cage.borderColor = "rgba(0, 0, 0, 0.1)";
	cage.graphics = "vstickJSCage";
	var cageParent1 = cage.draw();
	cageParent1.regX = 150 / 2;
	cageParent1.regY = 150 / 2;
</script>
```

```html
<script>
	// CAGE SHAPE
	var cage2 = new VStickJS.Core.VSComponent();
	cage2.width = 100;
	cage2.height = 100;
	cage2.radialGradient = [["#F00","#00F"], [0, 1], [100, 100, 0, 100, 100, 200]];
	cage2.graphics = "vstickJSCage";
	var cageParent2 = cage2.draw();
	cageParent2.regX = 100 / 2;
	cageParent2.regY = 100 / 2;
</script>
```

```html
<script>
	// ADD CAGES TO CONTAINER
	var cageParent = new createjs.Container();
	cageParent.addChild(cageParent1, cageParent2);
</script>
```

```html
<script>
// KNOB SHAPE
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
</script>
```

##### ADD JOYSTICK  
*Add all created shapes to joystick class*

```html
<script>
	// JOYSTICK
	var joystickManager = new VStickJS.Controls.JoyStick(canvasStage);
	joystickManager.joystickPosY = window.innerHeight - 150;
	joystickManager.setCageContainer(arrowsParent);
	joystickManager.setCage(cageParent);
	joystickManager.setKnob(knobParent);
	joystickManager.enableMouseEvent = true;
	joystickManager.draw();
</script>
```

```html
<script>
	// CREATE A PLAYER SHAPE
	var player = new createjs.Shape();
	player.graphics.beginFill("DeepSkyBlue").drawCircle(450, 50, 10);
	canvasStage.addChild(player);
</script>
```

```html
<script>
	// ADD AN UPDATE FUNCTION TO CREATEJS TICKER TO UPDATE PLAYER POSITION
	// CALL JOYSTICK UPDATE FUNCTION
	// CALL STAGE UPDATE FUNCTION
	
	function updateHandler(event) {
		if (!event.paused) {
			player.x = joystickManager.moveX;
			player.y = joystickManager.moveY;
			joystickManager.update();
		  	canvasStage.update();
		}
	}
	
	createjs.Ticker.addEventListener("tick", updateHandler);
	createjs.Ticker.setFPS(60);
	createjs.Touch.disable(canvasStage);
</script>
```

*Joystick control properties*
```html
<script>
	joystickManager.moveX // returns x position value on screen relative to joystick-knob x position.
	joystickManager.moveY // returns y position value on screen relative to joystick-knob y position.
	joystickManager.angle // returns joystick-knob rotation angle value.
	joystickManager.horizontal // returns value between 1 and -1 when joystick-knob moves horizontally.
	joystickManager.vertical // returns value between 1 and -1 when joystick-knob moves vertically.
</script>
```  

---
##### HOW TO CREATE / ADD CUSTOM VECTOR SHAPES  

##### STEPS  
1. Create a vector shape in an image editor like GIMP or PHOTOSHOP  
2. Note the width and height of the vector shape. (Ideally 300px x 300px)  
3. Convert the vector to SVG  
4. Convert the SVG to HTML5 Canvas  
5. Copy and paste part of the converted canvas code to VStickJS skin.
6. Finally, use vector shape with VSComponent to create and manipulate the shape however you want.  

```html
<script>
	// SAMPLE SKIN CODE
	VStickJS.Skins.speechBubbleSkin = function(graphics) {
	    graphics.moveTo(262, 60);
	    graphics.bezierCurveTo(282, 20, 185, -17, 163, 23);
	    graphics.bezierCurveTo(149, -11, 61, -4, 69, 30);
	    graphics.bezierCurveTo(40, 8, -14, 45, 9, 85);
	    graphics.bezierCurveTo(-15, 108, 15, 173, 58, 154);
	    graphics.bezierCurveTo(71, 197, 149, 196, 168, 180);
	    graphics.bezierCurveTo(179, 195, 173, 204, 157, 214);
	    graphics.bezierCurveTo(182, 215, 194, 203, 207, 181);
	    graphics.bezierCurveTo(235, 181, 269, 169, 265, 141);
	    graphics.bezierCurveTo(309, 142, 304, 57, 262, 60);
	    return graphics;
	}
	
	var speechBubble = new VStickJS.Core.VSComponent();
	speechBubble.actualWidth = 296; // Be sure to set the actual width as the one in your image editor
	speechBubble.actualHeight = 214; // Be sure to set the actual height as the one in your image editor
	speechBubble.width = 50;
	speechBubble.height = 50;
	speechBubble.posX = 300;
	speechBubble.posY = 300;
	speechBubble.backgroundColor = "#FFC84B";
	speechBubble.graphics = "speechBubbleSkin"; // Use skin
	var speechBubbleContainer = speechBubble.draw();
	
	// Add to stage
	stage.addChild(speechBubbleContainer);
</script>
```
---

##### DEMO  
1. [Android tablet 3d demo](https://www.youtube.com/watch?v=TTioUd08Juk)  
2. [Android phone 3d demo](https://www.youtube.com/watch?v=zfDbuSbUSM0)  
3. [Android phone 3d demo](https://www.youtube.com/watch?v=aXL5Um3O8Hc)  
4. [Android phone 2d demo](https://www.youtube.com/watch?v=_w-ijTpcw4Y)  
5. [Browser demo](https://www.youtube.com/watch?v=twU7gJF4nXM)  