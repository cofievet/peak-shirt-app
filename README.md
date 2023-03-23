# Peak Tshirt Web App

> On vend des tshirts et on le fait bien

## Getting Started

Create the `/public/config.json` file:

```json
{ "API_BASE_URl": "http://localhost:3001" }
```

It should match the `REACT_APP_API_BASE_URL` env var to host it on Netlify.

Install dependancies:

```shell
yarn
```

Run the dev server:

```shell
yarn start:api
yarn start
```

Make your move, develop your new feature, then commit with:

```shell
yarn commit
```

## Mockup

![Mockup](./docs/mockup.png)

## Design System

Le Desygn System (DS) sera mis en place à travers l'approche [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/) depuis le _folder_ `src/ds/`

## Alias JSConfig

Il existe 3 différents alias utilisés dans ce repository [jsonconfig.json](./jsconfig.json)

```json
"core": ["./src/core"],
"ds": ["./src/ds"],
"testUtils": ["./src/testUtils"]
```

Désormais l'import des modules se fera à travers :

```javascript
import { Price } from "ds/atoms";
```

Warning : ne pas créer trop d'alias, Cela rendrait les imports bien moins pertinents la structure des données

## CRA

[Official CRA doc](./docs/CRA.md).

## Todo

- [x] Design de la page Tshirt
- [x] Data dynamic de Tshirt page
- [x] Bouton ajout au panier (static)
