import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService, type Product } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  styleUrl: './products.component.scss',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);

  readonly products = this.productsService.products;

  isInCart(productId: string): boolean {
    return this.cartService.hasProduct(productId);
  }

  toggleCart(product: Product): void {
    if (this.isInCart(product.id)) {
      this.cartService.removeProduct(product.id);
      return;
    }

    this.cartService.addToCart(product);
  }
}

