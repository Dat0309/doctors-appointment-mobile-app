import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalShopPage } from './medical-shop.page';

describe('MedicalShopPage', () => {
  let component: MedicalShopPage;
  let fixture: ComponentFixture<MedicalShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
