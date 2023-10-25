# WeatherApp

## Table of Contents

- [WeatherApp](#weatherapp)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Step 1: Clone repository](#step-1-clone-repository)
    - [Step 2: Install node modules](#step-2-install-node-modules)
    - [Step 3: Setup environment variables](#step-3-setup-environment-variables)
    - [Step 4: Start application](#step-4-start-application)

## About <a name = "about"></a>

This is simple forecast application created with React Native.

## Getting Started <a name = "getting_started"></a>

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Clone repository

```bash
git clone git@github.com:BlazejakPiotr/WeatherApp.git
```

### Step 2: Install node modules

```bash
yarn install
```

### Step 3: Setup environment variables

Go to [Openweathermap.org](<(https://openweathermap.org/)>) and generate API KEY then create .env file in the root directory.
.env example:

```bash
API_URL=https://api.openweathermap.org/data/2.5
API_KEY=YOUR_API_KEY
```

### Step 4: Start application

```bash
yarn start
```

For android

```bash
yarn android
```

For ios

```bash
yarn ios
```
