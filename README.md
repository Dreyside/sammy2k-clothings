# Obasam Clothing – Angular 19 SPA

Obasam Clothing is a small but well‑structured Angular 19 single‑page application that simulates a
US‑based online menswear store. The focus is on clean architecture (signals, standalone components,
lazy loading) and a simple shopping cart – without authentication or payments – for use as a Masters
project.

---

## Tech stack

- **Framework**: Angular 19 (standalone APIs, signals, `@if` / `@for` templates)
- **UI**: Angular Material
- **Routing**: Angular Router with lazy‑loaded, standalone feature components
- **State**: Angular signals in service layer (`ProductsService`, `CartService`, `GalleryService`)
- **Assets**: AI‑themed images under `public/images/...`
- **Runtime**: Docker + nginx (SPA routing)

---

## Application structure

- `src/app/app.component.*` – Shell layout (toolbar, navigation, loading spinner)
- `src/app/app.routes.ts` – Top‑level routes, each lazily loading a standalone feature:
  - `/galleries` – AI gallery with Swiper slider
  - `/products` – Product catalog (menswear only)
  - `/cart` – Simple shopping cart view (no payments)
  - `/about` – About Obasam Clothing brand and project
  - `/contact` – Contact form and demo address/socials
- `src/app/core/services` – Signal‑based data services:
  - `products.service.ts` – In‑memory catalog for watches, sunglasses, suits, ties, jeans, jerseys,
    T‑shirts, round necks
  - `cart.service.ts` – Cart items, totals, and basic operations
  - `gallery.service.ts` – Hero gallery slides (AI‑style campaigns)
- `src/app/features/...` – Feature folders for each tab (standalone Angular components)

---

## Running the app locally (without Docker)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm start
   ```

3. Open `http://localhost:4200` in your browser.

---

## Docker setup

This project includes a multi‑stage Dockerfile that builds the Angular app and serves it with nginx
as a static SPA.

### Build the image

From the project root:

```bash
docker build -t obasam-clothing .
```

### Run the container

```bash
docker run -p 8080:80 obasam-clothing
```

Then open:

```text
http://localhost:8080
```

The nginx configuration (`nginx.conf`) is set up for SPA routing using `try_files` so deep links
such as `/products` or `/cart` work correctly when refreshed.

---

## Notes for project defence

- The store is intentionally **menswear only** and does **not** implement:
  - Authentication / user accounts
  - Payment gateway or real checkout
  - Admin dashboard
- The cart is fully functional for adding/removing items and computing totals, but checkout is
  conceptual only.
- All images referenced are AI‑style URLs under `public/images/...`; you can replace them with your
  own AI‑generated assets using the same filenames.

