---
layout: post
title: FairVote Simulation
excerpt: A simulation of ranked preference voting with 2016 presidential election data.
redirect_from: /fairvote-sim
hidden: true
---

For the [fifth time](https://en.wikipedia.org/wiki/United_States_presidential_elections_in_which_the_winner_lost_the_popular_vote) in American history, and the second time in the last 16 years, the presidential candidate receiving the most votes will not take office due to ~~a rounding error~~ the Electoral College. But one of the few positive things to come out of the 2016 election has been a renewed focus on voting reform. Several notable plans have been offered to fix the EC, from [undermining](https://trumptraders.org/trade/) [it](http://www.nationalpopularvote.com/) at a state level, to [abolishing it](http://www.cnn.com/2016/11/15/politics/barbara-boxer-electoral-college-donald-trump-2016-election/) altogether, and even (God forbid) [using it to its intended purpose](http://www.hamiltonelectors.com/).

While I'm in favor of any/all of the above, true EC reform might take a while, and there are likely other ways we can make our voting system more robust in the meantime. One of the most interesting proposals, promoted by the advocacy organization [FairVote](http://www.fairvote.org/), is called Ranked Choice (or Instant Runoff) Voting. The following is my attempt to figure out if this reform would have changed the outcome of the 2016 election.

<!--more-->
* table of contents
{: toc }

# A quick summary

The basic idea of [Ranked Choice Voting](https://en.wikipedia.org/wiki/Instant-runoff_voting) is that, instead of selecting one candidate, voters rank candidates in the order of preference. If none have a majority after the first round of counting, the candidate with the fewest votes is eliminated, and their votes are redistributed according to the rankings on each ballot. This process is repeated each round until one candidate earns a majority of the votes. Here's a nice video summary from FairVote:

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/CIz_nzP-W_c" frameborder="0" allowfullscreen></iframe>
</div>

Several US cities and the [state of Maine](http://www.nytimes.com/2016/12/03/us/maine-ranked-choice-voting.html) have already adopted RCV, and for good reason. [Research on RCV](http://www.fairvote.org/rcv#research_on_rcv) shows increased voter participation and satisfaction with the election process, and a decrease in negative campaigning. Moreover, a [FairVote study](http://www.fairvote.org/simulating_instant_runoff_flips_most_donald_trump_primary_victories) during the Republican primaries found that Super Tuesday would have looked very different with RCV:

{: .blockquote .border-left}
> Our hypothetical for Super Tuesday shows Trump winning two states (Alabama and Massachusetts), Cruz winning four state (Alaska, Arkansas, Oklahoma and Texas), and Rubio winning three states (Georgia, Minnesota and Virginia) -- with Kasich having a real chance in Vermont and Tennessee too close to call.

But I think the biggest benefit of the RCV system is the increased relevance of third party candidates and ideas. There seems to be [enough evidence](https://en.wikipedia.org/wiki/Duverger's_law) to conclude that our current political system is in stable equilibrium with two large and ideologically opposed parties. A third party challenger that siphons off votes from a similar candidate only helps the undivided opposition, and decreases the odds of their ideas being represented in the next government. RCV would help to change that by giving voters the opportunity to vote idealistically and practically on the same ballot.

# Correlation implies choice

Given all that, it's tempting to wonder what might have happened had we used RCV for the entire 2016 election process. Unfortunately, there isn't a good way to run the numbers due to a lack of relevant polling data, and the [positive feedback system](https://en.wikipedia.org/wiki/Positive_feedback) of the party primary process.

However, it's slightly easier to imagine what would have happened if we'd implemented RCV after the primaries, when all but the top four candidates (Clinton/Trump/Johnson/Stein) had been practically eliminated. While there's still a dearth of useful polling data on the subject of ranked ballots, there are other ways to estimate voter rankings.

One simple idea is to just look at how closely the candidates resemble each other on a range of different issues. The website [ProCon](http://2016election.procon.org/view.source-summary-chart.php) maintains a list of candidate positions, from which it's possible to derive the [correlation](https://xkcd.com/552/) between each candidate's views, show in the table below:

```text
          Clinton     Trump   Johnson     Stein
Clinton  1.000000 -0.210247  0.092692  0.650174
Trump   -0.210247  1.000000 -0.068626 -0.245677
Johnson  0.092692 -0.068626  1.000000  0.259383
Stein    0.650174 -0.245677  0.259383  1.000000
```

This makes some intuitive sense: Stein and Clinton have a lot in common, Johnson is off in his own world, and [nobody likes Trump](http://www.cnn.com/2016/12/08/politics/donald-trump-approval-ratings-pew-poll-transition/).

# An "average" third party voter

The correlation between candidates isn't quite enough, though; we still need to figure out how voters would use this data to rank their ballots. Since I don't pretend (or want) to know what the voters in this country value, I simply generated a population of 10,000 voters with random opinions, and derived their preferences from the [weighted correlation](https://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient#Weighted_correlation_coefficient) with each of the candidates on the ProCon issues.

This process resulted in a list of 10,000 ranked ballots; a pool of random American voters for the simulation to draw from (note that candidates with negative voter correlations were left unranked). From this list it's possible, for instance, to simulate a Jill Stein voter, by randomly picking a ballot that has her ranked first. A quick sanity check shows that the average Stein voter has the following candidate rankings:

```text
    Clinton     Trump   Johnson  Stein
1  0.000000  0.000000  0.000000      1
2  0.301097  0.141634  0.202958      0
3  0.112662  0.142292  0.160230      0
4  0.014955  0.072464  0.028348      0
```

These seem reasonable (if slightly conservative) at a glance: I don't have trouble believing that at least 30% of Stein voters would have ranked Clinton second, or that 70% wouldn't have Trump ranked at all. To run the full simulation, I grabbed the national voting results from [here](https://github.com/benhamner/2016-us-election), selected ballots for each vote using the random voter pool, and simulated each state using the RCV algorithm. The full simulation code is posted [here](https://github.com/danwahl/fairvote-test).

# The final count

The outcome of the election with and without RCV can be seen on the [map](https://datamaps.github.io/) below:

<link rel="stylesheet" type="text/css" href="/assets/css/fairvote-sim/fairvote.css">
<div align="center">
  <div class="onoffswitch">
      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
      <label class="onoffswitch-label" for="myonoffswitch">
          <span class="onoffswitch-inner"></span>
          <span class="onoffswitch-switch"></span>
      </label>
  </div>
</div>
<div id="container" style="position: relative; height: 400px; margin-bottom: 64px;"></div>

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://datamaps.github.io/scripts/0.4.4/datamaps.usa.min.js"></script>
<script src="/assets/js/fairvote-sim/fairvote.js"></script>

The results for the majority of the states were unchanged, since one of the two major candidates won 50% of the vote on the first round. In the states that were affected by RCV, Clinton picked up more votes than Trump nearly across the board:

```text
      Clinton  Trump   Diff
state                       
AZ      39239  29396   9843
CO      58107  46630  11477
FL     100255  75681  24574
ME      19784  14264   5520
MI      82392  63429  18963
MN      56196  41981  14215
NV      10949  12139  -1190
NH      12782  10889   1893
NM      27837  24983   2854
PA      72092  53216  18876
WI      50547  38681  11866
```

Despite razor thin Trump majorities in states like Pennsylvania and Wisconsin, however, the only state Clinton actually flipped was Michigan, where the vote totals each round looked like this:

```text
Michigan
   Clinton    Trump  Johnson  Stein
1  2267798  2279221   173023  50690
2  2292052  2284925   186194      0
3  2350190  2342650        0      0
```

# So you're saying there's a chance?

While this simulation didn't lead to a change in the overall results, it does reinforce the idea that Ranked Choice Voting can produce a fairer election by giving third party voters, candidates, and ideas more power to influence the resulting government. Even within the chaotic landscape of the American political system, it's not hard to imagine real RCV elections resulting in more palatable platforms by giving candidates the incentive to court moderate third party voters, instead of pandering to a [vocal fringe](https://www.greatagain.gov/).
