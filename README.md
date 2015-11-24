# vstickjs
VStickJS is simple graphics library built on top of CreateJS with HTML5, CSS and Javascript. It has a UIComponent called (VSComponent) that allows developers to quickly create and manipulate vector graphics with ease to improve workflow and also has a ready made virtual joystick for game developers to integrate into their 2D or 3D games.  The workflow allows developers to easily import and manipulate (with properties) any vector graphics created in their favourite image editor like GIMP or Photoshop.

#####HOW TO CREATE A VIRTUAL JOYSTICK

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
```

```
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
```

```
// CAGE SHAPE
var cage2 = new VStickJS.Core.VSComponent();
cage2.width = 100;
cage2.height = 100;
cage2.radialGradient = [["#F00","#00F"], [0, 1], [100, 100, 0, 100, 100, 200]];
cage2.graphics = "vstickJSCage";
var cageParent2 = cage2.draw();
cageParent2.regX = 100 / 2;
cageParent2.regY = 100 / 2;
```

```
// ADD CAGES TO CONTAINER
var cageParent = new createjs.Container();
cageParent.addChild(cageParent1, cageParent2);
```

```
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
```


