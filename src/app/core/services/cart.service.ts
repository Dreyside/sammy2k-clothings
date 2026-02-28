import { Injectable, computed, signal } from '@angular/core';
import type { Product } from './products.service';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);

  readonly items = this.itemsSignal.asReadonly();

  readonly totalQuantity = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly lengthOfCart = computed(() => this.totalQuantity());

  readonly subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity * item.product.price, 0),
  );

  readonly salesTax = computed(() => Number((this.subtotal() * 0.1).toFixed(2)));
  readonly grandTotal = computed(() => Number((this.subtotal() + this.salesTax()).toFixed(2)));

  addToCart(product: Product): void {
    const items = this.items();
    const existingIndex = items.findIndex((x) => x.product.id === product.id);

    if (existingIndex > -1) {
      const updated = [...items];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + 1,
      };
      this.itemsSignal.set(updated);
    } else {
      this.itemsSignal.set([
        ...items,
        {
          id: crypto.randomUUID(),
          product,
          quantity: 1,
        },
      ]);
    }
  }

  hasProduct(productId: string): boolean {
    return this.items().some((item) => item.product.id === productId);
  }

  removeProduct(productId: string): void {
    this.itemsSignal.update((items) =>
      items.filter((item) => item.product.id !== productId),
    );
  }

  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(itemId);
      return;
    }

    this.itemsSignal.update((items) =>
      items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  }

  removeItem(itemId: string): void {
    this.itemsSignal.update((items) => items.filter((item) => item.id !== itemId));
  }

  clearCart(): void {
    this.itemsSignal.set([]);
  }
}

