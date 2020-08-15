import React from "react";
import Sketch from "react-p5";
import type p5 from "p5";
import type {Element as p5Element} from "p5";

interface BinarySketchProps {
    readonly isHome: boolean;
    [propName: string]: any;
}


export default class BinarySketch extends React.Component<BinarySketchProps> {
    // @ts-ignore
    canvas: p5Element;
    numCols: number;
    numRows: number;
    sideLength: number;
    xOffset: number;
    yOffset: number;
    zOffset: number;
    // @ts-ignore
    p: p5;
    lastIsHome: boolean;

    constructor(props: BinarySketchProps) {
        super(props);
        this.numCols = 0;
        this.numRows = 0;
        this.sideLength = 30;
        this.xOffset = 0;
        this.yOffset = 0;
        this.zOffset = 0;
        this.lastIsHome = true;
    }

    componentDidUpdate = () => {
        if(this.lastIsHome !== this.props.isHome)
            this.p.loop();
        this.lastIsHome = this.props.isHome;
    }

    setup = (p: p5, canvasParentRef: Element) => {
        this.p = p
        this.canvas = p.createCanvas(p.windowWidth, p.windowHeight); //.parent(canvasParentRef);
        this.canvas.position(0, 0);
        this.canvas.style("z-index", -1);
        this.canvas.style("position","fixed");
        this.sideLength = p.windowWidth > p.windowHeight ? p.windowWidth / 75 : p.windowHeight / 75;
        p.textSize(this.sideLength);
        this.numCols = p.ceil(p.windowWidth / this.sideLength) + 1;
        this.numRows = p.ceil(p.windowHeight / this.sideLength) + 1;
        //this.matrix = new Array(this.numRows).fill(-1).map(() => new Array(this.numCols).fill(-1));
        //this.cout = p5.createP("Start");
        p.frameRate(2);
    };

    onResize = (p: p5) => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        this.numCols = p.ceil(p.windowWidth / this.sideLength) + 1;
        this.numRows = p.ceil(p.windowHeight / this.sideLength) + 1;
        this.sideLength = p.windowWidth > p.windowHeight ? p.windowWidth / 75 : p.windowHeight / 75;
        p.loop();
        //this.matrix = new Array(this.numRows).fill(-1).map(() => new Array(this.numCols).fill(-1));
    };

    draw = (p: p5) => {
        let w = 0.05;
        p.background(255);
        var counts = [0, 0, 0];
        for (let i = 0; i < this.numCols; i++) {
            for (let j = 0; j < this.numRows; j++) {
                let prob = p.noise(this.xOffset, this.yOffset, this.zOffset);
                let value = prob < 0.5 - w ? 1 : prob > 0.5 + w ? 0 : -1;
                let my_text = value === -1 ? " " : value;
                p.text(
                    my_text,
                    i * this.sideLength,
                    j * this.sideLength,
                    this.sideLength,
                    this.sideLength
                );
                counts[value + 1] = counts[value + 1] + 1;
                this.yOffset = this.yOffset + 0.5;
            }
            this.xOffset = this.xOffset + 0.5;
        }
        this.zOffset = this.zOffset + 0.00001;

        if(this.props.isHome){
            const bigTextSize = p.width > p.height ? p.height / 15 : p.width / 15;
            const x = p.width / 2 - bigTextSize;
            const y = p.height / 2 - bigTextSize;
            p.stroke(255);
            p.fill(p.color(33,150,243))
            p.quad(x, y, x + bigTextSize*6.75, y, x + bigTextSize*8.75, y + bigTextSize*3, x + bigTextSize*2, y + bigTextSize*3)
            p.fill(p.color(255))
            p.textSize(bigTextSize/2);
            p.text("I am a", x + bigTextSize *2, y + bigTextSize / 2);
            p.textSize(bigTextSize);
            p.text("<Software", x + bigTextSize, y + bigTextSize*1.5);
            p.text("Engineer/>", x + bigTextSize*3, y+bigTextSize*2.5);
            p.fill(p.color(0))
            p.textSize(this.sideLength);
        }
        else {
            p.noLoop();
        }
    };

    render() {
        return (
            <Sketch
                windowResized={this.onResize}
                setup={this.setup}
                draw={this.draw}
            />
        );
    }
}
