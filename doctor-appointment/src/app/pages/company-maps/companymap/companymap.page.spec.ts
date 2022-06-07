import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanymapPage } from './companymap.page';

describe('CompanymapPage', () => {
  let component: CompanymapPage;
  let fixture: ComponentFixture<CompanymapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
