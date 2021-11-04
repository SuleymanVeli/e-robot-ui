import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';

const enum Status {
  OFF = 0,
  RTOP = 1,
  RBUTTON = 2,
  RLEFT = 3,
  RRIGHT = 4,
}


@Component({
  selector: 'app-resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.css']
})
export class ResizableComponent implements  OnInit, AfterViewInit {
  @Input('width') public width!: number;
  @Input('height') public height!: number;
  @Input('left') public left!: number;
  @Input('top') public top!: number;
  @ViewChild("box") public box!: ElementRef;
  private boxPosition!: { left: number, top: number };
  private containerPos!: { left: number, top: number, right: number, bottom: number };
  public mouse!: {x: number, y: number}
  public status: Status = Status.OFF;
  private mouseClick!: {x: number, y: number, left: number, top: number}

  ngOnInit() {}

  @ViewChild('child') child:any;

  ngAfterViewInit(){
    this.loadBox();
    this.loadContainer()
  }

  private loadBox(){
    const {left, top} = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = {left, top};
  }

  private loadContainer(){
    const left = this.boxPosition.left - this.left-1;
    const top = this.boxPosition.top - this.top-1;
    const right = left + 600;
    const bottom = top + 450;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(s:number){
    //this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top }; 
    
      this.status = s;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    if(this.status === Status.RTOP){
      this.mouse = { x: event.clientX, y: event.clientY };
     
    }
    if(this.status === Status.RBUTTON){
      this.mouse = { x: event.clientX, y: event.clientY };
      this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top+1 : 0;

    }
    if(this.status === Status.RLEFT){
      this.mouse = { x: event.clientX, y: event.clientY };
     

    }
    if(this.status === Status.RRIGHT){
      this.mouse = { x: event.clientX, y: event.clientY };
      this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left+1 : 0;
      this.child.wsize(this.width);
    }    
  }

  @HostListener('mouseup', ['$event']) 
  onMouseUp(event:any)
  {
    this.status = Status.OFF
  }

  private resize(){   
    this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
    this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
    
  }

  private resizeCondMeet(){
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  private move(){
    if(this.moveCondMeet()){
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    }
  }

  private moveCondMeet(){
    const offsetLeft = this.mouseClick.x - this.boxPosition.left; 
    const offsetRight = this.width - offsetLeft; 
    const offsetTop = this.mouseClick.y - this.boxPosition.top;
    const offsetBottom = this.height - offsetTop;
    return true;
  }
}
