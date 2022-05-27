import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-map',
  templateUrl: './lab-map.page.html',
  styleUrls: ['./lab-map.page.scss'],
})
export class LabMapPage implements OnInit {

  longitudeEvent: string;
  latitudeEvent: string;
  constructor() { }

  ngOnInit() {
  }

}
