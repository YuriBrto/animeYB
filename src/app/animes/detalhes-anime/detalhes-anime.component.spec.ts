import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAnimeComponent } from './detalhes-anime.component';

describe('DetalhesAnimeComponent', () => {
  let component: DetalhesAnimeComponent;
  let fixture: ComponentFixture<DetalhesAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesAnimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
