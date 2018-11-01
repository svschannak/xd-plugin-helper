class XDGraphicsNodeWrapper{
    constructor(xdNode){
        this.xdNode = xdNode;
    }

}

class XDRectangleWrapper{
    constructor(xdNode){
        this.xdNode = xdNode;
        this.parentNodeWrapper = new XDGraphicsNodeWrapper(this.xdNode);
    }

    toJSON(){
        let result = {};
        if (this.parentNodeWrapper){
            result = this.parentNodeWrapper.toJSON();
        }

        const node = this.xdNode;
        return {
            width: node.width,
            height: node.height,
            ...result
        }
    }
}