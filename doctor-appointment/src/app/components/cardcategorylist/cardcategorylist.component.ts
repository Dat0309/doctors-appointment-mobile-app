import { Component, Input, OnInit } from '@angular/core';
import { Specialization } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-cardcategorylist',
  templateUrl: './cardcategorylist.component.html',
  styleUrls: ['./cardcategorylist.component.scss'],
})
export class CardcategorylistComponent implements OnInit {

  constructor() { }

  @Input() SpecializationObj : Specialization;

  ngOnInit() {}

}
