/** @type {import('next').NextConfig} */

// Sur GitHub Pages (projet "port-folio"), le site est servi sous /port-folio.
// Le workflow CI définit NEXT_PUBLIC_BASE_PATH="/port-folio" pour le build de prod.
// En local (dev), la variable est vide -> le site reste servi à la racine.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  output: "export", // génère un site 100% statique dans ./out (compatible GitHub Pages)
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // chaque route -> dossier/index.html, servi correctement par Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // obligatoire pour l'export statique (pas d'optimiseur serveur)
  },
}

export default nextConfig
