import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusculosPage } from './musculos.page';

describe('MusculosPage', () => {
  let component: MusculosPage;
  let fixture: ComponentFixture<MusculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusculosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
