import Konva from 'konva';
import { Rect } from 'konva/lib/shapes/Rect';
import { Stage } from 'konva/lib/Stage';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';

class RacingGame {
  private stage: Stage;
  private layer: Layer;
  private carImage: any;
  private racetrack: any;
  private tween: any;


  constructor(containerId) {
    this.stage = new Konva.Stage({
      container: containerId,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    this.carImage = null;
    this.racetrack = null;
    this.tween = null;
  }

  loadImage(imageUrl) {
    const imageObj = new Image();
    imageObj.src = imageUrl;
    imageObj.onload = () => {
      this.createRacingCar(imageObj);
      this.createRacetrack();
      this.layer.draw();
    };
  }

  createRacingCar(imageObj) {
    this.carImage = new Konva.Image({
      image: imageObj,
      x: this.stage.width() / 2,
      y: this.stage.height() / 2 - 100,
      width: 50,
      height: 50,
      offset: {
        x: 25,
        y: 25,
      },
    });
    this.layer.add(this.carImage);
  }

  createRacetrack() {
    this.racetrack = new Konva.Path({
      x: this.stage.width() / 2,
      y: this.stage.height() / 2,
      data: 'M -100 0 A 100 100 0 0 1 100 0 A 100 100 0 0 1 -100 0',
      stroke: 'black',
      strokeWidth: 2,
    });
    this.layer.add(this.racetrack);
  }

  startRace() {
    this.tween = new Konva.Tween({
      node: this.carImage,
      duration: 8,
      rotation: 360,
      easing: Konva.Easings.EaseInOut,
    });
    this.tween.play();
  }
}


export default RacingGame;
