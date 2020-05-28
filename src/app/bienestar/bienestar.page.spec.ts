import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BienestarPage } from './bienestar.page';

describe('BienestarPage', () => {
  let component: BienestarPage;
  let fixture: ComponentFixture<BienestarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienestarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BienestarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
