import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EmailCheckPage } from './email-check.page';

describe('EmailCheckPage', () => {
  let component: EmailCheckPage;
  let fixture: ComponentFixture<EmailCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
