/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable arrow-body-style */
import { formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  @Input() date: string;

  constructor(
  ) { }

  ngOnInit() { }

}
