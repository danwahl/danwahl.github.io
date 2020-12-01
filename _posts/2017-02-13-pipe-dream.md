---
title: A Pipe Dream
layout: post
excerpt: Let's get the lead out, Chicago.
redirect_from: /pipe-dream
---
<script>
  function play(){
    var audio = document.getElementById("audio");
    audio.play();
  }
  function alert() {
    var answer = confirm("Why did you click that?")
  }
</script>
<audio id="audio" src="{{ site.baseurl }}/assets/js/pipe-dream/harp.ogg" ></audio>

The city of Chicago required the use of lead service lines (the pipes that connect the water mains to home plumbing) in private homes until they were [banned nationwide](http://www.chicagotribune.com/news/watchdog/ct-chicago-lead-water-risk-met-20160207-story.html) by the Safe Drinking Water Act in 1986. As a result, [nearly 80% of the city's properties](http://www.chicagotribune.com/redeye/redeye-what-to-know-about-lead-in-chicago-water-20160208-story.html) have their water delivered through lead pipes. This potentially contaminated water, along with lead exposure from air, paint, and soil, resulted in the [poisoning of nearly a generation of Chicago's kids](https://ehjournal.biomedcentral.com/articles/10.1186/s12940-015-0008-9), with more than half testing positive for high lead levels in the 1990s.

In this post I'll talk about the ongoing reality of lead in Chicago's water supply, how the city is failing to address the problem, and a potential solution in the form of a $60 gadget that anyone can build and install in their home.

<!--more-->
* table of contents
{: toc }

# More background

The number of children testing positive for high lead levels has (mercifully) declined over the past two decades (primarily due to a [1978 regulation](https://en.wikipedia.org/wiki/Lead-based_paint_in_the_United_States) banning the use of lead paint, and [subsequent efforts](https://www.epa.gov/lead/renovation-repair-and-painting-program) to remediate existing properties), but it's [still above 20%](http://apps.chicagotribune.com/news/watchdog/chicago-lead-poisoning/) in many poor and predominantly African-American neighborhoods. Despite increased attention from the [Flint water crisis](http://flintwaterstudy.org/) (and unlike neighboring cities [such as Milwaukee](http://www.chicagotribune.com/news/watchdog/ct-lead-water-pipes-funding-20160921-story.html)), Chicago is not replacing lead service lines as part of its [ongoing effort to modernize water mains](http://www.nytimes.com/2011/12/18/us/chicago-inaugurates-costly-plan-to-replace-aged-water-mains.html) throughout the city. Instead, the Department of Water Management has [opted to continue the existing anti-corrosion policy](https://www.cityofchicago.org/city/en/depts/cdph/provdrs/healthychicago/news/2016/april/mayor-emanuel--city-of-chicago-applaud-work-of-state-and-federal.html) of adding [blended phosphate](https://www.scientificamerican.com/video/corrosive-chemistry-how-lead-ended-up-in-flint-s-drinking-water1/) to maintain a protective coating in service lines.

However, a [recent study](https://www.epa.gov/sites/production/files/2015-10/documents/lead-service-lines-study-20130723.pdf) by [Flint whistleblower](http://www.detroitnews.com/story/news/michigan/flint-water-crisis/2016/03/28/whistle-blower-del-toral-grew-tired-epa-cesspool/82365470/) Miguel Del Toral showed that when lead service lines are disturbed (e.g., during a water main replacement), the lead phosphate coating can become dislodged. This has the doubly bad effect of drastically increased lead concentration immediately following the disturbance, and reduced protection from lead leaching over a period of years while the coating rebuilds.

Although Chicago is technically in compliance with current EPA regulations (derived from the 1991 [Lead and Copper Rule](https://www.epa.gov/dwreginfo/lead-and-copper-rule)), Del Toral's research showed that the mandated testing protocol (50 non-random[!?] residential water tests over three years) is woefully inadequate for detecting the rapidly fluctuating lead levels caused by service line disturbances. This is not to mention the fact that [15 ppb](https://www.epa.gov/dwreginfo/drinking-water-lead-and-copper-rule-historical-documents#summary) is an arbitrary standard, and ["there is no known safe level of lead in a child's blood."](https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water)

# How bad is lead?

But is it really such a big deal to have a few micrograms of lead in our drinking water? The [scientific consensus](https://ntp.niehs.nih.gov/ntp/ohat/lead/final/monographhealtheffectslowlevellead_newissn_508.pdf) is a resounding "yes," and even trace amounts of lead can have [negative health effects](http://www.mayoclinic.org/diseases-conditions/lead-poisoning/symptoms-causes/dxc-20275054) such as:

- Irritability
- <a href="javascript:alert();">Vomiting</a>
- Hearing loss
- Seizures
- High blood pressure
- Joint and muscle pain
- Difficulties with memory or concentration
- Mood disorders
- Miscarriage, stillbirth or premature birth in pregnant women

Lead poisoning in children is especially pernicious, because it can lead to developmental delays and learning disabilities, which have a multiplicative  effect on future potential. Studies have also shown a [disturbing relationship](http://www.chicagotribune.com/news/ct-lead-poisoning-science-met-20150605-story.html) between lead poisoning and violence, summed up in what might be the scariest graph I've ever seen (even if [correlation doesn't imply causation](https://xkcd.com/552/)):

[![lead violence]({{ site.baseurl }}/assets/images/pipe-dream/lead-violence.png "lead violence"){: .center-image }]({{ site.baseurl }}/assets/images/pipe-dream/lead-violence.png)

For an excellent (if slightly circuitous) introduction to the history of lead poisoning, I recommend watching the Cosmos episode ["The Clean Room"](https://en.wikipedia.org/wiki/The_Clean_Room) (currently available on Netflix).

# Official recommendations

It's important to note that there are official recommendations you should follow before building anything. First, it's a good idea to verify that your service line is actually lead. This can be tricky, depending on whether you own or rent, or even have access to the basement, but thankfully NPR has put together [a helpful guide](http://www.npr.org/sections/health-shots/2016/06/24/481090373/are-your-pipes-made-of-lead-heres-a-quick-way-to-find-out) to walk you through the process.

Assuming your line is lead, the next thing to consider is getting a water filter. Most [filters rated for lead](http://info.nsf.org/Certified/DWTU/listings_leadreduction.asp) are the expensive, under-the-sink variety, but a company called [ZeroWater](https://www.zerowater.com/) sells a Brita-like device that costs as little as $20. Unfortunately, what you save on the pitcher you later spend on the replacement filters: a quick calculation using ZeroWater's [replacement guide](https://www.zerowater.com/images/tds-chart.png), and the [average TDS of Chicago water](https://www.cityofchicago.org/city/en/depts/water/supp_info/water_quality_resultsandreports.html), shows that a typical filter might last as little as 10 days, leading to recurring costs of over $350 per year per household.

It's also worth considering DWM's [free water testing kit](http://www.chicagowaterquality.org/) offer, though as Del Toral's paper showed, the test may not be sensitive to the unique characteristics of Chicago's water infrastructure.

But by far the most common recommendation, both from [DWM](https://www.cityofchicago.org/city/en/depts/water/supp_info/winter-weather-and-your-water-system.html) and [the EPA](https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water#reducehome), is to [flush your taps for about five minutes](https://www.epa.gov/il/advice-chicago-residents-about-lead-drinking-water) if your water has been stagnant for more than six hours. The idea is simple enough: running your tap for five minutes should clear all the potentially contaminated water from the service line through your pipes, regardless of the status of the protective coating.

# The <span style="color:red">p</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span>

As easy as it sounds, I'm not thrilled by the prospect of incorporating a mandatory five minute tap flush into my daily schedule. Human beings have a notoriously difficult time learning tasks with [no clear feedback mechanism](https://en.wikipedia.org/wiki/Flow_(psychology)#Components), and it's that much worse when the consequence of failure is ingesting a [known neurotoxin](https://en.wikipedia.org/wiki/Lead_poisoning). And that's not even accounting for the fact that poorly automated systems really annoy robotics engineers...

On the suspicion that others might also be unaware of the scope of Chicago's lead problem, and doubtful of their ability to consistently follow the official recommendation, I designed a simple, inexpensive device to automate the tap flushing process: <a href="javascript:play();" style="text-decoration: none;"><span style="color:red">p</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span></a>.

[![pipe dream valve]({{ site.baseurl }}/assets/images/pipe-dream/pd-valve.jpg "pipe dream valve"){: .center-image }]({{ site.baseurl }}/assets/images/pipe-dream/pd-valve.jpg)

<a href="javascript:play();" style="text-decoration: none;"><span style="color:red">P</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span></a>, as you can see above, is just a solenoid valve that sits under your sink, between the water supply and drain. The valve is controlled by a simple Arduino-based circuit, which automatically flushes the tap every day at a set time, for a specified duration. The prototype board is shown below:

[![pipe dream board]({{ site.baseurl }}/assets/images/pipe-dream/pd-board.jpg "pipe dream board"){: .center-image }]({{ site.baseurl }}/assets/images/pipe-dream/pd-board.jpg)

# Assembly and installation

Here's how to make your <a href="javascript:play();" style="text-decoration: none;"><span style="color:red">p</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span></a> a reality. First you'll need the following electronics supplies (per-unit price derived from [Adafruit's website](https://www.adafruit.com/)):

| Electronic Parts                                                                                                                                                                                      | Price |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----:|
| [12 VDC 1000mA regulated switching power adapter](https://www.adafruit.com/product/798)                                                                                                               | $8.95 |
| [Plastic Water Solenoid Valve - 12V - 1/2" Nominal](https://www.adafruit.com/products/997)                                                                                                            | $6.95 |
| [Adafruit Trinket - Mini Microcontroller - 5V](https://www.adafruit.com/product/1501)                                                                                                                 | $6.95 |
| [Adafruit PCF8523 Real Time Clock](https://www.adafruit.com/product/3295)                                                                                                                             | $4.95 |
| [Half-size breadboard](https://www.adafruit.com/products/64)                                                                                                                                          | $5.00 |
| [Breadboarding wire bundle](https://www.adafruit.com/product/153)                                                                                                                                     | $1.50 |
| [2.1mm DC barrel jack](https://www.adafruit.com/product/373)                                                                                                                                          | $0.95 |
| [CR1220 12mm Diameter - 3V Lithium Coin Cell Battery](https://www.adafruit.com/product/380)                                                                                                           | $0.95 |
| [TIP120 Power Darlington Transistor](https://www.adafruit.com/product/976)                                                                                                                            | $0.83 |
| [Solid-Core Wire Spool - 25ft - 22AWG](https://www.adafruit.com/products/290)                                                                                                                        | $0.59 |
| [Terminal Block](https://www.adafruit.com/products/724)                                                                                                                                               | $0.59 |
| [1N4001 Diode](https://www.adafruit.com/products/755)                                                                                                                                                 | $0.15 |
| [2.2K ohm Through Hole Resistor](https://www.adafruit.com/products/2782)                                                                                                                              | $0.03 |

Assemble everything on the breadboard as shown in the fritzing below, and install the battery in the RTC (note that the RTC is a different model, but the pinout is the same):

[![pipe dream fritzing]({{ site.baseurl }}/assets/images/pipe-dream/pd-fritzing.png "pipe dream fritzing"){: .center-image }]({{ site.baseurl }}/assets/images/pipe-dream/pd-fritzing.png)

To load the software, install the [Arduino IDE](https://www.arduino.cc/en/main/software), and follow [Adafruit's instructions](https://learn.adafruit.com/introducing-trinket/introduction) to add support for the Trinket. Then [download the sketch](https://github.com/danwahl/pipe-dream) and adjust the following lines for the desired flush time and duration:

```c++
    // set flush time (0, hours, minutes, seconds) after midnight
    ft = TimeSpan(0, 6, 0, 0);

    // set flush duration (seconds)
    fd = TimeSpan(300);
```

Finally, set the board for Adafruit Trinket 16MHz in the Tools menu, and click Upload! Note that the sketch will sync the RTC with your computer's date and time, so make sure everything is current before proceeding.

The mechanical parts are all common plumbing supplies, and should be easy to find at a local hardware store (prices below from Home Depot):

| Mechanical Parts                                                                                                                                                                                      | Price |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----:|
| [3/8 in. Compression Brass T-Fitting](http://www.homedepot.com/p/Brass-Craft-3-8-in-x-3-8-in-x-3-8-in-Compression-x-Compression-Brass-T-Fitting-CT2-666X-P/202495893)                                 | $5.98 |
| [3/8 in. Compression x 1/2 in. FIP x 12 in. Faucet Connector](http://www.homedepot.com/p/BrassCraft-3-8-in-Compression-x-1-2-in-FIP-x-12-in-Braided-Polymer-Faucet-Connector-B1-12A-F/100068479)      | $5.54 |
| [Rubber Dishwasher Branch Connector](http://www.homedepot.com/p/BrassCraft-3-625-in-Rubber-Dishwasher-Branch-Connector-BC0475/206069709)                                                              | $3.31 |
| [Plastic Dishwasher Wye Tailpiece](http://www.homedepot.com/p/Everbilt-1-1-2-in-x-8-in-Plastic-Dishwasher-Wye-Tailpiece-C9816/205153966)                                                              | $3.27 |

Assemble the components as shown in the <a href="{{ site.baseurl }}/assets/images/pipe-dream/pd-valve.jpg">above image</a>, and install under the sink closest to your service line (be sure to shut off your water supply valve first!). Note that in order to attach the valve to the rubber branch connector, I first had to cut off the section with the smallest diameter: I haven't tested how well this connection holds in the event of a clogged drain, so proceed with caution! Finally, wire the valve to the terminal block, and you're done!

In total, one prototype <a href="javascript:play();" style="text-decoration: none;"><span style="color:red">p</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span></a> costs about **$60**, and should last for several years; long enough for the protective coating to rebuild after a water main replacement.

# Next steps

So far I've built a handful of prototype units, and recruited a few friends around Chicago for an initial trial run. I'm also planning to use the opportunity to get user feedback and generate a more comprehensive assembly and installation guide.

Beyond that, I'm thinking ahead to v2, and hoping to get the price down to the $20 range with custom circuit boards and bulk pricing. If you have any <a href="javascript:play();" style="text-decoration: none;"><span style="color:red">p</span><span style="color:orange">i</span><span style="color:gold">p</span><span style="color:yellowgreen">e</span> <span style="color:green">d</span><span style="color:teal">r</span><span style="color:blue">e</span><span style="color:indigo">a</span><span style="color:darkviolet">m</span></a> interest in the meantime, feel free to <a href="mailto:hi@danwahl.net?Subject=pipe%20dream">send me an email</a>.
