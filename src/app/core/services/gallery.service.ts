import { Injectable, signal } from '@angular/core';

export interface GalleryImage {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  readonly heroSlides = signal<GalleryImage[]>([
    {
      id: 'hero-1',
      title: 'Streetwear for Every Campus',
      subtitle: 'Curated looks for lectures, labs, and late nights.',
      imageUrl: '/images/Gemini_Generated_Image.png',
    },
    {
      id: 'hero-2',
      title: 'Color Stories That Pop',
      subtitle: 'Bold palettes inspired by New York and LA.',
      imageUrl: '/images/men-suit-2.png',
    },
    {
      id: 'hero-3',
      title: 'Comfort Meets Minimal Design',
      subtitle: 'Soft fabrics, clean lines, zero distractions.',
      imageUrl: '/images/luxury-waist-watches-and-t-shirts.png',
    },
  ]);
}
