import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  public menu:any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Progress Bar', url: 'progress' },
        { title: 'Graphs', url: 'grafica1' }
      ]
    }
  ]

  constructor() { }
}
