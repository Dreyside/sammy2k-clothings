import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'galleries',
  },
  {
    path: 'galleries',
    loadComponent: () =>
      import('./features/galleries/galleries.component').then(
        (m) => m.GalleriesComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then(
        (m) => m.CartComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(
        (m) => m.AboutComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'galleries',
  },
];
