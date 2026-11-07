# OpenVitals Landing Page

Marketing landing page for [hale.ngo](https://hale.ngo/), built with TypeScript and the Next.js App Router as a static export served by GitHub Pages, like the documentation site.

The page is available in the 14 languages of the app: English (`/en`), Czech (`/cs`), German (`/de`), Spanish (`/es`), Estonian (`/et`), Finnish (`/fi`), French (`/fr`), Galician (`/gl`), Italian (`/it`), Japanese (`/ja`), Polish (`/pl`), European Portuguese (`/pt`), Russian (`/ru`) and Simplified Chinese (`/zh`). Each language is one file in `lib/locales/`. Visiting `/` sends the browser to a locale: the one in the `NEXT_LOCALE` cookie when set, otherwise the first of the browser's languages the page has, otherwise English. Every language page sets that cookie, so a later visit to `/` returns to the last language seen. Without JavaScript, `/` lists the languages instead.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
```

The build writes every page to `out/` as `<path>/index.html`. To preview the exported site rather than the dev server:

```sh
python3 -m http.server --directory out 3000
```

## GitHub Pages

The GitHub Actions workflow (`.github/workflows/test.yml`) builds the site on every push and pull request and, on a push to `main`, deploys `out/` to GitHub Pages.

One-time setup: in the repository's Settings → Pages, set the source to "GitHub Actions" and the custom domain to `hale.ngo`, and turn on "Enforce HTTPS" once the certificate is issued. In DNS, the apex `hale.ngo` has the A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` and the AAAA records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`; `www` is a `CNAME` record pointing to `hale-mtu.github.io`. `docs.hale.ngo` belongs to the documentation site and `blog.hale.ngo` to the blog. The old address, openvitals.health, is served by a separate redirect site that forwards every path here.

## License

The OpenVitals landing page is licensed under the [`GNU Affero General Public License v3.0 or later`](LICENSE).
