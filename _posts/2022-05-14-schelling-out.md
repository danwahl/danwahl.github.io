---
layout: post
title: Schelling Out
excerpt: Where should we all go next winter?
---

Whether or not it's [windier than average](/blog/solar-panel#windy-city), my adopted hometown of Chicago is definitely not known for its balmy winters. And even though I thought I was prepared for the worst when I moved here nearly a decade(!) ago, the frigid isolation over the past two pandemic years has pushed me over the edge: I want out.

Not _entirely_ out, of course. I still love the city, and maintain that it's one of the finest places to spend the summer in the continental US. Not only does the city take its warm weather activities seriously (having dreamed about them all winter), but unbeknownst to many nonresidents, Chicago is a _beach town_, with 22 miles of parks and trails along Lake Michigan, and within walking distance of nearly anywhere in the city!

There's also the inertia: I like my Chicago apartment and my Chicago friends, and I'm not _quite_ ready to reboot my life for a third time in as many decades. But I am ready to GTFO next winter. The only question is: where to?

# Four factors

We've already talked about weather, which is the ostensive reason for this (partial) move. But weather itself is not a sufficient criteria for evaluating destinations: I also want to participate in enjoyable activities, find (or import?) a like-minded community, and not pay through the nose for the opportunity.

And so, being an engineer, I went in search of some data that I could analyze, and eventually landed on the following four factors: (winter) weather, bike-ability, vegan-friendliness, and housing costs. While these don't result in a perfect approximation of a location's desirability, they at least serve as a rough estimate, and may even reveal some hidden gems that would otherwise get lost in the shuffle.

## Winter weather

I admit the following section is, in part, an excuse to promote a personal hobby-horse: [Universal Thermal Climate Index](http://www.utci.org/) (UTCI). See, there's something fundamentally broken about the way meteorologists attempt to convey weather conditions to the public. A typical forecast will include a bevy of information: temperature, humidity, precipitation/cloudiness, wind speed, pressure, etc. It may even include more esoteric derivatives like heat index and wind chill (which, perplexingly, are typically reported in the same units as temperature).

What they do not provide, and therefore expect the end-user to infer for themselves via multi-dimensional analysis, is the answer to the question that I care most about: _will I be comfortable outside?_ 

As an example, take the following two real forecasts for May 15th, 2022:

- Seattle, WA: High of 61F, 89% humidity, 100% chance of rain, and winds from 5-10 mph
- Phoneix, AZ: High of 106F, 5% humidity, clear skies, and winds from 10-15 mph

Imagine you have to choose to spend the day in either Seattle or Phoenix--which do you prefer? Despite providing tens of bytes worth of information, the standard forecasts fail to provide the single bit that would actually answer that question.

So why hasn't a metric like UTCI caught on? I'm not sure, but it might have something to do with the extremely opaque ~200 term [regression model](http://www.utci.org/utci_doku.php) (written in _Fortran_), or the variance in individual preferences, which could make it impossible to capture something "universal" in a single dimension.

But small details like that won't stop me from using UTCI in _my_ analysis. What almost _did_ stop me was the near impossibility of finding an easily accessible source of average climate data by city, on which I could run the computation. But thankfully I eventually located a convenient [Python library](https://github.com/ladybug-tools/ladybug-comfort) and [data source](https://climate.onebuilding.org/) (both of which seem to be used primarily for building HVAC design).

UTCI is _also_ reported on a faux temperature scale (why??), but at least specifies a set of color-coded ranges and associated thermal stress levels:

[![utci.png]({{ site.baseurl }}/assets/images/schelling-out/utci.png "utci"){: .center-image }]({{ site.baseurl }}/assets/images/schelling-out/utci.png)

For the purposes of my analysis, I computed the seasonal (winter and summer) percentage of "waking" hours (from 8am to midnight) during which the weather in each city was "comfortable" (e.g. no thermal stress), yielding the following top 10 list (sorted by `winter`):

```
                                         winter    summer
City             State                                   
Berkeley         California            0.768750  0.724864
Carlsbad         California            0.764583  0.513587
Costa Mesa       California            0.761111  0.496603
Santa Ana        California            0.740278  0.470109
Orange           California            0.740278  0.470109
Oceanside        California            0.732639  0.451766
Inglewood        California            0.725000  0.477582
Norwalk          California            0.711111  0.403533
Fullerton        California            0.711111  0.403533
San Diego        California            0.702083  0.454484
```

An example interpretation of the above: during the winter, it is "comfortable" 72.5% of waking hours in Inglewood, California. Also note that, while you _could_ use the `summer` scores if you already live somewhere warm and are looking for a "summering" destination, you should skip all that and just come to Chicago instead.

## Bike-ability

One of my favorite things about Chicago is how bike-able it is. After moving here with a car (essential for my previous, interminable commute in DC), I quickly realized that biking was not only great for exploration and exercise, but also the fastest way to get from point A to B. Two years after my move, I ditched my car in favor of a second bike, and haven't looked back since (except to check for traffic).

As a side-note, my biking habits have changed dramatically in just the last few years, with the onset of cheap and widely available e-bike components. I don't think the extent of the e-bike revolution has fully percolated through our collective consciousness, and Chicago (with its oblong shape and correspondingly long commutes) represents a perfect use case for the benefits of this newly widespread tech.

So bike-ability is important to me, but how best to approximate it with available data? I considered a few options, including using [existing bike rankings](https://cityratings.peopleforbikes.org/), or even computing a metric for bike lane coverage via something like [OpenStreetMap](https://www.cyclosm.org/). But actual usage data is a better indicator than mere infrastructure, and so I opted to for American Community Survey's [B08006: SEX OF WORKERS BY MEANS OF TRANSPORTATION TO WORK](https://data.census.gov/cedsci/) table (collated by Place), which includes a estimate of bicycle commuters. Dividing this by the total population (S0101: AGE AND SEX) gives the result per 100K:

```
                                               biking
City              State                              
Boulder           Colorado                4911.883946
Cambridge         Massachusetts           4077.337000
Berkeley          California              3330.760167
Portland          Oregon                  3017.927981
Fort Collins      Colorado                2665.157254
Eugene            Oregon                  2607.109124
Madison           Wisconsin               2329.253849
Washington        District of Columbia    2280.996162
San Francisco     California              2140.528405
Chico             California              1930.423680
```

One thing to note here and elsewhere: college towns (with their manicured campuses and perennially youthful populations) score well on some metrics in a way that may skew overall results. For instance, if a disproportionate number of city bicycle lanes are on-campus (as may be the case somewhere like Cambridge, Massachusetts), a high score may not actually be representative of the "adult" lived experience.

## Vegan-friendliness

As a third factor, I wanted to find a metric for the type of community I'm looking to join/build in my future wintering destination. After considering a few options (e.g. existing EA or Rationality communities), and not finding enough data on smaller cities, I ended up choosing vegan-friendliness (and specifically the number of vegan restaurants per-capita) as a reasonable proxy.

On its surface, this is a bit of an odd fit because, despite there being some excellent nearby vegan restaurants, I don't eat out very often. And even though I think nearly everyone can and should be plant-based (see [my 2018 post](/blog/against-thanksgiving) on the topic), I don't have any hard restrictions when it comes to being friends, roommates, romantic partners, etc. with non-vegans. But it's still a potential source of social friction, and knowing someone has gone vegan makes it much more likely that we'll have significant political and philosophical overlap.

Getting the data on vegan restaurants was initially a bit of a pain, since I wrongly expected [Happy Cow](https://www.happycow.net/) (the vegan equivalent of Yelp) to be easily scrape-able. After toying with the idea of leveraging Mechanical Turk for the task, I eventually learned that Yelp itself has a [public API](https://www.yelp.com/developers) with an _excellent_ free tier. A few GraphQL queries later, and we get the following top 10 list of vegan restaurants per 100K:

```
                                              vegan
City              State                            
Portland          Oregon                  18.084208
Berkeley          California              16.891756
Hollywood         Florida                 15.026100
Burbank           California              13.974678
Salt Lake City    Utah                     9.513176
Honolulu          Hawaii                   9.117744
Costa Mesa        California               8.935113
Atlanta           Georgia                  8.822674
Inglewood         California               8.351738
Oakland           California               8.169823
```

There's still a bit of a California slant here, but also a few predictable (Portland) and surprising (Atlanta) entries from other states.

## Housing costs

It's all fine and good to calculate the _positive_ qualities of potential destination cities, but basic economics gives us reason to suspect that nicer things generally cost more [[citation needed]](https://en.wikipedia.org/wiki/Citation_needed). And being a notorious cheapskate (but in a [good way](/blog/personal-giving)), it's easier to imagine being happy getting a "good deal" on a less desirable location than the opposite.

I initially toyed with the idea of using existing cost-of-living metrics, but opted against these sources for a few reasons. First, as I mentioned above, unless you're crunching the numbers yourself, it's hard to find a dataset that includes the smallish cities on my list. And even if you could, the existing data I found was not entirely applicable, since most sources adjust for earnings potential, and as a remote consultant, my income is location-independent.

So instead, I combined my need for a metric with my fledgling desire to become a real estate baron, and simply looked at housing costs. Zillow kindly provides a bunch of [free data](https://www.zillow.com/research/data/) collected from their listings (just [don't use it](https://www.wsj.com/articles/zillows-shuttered-home-flipping-business-lost-881-million-in-2021-11644529656) for real estate speculation!), and so I borrowed their median figures. Here's the corresponding top 10 list showing the least expensive locations:

```
                                            housing
City              State                            
Shreveport        Louisiana                 39439.0
Macon             Georgia                   47197.0
Jackson           Mississippi               48537.0
Peoria            Illinois                  53939.0
Detroit           Michigan                  54475.0
Birmingham        Alabama                   60394.0
Columbus          Georgia                   64872.0
Dayton            Ohio                      70471.0
Montgomery        Alabama                   71741.0
Wichita Falls     Texas                     73433.0
```

As you can see there's... not much overlap with any of our "positive qualities" lists above. No matter; we'll just have to somehow aggregate our four metrics to get a list of candidate cities that perform well across the board.

# Aggregation

A problem with combining the raw data from the four factors is that the scales are wildly different. And so we'll need to normalize each source, while taking care to ensure that the resulting score is still intuitively useful. I opted to do this by first dividing each column by the raw data from the Chicago, Illinois row:

```
                      biking   housing     vegan   winter    summer
City    State                                                      
Chicago Illinois  754.626952  297669.0  2.475979  0.05625  0.516984
```

I then took the `log2()` of each column, meaning that each additional "point" represents a doubling/halving of the underlying quantity (with Chicago pegged at `0.0` on all scales). The intuition behind this is the same as [maximizing logarithmic wealth](https://en.wikipedia.org/wiki/Kelly_criterion): if my hometown has one vegan restaurant and gets another it's a big event, but when a new one opens in Portland hardly anyone notices.

Finally, to actually aggregate the data into a single overall `total`, I just took the average for the four factors. This is clearly overly simplistic, but does have a few nice properties. First is that, if a hypothetical city scores `1.0` on all metrics, we'd only expect it to be _twice_ as good as Chicago overall (i.e. points don't compound). Another is that, if a different city's scores are `[1.0, -1.0, 1.0, -1.0]`, its `total` should be `0.0` (a higher-variance equivalent of Chicago).

# Conclusion

Finally, we're ready for the overall results, but I'll comment up here, since the full list is quite long.

First, does the ordering make any intuitive sense? I think so! Known desirable locations like Berkeley and Portland do really well, and suspected undesirable locations like Newark and Fargo fare poorly.

Is it _actionable_ though? I'm not sure! I suspect that it under-weights costs, relative to my preferences. I already knew that Berkeley is great, and have been continuously deciding not to move there for nearly a decade, mostly because it's expensive. This could be corrected by adjusting the aggregation weights a bit, but I'll leave that as an exercise for the reader.

Any surprises? Yes! Gainesville ends up looking really good (but note the aforementioned college town caveat), and I'm already considering an exploratory trip. Even though it's the country's most stereotypical wintering location, Florida still looks to be somewhat underrated in general, at least in terms benefits per cost.

Anything depressing predictable? Unfortunately! As expected, the housing market is already pretty efficient at pricing in desirable qualities:

[![plot.png]({{ site.baseurl }}/assets/images/schelling-out/plot.png "plot"){: .center-image }]({{ site.baseurl }}/assets/images/schelling-out/plot.png)

Any other thoughts? Sure! **Cold winters suck**, so let's all meet somewhere warm for a few months next year and see how it goes.

## Results

See [here](https://github.com/danwahl/schelling-out) for the source code and data used to generate the following table.

```
                                         biking   housing     vegan    winter     total
City             State                                                                 
Berkeley         California            2.142016 -2.166879  2.770248  3.772590  1.303595
Gainesville      Florida               1.117079  0.854543  0.780399  3.384664  1.227337
Tempe            Arizona               1.329176 -0.184675  1.161235  3.508773  1.162902
Portland         Oregon                1.999723 -0.720326  2.868659  1.473931  1.124397
New Orleans      Louisiana             0.739080  0.053609  1.451345  3.197368  1.088280
Hollywood        Florida              -0.717470 -0.222100  2.601399  3.434937  1.019353
Boulder          Colorado              2.702441 -1.017822  0.899562  2.222392  0.961315
Cambridge        Massachusetts         2.433792 -1.559463  1.255650  2.648835  0.955763
Orlando          Florida              -1.171810  0.527952  1.594634  3.601198  0.910395
St. Petersburg   Florida              -0.573223  0.002294  1.410371  3.478732  0.863635
Washington       District of Columbia  1.595828 -1.084329  1.521066  2.086415  0.823796
Oakland          California            0.687321 -1.462576  1.722306  3.147990  0.819008
Honolulu         Hawaii                0.229185 -1.088344  1.880678  3.039528  0.812209
Tampa            Florida              -0.657579  0.051231  1.139613  3.459432  0.798539
Costa Mesa       California           -0.198188 -1.428551  1.851487  3.758182  0.796586
Savannah         Georgia              -0.255070  0.678344  0.128550  3.421701  0.794705
Charleston       South Carolina        0.403625 -0.202618  0.426785  3.311202  0.787799
Chico            California            1.355082 -0.191401  0.255839  2.502500  0.784404
Atlanta          Georgia              -0.419401 -0.436258  1.833217  2.926937  0.780899
College Station  Texas                 0.482567  0.732154 -0.577164  3.237579  0.775027
San Francisco    California            1.504131 -2.313744  1.422406  3.181750  0.758909
West Palm Beach  Florida              -0.932180  0.205645  1.045346  3.462666  0.756295
Davie            Florida              -1.678146  0.393529  1.612148  3.410019  0.747510
Columbia         South Carolina       -1.581587  1.268380  0.563633  3.416706  0.733427
Tallahassee      Florida              -0.922398  1.061017  0.041832  3.475533  0.731197
Fort Lauderdale  Florida              -0.962683 -0.497783  1.522490  3.564032  0.725211
Tucson           Arizona               0.390097  0.272473 -0.578040  3.426679  0.702242
Sacramento       California            0.116168 -0.527433  1.157821  2.715432  0.692398
Seattle          Washington            1.327673 -1.402490  1.236571  2.293145  0.690980
Austin           Texas                -0.177935 -0.924690  1.207541  3.346651  0.690313
Richmond         Virginia              0.517944  0.352283  1.096752  1.448053  0.683006
Eugene           Oregon                1.788615 -0.325378  0.193002  1.758182  0.682884
Pompano Beach    Florida              -1.261591  0.049339  1.112872  3.488286  0.677781
Burbank          California           -1.096257 -1.653189  2.496744  3.527429  0.654945
McAllen          Texas                -2.082474  1.306605  0.768940  3.267480  0.652110
Wilmington       North Carolina       -1.344590  0.384498  0.806648  3.296775  0.628666
Concord          California           -0.926712 -0.498019  1.365348  3.161987  0.620521
Santa Clara      California            0.353730 -1.812287  1.147196  3.344899  0.606708
Edinburg         Texas                -2.117161  1.570956  0.273462  3.267480  0.598947
Philadelphia     Pennsylvania          0.269809  0.269624  0.303291  2.098942  0.588333
Inglewood        California           -1.393411 -1.154314  1.754077  3.688056  0.578882
Fort Collins     Colorado              1.820385 -0.527097 -0.071921  1.643144  0.572902
Irvine           California           -0.304730 -1.437896  0.977508  3.545846  0.556146
Boston           Massachusetts         0.656954 -1.287168  0.743086  2.648835  0.552341
Long Beach       California           -1.109554 -1.157459  1.423572  3.556482  0.542608
Huntington Beach California           -0.525972 -1.327111  1.023257  3.511899  0.536415
Baton Rouge      Louisiana            -1.254039  1.105407 -0.493676  3.305808  0.532700
Sunnyvale        California            0.189570 -2.083455  1.052259  3.436583  0.518991
San Diego        California           -0.787561 -1.271233  0.985638  3.641717  0.513712
Pasadena         California            0.119192 -1.528185  1.389968  2.581991  0.512593
Durham           North Carolina       -1.467649  0.066828  0.889061  3.058894  0.509427
Norman           Oklahoma             -0.087962  1.151239 -0.664436  2.139930  0.507754
Asheville        North Carolina       -1.073773 -0.113853  0.772256  2.945552  0.506037
Los Angeles      California           -0.919500 -1.417222  1.121308  3.638860  0.484689
Scottsdale       Arizona              -1.036645 -0.738044  0.590733  3.581991  0.479607
Pittsburgh       Pennsylvania          0.138689  0.767195  0.677784  0.779091  0.472552
Baltimore        Maryland             -0.930871  0.593406  0.999800  1.620152  0.456497
Athens           Georgia              -0.343891  0.557919 -0.656402  2.662965  0.444118
Denton           Texas                -1.287415 -0.002774  0.792887  2.696324  0.439804
Salt Lake City   Utah                  0.620573 -0.730072  1.941928  0.332575  0.433001
Birmingham       Alabama              -2.235491  2.301232 -0.728315  2.814968  0.430479
Ann Arbor        Michigan              1.251728  0.042455  1.190750 -0.339850  0.429016
Clearwater       Florida              -1.076466  0.167151 -0.538104  3.530515  0.416619
Coral Springs    Florida              -2.963827  0.763381  0.850494  3.415037  0.413017
New Haven        Connecticut           0.622749  0.489883  0.591448  0.360590  0.412934
Miami            Florida              -1.055553 -0.494680 -0.130904  3.465894  0.356951
Santa Ana        California           -1.062230 -0.957692  0.058676  3.718142  0.351379
Jacksonville     Florida              -1.778604  0.716357 -0.555336  3.357118  0.347907
Orange           California           -1.903617 -1.133613  1.014846  3.718142  0.339152
Jersey City      New Jersey           -0.942944 -0.995080  1.465744  2.143966  0.334337
Garden Grove     California           -1.817342 -0.969648  0.910020  3.511899  0.326986
Modesto          California           -1.400753 -0.137729 -0.113467  3.239466  0.317503
Norfolk          Virginia             -1.424107  0.586606  1.025971  1.374396  0.312573
Palm Bay         Florida              -1.080163  0.683348 -1.568145  3.500928  0.307193
Las Vegas        Nevada               -2.990623  0.093010  1.219099  3.054613  0.275220
Albuquerque      New Mexico           -0.693051  0.385454 -0.345692  2.004446  0.270231
Anaheim          California           -1.787178 -1.069736  0.897797  3.300395  0.268255
Houston          Texas                -1.882922  0.733733 -0.880235  3.334342  0.260984
Chattanooga      Tennessee            -2.238647  0.492615  0.420185  2.620152  0.258861
Macon            Georgia              -3.983572  2.656942 -0.376977  2.984331  0.256145
Chesapeake       Virginia             -3.472157  0.517334  1.373412  2.792007  0.242119
Carlsbad         California           -1.952946 -1.423428  0.815485  3.764749  0.240772
Santa Fe         New Mexico           -1.105789 -0.610279  1.492895  1.415037  0.238373
Downey           California           -2.237860 -1.065512  0.820409  3.556482  0.214704
Pomona           California           -1.291166 -0.708111 -0.324381  3.386368  0.212542
Mesa             Arizona              -1.274058 -0.087379 -0.834806  3.231903  0.207132
Fullerton        California           -1.646548 -1.147992  0.169774  3.660150  0.207077
Columbus         Georgia              -2.066752  2.198041 -2.357086  3.237579  0.202356
Glendale         California           -1.914729 -1.509920  0.887081  3.527429  0.197972
Bakersfield      California           -2.730272  0.433107  0.139025  3.145979  0.197568
Jackson          Mississippi          -3.896322  2.616552 -0.928126  3.159996  0.190420
Denver           Colorado              0.612942 -0.804137  0.437967  0.682518  0.185858
Boise            Idaho                 0.946649 -0.514036 -0.222925  0.715432  0.185024
Santa Rosa       California           -0.643119 -0.953659 -0.555943  3.065291  0.182514
Virginia Beach   Virginia             -1.581353  0.436724 -0.186042  2.230006  0.179867
St. Louis        Missouri             -0.786591  0.831099 -0.900530  1.736966  0.176189
Reno             Nevada               -0.922409 -0.417641  0.460486  1.742299  0.172547
Clovis           California           -2.139177 -0.229617  0.012439  3.137908  0.156311
Salem            Oregon               -0.209830 -0.164851 -0.534796  1.676958  0.153496
Chandler         Arizona              -1.314484 -0.439685 -0.450672  2.968489  0.152730
Sandy Springs    Georgia              -2.918166 -0.052725  0.901829  2.830075  0.152203
Roanoke          Virginia             -2.261495  1.021981  0.276805  1.671377  0.141734
Roseville        California           -2.814082 -0.728780  0.935973  3.312995  0.141221
Temecula         California           -3.567511 -0.794051  1.554458  3.459432  0.130466
Fresno           California           -2.412054  0.285923 -0.424649  3.137908  0.117426
Augusta          Georgia              -2.564448  1.454645 -1.322933  3.017702  0.116993
Providence       Rhode Island         -0.877858 -0.032492  0.758927  0.715432  0.112802
Shreveport       Louisiana            -3.050156  2.916014 -2.215605  2.903324  0.110715
North Las Vegas  Nevada               -3.439314 -0.015230  0.884497  3.115477  0.109086
Provo            Utah                  0.604372 -0.269708 -1.511664  1.699069  0.104414
San Jose         California           -1.225528 -1.585143  0.158452  3.145979  0.098752
Pasadena         Texas                -1.883377  0.876247 -1.911596  3.389771  0.094209
Richardson       Texas                -2.696993  0.265249  0.020327  2.869603  0.091637
Riverside        California           -1.590180 -0.699944 -0.641414  3.344899  0.082672
Cape Coral       Florida              -3.188209  0.135017  0.057753  3.406664  0.082245
Hialeah          Florida              -2.556545  0.432047 -0.880785  3.403301  0.079604
Visalia          California           -2.432972  0.379370 -0.807618  3.230006  0.073757
San Mateo        California           -0.284479 -2.199505 -0.387442  3.214739  0.068663
Brownsville      Texas                -3.296097  1.389010 -1.209015  3.433289  0.063437
Torrance         California           -1.880537 -1.404593  0.135527  3.457812  0.061642
Ontario          California           -2.188497 -0.719594 -0.117537  3.311202  0.057115
Tacoma           Washington           -1.509216 -0.451054  0.143755  2.065291  0.049755
Cary             North Carolina       -2.466404 -0.132583  0.694303  2.139930  0.047049
High Point       North Carolina       -2.947338  1.621182 -0.497780  2.035189  0.042251
Rancho Cucamonga California           -1.974131 -0.655039 -0.525875  3.311202  0.031231
El Paso          Texas                -3.507914  1.151681 -0.749090  3.129792  0.004894
Raleigh          North Carolina       -2.321711  0.016848  0.166965  2.139930  0.000406
Chicago          Illinois              0.000000 -0.000000  0.000000  0.000000  0.000000
Pembroke Pines   Florida              -4.075066  0.418627  0.238432  3.410019 -0.001598
San Antonio      Texas                -2.929160  0.690643 -0.980676  3.199309 -0.003977
Cincinnati       Ohio                 -2.171605  0.748550  0.232840  1.135883 -0.010866
Gilbert          Arizona              -2.161182 -0.514663 -0.407863  2.968489 -0.023044
Norwalk          California           -1.448528 -0.979440 -1.347461  3.660150 -0.023056
Fremont          California           -2.319555 -1.365222  0.072171  3.436583 -0.035205
Santa Clarita    California           -2.989000 -0.727647  0.306070  3.121629 -0.057790
Elizabeth        New Jersey           -1.949665 -0.043716 -0.180347  1.869603 -0.060825
Hayward          California           -1.936966 -1.244636 -0.427502  3.250737 -0.071673
Grand Rapids     Michigan             -0.533040  0.499135  0.699834 -1.054448 -0.077704
El Cajon         California           -3.196357 -0.693656  0.189976  3.311202 -0.077767
Waco             Texas                -2.554370  1.165976 -1.777739  2.773892 -0.078448
Nashville        Tennessee            -2.625033 -0.168392  0.491524  1.864721 -0.087436
Murrieta         California           -2.818751 -0.626664 -0.457896  3.459432 -0.088776
Lakewood         Colorado             -1.036303 -0.403443  0.050603  0.936274 -0.090574
Dallas           Texas                -3.045150  0.300784 -0.620973  2.886562 -0.095755
Newport News     Virginia             -1.622903  0.994432 -2.205216  2.307608 -0.105216
Escondido        California           -1.769008 -0.875757 -0.902911  3.019900 -0.105555
Memphis          Tennessee            -2.913350  1.856832 -1.970442  2.493040 -0.106784
Glendale         Arizona              -1.421741  0.216996 -2.620229  3.280370 -0.108921
San Bernardino   California           -3.258026 -0.312627 -0.459215  3.467505 -0.112472
El Monte         California           -1.452982 -0.909911 -1.438271  3.228106 -0.114612
Richmond         California           -1.230187 -1.193071 -1.527685  3.365782 -0.117032
Plano            Texas                -3.051121 -0.198400 -0.236497  2.869603 -0.123283
Lexington        Kentucky             -1.625524  0.756397 -0.412649  0.637430 -0.128869
Huntsville       Alabama              -3.320097  0.693400 -0.412376  2.353637 -0.137087
Irving           Texas                -3.270918  0.334751 -0.346065  2.590887 -0.138269
Louisville       Kentucky             -2.218831  0.670100 -0.648379  1.505640 -0.138294
Columbus         Ohio                 -1.702103  0.818907 -0.027677  0.103093 -0.161556
League City      Texas                -3.065776  0.241047 -1.501985  3.493040 -0.166735
Vallejo          California           -2.979921 -0.670259 -0.642453  3.364054 -0.185716
Phoenix          Arizona              -1.430518 -0.111500 -2.730357  3.343145 -0.185846
Miami Gardens    Florida              -5.006708  0.129689  0.533147  3.403301 -0.188114
Oklahoma City    Oklahoma             -3.016488  1.326170 -1.075768  1.784271 -0.196363
Colorado Springs Colorado             -1.580701 -0.238272 -0.108476  0.926937 -0.200102
Little Rock      Arkansas             -3.170569  1.011489 -1.326569  2.408343 -0.215461
Bellevue         Washington           -1.280472 -1.222507 -0.910684  2.314786 -0.219775
Cleveland        Ohio                 -1.526667  1.670162 -0.883792 -0.385654 -0.225190
Murfreesboro     Tennessee            -1.892575  0.133884 -1.919351  2.548893 -0.225830
Tulsa            Oklahoma             -2.738674  1.279809 -1.769409  2.098942 -0.225867
Oceanside        California           -2.888869 -0.858195 -1.107650  3.703177 -0.230307
Arlington        Texas                -3.613098  0.552414 -0.965240  2.867164 -0.231752
Lancaster        California           -3.677616 -0.043397 -0.103068  2.637430 -0.237330
Centennial       Colorado             -1.714475 -0.635164 -0.424604  1.584963 -0.237856
Indianapolis     Indiana              -1.993118  1.034386 -0.873015  0.579013 -0.250547
Midland          Texas                -3.174656  0.739686 -1.714253  2.886562 -0.252532
Antioch          California           -3.177091 -0.058280 -1.513279  3.480329 -0.253664
Chula Vista      California           -3.049402 -0.902141 -0.769984  3.420038 -0.260298
Elk Grove        California           -2.869658 -0.648388 -0.539628  2.715432 -0.268448
Garland          Texas                -3.306552  0.528007 -1.606763  3.017702 -0.273521
Detroit          Michigan             -1.682213  2.450043  0.103397 -2.252387 -0.276232
Killeen          Texas                -3.864005  1.346818 -1.922426  3.048167 -0.278289
Westminster      Colorado             -1.247392 -0.498242 -1.526061  1.849975 -0.284344
Charlotte        North Carolina       -3.612402  0.170659 -0.436588  2.431639 -0.289338
Edison           New Jersey           -2.773973 -0.223740  0.171446  1.325486 -0.300156
Fort Worth       Texas                -3.168199  0.560468 -1.507931  2.551934 -0.312746
Omaha            Nebraska             -2.409727  0.733637 -1.267179  1.374396 -0.313775
Henderson        Nevada               -3.208685 -0.337998 -0.975256  2.908078 -0.322772
Simi Valley      California           -2.623598 -0.872812 -1.645493  3.524336 -0.323513
West Covina      California           -2.758425 -0.848004 -1.438943  3.386368 -0.331801
New York         New York             -0.291996 -1.338828  0.455884 -0.506960 -0.336380
Peoria           Illinois             -2.365068  2.464308 -1.486236 -0.295456 -0.336490
Mobile           Alabama              -4.398111  1.529021 -2.211354  3.372677 -0.341553
Everett          Washington           -1.685731 -0.627501 -0.453729  1.043854 -0.344621
Winston–Salem    North Carolina       -2.567010  1.203109 -2.627299  2.260063 -0.346227
Rio Rancho       New Mexico           -3.155081  0.575203 -1.365221  2.187627 -0.351494
Rochester        Minnesota            -0.689748  0.391691 -1.587708  0.052467 -0.366660
Alexandria       Virginia             -0.156274 -0.559591 -1.981257  0.840059 -0.371413
Peoria           Arizona              -2.594750 -0.382511 -2.241459  3.343145 -0.375115
Victorville      California           -3.129865  0.012598 -1.738927  2.968489 -0.377541
Olathe           Kansas               -2.847120  0.507275 -0.806659  1.199309 -0.389439
Kansas City      Missouri             -3.204755  1.123361 -0.193652  0.260063 -0.402997
Dayton           Ohio                 -2.510456  2.078607 -1.768941  0.183712 -0.403416
Frisco           Texas                -5.665964 -0.512569  1.273296  2.869603 -0.407127
Sparks           Nevada               -2.069411 -0.292993 -1.424963  1.742299 -0.409014
Thousand Oaks    California           -3.041426 -0.887301 -1.652441  3.533594 -0.409515
Spokane          Washington           -1.612284 -0.071748  0.496722 -0.880418 -0.413546
Hartford         Connecticut          -2.173498  1.041302 -1.583650  0.602665 -0.422636
Lincoln          Nebraska             -0.492628  0.534241 -1.849425 -0.317482 -0.425059
Buffalo          New York             -1.042759  0.820627 -1.199932 -0.816288 -0.447670
Minneapolis      Minnesota             1.289658  0.025243  0.172781 -3.754888 -0.453441
Ventura          California           -3.014507 -1.120766 -1.455475  3.318361 -0.454477
Milwaukee        Wisconsin            -1.295490  0.978530 -0.515197 -1.481869 -0.462805
Aurora           Colorado             -2.857760 -0.334724 -0.672613  1.548893 -0.463241
Kansas City      Kansas               -2.934879  1.304472 -0.955148  0.260063 -0.465098
Lansing          Michigan             -1.040589  1.619274 -0.479770 -2.432959 -0.466809
Greensboro       North Carolina       -2.582098  1.086706 -2.888314  2.035189 -0.469703
Salinas          California           -3.936015 -0.909299 -0.432698  2.903324 -0.474938
Syracuse         New York             -1.188475  1.239381 -0.879628 -1.695994 -0.504943
Cedar Rapids     Iowa                 -1.441020  1.155098 -0.769633 -1.481869 -0.507485
Wichita          Kansas               -1.868761  1.477582 -3.299070  1.135883 -0.510873
Davenport        Iowa                 -2.535718  1.341613 -1.332659 -0.036069 -0.512567
Stockton         California           -2.458920 -0.100752 -2.989691  2.872038 -0.535465
Des Moines       Iowa                 -2.195016  1.002401 -0.406506 -1.210567 -0.561938
Arvada           Colorado             -3.317610 -0.733929 -0.623009  1.849975 -0.564915
Fort Wayne       Indiana              -1.947713  1.371172 -1.122952 -1.130397 -0.565978
Daly City        California           -2.431066 -1.899643 -1.377028  2.862274 -0.569092
Vancouver        Washington           -1.796828 -0.347369 -2.240930  1.473931 -0.582239
Meridian         Idaho                -2.053093 -0.530561 -1.542317  1.183712 -0.588452
Saint Paul       Minnesota            -0.454895  0.249745 -1.362394 -1.385654 -0.590639
Amarillo         Texas                -3.969056  1.581666 -2.310831  1.654503 -0.608744
Stamford         Connecticut          -1.944410 -0.536136 -0.745973  0.135883 -0.618127
Palmdale         California           -3.488912 -0.270733 -2.068859  2.731612 -0.619378
Lowell           Massachusetts        -2.410435 -0.003737 -0.516566 -0.273761 -0.640900
Anchorage        Alaska               -0.454084  0.321517 -1.850242 -1.339850 -0.664532
Dearborn         Michigan             -2.568487  0.987593 -0.445188 -1.481869 -0.701590
Sugar Land       Texas                -6.805274  0.307642 -0.458897  3.369234 -0.717459
Moreno Valley    California           -4.299475 -0.450072 -2.368974  3.197368 -0.784230
Madison          Wisconsin             1.626032  0.151094 -0.418175 -5.339850 -0.796180
Grand Prairie    Texas                -5.707094  0.661151 -2.279589  3.137908 -0.837525
Bridgeport       Connecticut          -4.367892  0.364224 -0.879958  0.693573 -0.838010
Akron            Ohio                 -3.707669  1.873323 -2.237555 -0.252387 -0.864858
Corona           California           -5.916725 -0.794766 -0.960013  3.300395 -0.874222
Overland Park    Kansas               -3.665807  0.380486 -2.287937  1.199309 -0.874790
Miramar          Florida              -8.049974 -0.045436  0.262026  3.403301 -0.886017
Allentown        Pennsylvania         -3.478934  0.581978 -1.639647  0.086415 -0.890038
Manchester       New Hampshire        -2.244972  0.059415 -1.517690 -0.754888 -0.891627
Springfield      Massachusetts        -3.309156  0.468587 -0.948889 -0.695994 -0.897090
Toledo           Ohio                 -2.218760  1.950067 -2.745605 -1.754888 -0.953837
Allen            Texas                -5.916318 -0.287822 -1.373254  2.760812 -0.963316
Naperville       Illinois             -3.168425  0.298994 -1.888531 -0.073063 -0.966205
Elgin            Illinois             -2.564046  0.485045 -1.507084 -1.295456 -0.976308
Green Bay        Wisconsin            -1.698421  1.049224 -1.410926 -2.880418 -0.988108
Sterling Heights Michigan             -4.105408  0.670941 -1.733953  0.199309 -0.993822
Yonkers          New York             -2.672196 -0.875530 -2.389128  0.789433 -1.029484
Joliet           Illinois             -4.503893  0.858193 -1.896439  0.346651 -1.039098
Newark           New Jersey           -4.425534 -0.021967 -0.362496 -0.432959 -1.048591
Warren           Michigan             -2.983875  1.483316 -1.787095 -2.252387 -1.108008
Paterson         New Jersey           -5.641049  0.003542 -0.983653  0.467505 -1.230731
Worcester        Massachusetts        -3.191207  0.010531 -0.769304 -2.639410 -1.317878
Sioux Falls      South Dakota         -2.093099  0.468681 -2.252985 -3.339850 -1.443451
Independence     Missouri             -8.787841  1.192736 -1.606787  1.230006 -1.594377
Fargo            North Dakota         -1.195830  0.738456 -1.641309 -6.339850 -1.687706
```