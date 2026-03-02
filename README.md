# Boohooks – Google Books explorer

Boohooks is a Vue 2 + TypeScript project that turns the Google Books API into a polished discovery experience. It features search, category filtering, “surprise me” randomizer, responsive layouts, and Firebase-friendly deployment artifacts.

---

## Highlights

- **Instant search:** Fetches Google Books volumes in real time as users type queries in the navbar.
- **Category filters:** Quickly slice results by the first category returned from Google’s metadata.
- **Randomizer:** Uses `random-words` to generate spontaneous queries and deliver fresh reading ideas.
- **Mobile-first UI:** Responsive components (Navbar, Book cards, Random view) styled with custom CSS + Font Awesome icons.
- **Loading overlay:** `vue-loading-overlay` keeps UX smooth during API calls.
- **Firebase deployment ready:** Includes `firebase.json`, sitemap generation, and static assets under `/public`.

Screenshots:
![Boohooks Desktop](https://user-images.githubusercontent.com/45729368/116087983-af8b0080-a6a1-11eb-8bb4-77ebc01e3cd9.png)
![Book details](https://user-images.githubusercontent.com/45729368/116089372-1361f900-a6a3-11eb-9e80-983f2dff665b.png)
![Mobile view](https://user-images.githubusercontent.com/45729368/116088031-c3cefd80-a6a1-11eb-8927-52392dcfc3a7.png)
![Mobile randomizer](https://user-images.githubusercontent.com/45729368/116088076-d0ebec80-a6a1-11eb-9e54-b543a5436f1f.png)

---

## Tech stack

- Vue 2 + TypeScript (`main.ts`, class-style components via `Vue.extend`)
- Vue Router (Home, Book details, Random pages)
- Random words generator (`random-words`)
- Google Books REST API (`https://www.googleapis.com/books/v1/volumes`)
- Vue CLI tooling (babel/TypeScript/eslint configs)

---

## Project structure

```
Boohooks/
├── Book-Project/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.vue (search/filter view)
│   │   │   ├── Random.vue (randomizer page)
│   │   │   ├── Book.vue / BookDetails.vue
│   │   │   └── Navbar.vue, Footer.vue
│   │   └── main.ts, router.ts
│   ├── public/ (favicon, manifest, index.html)
│   ├── firebase.json (hosting config)
│   └── package.json
└── README.md
```

---

## Getting started

```bash
cd Book-Project
npm install

# development server
npm run serve

# production build
npm run build

# linting
npm run lint
npm run lint -- --fix
```

The development server runs on `http://localhost:8080` by default. To deploy to Firebase Hosting, run `firebase deploy` after configuring your project (see `firebase.json`).

---

## Environment configuration

Google Books API doesn’t require an API key for basic usage, but you can add one to the request URL by editing `src/components/Home.vue` / `Random.vue` and appending `&key=YOUR_KEY`. Firebase project details live in `firebase.json`.

---

## Roadmap ideas

- [ ] Persist favorites locally (IndexedDB) or via Firebase.
- [ ] Infinite scroll + skeleton loaders.
- [ ] Dark mode toggle.
- [ ] Convert to Vue 3 + Composition API.

---

📚 Built by [Arya Ludianto](mailto:arya.ludianto@gmail.com). Drop me a note if you’d like a walkthrough or to see the hosted version.
