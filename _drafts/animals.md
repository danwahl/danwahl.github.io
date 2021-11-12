---
layout: post
title: Animal post
excerpt: this is a test
---

<style>

.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}

</style>
<svg width="600" height="600"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
    
var defs = svg.append('svg:defs');

defs.append("svg:pattern")
    .attr("id", "dog")
    .attr("width", 100)
    .attr("height", 100)
    .attr("patternUnits", "userSpaceOnUse")
    .append("svg:image")
    .attr("xlink:href", "public/animals/dog1.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 0)
    .attr("y", 0);

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("public/animals/miserables.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return 0; });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
      .attr("cx", 5)
      .attr("cy", 5)
      .attr("r", 10)
      //.attr("fill", function(d) { return color(d.group); })
      .style("fill", "#fff")
      .style("fill", "url(#dog)");
    //    .call(d3.drag()
    //      .on("start", dragstarted)
    //      .on("drag", dragged)
    //      .on("end", dragended));
  
  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

</script>

<a href="http://www.freepik.com/free-vector/pack-of-farm-animal-silhouettes_1058750.htm">Designed by Freepik</a>

<a href='http://www.freepik.com/free-vector/assortment-of-fantastic-dog-silhouettes_1087946.htm'>Designed by Freepik</a>

<a href='http://www.freepik.com/free-vector/silhouette-of-cats-in-different-positions_1261801.htm'>Designed by Freepik</a>