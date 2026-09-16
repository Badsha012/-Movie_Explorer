# Cinemora — Movie Explorer

A responsive React movie-discovery application powered by the public [TVMaze API](https://www.tvmaze.com/api).

## Features

- A polished home page with navbar, hero banner, CTA, feature highlights, and footer
- Dedicated movie-library view at `#movies`
- TVMaze `/shows` integration with responsive, reusable movie cards
- Debounced title search using TVMaze `/search/shows?q=:query`
- Genre filtering, rating/newest sorting, and load-more pagination
- Loading skeletons, empty state, retryable error state, and lazy-loaded poster images
- Details modal with artwork, summary, rating, release date, runtime, genres, network, and official link
- Modal closes through the close control, backdrop click, or `Escape`
- Mobile-first responsive layout

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```
