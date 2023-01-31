
let _pixelRatio;

const createCanvasElement = () => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');

  return canvas;
};

function getDevicePixelRatio() {
  if (_pixelRatio) {
    return _pixelRatio;
  }
  const canvas = createCanvasElement();
  const context = canvas.getContext('2d') as any;
  _pixelRatio = (function () {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio =
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
    return devicePixelRatio / backingStoreRatio;
  })();

  canvas.width = 0;
  canvas.height = 0;
  return _pixelRatio;
}


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

  toDataURL(mimeType, quality) {
    try {
      const Dataurl = this._canvas?.toDataURL(mimeType, quality);
      return Dataurl;
    } catch (e) {
      console.log(e);
    }
  }
}


export default Canvas;
