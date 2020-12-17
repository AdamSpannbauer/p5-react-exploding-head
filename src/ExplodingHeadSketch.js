import ExplodingHead from './ExplodingHead'

// TODO: implement ExplodingHead class to do something cool

const ExplodingHeadSketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.draw = () => {
        p.background(p.sin(p.frameCount * 0.001) * 255);
    }
}

export default ExplodingHeadSketch;
