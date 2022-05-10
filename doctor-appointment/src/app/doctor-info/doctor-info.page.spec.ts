import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorInfoPage } from './doctor-info.page';

describe('DoctorInfoPage', () => {
  let component: DoctorInfoPage;
  let fixture: ComponentFixture<DoctorInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
