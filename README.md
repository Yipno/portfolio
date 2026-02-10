# Portfolio Aubry Gamard

**Site en ligne** : https://aubrygamard.dev

Portfolio personnel pour presenter mes projets et proposer un CV interactif accessible en ligne.
Ce projet est en evolution continue et sert de base stable pour exposer mes travaux actuels et futurs.

---

## Objectif du projet

Ce portfolio a ete concu comme un **projet frontend a part entiere**, et non comme une simple vitrine.

Les objectifs principaux :
- presenter mes projets de maniere lisible et structuree
- proposer une interface claire, intuitive et coherente
- mettre en avant une approche orientee **lisibilite, alignement et rigueur visuelle**

Le design est volontairement affirme et sobre, avec une attention particuliere portee a la clarte de l'interface.

---

## Stack technique

| Categorie | Technologies |
|---|---|
| **Framework** | React 19 (SPA) |
| **Langage** | TypeScript (strict mode) |
| **Build** | Vite |
| **Styling** | Tailwind CSS 4 |
| **Runtime** | Bun |
| **Deploiement** | Vercel |

Librairies notables : Shiki (syntax highlighting), EmailJS (formulaire de contact), Lucide React (icones), react-intersection-observer (scroll tracking).

---

## Fonctionnalites

- Navigation par **scroll** et **ancres** avec suivi de section active
- **Dual theme** : light (Back to the Future) / dark (Star Wars) avec persistance localStorage
- **Formulaire de contact** fonctionnel via EmailJS
- **Code block** avec syntax highlighting (Shiki)
- Responsive mobile & desktop
- Accessibilite : contrastes, attributs ARIA, navigation clavier
- Headers de securite (CSP, HSTS, X-Frame-Options)

---

## Installation & lancement

### Prerequis
- Node.js
- Bun

### Commandes
```bash
bun install       # Installation des dependances
bun run dev       # Serveur de developpement
bun run build     # Build production (typecheck + bundle)
bun run lint      # Lint ESLint
bun run preview   # Preview du build production
```

---

## Auteur

**Aubry Gamard**
Developpeur web fullstack en reconversion professionnelle.
