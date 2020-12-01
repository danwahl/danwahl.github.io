---
layout: post
title: Chicago Water Main Replacement Map
excerpt: A map of recent water main replacements in the city of Chicago.
redirect_from: /water-main-map
---

**Edit 2017-08-26: For the second time this summer, the city's IT department has blocked my data collection, and so the map is currently out of date. I plan on revisiting this soon.**

Chicago is in the middle of a [10 year, multi-billion dollar effort](http://www.nytimes.com/2011/12/18/us/chicago-inaugurates-costly-plan-to-replace-aged-water-mains.html) to update its aging water delivery infrastructure. Unlike other [Midwestern](http://www.chicagotribune.com/news/watchdog/ct-lead-water-pipes-funding-20160921-story.html) [cities](http://www.npr.org/2016/03/31/472567733/avoiding-a-future-crisis-madison-removed-lead-water-pipes-15-years-ago), however, Chicago has opted not to simultaneously replace its lead service lines, which carry water from the main to a home's internal plumbing. As the [water crisis in Flint](https://www.nytimes.com/2017/03/27/us/flint-water-lead-pipes.html?_r=1) has shown, these dormant service lines can become activated with improper maintenance, resulting in a [public health disaster](http://www.cnn.com/2017/06/14/health/flint-water-crisis-legionnaires-manslaughter-charges/index.html).

Although Chicago's water is apparently [properly treated](https://www.cityofchicago.org/city/en/depts/water/supp_info/water_quality_resultsandreports.html), [EPA research](https://www.epa.gov/il/chicago-lead-drinking-water-study) has shown that these service lines can still leach small, but harmful amounts of lead into tap water, and this can be exacerbated by disturbances such as construction water main/meter replacements. The posted warnings from the city's Department of Water Management [are inadequate](http://www.chicagotribune.com/g00/news/watchdog/ct-chicago-lead-water-risk-met-20160207-story.html), and leave the majority of residents at risk of low-grade lead poisoning. As discussed in a [previous post](/chicago-lead), everyone with a lead service line should at least be drinking filtered water, if not replacing their lead pipes altogether.

Another problem is DWM's [lack of transparency](https://www.cityofchicago.org/city/en/depts/water/supp_info/dwm_constructionprojects.html) regarding current construction projects which makes it nearly impossible to know when your water main is being replaced. In this post I'll share a live map of main replacements, designed to help Chicago residents stay informed about the quality of their drinking water.

<!--more-->
* table of contents
{: toc }

# WaterALERT

Instead of notifying parents about the risks of lead poisoning, or providing free filters after water main replacements, the city has taken only a few minimal steps to safeguard its residents. The recommendation from [DWM's website](https://www.cityofchicago.org/city/en/depts/water/supp_info/winter-weather-and-your-water-system.html) is as follows:

> Now that your old water main has been replaced and your water service has been connected to the new water main, it is important to flush your plumbing of any sediment, rust or metals, including any lead to maintain water quality.
>
> Sediment, rust and metals, including any lead may collect in the aerator screen located at the tip of your faucets.  These screens should be removed prior to flushing.
>
> 1. Please find the closest available tap (an outside hose spigot, laundry sink faucet or bathtub) to where the water comes into the home that is not used for drinking water. Fully open the cold water tap and let the water run for at least 5 minutes.  Next flush any other cold water faucets on that floor for at least 5 minutes.
> 2. Move to the next highest floor and repeat.
> 3. Move to additional floors in sequence and flush any taps or faucets for at least 5 minutes.
>
> [![flush graphic]({{ site.baseurl }}/assets/images/water-main-map/flush-graphic.jpg "flush graphic"){: .center-image }]({{ site.baseurl }}/assets/images/water-main-map/flush-graphic.jpg)
>
> If you have any questions or concerns about your water quality, or if you would like your water tested, please call us at 311.  For additional advice and information visit [http://www.epa.gov/il/advice-chicago-residents-about-lead-drinking-water](http://www.epa.gov/il/advice-chicago-residents-about-lead-drinking-water).
>
> Routine Flushing
> If your water line has been idle or stagnant **for more than 6-hours**, it is advised that you flush for **at least 5 minutes** to maintain water quality.  This may include flushing the toilet, taking a shower and doing laundry.

In case you missed it, the official word from the City of Chicago is that most households should be flushing their taps for at least 5 minutes _every morning_. Of the dozens of people I've talked to in Chicago about this issue, almost none have even been aware of this recommendation (see Pipe Dream for an automated solution).

Beyond (poorly publicized) advice, the city also offers [free lead testing kits](http://www.chicagowaterquality.org/) to residents. While this is a positive step, resident lead testing can [produce inconsistent measurements](http://www.chicagotribune.com/news/watchdog/ct-chicago-lead-pipes-water-testing-met-20160226-story.html), which could result in a glut of false negatives and misplaced confidence. Even though the results posted so far are generally well below the EPA's action threshold of 15 ppb, the measured quantity is still enough to [cause harm in young children](/chicago-lead#water-lead-to-bll).

Finally, in what might be a tacit acknowledgement of the dangers posed by water main replacements, the city [offers construction updates via email](http://buildinganewchicago.org/), provided you know the relevant seven digit job code. How the average resident is supposed to know their job code is a mystery to me ([some aldermen](http://chicago47.org/projects/infrastructure-projects/dwm/) are kind enough to share), so I sent a FOIA request to the city for all present and planned water main construction projects. From their response, I was able to derive the job code pattern (`YY01XXX` where `YY` are the last two digits of the year, and `XXX` is an incremening count of yearly jobs).


# The map

To generate a map, I setup a script (using [Selenium](https://github.com/SeleniumHQ/selenium)) to automatically sign up for all job code permutations, then another to monitor my inbox for updates. I then used [Folium](https://github.com/python-visualization/folium) to generate this map, which is updated nightly.

<iframe src="https://cdn.rawgit.com/danwahl/chicago-lead/master/map.html" marginwidth="0" marginheight="0" width="100%" height="400" scrolling="no"></iframe>

Bookmarkable version [here](https://cdn.rawgit.com/danwahl/chicago-lead/master/map.html), source on GitHub [here](https://github.com/danwahl/chicago-lead).

# Future work

[JustDesign Cooperative](http://justdesigncoop.org/), in conjunction with the [Pilsen Environmental Rights and Reform Organization](http://pilsenperro.org/), held its first [Clean Water Expo](https://www.facebook.com/events/847156518772865) on July 15th, where we gave away about 100 lead-rated water (and a year's worth of replacement cartridges), and provided Pilsen residents with information and testing supplies to help take control over their water. Although about two thirds of the recipients had recent water main replacements, using this map will help us be even more precise when targeting blocks for future distributions.

I also plan to use the map, along with the public data from Chicago's water testing, to try to independently confirm the correlation between historical main replacements and contaminated water.
