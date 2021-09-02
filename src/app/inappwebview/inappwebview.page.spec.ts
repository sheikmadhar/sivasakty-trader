import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InappwebviewPage } from './inappwebview.page';

describe('InappwebviewPage', () => {
  let component: InappwebviewPage;
  let fixture: ComponentFixture<InappwebviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InappwebviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InappwebviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
