---
layout: post
title: The Future of American Politics, Part 1
excerpt: The Senate is already bad. How much worse will it get?
redirect_from: /future-politics-1
---

After the impeachment of Donald Trump died in a [near party-line vote](https://en.wikipedia.org/wiki/Connecticut_Compromise) in the Senate, the Washington Post published [an article](https://www.washingtonpost.com/politics/2020/02/05/69-million-americans-voted-senators-who-supported-impeachment/) describing the crisis of legitimacy plaguing our political institutions. An unpopular president (who won a [decisive Electoral College victory](https://www.politico.com/story/2016/07/mitch-mcconnell-judges-225455) despite losing the popular vote by more than three million) was acquitted by a group of 52 Senators that collectively represented about 57 million Americans. Compare this to the 69 million votes for the 48 Senators who found the President guilty on at least one count.

While mere partisan dysfunction in the Senate is nothing new (see the [stonewalling of Obama's judicial nominees](https://www.politico.com/story/2016/07/mitch-mcconnell-judges-225455) including [Merrick Garland](https://en.wikipedia.org/wiki/Connecticut_Compromise), the [Kavanaugh hearings](https://en.wikipedia.org/wiki/Brett_Kavanaugh_Supreme_Court_nomination), the [lack of witnesses such as John Bolton](https://en.wikipedia.org/wiki/Brett_Kavanaugh_Supreme_Court_nomination) at Trump's trial, etc.), its representative inequality has much deeper roots. The [Great Compromise](https://en.wikipedia.org/wiki/Connecticut_Compromise), which resolved a longstanding dispute between large and small states that threatened to upend the Constitutional Convention of 1787, appeased both sides by creating two separate legislative bodies, with the Senate ensuring that each state would have a prominent legislative voice.

But as prescient as the founders often were, it's unlikely that they could have imagined the magnitude of our present-day demographic inequalities. In 1790, the most populous state (Virginia), had [roughly 12 times as many people](https://en.wikipedia.org/wiki/1790_United_States_Census) as the smallest (Delaware); in 2010 California had [66 times the population](https://en.wikipedia.org/wiki/2010_United_States_Census) of Wyoming. In 1790, the average Senator represented about 150,000 Americans; in 2010 that number was over 3,000,000 and rising. If the intervening centuries have exposed cracks in the Senate's foundation, is there any hope that, with changing state demographics, things will get better on their own? Or are we going to need an even Greater Compromise to restore its integrity?

<!--more-->
* table of contents
{: toc }

# State-level partisanship

In an attempt to predict the future of the Senate, I first built a statistical model to measure trends in state-level partisanship. While an ideal model would include all factors that influence individual voters, such as local demographic changes (age, race, income), incumbency, presidential vs. midterm elections, regional trends, etc., one simplifying assumption is that all these variables cash out in terms of the changing partisan lean in states over time.

To quantify partisanship in each state, I grabbed a [dataset of Senate races dating back to 1976](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/PEJ5QU), and used it to produce a metric for the Democratic lean in a given election year. Note that, if a third-party candidate won the election, I included them among whichever party (Democrat or Republican) did not take second place. Then, I used those results to fit a linear regression to each state, as shown below for my erstwhile home state of Virginia:

[![state-fit.png]({{ site.baseurl }}/assets/images/future-politics-1/state-fit.png "state-fit"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/state-fit.png)

Using the covariance of the slope and offset from the regression, I sampled 1000 outcomes from each year from a [multivariate student-t distribution](https://en.wikipedia.org/wiki/Multivariate_t-distribution), shown as the translucent green dots in the graph above. The uncertainty estimates are somewhat intuitive, with tighter bounds around the known input data and higher out-of-sample variance. A histogram of the samples for the upcoming 2020 VA Senate election shows the Democratic candidate winning about 65% of the time (the area in blue), with an average margin of victory of 6.7%:

[![state-dist.png]({{ site.baseurl }}/assets/images/future-politics-1/state-dist.png "state-dist"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/state-dist.png)

The same calculation can be performed on the samples from each year, projected out through 2040, which yields the following graph showing the varying probability of a Democratic victory in VA over time:

[![state-victory.png]({{ site.baseurl }}/assets/images/future-politics-1/state-victory.png "state-victory"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/state-victory.png)

Even this relatively simple procedure provides some insight into the dynamics of partisanship across different states. While individual elections exhibit extremely high variance, owing to the multitude of factors not captured in the model, many states do exhibit obvious trends that correlate well with popular narratives (e.g. [OH turning red](https://www.washingtonpost.com/opinions/2019/01/15/ohio-is-now-red-state-can-democrats-ever-take-it-back/), [VA going blue](https://www.nytimes.com/2019/11/09/us/virginia-elections-democrats-republicans.html), etc.):

[![senate-trends.png]({{ site.baseurl }}/assets/images/future-politics-1/senate-trends.png "senate-trends"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/senate-trends.png)

These trends are even clearer when evaluating the probability of victory in each yearly sample set across all states, as shown in the following graph:

[![senate-victory.png]({{ site.baseurl }}/assets/images/future-politics-1/senate-victory.png "senate-victory"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/senate-victory.png)

By combining the yearly victory probabilities for each state, it's possible to estimate the expected number of seats held by each party. This paints a bleak picture for Democrats, who project to be in the minority for decades to come, thanks to the interaction between unfavorable trends in state partisanship and the fundamentally inequitable structure of the Senate.

[![expected-seats.png]({{ site.baseurl }}/assets/images/future-politics-1/expected-seats.png "expected-seats"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/expected-seats.png)

While the news isn't encouraging overall, it should be noted that the previous graph is somewhat deceptive, in that excepted value calculations can mask underlying differences in variance. In the worst case scenario, where each state's expected outcome is treated as an independent probability, the 2020 projection still gives Democrats a nearly 15% chance at a majority (or tie) outcome (though this would likely be improved by analyzing election cycles separately and considering blue/red wave correlation between states):

[![senate-dist.png]({{ site.baseurl }}/assets/images/future-politics-1/senate-dist.png "senate-dist"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/senate-dist.png)

For reference, the data and source code used to create the graphs in this post can be found [here](https://github.com/danwahl/future-politics).

# Population projections

Assuming the Senate won't [go blue](https://mgoblue.com/sports/football) anytime soon, is there at least reason to believe it might become more (small-d) democratic? For instance, if the population in Republican leaning states were to increase substantially, their control over the chamber could at least be justified on those terms. In order to test this theory, I grabbed a [dataset of historical state-level population estimates dating back to 1900](https://research.stlouisfed.org/pdl/628/download) and fit a [logistic model](https://en.wikipedia.org/wiki/Logistic_function#In_ecology:_modeling_population_growth), which has both growth rate ($$r$$) and carrying capacity ($$K$$) parameters:

$$\frac{dP}{dt}=r \times P \times \left(1 - \frac{P}{K}\right)$$

Applying this model to the historic population data for state results in the following projections:

[![state-pop.png]({{ site.baseurl }}/assets/images/future-politics-1/state-pop.png "state-pop"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/state-pop.png)

While this is far from perfect, especially for states with small populations and/or noisy data, it does remarkably well for the larger states that represent the majority of the US population. I then calculated the expected number of citizens with Democratic and Republican Senators (using the victory probabilities above), and finally divided those population projections by the expected number of seats held by each party:

[![expected-pop.png]({{ site.baseurl }}/assets/images/future-politics-1/expected-pop.png "expected-pop"){: .center-image }]({{ site.baseurl }}/assets/images/future-politics-1/expected-pop.png)

As shown above, while the population in Republican leaning states is increasing at a faster rate (even overtaking the Democratic population by the late 2030s), the average number of citizens per Senator in those states remains below the US average. This is because, despite the population increase, Republicans still control more seats in smaller states with disproportionate representation.

# Conclusions and recommendations

Taking the results of these simple models seriously (despite their obvious limitations), it seems unlikely that the representative inequalities in the Senate will improve without systemic reform. While I'm far from qualified to give any recommendations, some combination of the following proposals seems like a good start:

1. [DC (and Puerto Rico) statehood](https://en.wikipedia.org/wiki/51st_state) could help rectify the partisan imbalance. Also, [taxation without representation](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington,_D.C.#/media/File:Washington,_D.C._license_plate,_2017.png) is bad.
2. Failing that, let's try to merge some of the smaller states. Looking at you, [future MegaKota](https://www.change.org/p/donald-trump-merge-south-and-north-dakota-into-megakota-fa69def5-27c1-44e1-b206-e8674c2e0f5e).
2. Voting method reforms like [IRV](https://www.fairvote.org/) and [Approval](https://www.electionscience.org/) could upend the two-party system altogether, and allow voters to more accurately express their preferences. (Note: please *do not* vote for third-party candidates under the existing [first-past-the-post](https://en.wikipedia.org/wiki/First-past-the-post_voting) system. See the [1984 Senate election in Kentucky](https://en.wikipedia.org/wiki/1984_United_States_Senate_election_in_Kentucky) if you have any doubts.)
3. Or how about we [get rid of the Senate entirely](https://www.vox.com/2018/12/4/18125539/john-dingell-abolish-senate)? Seriously, do we _really_ need the Senate?
4. If you're still partial to a bicameral legislature, then let's just increase the number of Senators to a proportional 435, like in the House. They can even still serve a longer term!
5. In the meantime, we should focus on _future_ battleground states by laying the groundwork today. The model predicts that the following states will be competitive over the next two decades: Alaska, Florida, Indiana, Missouri, Montana, Nevada, New Hampshire, North Carolina, South Dakota, Virginia, Washington, West Virginia, and Wisconsin.

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
