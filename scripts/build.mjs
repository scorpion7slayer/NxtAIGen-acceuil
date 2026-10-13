// Copie le site statique de site/ vers out/, le dossier publié par Cloudflare Pages.
import { cpSync, rmSync } from "node:fs";

rmSync("out", { recursive: true, force: true });
cpSync("site", "out", { recursive: true });
console.log("site/ copié vers out/");
