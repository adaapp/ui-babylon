# Babylon Healthcheck UI example code

This repo contains example code for the chatbot we implement as part of the UI module.

You should work on the master branch. At any point you can check out the finished branches to see how it should look at the end of each workshop.

## Vanilla js example

<<<<<<< HEAD
[View completed branch: 1-html-workshop-end](https://github.com/adaapp/ui-babylon/tree/1-html-workshop-end)

1. Clone this repository to your computer and open it in a text editor.
2. Create a new file called index.html and open it
3. Type html and then press tab to choose the html:5 prediction. This should result in the following output (copy 'n' paste if it doesn't):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

4. Add a main element, and inside it two section elements. Give the section elements IDs of "welcome" and "chatbot", and a class of "page":

```html
<main>
  <section id="welcome" class="page"></section>
  <section id="chatbot" class="page"></section>
</main>
```

5. To start to make our page accessible, add a "skip to content" link outside the main element. Link it to the chatbot section e.g. `<a href="#chatbot" title="Skip to content">Skip to content</a>`
6. Add a header element to both sections with an image with the logo icon in it. The image is already in this project. Note it is a PNG rather than an SVG so won't be very good at scaling:

```html
<header>
  <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
</header>
```

7. Add a form to the welcome section.

```html
<form>
  <label for="initial">Hi Laurie, how can I help you?</label>
  <input placeholder="e.g. I have a headache" type="text" name="initial" />
</form>
```

8. The chatbot page now needs some content. Note the classes on the paragraphs which we will use to style the bubbles later:

```html
<article>
  <p class="bubble bot">Hi Laurie, how can I help you?</p>
  <p class="bubble user">I have a sore throat.</p>
  <p class="bubble bot">
    Oh dear. Does it really hurt or are you being a bit feeble?
  </p>
</article>
<footer>
  <form>
    <input type="text" placeholder="Type a message" />
  </form>
</footer>
```

That's all our HTML content for now. Next we will use CSS to make the sections 100% of the height of the viewport.

## Initial CSS Tutorial

[View completed branch: 2-css-workshop-end](https://github.com/adaapp/ui-babylon/tree/2-css-workshop-end)

Remember, this is what we're trying to achieve:

![Babylon prototype](img/prototype.jpg)

1. Let's implement a basic reset of the html and body's margins, and get our sections with their class of "page" to behave like real pages with a scroll in between them:

```css
body,
html {
  margin: 0;
  height: 100%;
}

.page {
  height: 100vh;
}
```

2. After this we can set a default font-family – let's use a [system font stack via CSS Tricks](https://css-tricks.com/snippets/css/system-font-stack/):

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

3. We can hide our skip to content link. There's [an accessible way of doing this properly](http://daviddickball.uk/2013/04/dont-do-skip-to-content-links-wrong/):

```css
#skip-to-content {
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  top: -10px;
}
```

We need to make sure we give the link in our index.html file an id of "skip-to-content" so that this style can apply.

We now have two pages that you can scroll between. As a little hack, why don't we make it so that when you submit the form on the first page it jumps you to the second page? As we learnt earlier, giving a form an action attribute tells it where to redirect when it's submitted. If we give the action attribute a "deep link" i.e. the id of an element on our page, submitting the form will reload the page and take you to that link. This is a neat way of enabling real user journeys through your HTML/CSS prototype:

```html
<form action="#chatbot">
  <label for="initial">Hi Laurie, how can I help you?</label>
  <input placeholder="e.g. I have a headache" type="text" name="initial" />
</form>
```

4. Let's style the welcome page now to look like our prototype. Lots of applied box model here. We will target our first section using its ID "welcome", and give it some padding:

```css
#welcome {
  padding: 2rem 1rem;
}
```

We will then get the logo (both logos as we'll use a class this time) and give it a more manageable width, set it to be a block level element so it can be centered, and then center it using its margins:

```css
.logo {
  width: 3rem;
  display: block;
  margin: 1rem auto;
}
```

Now we can target that label – but we don't want all labels in our app to look like this so we are specific, using a selector that only returns the label we're after:

```css
#welcome label {
  text-align: center;
  display: block;
  font-weight: bold;
  margin-bottom: 2rem;
}
```

Finally, let's target all text inputs in the app and give them a consistent look:

```css
input[type="text"] {
  font-size: 16px;
  background: #eeeeee;
  border: none;
  border-radius: 0.25rem;
  width: 100%;
  padding: 1rem;
  display: block;
  margin: 0 auto;
}
```

Looking good! You'll notice that the width has got too wide. This is to do with how the browser calculates the box model by default. It'll make the input 100% of the width of the page, so with the padding on the left and right of #welcome the total width of all our elements is greater than 100%, so the horizontal scrollbars appear.

We can fix this quite simply; do a [search of "box sizing ftw"](https://duckduckgo.com/?q=box+sizing+ftw) and you'll find Paul Irish's handy fix that you'll end up including on everything you build:

```css
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

That's looking much better now.

5. Let's style up the chatbot interface:

We've got a class of "bubble" on the paragraph elements, and a second class of "bot" or "user" depending on whether they are chatbot or user output.

The CSS below uses floats to implement the bubbles. We float the bot's left and the user's right. We set them both to "clear: both" which means they appear below the message that's been floated above them. Our mockup shows grey backgrounds for the bot's messages and purple backgrounds for the user's, with white text for the user's messages.

```css
.bubble {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  clear: both;
  margin: 0 0 1rem;
}

.bot {
  background: #eeeeee;
  float: left;
}

.user {
  background: #2bbbbb;
  color: white;
  float: right;
}
```

Finally, let's get the input sticking to the bottom of this second page. We can set it to position: absolute but this will take it out of the flow of the whole document and stick it to the bottom of the viewport when the website loads, which will make it look like it's part of Page 1. We therefore need to set the page class to be position: relative so that its child, the footer containing the input, is relative to its position. This will put footer correctly at the bottom of the second page:

```css
.page {
  height: 100vh;
  position: relative;
}

footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

footer input {
  width: 100%;
}
```

## Initial Responsive Tutorial

[View completed branch: 3-responsive-workshop-end](https://github.com/adaapp/ui-babylon/tree/3-responsive-workshop-end)

1. Let's give the whole thing a maximum width and centre it with margins:

```css
main {
  max-width: 28rem;
  margin: auto;
}
```

The bubbles look a bit long on desktop. Let's constrain them with a max-width, but only when the width is greater than a certain amount. You may find you prefer slightly different values:

```css
@media (min-width: 480px) {
  .bubble {
    max-width: 73%;
  }
}
```

## Initial UI Framework Tutorial

[View completed branch: 4-framework-workshop-end](https://github.com/adaapp/ui-babylon/tree/4-framework-workshop-end)

1. Install Semantic UI

Head to the [Semantic UI Getting Started](https://semantic-ui.com/introduction/getting-started.html) page and choose the "Simpler Setup" option (obviously). Download and unzip the files. Rename the unzipped folder "semantic" and drag it into your project's root directory.

Scroll down to "Include in Your HTML" and paste the snippet into the head of your index.html file, above the link to our style.css file. Be sure to remove the dir name "dist" as there is no such folder in the folder we unzipped:

```html
<link rel="stylesheet" type="text/css" href="semantic/semantic.min.css" />
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"
></script>
<script src="semantic/semantic.min.js"></script>
<link rel="stylesheet" type="text/css" href="./style.css" />
```

Note how the font-size decreased. If you inspect something on the page you'll see that semantic.min.css sets a font-size of 14px by default on the body. Browsers generally to a nice and legible 16px, so we can go ahead and redefine this in our style.css file as 16px, since it comes after Semantic's definition in the HTML file:

```css
body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

2. Find and customise the markup for a menu with labeled icons:

It looks something like this:

```html
<div class="ui labeled icon menu">
  <a class="item">
    <i class="gamepad icon"></i>
    Games
  </a>
  <a class="item">
    <i class="video camera icon"></i>
    Channels
  </a>
  <a class="item">
    <i class="video play icon"></i>
    Videos
  </a>
</div>
```

Looking at our wireframe, we want five icons. You can browse all the icons available from Semantic UI on [their icon page](https://semantic-ui.com/elements/icon.html).

Something like:

```html
<div class="ui labeled icon menu">
  <a class="item">
    <i class="heart icon"></i>
    Home
  </a>
  <a class="item">
    <i class="calendar outline icon"></i>
    Appointments
  </a>
  <a class="item">
    <i class="stethoscope icon"></i>
    Healthcheck
  </a>
  <a class="item">
    <i class="bell icon"></i>
    Notifications
  </a>
  <a class="item">
    <i class="child icon"></i>
    You
  </a>
</div>
```

It looks a bit wonky. A bit of reading around the docs suggest that if we add classes as follows: "ui secondary labeled icon fluid five item mini menu" it'll look much better. "secondary" removes the shadow, "fluid" makes them responsive, "five item" makes them 20% wide, and "mini" reduces their size. While we're at it let's make the containing element a nav element rather than the unsemantic div from the docs:

```html
<nav class="ui secondary labeled icon fluid five item mini menu">
  <a class="item">
    <i class="heart icon"></i>
    Home
  </a>
  <a class="item">
    <i class="calendar outline icon"></i>
    Appointments
  </a>
  <a class="item">
    <i class="stethoscope icon"></i>
    Healthcheck
  </a>
  <a class="item">
    <i class="bell icon"></i>
    Notifications
  </a>
  <a class="item">
    <i class="male icon"></i>
    You
  </a>
</nav>
```

3. Add custom CSS

You'll always need to write your own CSS. Let's stick it to the bottom and give it the grey background and border-top, as per the prototype:

```css
#welcome nav {
  background: #eeeeee;
  border-top: 1px solid #aaa;
  position: absolute;
  bottom: 0;
  left: 0;
}
```

## CSS Animation Tutorial

[View completed branch: 5-animation-workshop-end](https://github.com/adaapp/ui-babylon/tree/5-animation-workshop-end)

There are all sorts of things we could animate. Let's start with three dots fading out one after the other to indicate the other user is typing.

1. Implement our markup:

```html
<span class="typing">
  <span>.</span>
  <span>.</span>
  <span>.</span>
</span>
```

This goes inside a `<p class="bubble bot">...</p>` so we're limited for options on tags we can use. Span is a non-semantic wrapper so perfect for our requirements.

The [Animation for Beginners](https://thoughtbot.com/blog/css-animation-for-beginners) article from the lecture states the following:

> CSS animations are made up of two basic building blocks.
>
> 1. Keyframes - define the stages and styles of the animation.
> 2. Animation Properties - assign the @keyframes to a specific CSS element and define how it is animated.

2. Our keyframe will be a transition of the element's opacity:

```css
@keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

3. Our animation properties are as follows:

```css
.typing span {
  animation-name: opacity;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
```

But we can use the shorthand as below:

```css
.typing span {
  animation: opacity 1s infinite;
}
```

They are all happening at the same time. We need to use the animation-delay property on the separate spans using the CSS nth-child selector:

```css
.typing span:nth-child(1) {
  animation-delay: 100ms;
}

.typing span:nth-child(2) {
  animation-delay: 200ms;
}

.typing span:nth-child(3) {
  animation-delay: 300ms;
}
```

That's our animation finished.

## Vanilla Javascript Tutorial

This branch is to demo what the vanilla javascript might be to produce the same results as the ReactJS version. This is to show that vanilla javascript is a vaild way to go on a project if you know what you're doing and the project isn't going to get too big. 

WARNING: as a project scope gets bigger, the code usually gets more complex and will require some sort of structure that can be easily communicated to your team or Open Source communited (big projects tend towards spagetti code when it isn't well structured at the start). Using a framework is a good choice if you know that a project will get large or require lots of people to work on it at the same time.

1.1 Add script.js to your html

Add `<script>` tag to end of html `<body>`

```html
  ...
    <script src="script.js"></script>
  </body>
</html>
```

1.2 In your code editor create the new scrip.js file and open.

2. Adding interactivity with Javascript

Now we have our html and css UI set up we can start adding js interactions. Firstly we can set it our js file with a implicit function call which will run our script in a contained namespace so that the page can't sabotage our functions and varibles and we don't have variable name collisions. We do this as javascript has no way of doing function permissions like `private, protected and public` or namespaces found in some other languages. 

```javascript
;(function(){
  
  // Defines that JavaScript code should be executed in "strict mode",
  // this helps with js type errors
  // https://www.w3schools.com/js/js_strict.asp
  "use strict";

  // your code here

})();
```

Now we have out js file set up we can start catching input submissions to the chat bot.

3. Add event listeners to both forms

```javascript
var userForm = document.getElementById("user-input");
var initialForm = document.getElementById("initial-message");

initialForm.addEventListener("submit",function(e){    
    // stop the default browser submit
    event.preventDefault();
});
userForm.addEventListener("submit",function(e){    
    // stop the default browser submit
    event.preventDefault();
});
```

We're using getElementById to find the two forms so make sure you have the correct id's set on both. After getting the two forms we're adding event listeners to catch the submit event so we can grab the user's input and add a new bubble.

4. Change the view on submit

Currently we have both views stacked ontop of each other–ideally we would like to hide the welcome view and show the chatbot view on submit of the first form. To do this we'll add a `current` class to the welcome section. Which should look something like this:

```html
<section id="welcome" class="page current">
```

And set some CSS to only show the `.current` section.

```css
section{
  display: none;
}
section.current{
  display: block;
}
```

Now we will use Javascript to remove the current class on inital form submit and add it to the second section. Here's the inital event listener but with a new function.

```javascript

// get current view which in this case will get the welcome section
var currentView = document.querySelector("section.current"); // .querySelector is relatively new and works in a similar way to jquery selectors


initialForm.addEventListener("submit",function(e){    
  // stop the default browser submit
  event.preventDefault();

  // pass the e event variable to the new function
  handleInitalFormSubmit(e);
});

function handleInitalFormSubmit(){
        
  // hide welcome section view
  currentView.classList.remove("current")

  // go find the form action refer on the page, in this case #chatbot
  // make sure the inital form has an action of #chatbot e.g. action="#chatbot"
  currentView = document.querySelector(e.target.attributes.action.value);
  
  // add current to chatbot section
  currentView.classList.add("current")
}
```

TEST!!! Open the page in the browser. On form submission we should now see the section change to chatbot.

5. Add input to chatbot

Now we are doing something with the user submissions we can add another new function on both listeners to add the input message to the page.


```javascript
...

initialForm.addEventListener("submit",function(e){    
  ...
  handleInitalFormSubmit(e);

  // user message
  addUserMessage(e);
});
initialForm.addEventListener("submit",function(e){    
  ...

  // user message
  addUserMessage(e);
});

// 
// new message function
//
function addUserMessage(e){
  // get user input message
  var msg = e.target[0].value;

  // reset input value
  e.target[0].value = "";

  console.log(msg); // display the user input
}
```

Above we've added a new function to both event listeners and then logged the user input to the console to check everything is working. You should be seeing both the inital form and the chatbot form input appear in the console.

6. Add input bubbles to the DOM

Now we have the user input all we have left to do is add the text to a new `p`and add to the screen. Lets do that by first getting the element we want to add our p.bubble to and then create a new p, add our text and render that to the screen.

```javascript
function addUserMessage(e){
  ...

  // get chatbot article container element
  var article = document.querySelector("article#conversation");

  // create new DOM node paragraph
  var p = document.createElement("p");

  // add text input to the p node
  p.innerText = msg;
  
  // add classes
  p.classList.add("bubble");
  p.classList.add("user");

  // add to container element
  article.appendChild(p);
}
```


7. Stretch goal: add new dots bubble message from bot

Following on after our new p node. we can also add a "thinking" or "loading" indecator to the chatbot reply as follows: create new p node, add classes, add innerHTML span dots, append to the article.

```javascript
function addUserMessage(e){
  ...

  // add bot bubble
  var pBot = document.createElement("p");
  addClass(pBot,"bubble");
  addClass(pBot,"bot");

  var dots = `<span>.<span>
              <span>.<span>
              <span>.<span>`;

  pBot.innerHTML = dots;
  
  article.appendChild(pBot);
});
```

And thats it. There is much we can do to make our app better. But for now lets take a step back and look at some of this in ReactJS


## React Intro Tutorial

[View completed branch: 5-react-intro-workshop-end](https://github.com/adaapp/ui-babylon/tree/5-react-intro-workshop-end)

Make sure you have Node and NPM installed:

[Install NPM](https://www.npmjs.com/get-npm)

1. Initialise a new Create React App (CRA) project

In your project root, run the create-react-app command to create a new CRA project:

`$ npx create-react-app babylon-react`

This will create a new React app inside a folder called "babylon-react". It will also run `npm install` for you so when it's ready you can just:

`$ cd babylon-react`
`$ npm start`

The default CRA landing page should appear in your browser at http://localhost:3000

2. Copy over the HTML

There's a gotcha here which is that React doesn't like un-contained HTML and the HTML inside our body tag is only contained by the body:

```html
<body>
  <a id="skip-to-content" ...>...</a>
  <main>
    ...
  </main>
</body>
```

The `a` and the `main` are at the same level. React doesn't let a component return more than one parent HTML element.

This would blow up in our faces:

```jsx
import React from "react"
import "./App.css"

function App() {
  return (
    <a id="skip-to-content" ... > ... </a>
    <main>
      ...
    </main>
  )
}

export default App
```

So we need to use what's called a fragment: `<> ... </>` These empty tags serve as suitable "wrappers" or "containers" for our tags that are at the same nested level.

```jsx
import React from "react"
import "./App.css"

function App() {
  return (
    <>
      <a id="skip-to-content" ... > ... </a>
      <main>
        ...
      </main>
    </>
  )
}

export default App
```

Whatever you do, never add unnecessary markup just to make React work. Fragments are a nice solution and mean you don't need to add real, unnecessary markup.

3. Copy over the CSS

Have a look in App.css and delete everything that's there.

Also delete everything from index.css

As a rule, all project-wide CSS goes inside index.css, and any component-specific CSS goes inside the component's CSS file.

4. Copy over images and Semantic UI

We will need to copy over the semantic directory into the public directory, and add the link and script tags to the index.html.

For performance reasons we are not going to use any Semantic UI JS components so we can go ahead and remove the link to jQuery and semantic.min.js.

Your nav at the bottom of page one should now appear correctly.

Finally, copy over the img directory so it sits inside the public directory. Your images should now work too.

5. Make a Chatbot component

Create a new file called Chatbot.js with the following contents inside a new directory called 'pages':

```jsx
import React from "react"
import "./Chatbot.css"

function Chatbot() {
  return (

  )
}

export default Chatbot
```

This is the bones of a React component. Cut and paste the entire `<section id="chatbot" class="page"> ... </section>` from App.js into the return block of the `Chatbot` function.

Create a new file called Chatbot.css in the same directory, and cut and paste from App.css any Chatbot-specific CSS.

6. Do exactly the same for the Welcome page

`pages/Welcome.js` -> `<section id="welcome" class="page">...`</section>``pages/Welcome.css`->`#welcome { padding: 5rem 1rem }` etc. etc.

7. Include your new components inside App.js

Inside App.js, import and use your new Chatbot component:

```jsx
import React from "react"
import "./App.css"

import Welcome from "./pages/Welcome"
import Chatbot from "./pages/Chatbot"

function App() {
  return (
    <>
      <a id="skip-to-content" href="#chatbot" title="Skip to content">
        Skip to content
      </a>
      <main>
        <Welcome />
        <Chatbot />
      </main>
    </>
  )
}

export default App
```

8. Use state to show or hide the two components:

```jsx
import React, { useState } from "react"
import "./App.css"

import Welcome from './pages/Welcome'
import Chatbot from './pages/Chatbot'

function App() {

  const [initialMessage, setInitialMessage] = useState(null)

  return (
```

...

```jsx
<main>

  {!initialMessage && (
    <Welcome />
  )}
  {initialMessage && (
    <Chatbot />
  )}

</main>
```

Here we are saying if an `initialMessage` has not been set, display the welcome component. If it has been set, display the Chatbot component. We give `initialMessage` a default value of `null`, mening the Welcome component shows.

9. Update state when the user submits the initial form:
=======
This branch is to demo what the vanilla javascript might be to produce the same results as the ReactJS version. This is to show that vanilla javascript is a vaild way to go on a project if you know what you're doing and the project isn't going to get too big. 
>>>>>>> new readme added and react app removed

WARNING: as a project scope gets bigger, the code usually gets more complex and will require some sort of structure that can easily communicated to your team or others if Open Sourcing (this is known as spagetti code when it isn't well structured and hard to communicate to others). Using a framework is a good choice if you know that a project will get large or require lots of people to work on it at the same time.