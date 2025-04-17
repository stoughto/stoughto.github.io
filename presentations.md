---
layout: default
title: "Presentations"
navigation_weight: 2
---

{% for presentation in site.presentations %}
<a href="{{ presentation.url }} " class="image-text-link">
  <img src="{{ presentation.thumbnail }}" alt="Chris Stoughton">
  <span> **{{ presentation.title }}**  {{ presentation.tagline }} </span>
</a>
{% endfor %}


