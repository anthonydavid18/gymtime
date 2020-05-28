import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResistenciaPage } from './resistencia.page';

describe('ResistenciaPage', () => {
  let component: ResistenciaPage;
  let fixture: ComponentFixture<ResistenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
