import { Injectable, computed, signal } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  badge?: 'New' | 'Trending' | 'Sale';
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productsSignal = signal<Product[]>([
    {
      id: 'watch-classic',
      name: 'Classic Waist Watch',
      description: 'Minimal silver mens waist watch everyday wear.',
      price: 120,
      imageUrl: '/images/waist-watches-ai.png',
      category: 'Accessories',
      badge: 'New',
    },
    {
      id: 'sunglasses-midnight',
      name: 'Midnight Sunglasses',
      description: 'Dark framed sunglasses, perfect for US summer streets.',
      price: 65,
      imageUrl: '/images/sunglasses-midnight-ai.png',
      category: 'Accessories',
      badge: 'Trending',
    },
    {
      id: 'suit-navy',
      name: 'Navy Slim Suit',
      description:
        'Two‑piece navy suit generated from a smart campus outfit prompt.',
      price: 260,
      imageUrl: '/images/products/suit-navy-ai.jpg',
      category: 'Suits',
      badge: 'Sale',
    },
    {
      id: 'tie-silk',
      name: 'Silk Tie Pack',
      description: 'AI‑designed silk ties in deep blue and burgundy tones.',
      price: 55,
      imageUrl: '/images/products/tie-silk-ai.jpg',
      category: 'Accessories',
    },
    {
      id: 'jeans-relaxed',
      name: 'Relaxed Fit Jeans',
      description: 'Mid‑wash jeans with a relaxed US streetwear silhouette.',
      price: 89,
      imageUrl: '/images/products/jeans-relaxed-ai.jpg',
      category: 'Jeans',
    },
    {
      id: 'jersey-club',
      name: 'Club Night Jersey',
      description: 'Bold graphic jersey designed for game nights and clubs.',
      price: 79,
      imageUrl: '/images/products/jersey-club-ai.jpg',
      category: 'Jerseys',
      badge: 'Trending',
    },
    {
      id: 'tee-round-neck',
      name: 'Round Neck Tee',
      description:
        'Soft cotton round‑neck T‑shirt with subtle Sammy2k artwork.',
      price: 35,
      imageUrl: '/images/products/tee-round-neck-ai.jpg',
      category: 'T‑Shirts',
    },
    {
      id: 'tee-graphic',
      name: 'Graphic T‑Shirt',
      description: 'AI‑generated graphic print inspired by US city skylines.',
      price: 42,
      imageUrl: '/images/products/tee-graphic-ai.jpg',
      category: 'T‑Shirts',
    },
  ]);

  readonly products = this.productsSignal.asReadonly();

  readonly featuredProducts = computed(() =>
    this.products().filter((p) => p.badge === 'New' || p.badge === 'Trending'),
  );
}
