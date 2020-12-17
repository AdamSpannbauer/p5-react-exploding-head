// import ExplodingHead from './ExplodingHead'

// TODO: implement ExplodingHead class to do something cool

const ExplodingHeadSketch = (p) => {

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.draw = () => {
        p.background(p.sin(p.frameCount * 0.001) * 255);
        
        p.fill(p.cos(p.frameCount * 0.001) * 255);
        p.noStroke();
        
        // TODO: this is hot garbage code. write some way to generate these auto
        //       * A function with an image that gets split in 2? needs radius and x-width-offset
        //       * Maybe a function that accepts an array of images, and spacing or sumn
        p.arc(p.min([p.width / 2, 100]), p.height / 2, 100, 100, p.HALF_PI, -p.HALF_PI)
        p.arc(p.max([p.width / 2, p.width - 100]), p.height / 2, 100, 100, -p.HALF_PI, p.HALF_PI)

        p.arc(p.min([p.width / 2, 150]), p.height / 2, 75, 75, p.HALF_PI, -p.HALF_PI)
        p.arc(p.max([p.width / 2, p.width - 150]), p.height / 2, 75, 75, -p.HALF_PI, p.HALF_PI)

        p.arc(p.min([p.width / 2, 200]), p.height / 2, 50, 50, p.HALF_PI, -p.HALF_PI)
        p.arc(p.max([p.width / 2, p.width - 200]), p.height / 2, 50, 50, -p.HALF_PI, p.HALF_PI)

        p.arc(p.min([p.width / 2, 250]), p.height / 2, 25, 25, p.HALF_PI, -p.HALF_PI)
        p.arc(p.max([p.width / 2, p.width - 250]), p.height / 2, 25, 25, -p.HALF_PI, p.HALF_PI)

        p.ellipse(p.width / 2, p.height / 2, 5, 5)
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

export default ExplodingHeadSketch;
