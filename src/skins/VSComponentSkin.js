/*!
* VStickJS
* Visit http://vstickjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2015 vstickjs.co.uk
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
// VSComponentSkin.js
// This file holds the vector graphics functions for the joystick.
// See doc on how to use these functions
//##############################################################################

'use strict';


/**
 * Returns custom shape - circle
 * @return {Graphics}
 * @see Graphics - CreateJS
 */
VStickJS.Skins.vstickJSCage = function(graphics) {
    graphics.moveTo(25, 0);
    graphics.bezierCurveTo(39, 0, 50, 11, 50, 25);
    graphics.bezierCurveTo(50, 39, 39, 50, 25, 50);
    graphics.bezierCurveTo(11, 50, 0, 39, 0, 25);
    graphics.bezierCurveTo(0, 11, 11, 0, 25, 0);
    return graphics;
}

/**
 * Returns custom shape - octagon
 * @return {Graphics}
 * @see Graphics - CreateJS
 */
VStickJS.Skins.vstickJSKnob = function(graphics) {
    graphics.moveTo(30, 179);
    graphics.lineTo(0, 104);
    graphics.lineTo(31, 30);
    graphics.lineTo(105, 0);
    graphics.lineTo(179, 31);
    graphics.lineTo(210, 105);
    graphics.lineTo(179, 179);
    graphics.lineTo(104, 210);
    graphics.lineTo(30, 179);
    return graphics;
}

/**
 * Returns custom shape - circle
 * @return {Graphics}
 * @see Graphics - CreateJS
 */
VStickJS.Skins.vstickJSButton = function(graphics) {
    graphics.moveTo(25, 0);
    graphics.bezierCurveTo(39, 0, 50, 11, 50, 25);
    graphics.bezierCurveTo(50, 39, 39, 50, 25, 50);
    graphics.bezierCurveTo(11, 50, 0, 39, 0, 25);
    graphics.bezierCurveTo(0, 11, 11, 0, 25, 0);
    return graphics;
}

/**
 * Returns custom shape - arrows
 * @return {Graphics}
 * @see Graphics - CreateJS
 */
VStickJS.Skins.vstickJSArrows1 = function(graphics) {
    graphics.moveTo(226, 1);
    graphics.bezierCurveTo(226, 1, 232, 7, 235, 13);
    graphics.bezierCurveTo(238, 18, 239, 23, 239, 24);
    graphics.bezierCurveTo(240, 25, 239, 26, 238, 26);
    graphics.bezierCurveTo(237, 26, 231, 25, 225, 25);
    graphics.bezierCurveTo(218, 25, 212, 26, 211, 26);
    graphics.bezierCurveTo(210, 26, 209, 25, 210, 24);
    graphics.bezierCurveTo(210, 23, 211, 18, 214, 13);
    graphics.bezierCurveTo(217, 7, 222, 2, 223, 1);
    graphics.bezierCurveTo(224, 0, 225, 0, 226, 1);
    
    graphics.moveTo(226, 449);
    graphics.bezierCurveTo(227, 449, 232, 443, 236, 438);
    graphics.bezierCurveTo(239, 432, 239, 427, 240, 427);
    graphics.bezierCurveTo(240, 425, 240, 424, 238, 424);
    graphics.bezierCurveTo(238, 424, 231, 425, 225, 425);
    graphics.bezierCurveTo(219, 425, 213, 424, 212, 424);
    graphics.bezierCurveTo(210, 424, 210, 426, 210, 427);
    graphics.bezierCurveTo(211, 427, 211, 433, 214, 438);
    graphics.bezierCurveTo(218, 443, 223, 449, 223, 449);
    graphics.bezierCurveTo(224, 450, 226, 450, 226, 449);
    
    graphics.moveTo(383, 384);
    graphics.bezierCurveTo(382, 384, 374, 384, 368, 383);
    graphics.bezierCurveTo(362, 381, 357, 378, 357, 377);
    graphics.bezierCurveTo(356, 377, 355, 376, 356, 375);
    graphics.bezierCurveTo(357, 374, 362, 371, 366, 366);
    graphics.bezierCurveTo(371, 362, 374, 357, 375, 356);
    graphics.bezierCurveTo(376, 355, 377, 356, 378, 357);
    graphics.bezierCurveTo(378, 358, 381, 362, 383, 368);
    graphics.bezierCurveTo(384, 374, 384, 381, 385, 382);
    graphics.bezierCurveTo(385, 383, 384, 385, 383, 384);
    
    graphics.moveTo(65, 68);
    graphics.bezierCurveTo(65, 68, 65, 76, 67, 82);
    graphics.bezierCurveTo(68, 88, 72, 93, 72, 93);
    graphics.bezierCurveTo(72, 94, 74, 95, 75, 94);
    graphics.bezierCurveTo(75, 93, 79, 88, 83, 84);
    graphics.bezierCurveTo(87, 79, 93, 76, 93, 75);
    graphics.bezierCurveTo(94, 74, 94, 73, 93, 72);
    graphics.bezierCurveTo(92, 72, 88, 69, 82, 67);
    graphics.bezierCurveTo(76, 66, 68, 66, 67, 66);
    graphics.bezierCurveTo(66, 65, 65, 66, 65, 68);
    
    graphics.moveTo(1, 224);
    graphics.bezierCurveTo(1, 224, 7, 218, 13, 215);
    graphics.bezierCurveTo(18, 212, 23, 211, 24, 211);
    graphics.bezierCurveTo(25, 210, 26, 211, 26, 212);
    graphics.bezierCurveTo(26, 213, 25, 219, 25, 225);
    graphics.bezierCurveTo(25, 231, 26, 237, 26, 238);
    graphics.bezierCurveTo(26, 240, 25, 240, 24, 240);
    graphics.bezierCurveTo(23, 239, 18, 239, 13, 236);
    graphics.bezierCurveTo(7, 233, 2, 227, 1, 227);
    graphics.bezierCurveTo(0, 226, 0, 225, 1, 224);
    
    graphics.moveTo(449, 224);
    graphics.bezierCurveTo(449, 223, 443, 218, 438, 214);
    graphics.bezierCurveTo(432, 211, 427, 211, 426, 210);
    graphics.bezierCurveTo(425, 210, 424, 210, 424, 212);
    graphics.bezierCurveTo(424, 212, 425, 219, 425, 225);
    graphics.bezierCurveTo(425, 231, 424, 237, 424, 238);
    graphics.bezierCurveTo(424, 239, 425, 240, 427, 239);
    graphics.bezierCurveTo(427, 239, 432, 238, 438, 235);
    graphics.bezierCurveTo(443, 232, 448, 227, 449, 226);
    graphics.bezierCurveTo(450, 226, 450, 224, 449, 224);
   
    graphics.moveTo(66, 383);
    graphics.bezierCurveTo(66, 382, 66, 374, 68, 368);
    graphics.bezierCurveTo(69, 362, 73, 358, 73, 357);
    graphics.bezierCurveTo(73, 356, 75, 356, 76, 357);
    graphics.bezierCurveTo(76, 357, 80, 362, 84, 367);
    graphics.bezierCurveTo(88, 371, 93, 374, 94, 375);
    graphics.bezierCurveTo(95, 376, 94, 378, 93, 378);
    graphics.bezierCurveTo(92, 378, 88, 381, 82, 383);
    graphics.bezierCurveTo(76, 385, 69, 385, 68, 385);
    graphics.bezierCurveTo(67, 385, 65, 384, 66, 383);
    
    graphics.moveTo(382, 66);
    graphics.bezierCurveTo(382, 66, 374, 66, 368, 67);
    graphics.bezierCurveTo(362, 69, 357, 72, 357, 72);
    graphics.bezierCurveTo(356, 73, 355, 74, 356, 75);
    graphics.bezierCurveTo(357, 75, 362, 79, 366, 83);
    graphics.bezierCurveTo(371, 88, 374, 93, 375, 93);
    graphics.bezierCurveTo(376, 94, 377, 94, 378, 93);
    graphics.bezierCurveTo(378, 92, 381, 88, 383, 82);
    graphics.bezierCurveTo(384, 76, 384, 68, 384, 68);
    graphics.bezierCurveTo(385, 66, 384, 65, 382, 66);
    
    return graphics;
}
