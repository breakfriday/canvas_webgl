

class Canvas {
  private _canvas?: HTMLCanvasElement;
  private _context?: CanvasRenderingContext2D|null;
  private width: number;
  private height: number;
  private scale: any;
  private poolSize: number;

  constructor(width, height, scale) {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
    }

    this.width = width;
    this.height = height;
    this.scale = scale || window.devicePixelRatio;

    this._canvas.width = this.width * this.scale;
    this._canvas.height = this.height * this.scale;
    if (this._canvas) {
      this._context = this._canvas.getContext('2d');
    }

    this.poolSize = 30;
  }
  getRawCanvas() {
    return this._canvas;
  }

  getContext() {
    return this._context;
  }
}



export default Canvas
