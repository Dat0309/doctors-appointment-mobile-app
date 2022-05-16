import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabInfoPage } from './lab-info.page';

describe('LabInfoPage', () => {
  let component: LabInfoPage;
  let fixture: ComponentFixture<LabInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
