const { Color, Text, Rectangle } = require("scenegraph");

class XDNodeErrorRectangle {

    constructor(xdNode) {
        this.xdNode = xdNode;

        this.width = 200;
        this.height = 20;
        this.fill = new Color("#F59797");
        this.borderColor = new Color("#E55151");
        this.borderActive = true;
        this.borderWidth = 1;
        this.textXMargin = 3;
        this.textYMargin = -7;
        this.textColor = new Color("Black");
    }

    _createRectangle() {
        this.rectangle = new Rectangle();
        this.rectangle.width = this.width;
        this.rectangle.height = this.height;
        this.rectangle.fill = this.fill;
        this.rectangle.stroke = this.borderColor;
        this.rectangle.strokeEnabled = this.borderActive;
        this.rectangle.strokeWidth = this.borderWidth;
    }

    _addToArtboard() {
        this._createRectangle();
        this.xdNode.parent.addChild(this.rectangle);
        this.rectangle.moveInParentCoordinates(
            this.xdNode.boundsInParent.x,
            this.xdNode.boundsInParent.y - this.height
        );
    }

    _createText(msg){
        this.errorText = new Text();
        this.errorText.text = msg;
        this.errorText.fill = this.textColor;
    }

    _addTextToArtboard(msg){
        this._createText(msg);
        this.xdNode.parent.addChild(this.errorText);
        this.errorText.moveInParentCoordinates(
            this.xdNode.boundsInParent.x + this.textXMargin,
            this.xdNode.boundsInParent.y + this.textYMargin
        );
    }

    create(msg) {
        this._addToArtboard();
        this._addTextToArtboard(msg);
    }
}

module.exports = XDNodeErrorRectangle;