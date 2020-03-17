# GITHUB FINDER

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

---

## Install

    $ git clone https://github.com/dmand1c/Github-Finder.git
    $ cd github-finder
    $ npm install

### Configure app

This app is using Github's api so you want to configure github client id and github client secret in your .env file as:
-GITHUB_FINDER_GITHUB_CLIENT_ID = 'your_github_client_id_here'
-GITHUB_FINDER_GITHUB_CLIENT_SECRET = 'your_github_client_secret_here'

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm update` often.

---

## Languages & tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [Axios](https://github.com/axios/axios) is used for making API requests.
