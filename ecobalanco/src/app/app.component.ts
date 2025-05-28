import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PraticasSustentaveisComponent } from './components/praticas-sustentaveis/praticas-sustentaveis.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CalculadoraComponent, PraticasSustentaveisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecobalanco';
}
