# Babylon Healthcheck UI example code

This repo contains example code for the chatbot we implement as part of the UI module.

You should work on the master branch. At any point you can check out the finished branches to see how it should look at the end of each workshop.

## Initial HTML Tutorial

1. Create a new folder on your computer, and open the folder in your text editor
2. Create a new file called index.html and open it
3. Type html and then press tab to choose the html:5 prediction. This should result in the following output:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

4. Add a main element, and inside it two section elements. Give the section elements IDs of "welcome" and "chatbot", and a class of "page":

```
<main>
<section id="welcome" class="page">
</section>
<section id="chatbot" class="page">
</section>
</main>
```

5. To start to make our page accessible, add a "skip to content" link outside the main element. Link it to the chatbot section e.g. `<a href="#chatbot" title="Skip to content">Skip to content</a>`
6. Add a header element to both sections with an image with the logo icon in it. The image is already in this project. Note it is a PNG rather than an  SVG so won't be very good at scaling:

````
<header>
  <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
</header>

````

7. Add a form to the welcome section.

```
<form>
  <label for="initial">Hi Laurie, how can I help you?</label>
  <input placeholder="e.g. I have a headache" type="text" name="initial" />
</form>
```
8. The chatbot page now needs some content. Note the classes on the paragraphs which we will use to style the bubbles later:

```
<article>
  <p class="bubble bot">Hi Laurie, how can I help you?</p>
  <p class="bubble user">I have a sore throat.</p>
  <p class="bubble bot">Oh dear. Does it really hurt or are you being a bit feeble?</p>
</article>
<footer>
  <form>
    <input type="text" placeholder="Type a message" />
  </form>
</footer>
```
That's all our HTML content for now. Next we will use CSS to make the sections 100% of the height of the viewport.


## Initial CSS Tutorial