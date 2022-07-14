import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public urlTitle:string;
  private titleSubs:Subscription;

  constructor( private router: Router ) {
    this.getRouterEvents();
    this.titleSubs = this.getRouterEvents().subscribe( ( { title } ) => {
      this.urlTitle = title
    })
   }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
    
  }

  private getRouterEvents(): Observable<Data> {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data )
    );
  }

}
