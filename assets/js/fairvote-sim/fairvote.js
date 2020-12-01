colors = ['#D75C5C','#E49292','#F1C8C8','#F5F5BD','#BDD7ED','#7BB0DC','#3989CB']

var map = new Datamap({
  element: document.getElementById('container'),
  scope: 'usa',
  geographyConfig: {
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + data.popupData + '<div>'
    },
   highlightOnHover: false,
  },
  fills: {
    'Strong Dem': colors[6],
    'Dem': colors[5],
    'Lean Dem': colors[4],
    'Recount': colors[3],
    'Lean GOP': colors[2],
    'GOP': colors[1],
    'Strong GOP': colors[0],
    defaultFill: '#404040'
  }
});

map.legend();
updateMap('before');

function updateMap(name) {
  $.getJSON("/assets/js/fairvote-sim/" + name + ".json", function(json) {
    var c = {};
    var colorScale = d3.scale.linear().domain([-3.0, -1.5, -0.75, 0.0, 0.75, 1.5, 3.0]).range(colors).clamp(true);
    
    // iterate through states
    $.each(json, function(state, result) {
      // create popup text
      var p = {};
      var sumVotes = 0;
      $.each(result, function(candidate, votes) {
        // store candidate votes
        p[candidate] = votes;
        
        // keep track of total votes
        sumVotes += votes;
      });
      
      // generate state fill key
      var k = '';
      var pctDiff = 100*(p['Clinton'] - p['Trump'])/sumVotes;
      var pctDiffAbs = Math.abs(pctDiff);
      
      // check for tossup
      if(pctDiffAbs < 0.0) { k = 'Recount'; }
      else {
        // check for qualifier 
        if(pctDiffAbs < 1.0) { k = 'Lean '; }
        else if(pctDiffAbs > 2.5) { k = 'Strong '; }
        
        // check for winner
        if(pctDiff > 0.0) { k += 'Dem'; }
        else { k += 'GOP'; }
      }
      
      d = '<table><tr><th>' + state + '</th><th>Clinton</th><th>Trump</th><th>Johnson</th><th>Stein</th></tr><tr><th>Votes</th><td>' + p['Clinton'] + '</td><td>' + p['Trump'] + '</td><td>' + p['Johnson'] + '</td><td>' + p['Stein'] + '</td></tr>'
      
      // store state data
      c[state] = {fillColor: colorScale(pctDiff), popupData: d};
      //c[state] ={fillKey: k, popupData: pctDiff};
    });
    map.updateChoropleth(c);
    //console.log(c);
  });
}

$("input[id='myonoffswitch']").change(function() {
  if(this.checked) { updateMap('after'); }
  else { updateMap('before'); }
});
