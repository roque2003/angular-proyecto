import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  data: any[] = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData() {
    this.apiservice.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })

  }

}
