---
layout: default
title: "Song Demo"

songs:
  - name: "Armed Forces Medley (2023)"
    versions:
      - label: "FullMix"
        file: "Armed-Forces-Medley-2023_FullMix.mp3"
      - label: "Tenor"
        file: "Armed-Forces-Medley-2023_Tenor.mp3"
      - label: "Lead"
        file: "Armed-Forces-Medley-2023_Lead.mp3"
      - label: "Bari"
        file: "Armed-Forces-Medley-2023_Baritone.mp3"
      - label: "Bass"
        file: "Armed-Forces-Medley-2023_Bass.mp3"


---
Song Demo testing

{% for song in page.songs %}
  <div class="song-wrapper">
    <div class="song-title">{{ song.name }}</div>
    {% for version in song.versions %}
      <div class="version-wrapper">
        <span>{{ version.label }}:</span>
        <audio controls>
          <source src="/assets/audio/{{ version.file }}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    {% endfor %}
  </div>
{% endfor %}
