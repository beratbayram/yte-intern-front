# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

Front end of a 2022 internship project at TÜBİTAK BİLGEM YTE: event (activity) management with
sign-up and login. Create React App (react-scripts 5), TypeScript, React 18, React Router 6,
React Bootstrap 2, axios, react-toastify, Sass. Package manager is Yarn 1. The back end is a
separate service on `http://localhost:8080` that is not in this repo. Archived on GitHub.

## Commands

```bash
yarn start    # http://localhost:3000, needs the back end on :8080
yarn build
yarn test     # Jest watch mode
```

`src/App.test.tsx` is the untouched CRA sample test ("learn react link") and fails against this
app. Replace or delete it before relying on `yarn test`.

## Architecture

- `src/api/Api.ts` is a static class that owns every request and sets
  `axios.defaults.baseURL`. Back-end responses carry `messageType` (`SUCCESS` / `ERROR`) and
  `message`; `Api` turns them into toasts and throws on failure. Login instead checks
  `isSuccess`. Add new endpoints there, not in components.
- The logged-in user is `Api.user`, a static field (no persistence, lost on reload). `Home`
  redirects to `/` when it is `undefined`.
- Events: `ActivityProvider` / `useActivityContext` (`src/Home/ActivityContext.tsx`) hold the
  list for `/home`. `useForceUpdate` triggers refetches after add, edit and delete.
- Dates arrive as arrays `[year, month, day, hour, minute]` with a 1-based month.
  `dateArrToString` formats them for the table; `dateArrToLocalDateTime` turns them into the
  `YYYY-MM-DDTHH:mm` string that the edit form's `datetime-local` inputs need. Don't route them
  through `new Date(...)`: its month is 0-based and `toISOString()` converts to UTC.
- `User` and `Activity` in `src/api/` are plain classes; `User` maps to the back end's
  `userName`, `password` and `customerTCId` / `tcId` fields inside `Api`.

## Conventions

- Four-space indent, double quotes, React Bootstrap components for layout and forms.
