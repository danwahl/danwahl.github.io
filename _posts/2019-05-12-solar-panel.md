---
layout: post
title: So you want to mount a solar panel on your roof
excerpt: A guide.
redirect_from: /solar-panel
---

So you want to mount a solar panel on your roof, but don't have time for the city's lengthy [permitting process](https://www.chicago.gov/city/en/progs/env/solar_in_chicago.html), and don't want to shell out [tens of thousands of dollars](https://www.energysage.com/solar-panels/solar-panel-cost/il/cook-county/chicago/) to a licensed solar contractor.

No problemo.

You're an engineer, dammit, and it's just a [small solar panel](https://smile.amazon.com/gp/product/B07HFMBF3G). How hard can it be? You'll get [a bracket](https://smile.amazon.com/gp/product/B07CSKFWK7) and a few [cables](https://smile.amazon.com/gp/product/B00JPK3MDI), pitch it all up on the roof, drop the connectors down through an open window, and *bam*, you're charging batteries. Right?

Well, come to think of it, you should probably make sure the panel doesn't blow away. That would be pretty embarrassing. A few strategically placed sandbags should do the trick, but just how many are you going to need?

<!--more-->
* table of contents
{: toc }

# Engineering 101

Like any well-trained (albeit extremely lapsed) mechanical engineer, you start by sketching a free body diagram on the back of the nearest envelope. You include a happy little sun in the corner for good measure.

[![free-body]({{ site.baseurl }}/assets/images/solar-panel/free-body.jpg "free-body"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/free-body.jpg)

You're excited to realize that panel's exposed profile (and therefore wind load) varies with the sine of mount angle $$\theta$$, meaning that you only have to account for a fraction of the potential force that would be generated if mounted vertically.

But looking at your artwork, something nags at you. The image of an inclined plane under horizontal wind load looks *familiar* in some way. It reminds you of another classic engineering diagram, though you can't quite put your finger on...

Oh. Oh, crap.

[![airfoil]({{ site.baseurl }}/assets/images/solar-panel/airfoil.png "airfoil"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/airfoil.png)

It's a wing.

# It's a wing

The problem, as you've just realized, is that an inclined plane under horizontal wind load generates *lift*, which makes your pretty little free body diagram totally obsolete, and vaults you headlong into the world of empirical aeronautics. See, when under intense wind load, your panel won't just want to slide in the direction of the gust, it will also try to fly away like the world's shittiest solar-powered aircraft. Your sandbags might help keep you grounded, but as lift increases, the normal force ($$F_n = m*g$$) and static friction ($$F_s = \mu_s*F_n$$) you're relying on to keep your panel in place correspondingly decrease. And if the static force falls below the drag, things start to accelerate.

Damn. Well, maybe it won't generate *that* much lift?

# Lift

You start your research with the [lift experts](https://www.youtube.com/watch?v=vvB3vlerABk), NASA. Conveniently, they have a website dedicated to the [aerodynamics of kites](https://www.grc.nasa.gov/www/k-12/airplane/kitelift.html), a problem surprisingly analogous to the one you're facing. The fact that this educational material is intended for children, not adults with relevant post-graduate degrees, causes you to feel absolutely no professional shame whatsoever. NASA sketches the following formulas for determining lift:

[![kitelift]({{ site.baseurl }}/assets/images/solar-panel/kitelift.gif "kitelift"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/kitelift.gif)

But on closer inspection, there's a subtle problem. Kites are generally intended to be flown at a relatively small angle of attack, a property NASA assumes when providing a simple formula for lift coefficient:

> For a thin flat plate at a low [angle of attack](https://www.grc.nasa.gov/www/k-12/airplane/kiteincl.html) , the lift coefficient Clo is equal to 2.0 times pi (3.14159) times the angle a expressed in radians (180 degrees equals pi radians): $$C_{lo} = 2 * pi * a$$

They don't specify what qualifies as a "low" angle of attack, but based on your numbers it's clearly less than your optimal mount angle. Since this equation won't work, you do the next best thing and rent out time at the [nearest wind tunnel](https://www.iflyworld.com/lincoln-park/) to gather some empirical data on your specific panel. Because it's not like anyone has done an equivalent experiment with rectangular planes of exactly the same aspect ratio and angle of attack and...

# Someone has done the experiment

Thankfully, just before you put down a deposit on the wind tunnel, you find the exact paper you were looking for: [Wake structure and aerodynamic performance of low aspect-ratio revolving plates at low reynolds number](https://www.researchgate.net/publication/286411007_Wake_structure_and_aerodynamic_performance_of_low_aspect-ratio_revolving_plates_at_low_reynolds_number). Li et al. describe the effect of lift and drag on revolving rectangular planes, providing the *ideal* graph for your application:

[![lift-drag]({{ site.baseurl }}/assets/images/solar-panel/lift-drag.png "lift-drag"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/lift-drag.png)

From this image, you're able to derive the lift and drag coefficients to plug into [your spreadsheet](https://docs.google.com/spreadsheets/d/1EUPC7Ibyj__bha3aDsa04mnNSl_0X3M7xTutFgwC6cI). Now all that's left is to figure out what wind speed you should plan for in the final calculation.

# Windy city?

Because you're working on another blog post about truisms (ETA soonish), you obviously know that:

1. People call Chicago the windy city because of the wind.
2. No, people call Chicago the windy city because their [politicians are full of hot air](https://www.nytimes.com/2008/11/20/fashion/20chicago.html).
3. No really, the term windy city just [refers to the wind coming off Lake Michigan](https://www.chicagoreader.com/Bleader/archives/2008/11/21/the-origins-of-the-term-windy-city-have-been-misreported-again). It's cold!
4. But doesn't it something to do with [New York City's irritation](https://chicagology.com/columbiaexpo/fair078/) over losing to the 1893 World's Fair to a "frontier town"?
5. Well [here's an quote from the 1876 Cincinnati Enquirer](https://www.barrypopik.com/index.php/new_york_city/entry/summary/) using the term in reference to their baseball rivalry with the White Sox etc.

Regardless, it does sometimes get meteorologically windy in Chicago, and knowing the maximum gust speed to expect is essential for sizing your sandbags. At a quick glance, Chicago's [record wind speed](https://www.weather.gov/lot/Chicago_records) is a problematic **87 mph**. But that measurement was way back in 1894, so how accurate can it be?

Ideally, you'd like to know the distribution of daily peak wind speeds, allowing you to select an appropriate upper threshold given a conservative confidence interval. So you do the reasonable thing and download [150 years worth of Chicago weather data](https://www.ncdc.noaa.gov/cdo-web/datasets/GHCND/stations/GHCND:USW00094846/detail) for [your analysis]({{ site.baseurl }}/assets/images/solar-panel/1732907.csv).

[![wsfg-pdf]({{ site.baseurl }}/assets/images/solar-panel/wsfg-pdf.png "wsfg-pdf"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/wsfg-pdf.png)

From this, you're able to determine that the maximum daily wind gust at O'Hare is approximately log-normally distributed, with a 99.99% threshold value of approx. 75 mph. This is not *much* lower than the peak recorded gust, but since lift varies with the square of velocity, you'll take what you can get. You crunch the numbers, and in order to safely secure your solar panel, it turns out you need only... **550 lbs** worth of sandbags.

That is a *lot* of sand. But whatever; sandbags are cheap, it's a one-time investment, and you're in too deep to turn back now. Lugging them all up four flights of stairs and a ladder to the roof will be good exercise, at least!

# Snow load

After a minute of satisfaction spent contemplating your engineering prowess, an unpleasant thought begins to gnaw. You live on the top floor, and your bedroom is directly beneath the proposed location of your sandbag-mounted solar panels. It would be *really inconvenient* if the roof collapsed. Exactly how much weight is your roof designed to support?

After a quick search, and follow-up message to a local architect friend, you determine that [Chicago building code mandates that roofs withstand at least 25 lb/ft<sup>2</sup>](http://chicago-il.elaws.us/code/bucoreex_d16_ch13-52_sec13-52-280) of snow pressure. Combining that with your proposed sandbag weight, you determine that you need only spread the load over a minimum of 22 ft<sup>2</sup>, or a hefty portion of your usable roof space. And even factoring in 1.5 &deg;C of global warming, you do still expect *some* snow next winter...

Fuck.

# Conclusion

Congratulations, you have now mounted a solar panel  on your back deck, just as you intended all along.

[![solar-panel]({{ site.baseurl }}/assets/images/solar-panel/solar-panel.jpg "solar-panel"){: .center-image }]({{ site.baseurl }}/assets/images/solar-panel/solar-panel.jpg)

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
