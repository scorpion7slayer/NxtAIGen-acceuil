# NxtAIGen

Site de [nxtaigen.com](https://nxtaigen.com/) : la page d'accueil des outils
open source NxtAIGen.

- [BenchSift](https://benchsift.nxtaigen.com/) — comparateur de modèles d'IA
- [NxtUpdate](https://nxtupdate.nxtaigen.com/) — mise à jour de tous les paquets sur macOS
- [NxtGit](https://nxtgit.nxtaigen.com/) — client GitHub de bureau (archivé)
- [Portfolio](https://theo.nxtaigen.com/)

Le site est écrit en HTML, CSS et JavaScript natifs, sans framework ni
dépendance.

## Développement

```sh
npm run dev
```

Ouvre `http://localhost:3000`. Les fichiers du site sont dans `site/`.

## Publication

```sh
npm run build
```

Copie `site/` vers `out/`, le dossier publié par Cloudflare Pages.

## Licence

MIT
