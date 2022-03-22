import { Component, OnInit } from '@angular/core';

import { AppServicesService } from 'src/app/app-services/app-services.service';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardItem:any= {};
  updateItem:any= {};
  constructor(private _dashService: AppServicesService) { }

  ngOnInit(): void {
    this.dashboardItem = this._dashService.dashboard;
    this.updateItem = this._dashService.updates
  }
  config: CountdownConfig = {
    leftTime: 57600,
    format: 'HH:mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

}
