import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMessagePageRoutingModule } from './view-pokemon-routing.module';

import { ViewPokemonPage } from './view-pokemon.page';

describe('ViewMessagePage', () => {
  let component: ViewPokemonPage;
  let fixture: ComponentFixture<ViewPokemonPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPokemonPage ],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
