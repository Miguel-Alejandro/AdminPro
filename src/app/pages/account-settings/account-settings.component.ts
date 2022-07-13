import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  public styleTheme = document.getElementById('theme');
  public links: NodeListOf<Element>;

  constructor( public settingSrv:SettingsService ) { 

  }
  
  async ngOnInit() {
    this.settingSrv.checkCurrentTheme();
  }

  public changeTheme( theme: string ): void {
    this.settingSrv.changeTheme(theme);
  }

}
