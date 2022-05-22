import { Router } from '@angular/router';
import { Specialization } from './../../services/specialization/specialization.service';
import { SpecialitiesPage } from './../../pages/specialities/specialities.page';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardcategoryitem',
  templateUrl: './cardcategoryitem.component.html',
  styleUrls: ['./cardcategoryitem.component.scss'],
})
export class CardcategoryitemComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() SpecializationObj : Specialization;
  @Output() clicked = new EventEmitter();

  ngOnInit() {}

  

  

}
