import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { 
    this.returnInterval().subscribe( console.log );
  }

  ngOnInit(): void {
  }

  public returnInterval(): Observable<number> {
    return interval(1000).pipe( 
      take(4),
      map( value =>  value + 1 )
    )
  }

}
