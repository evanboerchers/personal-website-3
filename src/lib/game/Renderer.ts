export default class Renderer {
    canvas: HTMLCanvasElement
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    get context(): CanvasRenderingContext2D | null  {
        return this.canvas.getContext('2d')
    }

    get width(): number {
        return this.canvas.width
    }
    
    get height(): number {
        return this.canvas.height
    }
}