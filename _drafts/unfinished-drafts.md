---
layout: post
title: 
excerpt: Looking back on two years of blogging failure.
---

most of the quotes are from my drafts (unless otherwise stated)

I even had a "best of 2020" post lingering in there...

<!--more-->
* table of contents
{: toc }

# Capitalism Works, Too

In late 2019, back when I was paying attention to internet leftist politics, a piece in Current Affairs titled [The Data Show That Socialism Works](https://www.currentaffairs.org/2019/12/the-data-show-that-socialism-works) caught my eye. Penned by [Nick Warino](http://nickwarino.com/) (and presumably blessed by editor Nathan J. Robinson), the article:

> begins by criticizing the conservative Heritage Foundation for [claiming that countries like Sweden and Denmark aren't _actually_ socialist](https://www.heritage.org/international-economies/commentary/why-democratic-socialists-cant-legitimately-claim-sweden-denmark). Building on work from [Nathanial Lewis and others](https://medium.com/@nslewis/a-scale-of-socialism-64e287c6d513), Warino then constructs a _Democratic Socialist Score_ (DSS), which ranks countries along four axes: State Ownership, Public Goods and Welfare, Democracy, and Unions. He goes on to show that countries with a higher DSS also tend to also perform better on a variety of indices, ranging from Equality to Life Satisfaction to Innovation.

The problem, as you might expect if you're sufficiently cynical about this kind of thing, is that Warino is only presenting his side of the story.

> Conveniently, the Heritage Foundation provides a metric one of their own, the Index of Economic Freedom (IEF), and based on Warino's own criticism, it seems safe to assume represents a sufficiently "capitalist-booster" view of the world.

In the draft, I crunched the numbers for the IEF and tried to come up with an apples-to-apples comparison with the DSS. The results, on nearly every metric, show roughly the same thing: the Current Affairs and The Heritage Foundation indicies are nearly identical.

[![labor-share-of-gdp.png]({{ site.baseurl }}/assets/images/capitalism-works/labor-share-of-gdp.png "labor-share-of-gdp"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/labor-share-of-gdp.png)

[![household-net-adjusted-disposable-income.png]({{ site.baseurl }}/assets/images/capitalism-works/household-net-adjusted-disposable-income.png "household-net-adjusted-disposable-income"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/household-net-adjusted-disposable-income.png)

Etc.

The two interesting exceptions are "Household Net Wealth" (+IEF, -DSS) and "Time Devoted to Leisure and Personal Care" (-IEF, +DSS), which implies an obvious tradeoff between capitalist and socialist policies: countries that work more have less free time and more wealth.

[![household-net-wealth.png]({{ site.baseurl }}/assets/images/capitalism-works/household-net-wealth.png "household-net-wealth"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/household-net-wealth.png)

[![time-devoted-to-leisure-and-personal-care.png]({{ site.baseurl }}/assets/images/capitalism-works/time-devoted-to-leisure-and-personal-care.png "time-devoted-to-leisure-and-personal-care"){: .center-image }]({{ site.baseurl }}/assets/images/capitalism-works/time-devoted-to-leisure-and-personal-care.png)

# Insufficient Confusion&trade;

Next I tried my hand at social psychology, and nearly finished a full post that I (fittingly, as we'll see) didn't feel confident enough to publish. The idea behind Insufficient Confusion&trade; is that naive Bayesian updating rewards and even incentivizes overconfidence, to the point where confidence loses signaling value. It begins by postulating rules for an idealized disagreement:

> Ideally, both [Alice and Bob] would take turns expressing the strongest case in favor of their belief, while also acknowledging their areas of epistemic uncertainty. From there they could address the other's questions and concerns, each tailoring their arguments to fit the revealed strengths and weaknesses of both sides.

I then went through some dubious math in an attempt to show that, if Bob begins any credence in the correctness of Alice's beliefs (i.e. she has a positive likelihood ratio greater than one), he should move _towards_ Alice's position, all else being equal. The problem comes when Alice knows this about Bob, and is motivated by something other than truth-seeking, in which case she can use it to her advantage. At the limit, this could even devolve into a Prisoner's Dillemma, where _both_ Alice and Bob are incentivized to inflate their confidence:

|                             | Alice is uncertain    | Alice inflates confidence |
|-----------------------------|-----------------------|---------------------------|
| **Bob is uncertain**        | Productive stalemate  | Alice wins, Bob loses     |
| **Bob inflates confidence** | Alice loses, Bob wins | Unproductive stalemate    |

| Points | Scenario               |
|--------|------------------------|
| 5      | Win                    |
| 3      | Productive stalemate   |
| 1      | Unproductive stalemate |
| 0      | Loss                   |

|                             | Alice is uncertain | Alice inflates confidence |
|-----------------------------|--------------------|---------------------------|
| **Bob is uncertain**        | `A = 3; B = 3`     | `A = 5; B = 0`            |
| **Bob inflates confidence** | `A = 0; B = 5`     | `A = 1; B = 1`            |

> Imagine things from Bob's perspective. Assuming he doesn't know what Alice will do, he can evaluate his options in either scenario. If Alice is honest (column 1), then he gets `3` points for reciprocating (row 1), but `5` points for inflating his own confidence (row 2). If, however, Alice inflates her confidence (column 2), he still gets `1` point for responding in kind, but `0` points for being honest. No matter what Alice does, Bob stands to gain more from projecting inflated confidence (or defecting, in game theory terminology) than honestly reflecting his uncertainty (cooperating).

Finally, I speculated on some potential solutions, like CFAR's Double Crux model, using prediction markets, or just wearing [this t-shirt](https://www.redbubble.com/i/t-shirt/I-Cooperate-in-the-Prisoner-s-Dilemma-by-Lalaithion/10939446.NL9AC). I also fretted about the perils of honest signaling:

> A special case of Insufficient Confusion&trade; arises when both sides are pro-X, but with varying degrees of confidence. If Alice has 80% credence in this belief, but Bob only has 51%, while they nominally prefer the same overall outcome, they may still end up disagreeing about the specifics. Bob is in an especially tricky position because, if nothing else, it's linguistically difficult to project confidence in your uncertainty.

# Cooperation and Tolerance

In keeping with the social psychology theme, I then developed a toy framework for determining the optimal level of tolerance in order to maximize cooperation (in the form of potential collaborators):

> As an example, imagine a population filled with supporters and detractors of ideology A. Among each group there are some who are willing to cooperate with members of the opposing group [labeled "Cooperative"], and others who are not ["Uncooperative"]. See the illustrative diagram below:

[![a.png]({{ site.baseurl }}/assets/images/cooperation-and-tolerance/a.png "a"){: .center-image }]({{ site.baseurl }}/assets/images/cooperation-and-tolerance/a.png)

> Critically, if you're looking to maximize collaborators, there are only three possible subgroups from which to choose. You could support ideology A, which nets you both pro-A boxes, and 55% of the overall population. However, because those in the upper right are unwilling to work with their ideological opponents, you will lose all of the anti-A row (even those in the lower left). The inverse choice is also available, in which you oppose A at the expense of the pro-A row.

> Finally, you could decline to take an exclusive position on A. In essence, this is like choosing the Cooperative column at the expense of the Uncooperative. Note that *the inverse of this choice is unavailable*, because the Uncooperative boxes have mutually incompatible values, and can never be part of the same group.

I went on to list several more examples, though the idea itself is relatively straightforward: "choose whichever row (1 or 2) or column (1) yields the greatest number of collaborators." Finally, I related this to the "Horseshoe theory" (or maybe more accurately, Horseshoe _Magnet_ theory), in which you can form a coalition with all of the left, all of the right, or moderates on both sides (but _not_ the extremeists on both sides).

[![political-compass.png]({{ site.baseurl }}/assets/images/cooperation-and-tolerance/political-compass.png "political-compass"){: .center-image }]({{ site.baseurl }}/assets/images/cooperation-and-tolerance/political-compass.png)

# Cooperative Manifesto

With the benefit of hindsight, it seems clear that the previous two drafts, along with Cooperative Manifesteo, form a sort of trilogoy  grappling with the internal conflict and eventual dissilution of my [first business]. 

# The Banality of Consequentialism


