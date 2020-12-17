import React from 'react';
import p5 from 'p5';

export default class SketchBase extends React.Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }

  Sketch = (p) => {
    throw new Error(
      `NotImplementedError: must define Sketch method with a setup & draw
        
        Example: 

        export default class MySketch extends Sketch {
          Sketch = (p) => {
            p.sketch = () => {
              p.createCanvas(512, 512);
            }
  
            p.draw = () => {
              p.background(20);
              p.ellipse(width / 2, height / 2, 100);
            }
          }
        }`
      )
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}
