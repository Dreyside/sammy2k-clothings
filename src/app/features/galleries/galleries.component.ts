import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-galleries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './galleries.component.scss',
  templateUrl: './galleries.component.html',
})
export class GalleriesComponent implements AfterViewInit {
  private readonly galleryService = inject(GalleryService);

  readonly slides = this.galleryService.heroSlides;
  readonly swiperRef = viewChild<ElementRef<HTMLElement>>('swiperRef');

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  private initializeSwiper(): void {
    const el = this.swiperRef()?.nativeElement;
    if (!el) return;

    const params: Record<string, unknown> = {
      injectStyles: [
        `
        .swiper-button-disabled {
          display: none !important;
        }
      `,
      ],
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
    };

    Object.assign(el, params);
    setTimeout(() => {
      (el as unknown as { initialize: () => void }).initialize?.();
    });
  }
}

