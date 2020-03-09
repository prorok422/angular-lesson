import { Component } from '@angular/core';

import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  data: any;
  toggle: boolean[];

  constructor(private apiService: ApiService) {
    this.data = this.apiService.getDepartments();
    this.toggle = this.data.map(i => false);
  }

}
