/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Company } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-cardmap',
  templateUrl: './cardmap.component.html',
  styleUrls: ['./cardmap.component.scss'],
})
export class CardmapComponent implements OnInit {

  constructor() { }

  @Input() companyObj: Company;

  ngOnInit() {}

}
