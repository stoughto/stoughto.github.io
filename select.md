---
layout: default
title: Presentation Checklist
---

<h1>{{ page.title }}</h1>

abcdabcd

<form id="presentationForm">
  <label for="client">Client Name:</label><br>
  <input type="text" id="client" name="client" required><br><br>

  <fieldset>
    <legend>Presentation Completion Checklist</legend>
    {% for presentation in site.presentations %}
      <div>
        <input type="checkbox" id="presentation-{{ forloop.index }}" name="presentation-{{ forloop.index }}"
               value="{{ presentation.title }}"
               data-tagline="{{ presentation.tagline }}"
               data-thumbnail="{{ presentation.thumbnail }}"
               data-body="{{ presentation.body | escape }}">
        <label for="presentation-{{ forloop.index }}">{{ presentation.title }}</label>
      </div>
    {% endfor %}
  </fieldset>

  <button type="submit">Submit</button>
</form>

<script>


document.getElementById("presentationForm").addEventListener("submit", function(event) {
  event.preventDefault();

 const client = document.getElementById("client").value.trim();
  if (!client) {
    alert("Please enter a client name.");
    return;
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedItems = [];
  checkboxes.forEach(function(checkbox) {
    selectedItems.push({
      title: checkbox.value,
      tagline: checkbox.getAttribute('data-tagline'),
      thumbnail: checkbox.getAttribute('data-thumbnail'),
      body: checkbox.getAttribute('data-body')
    });
  });

  if (selectedItems.length > 0) {
    localStorage.setItem("selectedPresentations", JSON.stringify(selectedItems));
    localStorage.setItem("clientName", client);
    window.location.href = "/selected.html";
  } else {
    alert("Please select at least one item.");
  }
});


</script>
