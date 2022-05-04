import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardiologistPage } from './cardiologist.page';

describe('CardiologistPage', () => {
  let component: CardiologistPage;
  let fixture: ComponentFixture<CardiologistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiologistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardiologistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
