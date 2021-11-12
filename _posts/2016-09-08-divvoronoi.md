---
layout: post
title: Divvy Voronoi Diagram
excerpt: An improved (and somewhat usable!) Divvy station map.
redirect_from: /divvoronoi
hidden: true
---

**Edit 2018-04-27: This isn't currently working, likely because something changed with Divvy's API. I'll fix it when I get a chance.**

Divvy is an great public bicycle service in Chicago - it's relatively inexpensive, has stations all over town, and is helping to make the city [an even better place](http://www.bicycling.com/culture/news/the-50-best-bike-cities-of-2016/slide/1) to ride a bike. There are, however, a few big issues:

1. The [official station map](http://www.divvybikes.com/stations) is awful. It's unusable at the default zoom level, presenting a wall of blue icons covering the entire city. Once you manually find your location it's mostly fine, but the icons are still too large and there's no easy way to determine which station is closest to you.
2. The bikes aren't that great either.

There isn't much to be done about #2, but I took a shot at fixing #1.<!--more-->

* table of contents
{: toc }

# Making a better map

Voronoi diagrams are a good fit for this kind of application. They subdivide an area in such a way that each location is within the "territory" of the nearest point of interest. This neat [National Parks map](https://www.reddit.com/r/MapPorn/comments/21yoxe/voronoi_map_of_national_parks_the_usa_divided/) is a great example (and proof the Midwest needs a real [Pawnee National Park](https://en.wikipedia.org/wiki/Parks_and_Recreation_(season_7))):

[![National parks voronoi map image]({{ site.baseurl }}/assets/images/divvoronoi/parks-voronoi.jpg "National parks voronoi map"){: .center-image }]({{ site.baseurl }}/assets/images/divvoronoi/parks-voronoi.jpg)

I started with Google Maps as the base, and added the D3.js [Voronoi API](http://bl.ocks.org/mbostock/4060366) to generate the diagram layer. Thankfully Divvy is very [data-friendly](https://www.divvybikes.com/datachallenge), and maintains a publicly accessible [JSON feed](https://feeds.divvybikes.com/stations/stations.json) with updated station data. After running into some cross-domain issues, I used [YQL](https://developer.yahoo.com/yql/) (the most useful thing Yahoo! has ever done) to grab the live feed. Finally, I added [geolocation](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation) to refocus the map on startup and automatically find the closest station with bikes.

# The prototype

<iframe src="https://cdn.rawgit.com/danwahl/45015b04f68d28812094/raw/ccf39050a614d45205b1e20c8028d969fdd86779/" marginwidth="0" marginheight="0" width="100%" height="400" scrolling="no"></iframe>

Bookmarkable version [here](https://cdn.rawgit.com/danwahl/45015b04f68d28812094/raw/ccf39050a614d45205b1e20c8028d969fdd86779/), source on GitHub [here](https://gist.github.com/danwahl/45015b04f68d28812094).

# Future improvements

Even though it's mostly functional, this is just a proof of concept so far. The code is a hack of about five different tutorials, and is in need of some TLC from a real web developer. In this implementation stations with no bikes/docks are excluded from the diagram, but it would be better still to apply lower weights to stations that are about to run out. Also, given that Chicago is basically a grid system, the [Manhattan distance](https://en.wikipedia.org/wiki/Voronoi_diagram#Illustration) ([currently unsupported](https://github.com/d3/d3-voronoi/issues/5) in D3.js) would be more realistic than the Euclidean.
