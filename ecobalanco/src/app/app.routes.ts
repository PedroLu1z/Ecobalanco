import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PraticasSustentaveisComponent } from './components/praticas-sustentaveis/praticas-sustentaveis.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "/calculadora",
        component: CalculadoraComponent
    },
    {
        path: "/praticasSustentaveis",
        component: PraticasSustentaveisComponent
    }
];
