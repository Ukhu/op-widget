# OP Poll Widget

This simple Javascript widget can be embedded on your html page for your users to interact with

## Setup

To setup the widget, clone the repo and follow the instructions below:

#### Serve widget assets

First serve the files in the `./dist` directory by running `npm run serve:dist`

The files served from the `./dist` directory will be referenced in the page(s) you are testing the widget on

#### Adding the widget to your page

In the HTML page where the widget will be used, reference the widget files in a `link` tag and a `script` tag for the CSS and JS assets respectively

Add this in the head tag:
`<link href="http://<SERVER_URL>/index.css" rel="stylesheet" />` \
Where `<SERVER_URL>` is the url where the widget assets are being served from e.g `localhost:5000`

Place this at the location you want the widget to be within the body of your page:
`<div id="op-widget"></div> `

Add this at the end of the body tag
`<script src="http://<SERVER_URL>/index.js"></script>`\
Where `<SERVER_URL>` is the url where the widget assets are being served from e.g `localhost:5000`

#### Configuring the widget

See below for an example of how the widget should be configured

```
  <script src="http://localhost:5000/index.js"></script>
  <script>
    var myPoll = {
      pollId: "poll_1",
      question: "Who is the best player in the world?"
      options: [
        {id: "choice1",choice: "Ronaldo"},
        {id: "choice2",choice: "Messi"},
        {id: "choice3",choice: "Lewandowski"}
      ]
    }
    MyApp.init(myPoll)
  </script>
```

Be sure to include the configuration script below the location of the script tag that fetches the widget

#### The `Poll` Object

As seen in the example above, the `Poll` object `myPoll` contains 3 fields

`pollId` - This is the unique identifier for each poll\
`question` - The question for the poll\
`options` - An array containing up to 3 Choice objects that represent the choices the user can choose from

#### The `Choice` Object

The `options` on the Poll object contains up to 3 Choice objects as stated

Each Choice must have an id of type "choice1" | "choice2" | "choice3"

The Choice object also includes the `choice` property which should contain the string to be displayed as a choice on the poll


## Widget Demo

To see the widget in action, serve the `./test_pages` directory using the `serve:html` script

Simply run `npm run serve:html` and you will see the widget on the page

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.
