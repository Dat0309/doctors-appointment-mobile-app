import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabTestPage } from './lab-test.page';

describe('LabTestPage', () => {
  let component: LabTestPage;
  let fixture: ComponentFixture<LabTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
