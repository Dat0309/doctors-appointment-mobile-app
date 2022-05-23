import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-cardcategorylist',
  templateUrl: './cardcategorylist.component.html',
  styleUrls: ['./cardcategorylist.component.scss'],
})
export class CardcategorylistComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() SpecializationObj : Specialization;
  @Output() clicked = new EventEmitter();

  ngOnInit() {}

}
