import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnfriamientoPage } from './enfriamiento.page';

describe('EnfriamientoPage', () => {
  let component: EnfriamientoPage;
  let fixture: ComponentFixture<EnfriamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfriamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnfriamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
