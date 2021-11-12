---
layout: post
title: What's in a name?
excerpt: Using popular voting methods to determine the name of a new design cooperative.
redirect_from: /voting-methods
hidden: true
---

I've recently been working with some like-minded engineers, architects, and designers to create an environmental and social justice design cooperative, tentatively called [JustDesign](http://justdesigncoop.org/) (both a core value and a call to action). While we've gotten a [head start](http://interactive.wttw.com/my-neighborhood/pilsen/pilsen-environmentalists-organize-protect-neighbors-lead-water) engaging with our local Chicago community, a significant portion of our early efforts have been spent on internal engagement. Rallying 10 members across four different timezones, each with their own set of professional and family responsibilities, for what amounts to volunteer work (at the moment), is no easy task, especially when trying to simultaneously learn about and adhere to the [cooperative principles](http://justdesigncoop.org/a-third-way) of democratic self control.

Now that we're nearing official incorporation, the need for an effective decision-making framework has become critical. While some "easy" problems (like when to hold a meeting) can be solved via consensus or unanimous vote, others are not so tractable. In this post, I'll take the example of our organization's name as a test case, and show how different voting rules can be used to make group decisions.

<!--more-->

* table of contents
{: toc }

# The candidates and votes

While the "JustDesign" name has been around since the beginning of our group, it's also one that is [already](http://justdesign.us/) [popular](http://www.justdesign.co.za/) within the design community, potentially making it difficult to differentiate ourselves. While we're likely the only JustDesign cooperative, another confounding factor is that the [Illinois Co-operative act](http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2295&ChapterID=65) applies only to organizations created:

> for the purpose of purchasing of or selling to all shareholders and others, all sorts of groceries, provisions and any other articles of merchandise

Which certainly doesn't seem to apply to us. In order to circumvent this requirement, we plan to incorporate as an LLC, with articles of incorporation that reflect cooperative principles. Unfortunately, the Co-operative act is also pretty specific about the use of the term itself:

> No corporation or association hereafter organized or doing business for profit in this State shall be entitled to use the term "Co-operative" as a part of its corporate or other business name or title unless it has complied with the provisions of this Act

> Any corporation or association violating the provision of this Section may be enjoined from doing business under such name at the instance of any shareholder of any association or corporation organized under this Act.

After consulting with [our lawyer](http://www.sarahkaplanlaw.com/), we decided that all potential naming permutations should be on the table, and that any risks due to similarity or terminology were minimal. After collecting suggestions, I had each team member rank their name preferences from `1-5` on a [Google form](https://goo.gl/forms/vEWxwK16UKBUezff2), with the results presented below:

|        | JustDesign LLC | JustDesign  Cooperative, LLC | JustDesign Co-op,   LLC | JustDesign   Collective, LLC | The Social Justice   Design Cooperative, LLC |
|--------|----------------|------------------------------|-------------------------|------------------------------|----------------------------------------------|
| Frank  | 2              | 3                            | 5                       | 4                            | 1                                            |
| Dan    | 3              | 2                            | 1                       | 4                            | 5                                            |
| Walt   | 5              | 1                            | 2                       | 3                            | 4                                            |
| Maria  | 1              | 5                            | 3                       | 2                            | 4                                            |
| Dhara  | 3              | 1                            | 2                       |                              |                                              |
| Louis  | 2              | 1                            | 4                       | 5                            | 3                                            |
| Sunni  | 2              | 1                            | 4                       | 5                            | 3                                            |
| Pat    | 1              | 3                            | 4                       | 5                            | 2                                            |

# First past the post

In [First-past-the-post](https://en.wikipedia.org/wiki/First-past-the-post_voting) (FPTP) voting, the candidate with the most number of votes wins. While this method has the advantage of being simple and easy to understand, it can be problematic in the case where there isn't a clear group consensus.

Because only "first place" votes are considered, there is only one round of voting, meaning that the winning candidate may not secure the majority of the votes. FPTP therefore encourages "tactical" voting, forsaking a preferred candidate in favor of one who is more likely to win. The steady state result of this behavior is described by [Duverger's law](https://en.wikipedia.org/wiki/Duverger%27s_law), which posits that organizations with FPTP voting systems (like the [United States](https://en.wikipedia.org/wiki/Elections_in_the_United_States#Voting)) reach a natural equilibrium with only two parties.

Using FPTP on the above ballots, ***JustDesign Cooperative, LLC*** wins with a plurality of `4/8` votes.

# Instant runoff voting

[Instant runoff voting](https://en.wikipedia.org/wiki/Instant-runoff_voting) (IRV) computes several rounds of FPTP, eliminating the candidate with the lowest score on each iteration, until one candidate receives a majority of the remaining first-place votes. As the losing candidates are removed, each ballot is recomputed to reflect the available choices, or discarded if all ranked candidates have been eliminated.

IRV has the advantage of always selecting a majority winner (unlike FPTP), but requires that all ballots be ranked, and lacks some desirable features such as the [monotonicity criterion](https://en.wikipedia.org/wiki/Monotonicity_criterion#Instant-runoff_voting_and_the_two-round_system_are_not_monotonic). Despite its limitations, [FairVote](http://www.fairvote.org/) (an advocate for voting reform in the US) endorses IRV as its preferred method.

## Round 1

The first IRV round is identical to FPTP, with *JustDesign Cooperative, LLC* winning a (now non-decisive) plurality. *JustDesign Collective, LLC*, is eliminated with no first-place votes.

| Name                                       | Votes |
|--------------------------------------------|-------|
| **JustDesign Cooperitve, LLC**                 | **4**     |
| JustDesign LLC                             | 2     |
| The Social Justice Design Cooperative, LLC | 1     |
| JustDesign Co-op, LLC                      | 1     |
| *JustDesign Collective, LLC*                 | *0*     |

## Round 2

Since *JustDesign Collective, LLC*, received no votes, there was no relevant re-sorting on any ballots. *JustDesign Co-op, LLC*, and *The Social Justice Design Cooperative, LLC* tied for the fewest first-place votes, and *JustDesign Co-op, LLC* was eliminated via tiebreaker.

| Name                                       | Votes |
|--------------------------------------------|-------|
| **JustDesign Cooperitve, LLC**                 | **4**     |
| JustDesign LLC                             | 2     |
| The Social Justice Design Cooperative, LLC | 1     |
| *JustDesign Co-op, LLC*                      | *1*     |

## Round 3

With *JustDesign Co-op, LLC* eliminated, *JustDesign Cooperative, LLC*, secured an additional first-place vote, giving it a `5/8` majority. Like FPTP, ***JustDesign Cooperative, LLC*** wins using the IRV method.

| Name                                       | Votes |
|--------------------------------------------|-------|
| **JustDesign Cooperitve, LLC**                 | **5**     |
| *JustDesign LLC*                             | *2*     |
| *The Social Justice Design Cooperative, LLC* | *1*     |

# Schulze method

The [Schulze method](https://en.wikipedia.org/wiki/Schulze_method) uses a [directed graph](https://en.wikipedia.org/wiki/Directed_graph) search to find the [Condorcet winner](https://en.wikipedia.org/wiki/Condorcet_method), or the candidate who would win the most hypothetical head-to-head matchups. When calculating the vote using the Schulze method, the first step is to create a matrix of pairwise preferences from the raw voting data.

|                                            | JustDesign LLC | JustDesign Cooperative, LLC | JustDesign Co-op, LLC | JustDesign Collective, LLC | The Social Justice Design Cooperative, LLC |
|--------------------------------------------|----------------|----------------------------|-----------------------|----------------------------|--------------------------------------------|
| **JustDesign LLC**                             |                | *3*                          | **5**                     | **6**                          | **5**                                          |
| **JustDesign Cooperative, LLC**                 | **5**              |                            | **6**                     | **6**                          | **4**                                          |
| **JustDesign Co-op, LLC**                      | *3*              | *2*                          |                       | **5**                          | *3*                                          |
| **JustDesign Collective, LLC**                 | *1*              | *1*                          | *2*                     |                            | *3*                                          |
| **The Social Justice Design Cooperative, LLC** | *2*              | *3*                          | **4**                     | **4**                          |                                            |

From there, a directed graph can be drawn, using the strong pairs to determine value and direction of the vertices.

[![directed graph]({{ site.baseurl }}/assets/images/voting-methods/schulze-graph.png "directed graph"){: .center-image }]({{ site.baseurl }}/assets/images/voting-methods/schulze-graph.png)

Determining the winner of each potential head-to-head matchup is as easy as tracing the various paths between the two nodes on the network. The direction of the path with the largest minimum connection strength decides the winner. For example, *JustDesign Cooperative, LLC* beats *The Social Justice Design Cooperative, LLC* with a score of `5` (tracing the path through *JustDesign LLC* leads to a higher minimum score than the direct route). The strengths of the strongest paths are shown in the table below.

|                                            | JustDesign LLC | JustDesign Cooperative, LLC | JustDesign Co-op, LLC | JustDesign Collective, LLC | The Social Justice Design Cooperative, LLC |
|--------------------------------------------|----------------|----------------------------|-----------------------|----------------------------|--------------------------------------------|
| **JustDesign LLC**                             |                | *5*                          | **5**                     | **6**                          | **5**                                          |
| **JustDesign Cooperative, LLC**                 | **5**              |                            | **6**                     | **6**                          | **5**                                          |
| **JustDesign Co-op, LLC**                      | *5*              | *6*                          |                       | **5**                          | *4*                                          |
| **JustDesign Collective, LLC**                 | *6*              | *6*                          | *5*                     |                            | *4*                                          |
| **The Social Justice Design Cooperative, LLC** | *5*              | *5*                          | **4**                     | **4**                          |                                            |

As with FPTP and IRV, ***JustDesign Cooperative, LLC*** wins using the Schulze method.

# Conclusions

For the purposes of this exercise, the unanimous consent of the three voting methods was enough for us to proceed with our LLC filing, but there remains the issue of choosing consensus strategy for other decisions within the organization. A [2011 paper](https://hal.archives-ouvertes.fr/hal-00609810/document) by Jean-Francois Laslier recounts a similar Catch-22 from the 2010 Voting Power in Practice workshop, where participants attempted to vote on their preferred voting rules. Surprisingly, the process went smoothly; the voters informally agreed to use [Approval Voting](https://en.wikipedia.org/wiki/Approval_voting) to determine the winner, and then voted Approval Voting the winner (with ranked preference and Condorcet methods placing 2nd and 3rd).

Unfortunately, I didn't collect enough information to tabulate the Approval winner for our naming vote, but the method is elegant, and reminiscent of the strategy we adopted at our company retreat earlier this year prior to any research. As in the paper, I suggest using Approval Voting to help determine a preferred consensus strategy.

One additional wrinkle we plan to add to any set of voting rules is the concept of a temporary "blocking" vote, which any member can apply to any or all of the candidates. If the block causes the vote to fail, our (yet to be determined) conflict resolution process is invoked, and a decision is delayed until a satisfactory resolution is reached.

On a practical note, finding a simple, free voting platform which is compatible with various rules is proving to be a difficult task. To tabulate the results of this example vote, I used Google Forms and [pyvotecore](https://github.com/bradbeattie/python-vote-core), but something like [Modern Ballots](https://modernballots.com/), [Open Agora](https://www.open-agora.com/), or even [Simple Poll for Slack](https://simplepoll.rocks/) might be easier. A few lessons learned from running a ranked vote in Forms: create a Multiple Choice Grid, select both "Limit to one response per column" and "Shuffle row order", and be sure to differentiate between rating (`5` is best) and ranking (`1` is best).
