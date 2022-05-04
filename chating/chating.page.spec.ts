import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatingPage } from './chating.page';

describe('ChatingPage', () => {
  let component: ChatingPage;
  let fixture: ComponentFixture<ChatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
