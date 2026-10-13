# NxtAIGen — nxtaigen.com

Page d'accueil de NxtAIGen : elle présente les outils open source publiés par
un développeur indépendant et renvoie vers leurs sous-domaines.

## Stack

- HTML, CSS et JavaScript natifs. Aucun framework, aucune bibliothèque, aucune
  dépendance npm. Ne pas en ajouter.
- Le site vit dans `site/`. Ce qui s'y trouve est publié tel quel.
- `npm run dev` lance un serveur local (`scripts/serve.mjs`, Node seul).
- `npm run build` copie `site/` vers `out/`, le dossier publié par Cloudflare Pages.

## Structure

```
site/
  index.html      page unique, tout le contenu est dans le HTML
  styles.css      toute la mise en forme, tokens de couleur sur :root
  main.js         uniquement le bouton de thème
  404.html        page d'erreur
  robots.txt, sitemap.xml
  screenshots/    captures WebP en 800 et 1600 px de large (ratio 16:10)
scripts/          build et serveur local
```

## Règles

- **Contenu dans le HTML.** Le texte et les liens doivent exister dans le HTML
  servi, jamais injectés en JavaScript : c'est ce que Google indexe. Les liens
  vers les outils sont de vrais `<a href>`.
- **Le site fonctionne sans JavaScript.** `main.js` n'ajoute que le choix du
  thème ; sans lui, le site suit le thème du système.
- **Voix.** NxtAIGen est le travail d'une seule personne. Ne jamais écrire
  « studio », « équipe » ou « nous » pour parler de qui construit les outils.
  Le titre de section « Nos outils » est voulu.
- **Honnêteté.** Un outil archivé est présenté comme archivé. Un outil qui
  n'est plus en ligne est retiré de la page.
- **Images.** Uniquement de vraies captures d'écran des sites ou des
  applications, sans filigrane. Toujours `width`, `height`, `alt` descriptif et
  `srcset` 800w/1600w.
- **Accessibilité.** Contraste AA dans les deux thèmes, focus visible, zones
  cliquables d'au moins 40 px, `prefers-reduced-motion` respecté.

## Ajouter ou retirer un outil

Mettre à jour, dans `site/index.html` : le sommaire du hero, la fiche dans
`#outils`, le pied de page et la liste JSON-LD (`ItemList`). Mettre à jour
`lastmod` dans `site/sitemap.xml`. Le sous-domaine de l'outil doit avoir un
lien retour vers `https://nxtaigen.com/`.

## SEO

- Canonical : `https://nxtaigen.com/` (avec la barre oblique finale).
- Changer `lastmod` dans `site/sitemap.xml` à chaque modification du contenu.
