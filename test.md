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

Here is the carousel

{% include carousel_items.html height="50" unit="%" duration="7" number="1" %}

Done with carousel

{% for item in page.carousel_items %}
  {{ item.url }}
  {{ item.caption }}
{% endfor %}

<a href="/presentations" class="image-text-link">
  <img src="/assets/images/orion-s.jpg" alt="Chris Stoughton">
  <span> **Engaging Presentations**  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span>
</a>



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



