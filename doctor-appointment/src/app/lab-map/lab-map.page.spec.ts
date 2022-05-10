import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabMapPage } from './lab-map.page';

describe('LabMapPage', () => {
  let component: LabMapPage;
  let fixture: ComponentFixture<LabMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
