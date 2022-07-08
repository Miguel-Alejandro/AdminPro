import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent implements OnInit {

  @Input() progress:number = 0;
  @Input() btnClass:string = 'btn btn-primary';

  @Output() progressValueEmit: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  get getProgressValue() {
    return ` ${this.progress}% `;
  }

  public changeValue( value:number ): any {
    if(this.progress >= 100 && value >= 0){
      this.progressValueEmit.emit(100)
      return this.progress = 100;
    }
    if(this.progress <= 0 && value < 0){
      this.progressValueEmit.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    this.progressValueEmit.emit( this.progress );
  }

  public onChange( $event:number ): void {
    if( this.progress >= 100 ){
      this.progress = 100;
    }else if( this.progress <= 0 ){
      this.progress = 0;
    }else {
      this.progress = $event;
    }

    this.progressValueEmit.emit(this.progress)
  }

}
