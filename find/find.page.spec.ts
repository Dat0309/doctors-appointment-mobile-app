import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPage } from './find.page';

describe('FindPage', () => {
  let component: FindPage;
  let fixture: ComponentFixture<FindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
