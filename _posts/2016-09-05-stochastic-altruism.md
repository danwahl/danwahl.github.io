---
layout: post
title: Stochastic Altruism
excerpt: An analysis of GiveWell's cost effectiveness model using techniques from modern portfolio theory.
redirect_from: /stochastic-altruism
hidden: true
---

The idea of using expected value estimates to to compare effective charitable interventions is not new. A few notable examples include Holden Karnofsky's [skeptical post](http://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/) in 2011, and detailed responses by [Gregory Lewis](http://effective-altruism.com/ea/bb/expected_value_estimates_you_can_take_somewhat/) in 2014 and [Michael Dickens](http://effective-altruism.com/ea/vo/expected_value_estimates_you_can_maybe_take/) earlier this year. Even GiveWell, despite (repeatedly) cautioning against taking the approach too literally, maintains a [cost effectiveness model](http://www.givewell.org/international/technical/criteria/cost-effectiveness/cost-effectiveness-models), using staff input to compute a median effectiveness for each of its recommended charities.

In this post I'll propose a framework for using techniques from modern portfolio theory to extend the expected value approach and minimize uncertainty in charitable giving.<!--more-->

* table of contents
{: toc }

# So what's the deal with expected value?

The main drawback of an expected value approach is that, by itself, it doesn't say anything about the uncertainty of the estimate. This weakness is demonstrated by the [Pascal's mugging](http://www.nickbostrom.com/papers/pascal.pdf) thought experiment, in which very unlikely outcomes have extremely high payouts. Holden, with the help of Dario Amodei, suggests resolving this issue using a [Bayesian approach](http://blog.givewell.org/attachments/worms.pdf), starting with a prior distribution for estimated cost effectiveness, and updating it with a noisy measurement of the true effectiveness. While this type of Bayesian analysis is intuitively appealing, it's still necessary to generate a reasonable prior, including both the expected value and uncertainty of cost effectiveness estimates.

[Fermi estimation](https://what-if.xkcd.com/84/) gets us part of the way there, and GiveWell's [spreadsheet](http://www.givewell.org/files/DWDA%202009/Interventions/GiveWell_cost-effectiveness_analysis_2016.xlsx) is a good place to start. By decomposing the problem into a series of informed guesses that, when combined, yield an overall expected value, the seemingly overwhelming problem of comparing unrelated charitable interventions can at least be made approachable, if not intuitive. Unfortunately, this approach also lacks an estimate of uncertainty, and is still vulnerable to Pascal's mugging.

# The part where things get neat

By treating the GiveWell staff responses as independent random variables, however, we can at least get a feel for the relative uncertainty associated with each intervention. To that end, I [recreated](https://github.com/danwahl/stochastic-altruism) the mid-2016 GiveWell cost effectiveness model in Python and ran a [Monte Carlo simulation](https://en.wikipedia.org/wiki/Monte_Carlo_method) on it, randomly selecting a value from the staff pool for each variable on each iteration. The resulting probability distributions are shown below.

[![PDF of log cost effectiveness image]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-dist.png "PDF of log cost effectiveness"){: .center-image }]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-dist.png)

This is somewhat intuitively satisfying: top recommendations like bednets and deworming have a relatively low variance, while iodine has a somewhat wider spread. And because the estimates are (pretty much) log-normally distributed, techniques from [post-modern portfolio theory](https://en.wikipedia.org/wiki/Post-modern_portfolio_theory) can be used to create a low variance, high returns portfolios of charitable interventions. Treating the PDFs like returns from securities, and running through the basic PMPT calculations (assuming $$ t = 5 $$ for downside risk) produces the following:

[![Givewell charity portfolios image]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-pf.png "Givewell charity portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-pf.png)

# Theoretically modern portfolios

The minimum variance portfolio, or the combination of non-cash donations that produces the least downside risk, is shown here:

[![Minimum variance portfolio image]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-mvp.png "Minimum variance portfolio"){: .center-image }]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-mvp.png)

Arbitrarily lower downside risk can be achieved by combining cash donations with the tangency portfolio, as seen on the tangency line. A few example portfolios are shown below:

[![Tangency portfolios image]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-tan.png "Tangency portfolios"){: .center-image }]({{ site.baseurl }}/assets/images/stochastic-altruism/givewell-tan.png)

Higher returns are also possible, at the cost of increased risk, by moving right from the MVP on the optimal portfolio line. Since it's impossible to short charities (I think?), this line terminates at the highest risk/reward intervention.

# Where do we go from here?

The above analysis comes with the *massive* caveat that I'm not an expert in charity evaluation, portfolio theory, Bayesian statistics, etc. I don't fully understand the majority of the inputs to GiveWell's model, and I'm sure smarter people than me have spent longer thinking about this exact problem.

That being said, I do believe that stochastic Fermi estimation and portfolio theory can provide a useful framework for thinking about charitable giving under uncertainty. For instance, a [sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis) over the variable space could highlight which model inputs deserve the most attention. I'm also interested in how ideas like [crowdsourced intelligence](http://unu.ai/) and [Bayesian networks](https://hatch113.shinyapps.io/bayesian_net_calc/) might be used for generating more accurate inputs and intuitive models.

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
