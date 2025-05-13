import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
//import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'about', component: AboutComponent }, // Page "À propos"
  { path: 'products', component: ProductsComponent }, // Page "Produits"
  //{ path: '**', component: NotFoundComponent } // Page 404
];