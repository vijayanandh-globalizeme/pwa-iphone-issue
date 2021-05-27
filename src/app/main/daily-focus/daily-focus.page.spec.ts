import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DailyFocusPage } from './daily-focus.page';

describe('DailyFocusPage', () => {
  let component: DailyFocusPage;
  let fixture: ComponentFixture<DailyFocusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyFocusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyFocusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
