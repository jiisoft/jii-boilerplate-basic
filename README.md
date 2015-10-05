Basic boilerplate application
=====================

Basic application supplied with Jii Framework. Application represent is http server
with simple form and model with validation.

Includes: HTTP server with router, controller, models (Active Record), layout + view, assets.
Save and read models in database.

Install
---

```sh
git clone https://github.com/jiisoft/jii-boilerplate-basic
cd jii-boilerplate-basic
npm install
gulp production
```

Create database `jii-my-app` and user `jii-my-app` with empty password.
Import sql dump `data/install.sql` to this database.

Run
---

```sh
node index.js
```

After run, site will be available at http://localhost:3000/