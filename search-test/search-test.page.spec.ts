import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTestPage } from './search-test.page';

describe('SearchTestPage', () => {
  let component: SearchTestPage;
  let fixture: ComponentFixture<SearchTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
