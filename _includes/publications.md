<h2 id="publications">Publications</h2>
<p style="margin-top: -6px;"><small>Also available on <a href="https://www.scopus.com/authid/detail.uri?authorId=35219373500" target="_blank" rel="noopener">Scopus</a></small></p>

<div class="publications">
{% comment %} Newest first; `date` uses the approved year/month only. {% endcomment %}
{% assign publications_sorted = site.data.publications.main | sort: "date" | reverse %}
<ol class="bibliography">
{% for link in publications_sorted %}
  <li>
    <div class="pub-row">
      <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
        <div class="pub-thumb">
          {% if link.image %}
          <img src="{{ link.image | relative_url }}" class="teaser img-fluid z-depth-1" width="270" height="123" loading="lazy" alt="{{ link.title | escape }} figure">
          {% else %}
          <div class="pub-placeholder" role="img" aria-label="Figure not available">
            <i class="fa-solid fa-image" aria-hidden="true"></i>
          </div>
          {% endif %}
        </div>
        {% if link.conference_short %}
        <abbr class="badge">{{ link.conference_short }}</abbr>
        {% endif %}
      </div>

      <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
        {% assign title_url = link.pdf | default: link.project | default: link.code %}
        <div class="title">
          {% if title_url %}<a href="{{ title_url }}" target="_blank" rel="noopener">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
        </div>
        <div class="author">{{ link.authors | replace: "Wenyue Li", '<span class="self-author-highlight">Wenyue Li</span>' }}</div>
        <div class="periodical"><em>{{ link.conference }}</em></div>

        <div class="links">
          {% if link.pdf %}<a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">PDF</a>{% endif %}
          {% if link.HTML %}<a href="{{ link.HTML }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">HTML</a>{% endif %}
          {% if link.code %}<a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Code</a>{% endif %}
          {% if link.page %}<a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Project Page</a>{% endif %}
          {% if link.project %}<a href="{{ link.project }}" class="btn btn-sm z-depth-0" role="button"{% if link.project contains "http" %} target="_blank" rel="noopener"{% endif %}>Project</a>{% endif %}
          {% if link.huggingface %}<a href="{{ link.huggingface }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Hugging Face</a>{% endif %}
          {% if link.bibtex %}<a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">BibTeX</a>{% endif %}
        </div>

        {% if link.others %}
        <div class="pub-doi">{{ link.others }}</div>
        {% endif %}

        {% if link.notes %}
        <div class="pub-keywords"><span>Keywords</span> {{ link.notes }}</div>
        {% endif %}
      </div>
    </div>
  </li>
{% endfor %}
</ol>
</div>
