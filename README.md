# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

![Desktop Preview](/public/screenshots/preview-1.png)

![Desktop Preview in 3D](/public/screenshots/preview-2.png)

![Mobile Preview in 3D](/public/screenshots/preview-3.png)

### Links

- Solution URL: [GitHub](https://github.com/dostonnabotov/fem_news-homepage)
- Live Site URL: [Live Preview](https://technophile-news-homepage.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid and Flexbox
- Fluid typography

### What I learned

Practiced variable fonts in CSS:

```css
@font-face {
  font-family: "Inter";
  font-display: swap;
  font-weight: 100 900;
  src: url("/assets/fonts/Inter-VariableFont.ttf") format("truetype");
}
```

Refereshed my knowledge on CSS counters (especially the `decimal-leading-zero` value):

```css
.popular-cards {
  counter-reset: title-counter;
}

.popular-card__title {
  counter-increment: title-counter;
}

.popular-card__title::before {
  content: counters(title-counter, ".", decimal-leading-zero) " ";
}
```

### Continued development

If you have any suggestions on how I can improve my code, please do let me know! I'll always look forward to learning new things.

### Useful resources

- [CSS Counters (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) - Generating counters right in your CSS.
- [Variable Fonts (Kevin Powell)](https://youtu.be/0fVymQ7SZw0) - A guide on how to use variable fonts in CSS.

## Author

- Website - [Doston Nabotov](https://flowcv.me/dostonnabotov)
- Frontend Mentor - [@dostonnabotov](https://www.frontendmentor.io/profile/dostonnabotov)
- Twitter - [@dostonnabotov](https://www.twitter.com/dostonnabotov)

## Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - For providing such a great resource for web developers.
- [Kevin Powell](https://www.youtube.com/@KevinPowell) - For his amazing tutorials on CSS.
