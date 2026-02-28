import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  styleUrl: './cart.component.scss',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  private readonly cartService = inject(CartService);

  readonly items = this.cartService.items;
  readonly totalQuantity = this.cartService.totalQuantity;
  readonly subtotal = this.cartService.subtotal;
  readonly salesTax = this.cartService.salesTax;
  readonly grandTotal = this.cartService.grandTotal;

  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }

  increaseQuantity(id: string, currentQuantity: number): void {
    this.cartService.updateQuantity(id, currentQuantity + 1);
  }

  decreaseQuantity(id: string, currentQuantity: number): void {
    this.cartService.updateQuantity(id, currentQuantity - 1);
  }

  clear(): void {
    this.cartService.clearCart();
  }
}

