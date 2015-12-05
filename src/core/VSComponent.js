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
// VSComponent.js
// VSComponent class is a class object built on CreateJS to help create and manipulate
// vector shapes created in an image editor with the help of easey-to-use class properties.
//##############################################################################



/**
 * Creates a new instance of class VSComponent
 * @constructor
 * @class VStickJS/Core/VSComponent
 * @see <a href="http://www.createjs.com/docs/easeljs/classes/DisplayObject.html">CreateJS Doc</a>
 */
VStickJS.Core.VSComponent = function() {

    /**
     * Border padding value.
     * @property BORDER_WIDTH_PAD
     * @type {Number}
     * @const {Number}
     * @default 2
     * @readonly
     */
	this.BORDER_WIDTH_PAD = 2;

    /**
     * Class internal styling property.
     * @property style
     * @type {VStickJS.Styles.VSComponent}
     * @default Object
     * @readonly
     */
	this.style = VStickJS.Styles.VSComponent;
    	
    /**
     * ID of the component.
     * @property id
     * @type {Number}
     * @default random uid
     * @see createjs.UID
     */
	this.id = createjs.UID.get();

    /**
     * Name of the component.
     * @property name
     * @type {String}
     * @default "VSComponent_ + id"
     * @see {id}
     */
    this.name = "VSComponent_" + this.id;

    /**
     * Width of the component, in pixels.
     * @property width
     * @type {Number}
     * @default 0
     */
    this.width = 0;

    /**
     * Height of the component, in pixels.
     * @property height
     * @type {Number}
     * @default 0
     */
    this.height = 0;

    /**
     * Default width of the component, in pixels. Set to match graphics width in pixel.
     * @property actualWidth
     * @type {Number}
     * @default 0
     */
    this.actualWidth = 0;

    /**
     * Default height of the component, in pixels. Set to match graphics height in pixel.
     * @property actualHeight
     * @type {Number}
     * @default 0
     */
    this.actualHeight = 0;

    /**
     * Specifies component's horizontal scaling factor.
     * @property scaleX
     * @type {Number}
     * @default 0
     */
    this.scaleX = 0;

    /**
     * Specifies component's vertical scaling factor.
     * @property scaleY
     * @type {Number}
     * @default 0
     */
    this.scaleY = 0;

    /**
     * Specifies component's horizontal position, in pixels, within its parent container.
     * @property posX
     * @type {Number}
     * @default 0
     */
    this.posX = 0;

    /**
     * Specifies component's vertical position, in pixels, within its parent container.
     * @property posY
     * @type {Number}
     * @default 0
     */
    this.posY = 0;

    /**
     * Specifies component's background color.
     * Accepts (rgba, hex and rgb) values.
     * @property backgroundColor
     * @type {String}
     * @default ""
     */
    this.backgroundColor = "";

    /**
     * The text displayed by this component.
     * @property text
     * @type {String}
     * @default ""
     */
    this.text = "";

    /**
     * The color for the text displayed by this component.
     * Accepts (rgba, hex and rgb) values
     * @property color
     * @type {String}
     * @default ""
     */
    this.color = ""

    /**
     * Specifies the font size for component's text.
     * @property fontSize
     * @type {String}
     * @default ""
     */
    this.fontSize = "";

    /**
     * Specifies the font family for component's text.
     * @property fontFamily
     * @type {String}
     * @default ""
     */
    this.fontFamily = "";

    /**
     * Specifies component's horizontal registration point.
     * @property regX
     * @type {Number}
     * @default 0
     */
    this.regX = 0;

    /**
     * Specifies component's vertical registration point.
     * @property regY
     * @type {Number}
     * @default 0
     */
    this.regY = 0;

    /**
     * The horizontal skew factor.
     * @property skewX
     * @type {Number}
     * @default 0
     */
    this.skewX = 0;

    /**
     * The vertical skew factor.
     * @property skewX
     * @type {Number}
     * @default 0
     */
    this.skewY = 0;

    /**
     * Specifies the rotation of the component, in degrees, from its original orientation.
     * @property skewX
     * @type {Number}
     * @default 0
     */
    this.rotation = 0;

    /**
     * Specifies component's linear gradient.
     * Usage: [["#000","#F0F"], [0, 0.5], [0, 20, 0, 120]]
     * @property linearGradient
     * @type {Array}
     * @default []
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Graphics.html#method_beginLinearGradientFill"></a>
     */
    this.linearGradient = [];

    /**
     * Specifies component's radial gradient.
     * Usage: [["#F00","#00F"], [0, 1], [100, 100, 0, 100, 100, 50]]
     * @property radialGradient
     * @type {Array}
     * @default []
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Graphics.html#method_beginRadialGradientFill"></a>
     */
    this.radialGradient = [];

    /**
     * Specifies the thickness of the text stroke
     * @property textStrokeWidth
     * @type {Number}
     * @default 0
     */
    this.textStrokeWidth = 0;

    /**
     * Specifies component's text stroke color.
     * Accepts (rgba, hex and rgb) values
     * @property textStrokeColor
     * @type {String}
     * @default 0
     */
    this.textStrokeColor = "#dddddd";

    /**
     * Determines component's dropshadow effect visibility.
     * @property displayShadow
     * @type {Boolean}
     * @default false
     */
    this.displayShadow = false;

    /**
     * Specifies component's dropshadow color.
     * Accepts (rgba, hex and rgb) values.
     * @property shadowColor
     * @type {String}
     * @default "#000000"
     */
    this.shadowColor = "#000000";

    /**
     * Specifies component's dropshadow horizontal position.
     * @property shadowPosX
     * @type {Number}
     * @default 1
     */
    this.shadowPosX = 1;

    /**
     * Specifies component's dropshadow vertical position.
     * @property shadowPosY
     * @type {Number}
     * @default 1
     */
    this.shadowPosY = 1;

    /**
     * Specifies component's dropshadow blur quality.
     * @property shadowBlur
     * @type {Number}
     * @default 5
     */
    this.shadowBlur = 5;

    /**
     * Specifies component's border thickness.
     * @property borderWidth
     * @type {Number}
     * @default 0
     */
    this.borderWidth = 0;

    /**
     * Specifies component's border color.
     * Accepts (rgba, hex and rgb) values.
     * @property borderColor
     * @type {String}
     * @default "#000000"
     */
    this.borderColor = "#000000";

    /**
     * Specifies component's border dropshadow visibility.
     * @property displayBorderShadow
     * @type {Boolean}
     * @default false
     */
    this.displayBorderShadow = false;

    /**
     * Specifies component's border dropshadow color.
     * Accepts (rgba, hex and rgb) values.
     * @property borderShadowColor
     * @type {String}
     * @default "#000000"
     */
    this.borderShadowColor = "#000000";

    /**
     * Specifies component's border dropshadow horizontal position.
     * @property borderShadowPosX
     * @type {Number}
     * @default 1
     */
    this.borderShadowPosX = 1;

    /**
     * Specifies component's border dropshadow vertical position.
     * @property borderShadowPosY
     * @type {Number}
     * @default 1
     */
    this.borderShadowPosY = 1;

    /**
     * Specifies component's border dropshadow blur quality.
     * @property borderShadowBlur
     * @type {Number}
     * @default 5
     */
    this.borderShadowBlur = 5;

     /**
     * Specifies component's stroke style for different look and feel.
     * @property strokeStyle
     * @type {Array}
     * @default []
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Graphics.StrokeStyle.html"></a>
     */
    this.strokeStyle = [];

    /**
     * Specifies component's stroke dash style for different look and feel.
     * @property strokeDash
     * @type {Array}
     * @default []
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Graphics.StrokeDash.html"></a>
     */
    this.strokeDash = [];

    /**
     * Specifies component's stroke style color.
     * @property strokeColor
     * @type {String}
     * @default "#000000"
     */
    this.strokeColor = "#000000";

    /**
     * Specifies component's vector graphics in pixels.
     * @property graphics
     * @type {String}
     * @default ""
     * @see VSComponentSkin
     */
    this.graphics = "";

    /**
     * Determines component's text dropshadow visibility.
     * @property displayTextShadow
     * @type {Boolean}
     * @default false
     */
    this.displayTextShadow = false;

    /**
     * Determines component's text dropshadow color.
     * @property textShadowColor
     * @type {String}
     * @default ""
     */
    this.textShadowColor = "";

    /**
     * Determines component's text dropshadow horizontal position.
     * @property textShadowPosX
     * @type {Number}
     * @default 1
     */
    this.textShadowPosX = 1;

    /**
     * Determines component's text dropshadow vertical position.
     * @property textShadowPosY
     * @type {Number}
     * @default 1
     */
    this.textShadowPosY = 1;

    /**
     * Determines component's text dropshadow blur quality.
     * @property textShadowBlur
     * @type {Number}
     * @default 5
     */
    this.textShadowBlur = 5;

    /**
     * Determines component's text horizontal position.
     * @property textPosX
     * @type {Number}
     * @default 0
     */
    this.textPosX = 0;

    /**
     * Determines component's text vertical position.
     * @property textPosX
     * @type {Number}
     * @default 0
     */
    this.textPosY = 0;

     /**
     * Determines component's text alignment in horizontal and vertical position.
     * Accepts values (center, "").
     * @property textAlign
     * @type {String}
     * @default ""
     */
    this.textAlign = "";
    
    /**
     * Specifies image display object to add to component. 
     * The image to render. This can be an Image, a Canvas, or a Video. 
     * Not all browsers (especially mobile browsers) support drawing video to a canvas.
     * @property image
     * @type {String}
     * @default ""
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Bitmap.html"></a>
     */
    this.image = "";

    /**
     * Determines whether to add mask to component's image displa object.
     * @property maskImage
     * @type {Boolean}
     * @default false
     */
    this.maskImage = false;

    /**
     * Determines component's alpha value from 0 to 1.
     * @property alpha
     * @type {Number}
     * @default 1
     */
    this.alpha = 1;

    /**
     * Determines component's filter effects.
     * @property filters
     * @type {Array}
     * @default []
     * @see <a href="http://www.createjs.com/docs/easeljs/classes/Filter.html"></a>
     */
    this.filters = [];

}

/**
 * Returns a unique number for component
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getId = function() {
    return this.id;
}

/**
 * Returns a unique name for component.
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getName = function() {
    return this.name;
}

/**
 * Returns default width of the component, in pixels if actualWidth is set else returns global actualWidth
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getActualWidth = function() {
    if(this.actualWidth > 0) {
        return this.actualWidth;
    }
    else {
        return this.style.actualPixelWidth;
    }
}

/**
 * Returns default height of the component, in pixels if actualHeight is set else returns global actualHeight
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getActualHeight = function() {
    if(this.actualHeight > 0) {
        return this.actualHeight;
    }
    else {
        return this.style.actualPixelHeight;
    }
}

/**
 * Returns component's horizontal scale based on width and actualWidth values
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getScaleX = function() {
	if(this.scaleX > 0) {
        if(this.width > 0) {
            return (this.width / this.getActualWidth()) * this.scaleX;
        }
        else {
            return this.scaleX;
        }
    }
    else {
        if(this.width > 0) {
            return (this.width / this.getActualWidth());
        }
        else {
            return 1;
        }
    }
}

/**
 * Returns component's vertical scale based on height and actualHeight values
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getScaleY = function() {
	if(this.scaleY > 0) {
        if(this.height > 0) {
            return (this.height / this.getActualHeight()) * this.scaleY;
        }
        else {
            return this.scaleY;
        }
    }
    else {
        if(this.height > 0) {
            return (this.height / this.getActualHeight());
        }
        else {
            return 1;
        }
    }
}

/**
 * Returns component's width by horizontal scale factor
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getWidth = function() {
    if(this.width > 0) {
        if(this.scaleX > 0) {
            return (this.width * this.scaleX);
        }
        else {
            return this.width;
        }
    }
    else {
        if(this.scaleX > 0) {
            return (this.getActualWidth() * this.scaleX);
        }
        else {
            return this.getActualWidth();
        }
    }
}

/**
 * Returns component's height by vertical scale factor
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getHeight = function() {
    if(this.height > 0) {
        if(this.scaleY > 0) {
            return (this.height * this.scaleY);
        }
        else {
            return this.height;
        }
    }
    else {
        if(this.scaleY > 0) {
            return (this.getActualHeight() * this.scaleY);
        }
        else {
            return this.getActualHeight();
        }
    }
}

/**
 * Returns component's horizontal position
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getPosX = function() {
    return this.posX;
}

/**
 * Returns component's vertical position
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getPosY = function() {
    return this.posY;
}

/**
 * Returns component's background color if backgroundColor is set else returns global backgroundColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getFillColor = function() {
    if(this.backgroundColor !== "") {
        return this.backgroundColor;
    }
    else {
        return this.style.backgroundColor;
    }
}

/**
 * Returns component's text
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getText = function() {
    return this.text;
}

/**
 * Returns component's text color if color is set else returns global color
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getColor = function() {
    if(this.color !== "") {
        return this.color;
    }
    else {
        return this.style.color;
    }
}

/**
 * Returns component's font size if fontSize is set else returns global fontSize
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getFontSize = function() {
    if(this.fontSize !== "") {
        return this.fontSize;
    }
    else {
        return this.style.fontSize;
    }
}

/**
 * Returns component's font size if fontSize is set else returns global fontSize
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getFontFamily = function() {
    if(this.fontFamily !== "") {
        return this.fontFamily;
    }
    else {
        return this.style.fontFamily;
    }
}

/**
 * Returns component's horizontal registration point or determines and returns a new value if regX is set to "center"
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getRegX = function() {
    if(this.regX === "center") {
        return this.getWidth() / 2;
    }
    else {
        return this.regX;
    }
}

/**
 * Returns component's vertical registration point or determines and returns a new value if regY is set to "center"
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getRegY = function() {
    if(this.regY === "center") {
        return this.getHeight() / 2;
    }
    else {
        return this.regY;
    }
}

/**
 * Returns thickness of component's text stroke
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextStrokeWidth = function() {
	return this.textStrokeWidth;
}

/**
 * Returns component's text stroke color if textStrokeColor is set else returns global component textStrokeColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getTextStrokeColor = function() {
    if(this.textStrokeColor !== "") {
        return this.textStrokeColor;
    }
    else {
        return this.style.textStrokeColor;
    }
}

/**
 * Returns component's border color if borderColor is set else returns component global borderColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getBorderColor = function() {
    if(this.borderColor !== "") {
        return this.borderColor;
    }
    else {
        return this.style.borderColor;
    }
}

/**
 * Returns component's dropshadow state if true of false
 * @private
 * @return {Boolean}
 */
VStickJS.Core.VSComponent.prototype.getDisplayShadow = function() {
	return this.displayShadow;
}

/**
 * Returns component's dropshadow color if shadowColor is set else returns component global shadowColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getShadowColor = function() {
    if(this.shadowColor !== "") {
        return this.shadowColor;
    }
    else {
        return this.style.shadowColor;
    }
}

/**
 * Returns component's dropshadow horizontal position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getShadowPosX = function() {
    return this.shadowPosX;
}

/**
 * Returns component's dropshadow vertical position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getShadowPosY = function() {
    return this.shadowPosY;
}

/**
 * Returns component's dropshadow blur value if shadowBlur is set else returns component global shadowBlur
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getShadowBlur = function() {
    if(this.shadowBlur !== "") {
        return this.shadowBlur;
    }
    else {
        return this.style.shadowBlur;
    }
}

/**
 * Returns component's rotation  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getRotation = function() {
    return this.rotation;
}

/**
 * Returns component's horizontal skew  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getSkewX = function() {
    return this.skewX;
}

/**
 * Returns component's vertical skew  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getSkewY = function() {
    return this.skewY;
}

/**
 * Returns component's text dropshadow state if true of false
 * @private
 * @return {Boolean}
 */
VStickJS.Core.VSComponent.prototype.getDisplayTextShadow = function() {
    return this.displayTextShadow;
}

/**
 * Returns component's text dropshadow color if textShadowColor is set else returns component global textShadowColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getTextShadowColor = function() {
    if(this.textShadowColor !== "") {
        return this.textShadowColor;
    }
    else {
        return this.style.textShadowColor;
    }
}

/**
 * Returns component's text dropshadow horizontal position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextShadowPosX = function() {
    return this.textShadowPosX;
}

/**
 * Returns component's text dropshadow vertical position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextShadowPosY = function() {
    return this.textShadowPosY;
}

/**
 * Returns component's text dropshadow blur value if textShadowBlur is set else returns component global textShadowBlur
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextShadowBlur = function() {
    if(this.textShadowBlur !== "") {
        return this.textShadowBlur;
    }
    else {
        return this.style.textShadowBlur;
    }
}

/**
 * Returns component's border dropshadow state if true of false
 * @private
 * @return {Boolean}
 */
VStickJS.Core.VSComponent.prototype.getDisplayBorderShadow = function() {
    return this.displayBorderShadow;
}

/**
 * Returns component's border dropshadow color if borderShadowColor is set else returns component global borderShadowColor
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getBorderShadowColor = function() {
    if(this.borderShadowColor !== "") {
        return this.borderShadowColor;
    }
    else {
        return this.style.borderShadowColor;
    }
}

/**
 * Returns component's border dropshadow horizontal position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderShadowPosX = function() {
    return this.borderShadowPosX;
}

/**
 * Returns component's border dropshadow vertical position  
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderShadowPosY = function() {
    return this.borderShadowPosY;
}

/**
 * Returns component's border dropshadow blur value if borderShadowBlur is set else returns component global borderShadowBlur
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderShadowBlur = function() {
    if(this.borderShadowBlur !== "") {
        return this.borderShadowBlur;
    }
    else {
        return this.style.borderShadowBlur;
    }
}

/**
 * Calculate and returns component's border thickness  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getPixelBorder = function() {
    if(this.borderWidth > 0) {
        return (this.borderWidth * this.BORDER_WIDTH_PAD);
    }
    else {
        return 0;
    }
}

/**
 * Calculate and returns component's border width
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderWidth = function() {
    var borderVal = this.getPixelBorder();
    if(this.borderWidth > 0) {
        if(this.width > 0) {
            if(this.scaleX > 0) {
                return (this.width + borderVal * this.scaleX);
            }
            else {
                return this.width + borderVal;
            }
        }
        else {
            if(this.scaleX > 0) {
                return (this.getActualWidth() + borderVal) * this.scaleX;
            }
            else {
                return this.getActualWidth() + borderVal;
            }
        }
    }
    else {
        return 0;
    }
}

/**
 * Calculate and returns component's border height  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderHeight = function() {
    var borderVal = this.getPixelBorder();
    if(this.borderWidth > 0) {
        if(this.height > 0) {
            if(this.scaleY > 0) {
                return (this.height + borderVal) * this.scaleY;
            }
            else {
                return this.height + borderVal;
            }
        }
        else {
            if(this.scaleY > 0) {
                return (this.getActualHeight() + borderVal) * this.scaleY;
            }
            else {
                return this.getActualHeight() + borderVal;
            }
        }
    }
    else {
        return 0;
    }
}

/**
 * Calculate and returns component's border horizontal position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderScaleX = function() {
    var borderVal = this.getPixelBorder();
    if(this.borderWidth > 0) {
        if(this.scaleX > 0) {
            if(this.width > 0) {
                return ((this.width + borderVal) / this.getActualWidth()) * this.scaleX;
            }
            else {
                return this.scaleX;
            }
        }
        else {
            if(this.width > 0) {
                return ((this.width + borderVal) / this.getActualWidth());
            }
            else {
                return 1;
            }
        }
    }
    else {
        return 1;
    }
}

/**
 * Calculate and returns component's border vertical position  
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getBorderScaleY = function() {
    var borderVal = this.getPixelBorder();
    if(this.borderWidth > 0) {
        if(this.scaleY > 0) {
            if(this.height > 0) {
                return ((this.height + borderVal) / this.getActualHeight()) * this.scaleY;
            }
            else {
                return this.scaleY;
            }
        }
        else {
            if(this.height > 0) {
                return ((this.height + borderVal) / this.getActualHeight());
            }
            else {
                return 1;
            }
        }
    }
    else {
        return 1;
    }
}

/**
 * Returns component's linear gradient
 * @private
 * @return {Array}
 */
VStickJS.Core.VSComponent.prototype.getLinearGradient = function() {
    return this.linearGradient;
}

/**
 * Returns component's radial gradient
 * @private
 * @return {Array}
 */
VStickJS.Core.VSComponent.prototype.getRadialGradient = function() {
    return this.radialGradient;
}

/**
 * Returns component's text horizontal position
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextPosX = function() {
    return this.textPosX;
}

/**
 * Returns component's text vertical position
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getTextPosY = function() {
    return this.textPosY;
}

/**
 * Returns component's text alignment. 
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getTextAlign = function() {
    return this.textAlign;
}

/**
 * Returns component's filters. 
 * @private
 * @return {Array}
 * @example new createjs.ColorFilter(0, 0, 0, 1, 0, 0, 255, 0)
 * @see CreateJS
 */
VStickJS.Core.VSComponent.prototype.getFilters = function() {
    return this.filters;
}

/**
 * Returns component's stroke style array values. 
 * @private
 * @return {Array}
 */
VStickJS.Core.VSComponent.prototype.getStrokeStyle = function() {
    return this.strokeStyle;
}

/**
 * Returns component's stroke dash array values. 
 * @private
 * @return {Array}
 */
VStickJS.Core.VSComponent.prototype.getStrokeDash = function() {
	return this.strokeDash;
}

/**
 * Returns component's stroke color if strokeColor is set else returns component global strokeColor. 
 * @private
 * @return {String}
 */
VStickJS.Core.VSComponent.prototype.getStrokeColor = function() {
    if(this.strokeColor !== "") {
        return this.strokeColor;
    }
    else {
        return this.style.strokeColor;
    }
}

/**
 * Returns component's alpha value. 
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getAlpha = function() {
    return this.alpha;
}

/**
 * Returns component's image display object if image is set else return null. 
 * @private
 * @return {DisplayObject}
 */
VStickJS.Core.VSComponent.prototype.getImage = function() {
    if(this.image !== "") {
        return this.image;
    }
    else {
        return null;
    }
}

/**
 * Returns component's image horizontal scale factor. 
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getImageScaleX = function(imgWidth) {
    if(this.scaleX > 0) {
        if(this.width > 0) {
            return (this.width / imgWidth) * this.scaleX;
        }
        else {
            return this.scaleX;
        }
    }
    else {
        if(this.width > 0) {
            return (this.width / imgWidth);
        }
        else {
            return 1;
        }
    }
}

/**
 * Returns component's image vertical scale factor. 
 * @private
 * @return {Number}
 */
VStickJS.Core.VSComponent.prototype.getImageScaleY = function(imgHeight) {
    if(this.scaleY > 0) {
        if(this.height > 0) {
            return (this.height / imgHeight) * this.scaleY;
        }
        else {
            return this.scaleY;
        }
    }
    else {
        if(this.height > 0) {
            return (this.height / imgHeight);
        }
        else {
            return 1;
        }
    }
}

/**
 * Compute and returns specified graphics to be rendered inside component, in pixels.
 * @private
 * @return {Function}
 */
VStickJS.Core.VSComponent.prototype.getGraphics = function(graphics) {
    if(this.graphics !== "") {
        return window.VStickJS.Skins[this.graphics](graphics);
    }
}

/**
 * Calculate and returns component's border shape. 
 * @private
 * @return {Shape}
 * @see Shape - CreateJS
 */
VStickJS.Core.VSComponent.prototype.getBorderShape = function() {
    var borderShape = new createjs.Shape();

    // Draw Shape
    this.getGraphics(borderShape.graphics.beginFill(this.getBorderColor()));

    borderShape.rotation = this.getRotation();
    borderShape.skewX = this.getSkewX();
    borderShape.skewY = this.getSkewY();

    // Draw Shadow
    if(this.getDisplayBorderShadow() === true && this.getPixelBorder() > 0) {
        borderShape.shadow = new createjs.Shadow(this.getBorderShadowColor(), this.getBorderShadowPosX(), this.getBorderShadowPosY(), this.getBorderShadowBlur());
    }

    var bxp = this.getPixelBorder() / 2;
    borderShape.setBounds(this.getPosX() - bxp, this.getPosY() - bxp, this.getBorderWidth(), this.getBorderHeight());
    borderShape.setTransform(this.getPosX() - bxp, this.getPosY() - bxp, this.getBorderScaleX(), this.getBorderScaleY());

    return borderShape;
}

/**
 * Uses all defined properties value to determine the final look of the component. 
 * @return {Container}
 * @see Container - CreateJS
 */
VStickJS.Core.VSComponent.prototype.draw = function() {

    var shapeContainer = new createjs.Container();
    var shape = new createjs.Shape();

    // Gradient ( Linear or Radial )
    var linearGradient = this.getLinearGradient();
    var radialGradient = this.getRadialGradient();
    
    // Draw Linear Gradient Color
    if(linearGradient.length === 3 && radialGradient.length === 0) {
        this.getGraphics(shape.graphics.beginLinearGradientFill(linearGradient[0], linearGradient[1], linearGradient[2][0], linearGradient[2][1], linearGradient[2][2], linearGradient[2][3]));
    }
    
    // Draw Radial Gradient Color
    if(radialGradient.length === 3 && linearGradient.length === 0) {
        this.getGraphics(shape.graphics.beginRadialGradientFill(radialGradient[0], radialGradient[1], radialGradient[2][0], radialGradient[2][1], radialGradient[2][2], radialGradient[2][3], radialGradient[2][4], radialGradient[2][5]));
    }

    // Draw Background Color
    if(radialGradient.length === 0 && linearGradient.length === 0) {

        var strokeStyle = this.getStrokeStyle();
        var strokeDash = this.getStrokeDash();

        if(strokeStyle.length > 0) {
            if(strokeDash.length > 0) {
                this.getGraphics(shape.graphics.setStrokeStyle(  strokeStyle[0] ? strokeStyle[0] : 0,
	                                                            strokeStyle[1] ? strokeStyle[1] : 0,
	                                                            strokeStyle[2] ? strokeStyle[2] : 0,
	                                                            strokeStyle[3] ? strokeStyle[3] : 0,
	                                                            strokeStyle[4] ? strokeStyle[4] : 0)
	                                                            .beginStroke(this.getStrokeColor())
	                                                            .setStrokeDash([strokeDash[0] ? strokeDash[0] : 5, strokeDash[1] ? strokeDash[1] : 5], 
	                                                                            strokeDash[2] ? strokeDash[2] : 0)
	                                                            .beginFill(this.getFillColor()));
            }
            else {
                this.getGraphics(shape.graphics.setStrokeStyle(  strokeStyle[0] ? strokeStyle[0] : 0,
	                                                            strokeStyle[1] ? strokeStyle[1] : 0,
	                                                            strokeStyle[2] ? strokeStyle[2] : 0,
	                                                            strokeStyle[3] ? strokeStyle[3] : 0,
	                                                            strokeStyle[4] ? strokeStyle[4] : 0)
	                                                            .beginStroke(this.getStrokeColor())
	                                                            .beginFill(this.getFillColor()));
            }
        }
        else {
            this.getGraphics(shape.graphics.beginFill(this.getFillColor()));
        }
    }

    // Add Filters
    if(this.getFilters().length > 0) {
        shape.filters = this.getFilters();
    }

    // Draw Image
    var img = this.getImage();
    var classObj = this;
    var bitmap;
    if(img !== null) {

        var imgLoader = new Image();
        imgLoader.src = img;
        imgLoader.onload = imageLoadHandler;
    }

    function imageLoadHandler() {
        var imgObj = event.target;
        bitmap = new createjs.Bitmap(imgObj);
        
        bitmap.rotation = classObj.getRotation();
        bitmap.skewX = classObj.getSkewX();
        bitmap.skewY = classObj.getSkewY();

        bitmap.setBounds(classObj.getPosX(), classObj.getPosY(), classObj.getWidth(), classObj.getHeight());
        bitmap.setTransform(classObj.getPosX(), classObj.getPosY(), classObj.getImageScaleX(bitmap.image.width), classObj.getImageScaleY(bitmap.image.height));
        
        bitmap.regX = classObj.getRegX();
        bitmap.regY = classObj.getRegY();

        if(classObj.maskImage === true) {
            bitmap.mask = shape;
        }
        shapeContainer.addChild(bitmap);
    }

    // Draw Alpha
    if(this.getAlpha() !== "") {
        shape.alpha = this.getAlpha();
    }

    shape.rotation = this.getRotation();
    shape.skewX = this.getSkewX();
    shape.skewY = this.getSkewY();
    
    // Draw shadow
    if(this.getDisplayShadow() === true) {
        shape.shadow = new createjs.Shadow(this.getShadowColor(), this.getShadowPosX(), this.getShadowPosY(), this.getShadowBlur());
    }

    shape.setBounds(this.getPosX(), this.getPosY(), this.getWidth(), this.getHeight());
    shape.setTransform(this.getPosX(), this.getPosY(), this.getScaleX(), this.getScaleY());

    shape.regX = this.getRegX();
    shape.regY = this.getRegY();
    shape.name = this.name;

    // Draw Text
    if(this.getText() !== "") {
        var txtContainer = new createjs.Container();

        var txtFont = (this.getFontSize() + " " + this.getFontFamily());
        var txtColor = this.getTextStrokeWidth() > 0 ? this.getTextStrokeColor() : this.getColor();
        var txtOutline = this.getTextStrokeWidth() > 0 ? this.getTextStrokeWidth() : false;
        var txt = new createjs.Text(this.getText(), txtFont, txtColor);

        txt.outline = txtOutline;

        if(this.getTextAlign() === "center") {
            txt.x = (this.getWidth() - txt.getBounds().width) / 2;
            txt.y = (this.getHeight() - txt.getBounds().height) / 2;
        }
        else if(this.getTextAlign() === "") {
            txt.x = this.getTextPosX();
            txt.y = this.getTextPosY();
        }
        
        txt.maxWidth = 1000;

        if(this.getDisplayTextShadow() === true && txtOutline === false) {
            txt.shadow = new createjs.Shadow(this.getTextShadowColor(), this.getTextShadowPosX(), this.getTextShadowPosY(), this.getTextShadowBlur());
        }
        //txt.textBaseline = "alphabetic";

        if(txtOutline > 0) {
            var txt2 = txt.clone();
            txt2.outline = false;
            txt2.color = this.getColor();

            if(this.getDisplayTextShadow() === true) {
                txt.shadow = new createjs.Shadow(this.getTextShadowColor(), this.getTextShadowPosX(), this.getTextShadowYosY(), this.getTextShadowBlur());
            }
        }

        // Determine whether to add text and text-stroke or just text
        if(txtOutline > 0) {
            txtContainer.addChild(txt, txt2);
        }
        else {
            txtContainer.addChild(txt);
        }
    }
    
    // Determine whether to add shape and text or just shape
    if(this.getPixelBorder() > 0) {
        if(this.getText() !== "") {
            shapeContainer.addChild(this.getBorderShape(), shape, txtContainer);
        }
        else {
            shapeContainer.addChild(this.getBorderShape(), shape);
        }
    }
    else {
        if(this.getText() !== "") {
            shapeContainer.addChild(shape, txtContainer);
        }
        else {
            shapeContainer.addChild(shape);
        }
    }

    return shapeContainer;
}

