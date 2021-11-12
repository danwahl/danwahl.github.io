---
title: The Problem With the Golden Rule
layout: post
excerpt: An unironic attempt to create a hierarchy of human rights using machine learning.
---

At some point during my Catholic upbringing, it was made clear to me that the [Golden Rule](https://en.wikipedia.org/wiki/Golden_Rule#Differences_in_values_or_interests) represented a moral cornerstone of the faith. Like your typical Catholic, however, I had never actually read the Bible, and I only knew it informally as "do unto others as you would have them do unto you" (or maybe "love thy neighbor as thyself"). So I was a little surprised to see the full verse from [Matthew 7:12 NCV](https://www.biblegateway.com/passage/?search=Matthew%207:12&version=NCV):

> Do to others what you want them to do to you. This is the meaning of the law of Moses and the teaching of the prophets.

Having recently read the bulk of the Old Testament, I can definitively state that the Golden Rule represents a large shift away from the "law of Moses," which involves a lot of [ritualistic sacrifice](https://www.biblegateway.com/passage/?search=Leviticus+1), [rape](https://www.biblegateway.com/passage/?search=Deuteronomy+22:28-29), and [murder](https://www.biblegateway.com/passage/?search=1+Samuel+15:3); all things the average Christian wouldn't want done unto them. But despite the improvement, something more fundamental had always bothered me about the Golden Rule. [George Bernard Shaw](https://www.goodreads.com/quotes/1099-do-not-do-unto-others-as-you-would-that-they) put it best when he said:

> Do not do unto others as you would that they should do unto you. Their tastes may not be the same.

A Golden Rule practitioner might, for instance, deny others the right to same-sex marriage, on the grounds that it is also how they would want to be treated. In order to account for the preference of others, it seemed to me that the Rule should be modified to something like "Do to others what they want done to themselves." But rather than reinvent the words of Christ (a job best left for the authors of the New Testament), I now believe there is another way to resolve the apparent inadequacy of the Golden Rule: machine learning.

<!--more-->
* table of contents
{: toc }

# The Universal Declaration of Human Rights

Before we get there, however, it's important to start off with a more comprehensive list of rules (no, not the Ten Commandments). At its core, the Golden Rule is designed to be universal, protecting the individual *from* the actions of others by limiting their behavior *towards* others. That bit of recursion is a nifty trick, but relies on a level of empathy (and/or compassion) that, given human nature, shouldn't always be relied on. Instead, a modern approach to the rule of law enumerates all the individual rights and freedoms an individual should expect in a free society, often in excruciating detail.

For the purposes of this analysis, a happy median between these two extremes can be found in the [Universal Declaration of Human Rights](https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights) (UDHR), a 30 point plan developed by the UN after WWII, and approved by countries representing the majority of the world's population. The adoption of the UDHR was a pivotal moment on the world stage, paving the way for the binding [International Bill of Rights](https://en.wikipedia.org/wiki/International_Bill_of_Human_Rights), and the [relative peace](https://www.goodreads.com/book/show/11107244-the-better-angels-of-our-nature) of the late 20th century. In [abridged form](http://hrlibrary.umn.edu/edumat/hreduseries/hereandnow/Part-5/8_udhr-abbr.htm), the UDHR protects the following individual rights and freedoms:

| 1  | Right to Equality                                                       |
| 2  | Freedom from Discrimination                                             |
| 3  | Right to Life, Liberty, Personal Security                               |
| 4  | Freedom from Slavery                                                    |
| 5  | Freedom from Torture and Degrading Treatment                            |
| 6  | Right to Recognition as a Person before the Law                         |
| 7  | Right to Equality before the Law                                        |
| 8  | Right to Remedy by Competent Tribunal                                   |
| 9  | Freedom from Arbitrary Arrest and Exile                                 |
| 10 | Right to Fair Public Hearing                                            |
| 11 | Right to be Considered Innocent until Proven Guilty                     |
| 12 | Freedom from Interference with Privacy, Family, Home and Correspondence |
| 13 | Right to Free Movement in and out of the Country                        |
| 14 | Right to Asylum in other Countries from Persecution                     |
| 15 | Right to a Nationality and the Freedom to Change It                     |
| 16 | Right to Marriage and Family                                            |
| 17 | Right to Own Property                                                   |
| 18 | Freedom of Belief and Religion                                          |
| 19 | Freedom of Opinion and Information                                      |
| 20 | Right of Peaceful Assembly and Association                              |
| 21 | Right to Participate in Government and in Free Elections                |
| 22 | Right to Social Security                                                |
| 23 | Right to Desirable Work and to Join Trade Unions                        |
| 24 | Right to Rest and Leisure                                               |
| 25 | Right to Adequate Living Standard                                       |
| 26 | Right to Education                                                      |
| 27 | Right to Participate in the Cultural Life of Community                  |
| 28 | Right to a Social Order that Articulates this Document                  |
| 29 | Community Duties Essential to Free and Full Development                 |
| 30 | Freedom from State or Personal Interference in the above Rights         |

# A digression on recursion

In [The Concept of Morals](https://archive.org/details/conceptofmorals029360mbp), Walter Terrance Stace made the following observation about the Golden Rule, and the recursive nature of moral reasoning:

> Mr. Bernard Shaw's remark "Do not do unto others as you would that they should do unto you. Their tastes may be different" is no doubt a smart saying. But it seems to overlook the fact that "doing as you would be done by" includes taking into account your neighbor's tastes as you would that he should take yours into account. Thus the "golden rule" might still express the essence of a universal morality even if no two men in the world had any needs or tastes in common.

Article 29, section (2) of the UN Declaration of Human rights makes a similarly recursive point, stating:

> In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others...

To put it another way, an individual's freedoms can only be limited when doing so protects the freedoms of others. This is intuitive in cases where one right/freedom significantly outweighs the other: for instance, my desire to see someone killed does not supersede that person's right to life. But it's not as clear how it applies when the rights/freedoms are similar, or even the same.

A murkier example might be religion, where beliefs untethered from reality might take any potentially contradictory form. If my religion mandates something that another forbids, Freedom of Religion seems like a somewhat blunt tool, nominally arming the defenders of both positions. However, another recursion trick saves us here, too. Slightly modifying Article 29(2) from above:

> In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms ***of equal or greater importance*** of others...

Paradoxically, this means Freedom of Religion places a natural *limit* on the scope of religious rights, at least insofar as religious practices the participation of infidels.

# The (implied) hierarchy

While recursion solves one problem, it also creates an potentially bigger one: if we care about the hierarchy of rights, then how should they be ordered? Like most collective decision making processes, democratic solutions tend to fare well, assuming we gloss over the fact that participation in a democratic process is *itself* a right (recursion all the way down).

On the surface this might seem like a case for a form of Ranked Choice Voting (a personal hobbyhorse); have everyone in the world submit a ranked ballot, and synthesize them to form a universally applicable order. However, taking the UDHR as an example, it's pretty difficult to find a satisfactory ordering of such a long and complicated list. One technique for augmenting intuition in similar situations is to consider all the possible pairs in head-to-head match-ups, and then infer the order from the results.

FiveThirtyEight had a recent feature implementing [just such an algorithm](http://fivethirtyeight.com/features/the-rams-are-dead-to-me-so-i-answered-3352-questions-to-find-a-new-team/), to determine which football team one of their editors should support after the Rams moved to Los Angeles. Although the application is very different, the concept is basically the same: implicitly rank long list of not-quite-orthogonal ideas two at a time. FiveThirtyEight used a free polling service, [AllOurIdeas](http://www.allourideas.org/), to collect their data, so I decided to try the same thing:

<iframe src='http://widget.allourideas.org/rights' width='550' width="100%" height='400' frameborder='0' scrolling='no'></iframe>

I ran two tests, one where I answered all the questions, and another where I outsourced the poll to friends, coworkers, and the Mechanical Turk. Here are the results as of the writing of this entry:

# Rock paper scissors

AllOurIdeas derives its ranking by estimating the chance that each entry "will win against a randomly chosen idea," and this works pretty well to derive a reasonably intuitive ordering. However, after going through the process of evaluating hundreds of individual match-ups, I began to suspect that I was internally categorizing the rights/freedoms in a way that wouldn't be captured by a simple linear ranking.

In part, this is because some of the UDHR's ideas seem redundant (especially in abbreviated form). What, for instance, is the difference between . Does one follow from the other, or is one just more independently fundamental?

It seemed to me that there was a little bit of both: the rights/freedoms belonged to meta-right/freedom groups, and those groups had a specific hierarchy that could explain most of the head-to-head results. Moreover, it's possible that the hierarchy isn't strictly linear. If, like [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem), there were internal loops between the groups (of the form A > B > C > A), it might go a long way towards explaining the difficulty of the ranking task (and maybe the state of the world at present).

In order to create a grouping algorithm that was robust to this possibility, I generated a training set based on a rock/paper/scissors competition, with 100 players assigned to one of three teams. Those on "Team Rock" played rock 80% of the time, and paper/scissors 10% each (for good measure), and the other two teams had equivalent probabilities, resulting in the likelihood matrix shown below:

```
[[ 0.5         0.20481928  0.79518072]
 [ 0.79518072  0.5         0.20481928]
 [ 0.20481928  0.79518072  0.5       ]]
 ```

I then simulated 10000 head-to-head match-ups between the players. Using only the win/loss results of each team, I used PCA to transform the data into a two dimensional component space, and KMeans to identify the clusters. The resulting groups are clearly shown in the graph below:

[![Rock/Paper/Scissors PCA/KMeans analysis]({{ site.baseurl }}/assets/images/human-rights/pca-kmeans-rps.png "Rock/Paper/Scissors PCA/KMeans analysis"){: .center-image }]({{ site.baseurl }}/assets/images/human-rights/pca-kmeans-rps.png)

# Results and conclusion

To apply the same algorithm to the UDHR data,

Unfortunately, applying the same algorithm to the UDHR data yields a less satisfying result. Instead of detecting underlying groups with looping hierarchies, the result looks similar to the AllOurIdeas ranking,


peter singer animal liberation
