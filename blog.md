---
layout: default
---

<div class="home">

  {%- if site.posts.size > 0 -%}
    <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2>
    <ul class="post-list">
      {%- for post in site.posts -%}
        {%- if post.hidden -%}
          {%- continue -%}
        {%- endif -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          <cite>{{ post.excerpt }}</cite>
        {%- endif -%}
      </li>
      <hr>
      {%- endfor -%}
    </ul>

    <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
  {%- endif -%}

</div>
