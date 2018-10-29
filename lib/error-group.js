const commands = require("commands");

const XDNodeErrorRectangle = require("./error-rectangle.js");

class XDNodeErrorGroup {
    constructor(nodeList, xDSelection) {
        /* expects an list with objects that contain the node and the error
            {node: XDNode, msg: Error text}
        */
        this.nodeList = nodeList;
        this.xDSelection = xDSelection;
    }

    _groupErrorList(errorList) {
        this.xDSelection.items = errorList;
        Commands.group();
    }

    _addErrorToArtboard(node) {
        console.log(node);
        const error = new XDNodeErrorRectangle(node.node);
        error.create(node.msg);
        return error;
    }

    addErrors() {
        const errorList = [];

        this.nodeList.forEach(node => {
            const error = this._addErrorToArtboard(node);
            errorList.push(error.rectangle);
            errorList.push(error.errorText);
        });

        this._groupErrorList(errorList);
    }

    removeErrors() {}
}

module.exports = XDNodeErrorGroup;