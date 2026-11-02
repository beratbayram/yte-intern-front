# YTE Intern Front

The React front end of my 2022 summer internship project at TÜBİTAK BİLGEM YTE: an event management app where users sign up, log in and manage events (called activities in the API) with a name, a start and end date and a participant quota.

It talks to a separate back end on `http://localhost:8080`, which is not in this repository.

## Features

- Sign up with an ID number (sent as `customerTCId`), user name and password, then log in
- List all events in a table with formatted dates
- Add, edit and delete events from Bootstrap modals
- Success and error messages from the back end shown as toasts

## Running

Start the back end on port 8080 first, then:

```bash
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

| Command      | What it does                   |
| ------------ | ------------------------------ |
| `yarn start` | Dev server                     |
| `yarn build` | Production build into `build/` |
| `yarn test`  | Jest in watch mode             |

## API

`src/api/Api.ts` wraps every call with axios (base URL `http://localhost:8080/`):

| Method | Path                          | Used for            |
| ------ | ----------------------------- | ------------------- |
| POST   | `user/signUp`                 | Sign up             |
| POST   | `user/login`                  | Log in              |
| GET    | `activity/allActivities`      | List events         |
| POST   | `activity/newActivity`        | Create an event     |
| POST   | `activity/update/:activityId` | Update an event     |
| DELETE | `activity/delete/:activityId` | Delete an event     |

Dates come back from the back end as arrays (`[year, month, day, hour, minute]`, the Java `LocalDateTime` JSON shape); `src/utils/` converts them for display and for the form inputs.

## Stack

Create React App (react-scripts 5), React 18, TypeScript, React Router 6, React Bootstrap 2, axios, react-toastify, Sass.

## License

MIT
