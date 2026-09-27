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

## Contenus pilotés depuis LMG OS

Le module `/portail-groupe` de LMG OS gère les actualités, projets et images de ce portail. Appliquer d’abord sa migration `20260927000100_group_portal.sql` sur le Supabase **LMG OS**. Elle reprend les contenus existants.

Sur Vercel, définir `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` (clé publique anon, jamais service_role) du projet LMG OS, puis `PORTAL_CMS_ENABLED=true` et redéployer. Sans activation explicite, le contenu local reste utilisé. Les images distantes sont limitées au bucket `portal-media` de ce projet.

Après activation, seules les publications sont lues, sans cache persistant. Le retrait d’un contenu le retire aussi de l’accueil, de la recherche et du sitemap. Une panne ne déclenche pas de retour aux anciens contenus. Voir `docs/portail-groupe.md` dans le dépôt LMG OS pour le déploiement et les contrôles de permissions.
