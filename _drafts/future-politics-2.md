---
layout: post
title: The Future of American Politics, Part 2
excerpt: The House, Presidency, and my 2040 predictions.
---

A lot has changed since I published Part 1 of my (conspicuously-named) Future of American Politics series. Beyond the COVID-19 pandemic and the George Floyd protests (and likely because of both), the landscape for the 2020 election looks much different now than it did in February. Whereas the conventional wisdom had both parties retaining partial control in Congress, and a toss-up for the Presidency, the [election betting odds](https://electionbettingodds.com/) now have the Democrats favored to make a clean sweep.

This (welcome) news stands in defiance of [historical trends](https://en.wikipedia.org/wiki/Incumbent#Incumbency_advantage), but then again, so has everything else about 2020 so far. In Part 1, I developed an extremely simple model, which used state-level trends in partisan lean to predict the future of the Senate. In this post, I'll give the House and Presidency the same treatment. The eventual prediction of November's results may be irrelevant in this period of historic change, but it still may offer a small glimpse into 2020 and beyond.

<!--more-->
* table of contents
{: toc }

# Population change

The same factor that makes the Senate an unrepresentative institution also makes it slightly easier to analyze: each state is granted two Senators regardless of population size. The House, however, has its distribution refactored every ten years, in accordance with the results of the Census. Among other reasons, this is why it's critically important to respond to the Census survey!

So in order to predict the outcome of the House, it's first necessary to account for the population change in each state. Thankfully, I had already done this in Part 1 to examine the inequity of the Senate. Unthankfully, as everyone now knows from COVID forecasting, it's notoriously difficult to fit a logistic curve to exponential data. Still, the fits (shown below) are probably sufficient for my purposes, for two reasons: the poorest fits correspond to the smallest states, and I'm "only" projecting outcomes 20 years into the future.

https://www.maa.org/press/periodicals/convergence/apportioning-representatives-in-the-united-states-congress-hills-method-of-apportionment

# House seats

Using the population data above, we can then predict the outcome of the next several decennial Censuses. The method used to assign the 435 available seats to each state is surprisingly nuanced, especially relative to the brute-force equality of the Senate. First, each state is assigned a single seat, and then each subsequent seat is dealt out to the state with the least representation relative to their population. The specific formula used to determine each state's "Priority Value" ($$A_n$$) is:

$$A_n=\frac{P}{\sqrt{n(n + 1)}}$$

Where $$P$$ is the state's population and $$n$$ is the currently allocated number of seats. This equation, which uses the geometric mean in the denominator, is known as the [Huntington–Hill method](https://en.wikipedia.org/wiki/Huntington%E2%80%93Hill_method). Why the geometric mean, you ask? Well, see [here](http://ww2.gannon.edu/cetl/caulfield/census/Hill%20explanation.doc) for the only explanation I could find that sort of makes sense.

Using the population estimates from the previous section, we can apply this method to calculate the House seats that will be allocated as a result of the next several Censuses:


# Representative democracy

Using the same procedure from Part 1 (but with House votes instead of Senate), it's then relatively straightforward to predict the outcome of each election. Note that, because this is an _extremely_ basic model, I'm predicting the House vote at a state level, and ignoring variance between districts. As this happens to make my life much easier, I consider it a reasonable simplification. Although it no longer appears to be a 2020 battleground state, I'll continue to use Virginia as a representative example.

I will now make two totally inexcusable simplifications to the model. In my defense, I did most of the calculations for this post back in February, and now I can't really figure out how they are supposed to work.  

The above graph shows the partisanship

Will I even want to be in the Dem party

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
