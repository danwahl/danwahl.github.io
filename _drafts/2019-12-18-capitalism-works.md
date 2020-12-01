---
layout: post
title: The Data Show That Capitalism Works, Too
excerpt: A response to Current Affairs on the statistical correlates of socialism.
---

In a recent post, I looked at the socialist response to Chicago's 2020 budget, and took exception with some of its more nihilistic critics (attributing most of it conflict theory). I then lamented the lack of a true "mistake theory socialist," noting that my previous go-to example of the genre, Nathan Robinson (editor of Current Affairs magazine), has been on the decline lately. A few days after my post, Current Affairs released an article titled [The Data Show That Socialism Works](https://www.currentaffairs.org/2019/12/the-data-show-that-socialism-works), replete with nice looking graphs showing several positive country-level correlations between a handful of indices and their _Democratic Socialist Score_.

As a math person, and fan of sites like [Our World in Data](https://ourworldindata.org/) and [GiveWell](https://www.givewell.org/), I was initially excited to see a leftist publication embracing a quantitative approach to political advocacy. But it soon became apparent that, however well intentioned, the analysis is simultaneously unconvincing and proves too much.

<!--more-->
* table of contents
{: toc }

# No True Socialist

The Current Affairs article, written by [Nick Warino](http://nickwarino.com/) (a PhD student at UC Riverside), begins by criticizing the conservative Heritage Foundation for [claiming that countries like Sweden and Denmark aren't _actually_ socialist](https://www.heritage.org/international-economies/commentary/why-democratic-socialists-cant-legitimately-claim-sweden-denmark), and owe their success to other factors. Building on work from [Nathanial Lewis and others](https://medium.com/@nslewis/a-scale-of-socialism-64e287c6d513), Warino then constructs a _Democratic Socialist Score_ (DSS), which ranks countries along four axes: State Ownership, Public Goods and Welfare, Democracy, and Unions. He goes on to show that countries with a higher DSS also tend to also perform better on a variety of indices, ranging from Equality to Life Satisfaction to Innovation. And although he does not include the raw data or source code used to generate the visualizations, I have no reason to doubt (and in some cases can confirm) their validity.

The problem isn't the accuracy of the analysis, and even though the overall claim borders on causal, Warino does at least take _some_ care to acknowledge the correlational nature of available data:

> If we find that more socialist countries are more productive or healthier than capitalist ones, that’s not proof that socialism causes such outcomes—but it does offer a hint.

However, there's an even more fundamental issue, which is that Warino never proves that his DSS is uniquely socialist. If it could be demonstrated that another plausible metric had equally positive correlations across the various indices he cites, there would be no basis on which to claim, as he does, that "People living under socialism are the ones most likely to be living the good life." Conveniently, the Heritage Foundation provides a metric one of their own, the Index of Economic Freedom (IEF), and based on Warino's own criticism, it seems safe to assume represents a sufficiently "capitalist-booster" view of the world.

So of the DSS and IEF, which is more correlated with socialist utopia?

## GDP Per Hour Worked

Of all the indices in the Current Affairs piece, this is the only one I'm confident that I was able to directly match. [Per the OECD](https://data.oecd.org/lprdty/gdp-per-hour-worked.htm):

GDP per hour worked is a measure of labour productivity. It measures how efficiently labour input is combined with other factors of production and used in the production process. Labour input is defined as total hours worked of all persons engaged in production. Labour productivity only partially reflects the productivity of labour in terms of the personal capacities of workers or the intensity of their effort. The ratio between the output measure and the labour input depends to a large degree on the presence and/or use of other inputs (e.g. capital, intermediate inputs, technical, organisational and efficiency change, economies of scale). This indicator is measured in USD (constant prices 2010 and PPPs) and indices.

[![gdp-per-hour-worked.png]({{ site.baseurl }}/assets/images/capitalism-works/gdp-per-hour-worked.png "gdp-per-hour-worked"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/gdp-per-hour-worked.png)

Clearly, both the IEF and DSS are separately positively correlated with GDP Per Hour Worked. In order to determine which of the two metrics has more explanatory power, I ran an OLS regression using both as inputs:



Although the this makes some sense, because as we'll see below, capitalists do spend more of their time working.

## Labor Share of GDP

[![labor-share-of-gdp.png]({{ site.baseurl }}/assets/images/capitalism-works/labor-share-of-gdp.png "labor-share-of-gdp"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/labor-share-of-gdp.png)



## Household Net Adjusted Disposable Income

[![household-net-adjusted-disposable-income.png]({{ site.baseurl }}/assets/images/capitalism-works/household-net-adjusted-disposable-income.png "household-net-adjusted-disposable-income"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/household-net-adjusted-disposable-income.png)



## Coefficient of Human Inequality

[![coefficient-of-human-inequality.png]({{ site.baseurl }}/assets/images/capitalism-works/coefficient-of-human-inequality.png "coefficient-of-human-inequality"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/coefficient-of-human-inequality.png)



## Household Net Wealth

[![household-net-wealth.png]({{ site.baseurl }}/assets/images/capitalism-works/household-net-wealth.png "household-net-wealth"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/household-net-wealth.png)



## Time Devoted to Leisure and Personal Care

[![time-devoted-to-leisure-and-personal-care.png]({{ site.baseurl }}/assets/images/capitalism-works/time-devoted-to-leisure-and-personal-care.png "time-devoted-to-leisure-and-personal-care"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/time-devoted-to-leisure-and-personal-care.png)



## Self-reported Health

[![self-reported-health.png]({{ site.baseurl }}/assets/images/capitalism-works/self-reported-health.png "self-reported-health"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/self-reported-health.png)



## Life Satisfaction

[![life-satisfaction.png]({{ site.baseurl }}/assets/images/capitalism-works/life-satisfaction.png "life-satisfaction"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/life-satisfaction.png)



Money can buy happiness!  

## Global Innovation Index

[![global-innovation-index.png]({{ site.baseurl }}/assets/images/capitalism-works/global-innovation-index.png "global-innovation-index"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/global-innovation-index.png)



# Results

Warino's analysis proves too much because it renders socialists unable to critique capitalism on the same grounds that the straw-man capitalist critiques socialism in his post.


# Other indices








# Advice for armchair statisticians

## Don't cherry pick

It's not just that the OECD sample set is skewed, all of the countries come from the top half of Heritage's index.

## Don't confuse correlation with causation

## Don't make disingenuous arguments


## Don't get high on your own supply


## Do show your work!


Doesn't address the fundamental question. A smaller slice of a bigger pie is still better, right? Or do we have an inherent aversion to inequality that also must be optimized for somehow?

Heritage and socialism scores are so close! Is this really worth a revolution?

https://marginalrevolution.com/marginalrevolution/2019/12/we-need-more-indices.html
