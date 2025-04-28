---
layout: default
title: "This is a Test"

carousel_items:
  - url: /assets/images/t/malta-einstein.jpg
    caption: "Upper Barrakkas, La Valletta, Malta"
  - url: /assets/images/t/ecuador-middle-of-the-world.jpg
    caption: "Museo de Sitio Intiñan, Ecuador  "
  - url: /assets/images/t/apollo.jpg
    caption: "Apollo 11 Test Capsule   Meteor Crater, AZ"
  - url: /assets/images/t/alexandria-ruins-group.jpg
    caption: "Serapeum, Roman Ruins in Alexandria"
  - url: /assets/images/t/gibraltar.jpg
    caption: "Jebel Musa in Morocco, from Europa Point, Gibraltar"
  - url: /assets/images/t/mosaic-in-alexandria.png
    caption: "Kallinike Mosaic, Alexandria"
  - url: /assets/images/t/king-teti.jpg
    caption: "Pyramid of Teti"


carousels:
  - images :
    - image: /assets/images/t/malta-einstein.jpg
    - image: /assets/images/t/ecuador-middle-of-the-world.jpg


---
[armed forces lead](/assets/audio/Armed-Forces-Medley-2023_Lead.mp3)

<audio controls style="width: 100%; max-width: 400px;">
  <source src="/assets/audio/Armed-Forces-Medley-2023_Lead.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<div style="display: flex; align-items: center; gap: 10px;">
  <span>Armed Forces Lead:</span>
  <audio controls style="width: 300px;">
    <source src="/assets/audio/Armed-Forces-Medley-2023_Lead.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

<a href=/assets/audio/Armed-Forces-Medley-2023_Lead.mp3> armed forces lead</a>

Here is the carousel

{% include carousel_items.html height="50" unit="%" duration="7" number="1" %}

Done with carousel

Here is site.title:  {{ site.title }}

<h1 class="red-text">Content</h1>

{:.red-text } This is red text



<section class="layout">
  <div> <img src="/assets/images/orion-s.jpg" alt="thumb" height="100"> </div>
  <div class="grow1"> <h2>This is the title</h2> <p> and this is the description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
</section>


Here is how to make a link:

<a href=about.html> about </a>

[ABOUT](about.html)



