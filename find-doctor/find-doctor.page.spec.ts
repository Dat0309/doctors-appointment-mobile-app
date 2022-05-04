import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindDoctorPage } from './find-doctor.page';

describe('FindDoctorPage', () => {
  let component: FindDoctorPage;
  let fixture: ComponentFixture<FindDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
