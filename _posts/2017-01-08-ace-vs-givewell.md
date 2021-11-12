---
layout: post
title: ACE vs. GiveWell
excerpt: The final showdown.
redirect_from: /ace-vs-givewell
hidden: true
---

**Edit 2018-04-27: This does not represent my current thinking on cross-species cost effectiveness, but I'm leaving it up for reference.**

GiveWell's mission to find the most effective organizations and interventions has been taken up by [other](http://futureoflife.org/), [more](https://80000hours.org/) [specialized](https://foundational-research.org/) organizations within the Effective Altruism community. In the realm of animal charities, the primary source for giving recommendations (as endorsed by [Peter Singer](https://www.thelifeyoucansave.org/Where-to-Donate/Selection-Methodology)) is [Animal Charity Evaluators](https://animalcharityevaluators.org/) (ACE). Like GiveWell, ACE maintains a [cost effectiveness model](https://animalcharityevaluators.org/research/donation-impact/) to help determine the relative efficacy of its recommended interventions, but comparing the two models is not a straightforward task.

As a non-expert who cares about both animal and human issues, I looked around for a standard method of converting between animal and human causes, and was surprised by how little I could turn up. But since I [already](/stochastic-altruism) [had](/stochastic-altruism-2016) the framework for creating a portfolio of different GiveWell charities, I figured I'd try to add ACE recommendations to the mix.

<!--more-->
* table of contents
{: toc }

# Previous research

Although GiveWell seems at least willing to consider animal causes (as [early blog posts](http://blog.givewell.org/2007/01/11/who-should-i-help-my-friend-or-my-pet/) indicate), their recommendations have focused almost elusively on human global health and development. The [Open Philanthropy Project](http://www.openphilanthropy.org/) (OPP), a collaboration between GiveWell and [Good Ventures](http://www.goodventures.org/), does specifically list Farm Animal Welfare as a focus area, and funds [cage-free egg reforms](http://www.openphilanthropy.org/blog/initial-grants-support-corporate-cage-free-reforms). While OPP does not (that I can find, at least) share how they decide to prioritize between animal and human causes, it is possible to infer their relative priority from their [grant history](http://www.openphilanthropy.org/giving/grants) (as of December 2016):

| Open Philanthropy Project Focus Area | Grant Amount |
|:------|-------:|
| Global Health & Development	| $95,885,518 |
| Farm Animal Welfare	| $11,583,359 |
| Criminal Justice Reform	| $11,364,390 |
| Potential Risks from Advanced Artificial Intelligence	| $7,705,075 |
| *Other areas*	| *$31,781,997* |

As shown above, animal charities represent about 7% of OPP's funding to date (only slightly more than the 5% devoted to risks associated with currently non-existent Advanced Artificial Intelligence), which is at least an interesting datum.

The most comprehensive site for information on animal welfare in the EA community is Brian Tomasik's [Essays on Reducing Suffering](http://reducing-suffering.org/), a one stop shop for insightful analysis on everything from AI to consciousness to the finances of effective giving. While Brian doesn't seem to directly tackle the issue of comparing human and animal causes (though I admit I've only read a small fraction of his posts), he does talk a lot about relative suffering, both with regard to farm and wild animals. In his essay [How Much Direct Suffering Is Caused by Various Animal Foods?](http://reducing-suffering.org/how-much-direct-suffering-is-caused-by-various-animal-foods/), he includes [this table](http://reducing-suffering.org/how-much-direct-suffering-is-caused-by-various-animal-foods/#Results), comparing the relative suffering of different animals.

ACE focuses exclusively on animal suffering in its [cost-effectiveness calculations](https://docs.google.com/spreadsheets/d/1YSkZDTWacpkmnZMdRsIMLuCOdIILNVmGTIQAomZDxD4/edit?usp=sharing), but produces an output (Reduction in factory-farmed years) that seems roughly comparable to the [Disability-Adjusted Life Year](http://www.who.int/healthinfo/global_burden_disease/metrics_daly/en/) (DALY) calculation used in human health interventions. An obvious first step, then, is to compare these numbers with the equivalent values in GiveWell's model.

# ACE portfolios

Unlike GiveWell, which polls its employees for model inputs, then uses median values to calculate an expected value, ACE assigns a (normal) probability distribution to each of its inputs, meaning that the end result also includes an estimate of uncertainty. This measure of relative uncertainty (which I faked by random sampling on GiveWell's data) can be combined with techniques from modern portfolio theory to create optimal charity portfolios (see [here](/stochastic-altruism-2016) for my 2016 GiveWell analysis).

After importing the ACE calculations into my GiveWell code framework, I ran through the MPT calculations to determine the optimal portfolio of animal-only interventions.

[![ACE cost effectiveness]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-dist.png "ACE portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-dist.png)

[![ACE portfolios]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-pf.png "ACE portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-pf.png)

[![ACE minimum variance portfolio]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-mvp.png "ACE minimum variance portfolio"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-mvp.png)

It's worth noting that ACE only considers interventions (internet ads and leaflets for vegetarian advocacy), and not their [recommended charities](https://animalcharityevaluators.org/blog/updated-recommendations-december-2016/), in their public cost effectiveness model.

# ACE vs. GiveWell

Including the 2016 recommended GiveWell numbers produces the following portfolios:

[![ACE and Givewell portfolios]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-pf.png "ACE and Givewell portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-pf.png)

Clearly the GiveWell and ACE numbers are just on totally different scales, and looking at this analysis alone, you'd be forgiven for concluding that animal charities are *much* more cost effective than human ones. But like the [British coastline](https://en.wikipedia.org/wiki/Coastline_paradox), the closer you look, the more complex things get...

# Converting to human

The most obviously questionable assumption in a direct comparison is that a farm animal's life is of equal value to a human one. While I don't have a horse in [this particular race](https://www.youtube.com/watch?v=sdmsRcsl_xA), this assumption doesn't pass a basic intuition test. Moral consideration seems to roughly scale with mental complexity: while ([almost](http://www.nytimes.com/2007/11/18/magazine/18wwln-lede-t.html)) nobody assigns moral significance to rocks or corn, few would disagree that complex mammals like dolphins and chimpanzees share at least some of our capacity for suffering. The exact shape of that relationship is anyone's guess, but a linear approximation seems like a good start.

There are a few different ways to measure mental complexity, ranging from the simple (but probably useless) [brain-to-body mass ratio](https://en.wikipedia.org/wiki/Brain-to-body_mass_ratio), to the fascinating (but currently impractical) [IIT](https://en.wikipedia.org/wiki/Integrated_information_theory). I chose to work with [encephalization quotient](https://en.wikipedia.org/wiki/Encephalization_quotient) (EQ), which uses a [square-cube](https://en.wikipedia.org/wiki/Square-cube_law) relationship to predict brain size from body weight. The ratio of actual to predicted brain size is a rough measure of mental capacity above or below expectation, given body weight. See below for a table of EQ for common mammals:

| Species       | EQ     | Species       | EQ     |
|---------------|:------:|---------------|:------:|
| Human         | 7.44   | Dog           | 1.17   |
| Dolphin       | 5.31   | Cat           | 1.00   |
| Chimpanzee    | 2.49   | Horse         | 0.86   |
| Raven         | 2.49   | Sheep         | 0.81   |
| Rhesus monkey | 2.09   | Mouse         | 0.50   |
| Elephant      | 1.87   | Rat           | 0.40   |
| Baleen whale  | 1.76   | Rabbit        | 0.40   |

While this is obviously not an ideal tool, it does seem more intuitive than the original ```animal = human``` approach. Another advantage of EQ is that it's relatively easy to calculate for farm animals, shown below:

```text
        Brain    Body        EQ
Pig       180   70000  0.883133
Cow       430  470000  0.592773
Chicken   3.5    2630  0.153079
```

# Weighing relative suffering

It's not just enough to convert suffering to human scale, however, since not all suffering is equal. DALYs are commonly used to evaluate relative interventions in public health, and the same kind of metric is needed for different farming practices. After looking around a bit, I found a few different estimates; Brian Tomasik's (referenced above), Peter Huford's [analysis](http://everydayutilitarian.com/essays/how-much-suffering-is-in-the-standard-american-diet/) at Everyday Utilitarian, and this table from the book [Compassion, by the Pound](https://www.goodreads.com/book/show/9376070-compassion-by-the-pound) (found [here](https://reflectivedisequilibrium.blogspot.com/2015/11/some-considerations-for-prioritization.html)):

[![Compassion, by the Pound table]({{ site.baseurl }}/assets/images/ace-vs-givewell/cbtp-table.png "Compassion, by the Pound table"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/cbtp-table.png)

I'll talk more about this below, but my initial conclusion is that answering the question of relative suffering (within and between species) requires taking a stance on population ethics, and this is still an area of [active](http://effective-altruism.com/ea/14k/are_you_sure_you_want_to_donate_to_the_against) [debate](http://blog.givewell.org/2016/12/12/amf-population-ethics/) and personal uncertainty. I punted on that for now, and just scaled Brian's relative values such that [battery-cage](https://en.wikipedia.org/wiki/Battery_cage#Welfare_concerns) egg production (the worst of the worst) is equivalent to 1.0 on the DALY scale.

# ACE vs. GiveWell, round 2

After applying the EQ and weighting factors, the combined ACE and GiveWell portfolio plots look a lot more reasonable. This is more than a little suspicious because it's exactly what I was hoping to find, so take the following with a healthy dose of skepticism.

[![ACE and GiveWell adjusted cost effectiveness]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-dist2.png "ACE and GiveWell adjusted portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-dist2.png)

[![ACE and GiveWell adjusted portfolios]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-pf2.png "ACE and GiveWell adjusted portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-pf2.png)

[![ACE and GiveWell adjusted minimum variance portfolio]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-mvp2.png "ACE and GiveWell adjusted minimum variance portfolio"){: .center-image }]({{ site.baseurl }}/assets/images/ace-vs-givewell/ace-gw-mvp2.png)

# Conclusions

When budgeting for [my 2016 giving](/stochastic-altruism-2016#2016-giving-summary), I set aside 5% for ACE recommendations, but if you believe in the above analysis it should probably have been closer to five times that much. How much to believe it probably depends a lot on how reasonable you think my assumptions are. For instance, I'm not sure how many chickens one human life is worth, but I know it's a lot more than one, and definitely less than the entire worldwide poultry population. The above analysis uses EQ to set that parameter at about 50. Is that reasonable? I have no idea.

Another fundamental assumption is that suffering scales with mental capacity, which is debatable at the top end of the scale. It seems clear enough that chickens can suffer more than corn, but Richard Dawkins, in a recent [interview with Sam Harris](https://www.samharris.org/podcast/item/an-evening-with-richard-dawkins-and-sam-harris-1), made the observation that less mentally sophisticated animals may actually suffer *more* than humans (because we can learn to avoid unsuccessful behavior through other means). If true, does that mean suffering fails as a metric for utility, since it violates the ```human > chicken``` assumption? Again, ¯\\_(ツ)_/¯.

Finally, it's hard to answer any of these questions without at least taking a preliminary stance on population ethics. Your input parameters, and therefore conclusions, will likely vary significantly depending on how you fill in the following table:

| | Life worth living	| Live not worth living |
|:-------|:------|:-------|
| **Already alive**	| Don't kill!	| Improve (or end??) life	|
| **Not yet alive**	| Ambivalent?	| Prevent existence	|

If nothing else, this was a useful exercise in that it helped me form a mental framework for asking (if not answering) some interesting questions about interspecies altruism.
