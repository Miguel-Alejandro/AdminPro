import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private styleTheme = document.getElementById('theme');
  constructor() {
    this.initTheme();
   }

  private initTheme(): void {
    const url = localStorage.getItem( 'theme' ) || './assets/css/colors/default.css'
    this.styleTheme?.setAttribute( 'href', url );

  }

  public changeTheme( theme: string ): void {
    const styleUrl = `./assets/css/colors/${ theme }.css`;
    this.styleTheme?.setAttribute('href', styleUrl);
    localStorage.setItem( 'theme', styleUrl );

    this.checkCurrentTheme();
  }

  public async checkCurrentTheme(): Promise<void> {
    const links  = document.querySelectorAll( '.selector' );
    links.forEach( async (elem) => {
      elem.classList.remove('working')
      const btnTheme = elem.getAttributeNode('data-theme')?.textContent
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.styleTheme?.getAttribute('href');

      console.log( 'ELEM !!!', elem)

      console.log(btnTheme)
      console.log(btnThemeUrl)
      console.log(currentTheme)

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }
    });
  }

}
