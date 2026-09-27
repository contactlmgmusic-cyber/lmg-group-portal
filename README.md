# LMG Group Portal

Portail autonome du groupe LMG : accueil, groupe, Music, Entertainment, Agency, actualités et projets, contact.

## Développement

```bash
npm ci
npm run dev
```

Ouvrir http://localhost:3000.

## Vérification

```bash
npm run build
npm run typecheck
```

## GitHub et Vercel

Dépôt : https://github.com/contactlmgmusic-cyber/lmg-group-portal

Importer ce dépôt dans un nouveau projet Vercel, avec le framework Next.js et le répertoire racine par défaut. La commande de compilation est `npm run build`. Ne pas réutiliser les projets Agency ou Music.

## Supabase

Les pages fonctionnent sans Supabase. Le client dans `lib/supabase.ts` est préparé mais aucun contenu dynamique ni base de données ne sont encore connectés.

Pour une future connexion à un projet Supabase dédié, copier `.env.example` vers `.env.local` et renseigner les variables publiques du nouveau projet. Ne jamais ajouter de clé secrète dans une variable `NEXT_PUBLIC_` ni dans Git.

Les visuels de `public/images` sont ceux fournis dans le projet local.

## Domaine public

`NEXT_PUBLIC_SITE_URL` définit le domaine utilisé dans les liens canoniques, le sitemap et les aperçus de partage. Par défaut : `https://lmg-group-portal.vercel.app`. Mettre à jour cette variable lors du raccordement du domaine personnalisé.
