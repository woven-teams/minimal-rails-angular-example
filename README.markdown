# Minimal Rails and Angular app

This guide will help you make sure your environment is set up properly with the main dependencies you'll need for the work sample.


## Overview

There is a Rails 5 server, located in the `server/` directory. The client, an Angular 4 app, is in the `client/` directory.


## Backend

Let's get the Rails server running. Assuming you have the prerequisites installed (see work sample setup instructions), move to the `server/` directory:

    $ cd server

Install [Bundler](http://bundler.io/) (a Ruby gem that installs other Ruby gems) if it isn't already installed:

    $ gem install bundler

Install the application's gem dependencies:

    $ bundle install

Create your local development PostgreSQL database:

    $ rake db:reset

At this point you can start your Rails server:

    $ rails server

You should see something like:

```
$ rails server
=> Booting Puma
=> Rails 5.1.4 application starting in development
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.10.0 (ruby 2.3.3-p222), codename: Russell's Teapot
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://0.0.0.0:3000
Use Ctrl-C to stop
```

Now when you hit http://localhost:3000/posts, you should see the following page:

![Rails server example](./images/rails_server.png "Rails server example")


## Frontend

Let's get the Angular app running. Assuming you have the prerequisites installed (see work sample setup instructions), open a new terminal window and move to the `client/` directory from the top level:

    $ cd client

Then you can install the NPM package dependencies with Yarn:

    $ yarn install

When this finishes (might take a minute), you can start a local development server that will automatically reload when changes are made to the frontend code:

    $ yarn start

It will take a minute for Webpack to compile everything. You should see something like:

```
$ yarn start
yarn run v1.3.2
$ ng serve
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
Date: 2017-11-30T02:36:32.824Z
Hash: 43df101ee55fded573af
Time: 6124ms
chunk {inline} inline.bundle.js (inline) 5.79 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 21.5 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 563 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 34.4 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 7.03 MB [initial] [rendered]

webpack: Compiled successfully.
```

You should now be able to hit http://localhost:4200 and see the following:

![Angular example](./images/angular.png "Angular example")

## Finished

If you were able to see both images above on your local machine, then you have the key dependencies set up correctly. Excellent!
