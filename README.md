# React Native Init Example

## Introduction

[ Descripción de la App - Completar en caso que haga falta]

## Table of Contents

- [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Technologies](#technologies)
    - [Project Structure](#project-structure)
    - [Set Up Local Environment](#set-up-local-environment)
- [Coding Guidelines](#coding-guidelines)
    - [Code Style](#code-style)
- [Tests](#tests)
    - [Unit Tests](#unit-tests)
- [Submitting Your Changes](#submitting-your-changes)

## Development

### Prerequisites

First, install the following dependencies:

- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

### Technologies

 * [React Native](https://reactnative.dev/)
 * [React Navigation](https://reactnavigation.org/)
 * [React Native Elements](https://react.native-community.org/docs/0.57/elements)
 * [Redux Toolkit](https://redux-toolkit.js.org/)
 * [React Native Debugger]()

### Project structure

The project code base is mainly located inside, `src/`.

```
.
├── src
│   ├── assets             # Images and other assets
│   │
│   ├── components
│   │   ├── sample              # `Sample` component files.
│   │   │   ├── index.jsx       # `Sample` component source code.
│   │
│   ├── hooks                   # Custom hooks
│   │   ├── */                  # Each hooks folder if it needs to be separated.
│   │   └── useHookName.js      # Hook source code.
│   │
│   ├── navigation              # Navigation files.
│   │   ├── */                  # Folder for each Screen. eg: `Home`, `Login`, `Register`
│   │   └── index.js            # Main entry point for navigations.
│   │
│   └── App.js                  # Main entry point for the app.
```

### Set Up local environment
Local development requires to have at least one device connected to the computer or at least one emulator already
configured. To know how to configure an emulator, please refer to the [React Native](https://reactnative.dev/docs/environment-setup)

#### Android
```bash
yarn && yarn run android
```

#### IOs
```bash
yarn && cd ios && pod install
```
```bash
yarn run ios
```

## Coding Guidelines

### Code Style

TODO

### Logging

TODO

## Submitting Your Changes

1. Get `main` branch up to date: `git checkout main && git pull`
2. Create your branch with Jira ticket number in the branch name: `git checkout -b <branch_name> description`
3. Hackity hack with small PRs organized by subtask (if needed)
4. Push branch: Runs eslint, jest tests, and typescript compile that has to pass to push
5. Create PR and follow provided PR template: PRs require at least <X> approvals to merge and approvals are reset for any change to the PR
