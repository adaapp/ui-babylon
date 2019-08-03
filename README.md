# Babylon Healthcheck UI example code

This repo contains example code for the chatbot we implement as part of the UI module.

You should work on the master branch. At any point you can check out the finished branches to see how it should look at the end of each workshop.

## Initial HTML Tutorial

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