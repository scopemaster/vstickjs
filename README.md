# vstickjs
VStickJS is simple graphics library built on top of CreateJS with HTML5, CSS and Javascript. It has a UIComponent called (VSComponent) that allows developers to quickly create and manipulate vector graphics with ease to improve workflow and also has a ready made virtual joystick for game developers to integrate into their 2D or 3D games.  The workflow allows developers to easily import and manipulate (with properties) any vector graphics created in their favourite image editor like GIMP or Photoshop.

###HOW TO CREATE A VIRTUAL JOYSTICK

*Create a canvas element*   
```
var canvas = document.getElementById("vstick-canvas");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
```
*Create a stage*  
```
var canvasStage = new createjs.Stage("vstick-canvas");
```
*Add your vector shapes*  
```
var arrowsComp = new VStickJS.Core.VSComponent();
arrowsComp.actualWidth = 450;
arrowsComp.actualHeight = 451;
arrowsComp.width = 140;
arrowsComp.height = 140;
arrowsComp.rotation = 0;
arrowsComp.backgroundColor = "#333";

arrowsComp.graphics = "vstickJSArrows1"; // @see vstickjs.skins.vscomponent.js
var arrowsParent = arrowsComp.draw();
arrowsParent.regX = 140 / 2;
arrowsParent.regY = 140 / 2;
```
