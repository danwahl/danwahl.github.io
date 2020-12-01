---
layout: post
title: Arguments from insufficient confusion
excerpt: or How to respond to an overconfident interlocutor
---

Epistemic status: trying to derive observations about social interactions form first principles without consulting the research. Almost certainly wrong, hopefully for interesting reasons.

Alice and Bob are preparing to enter a friendly debate about proposition X, about which they disagree. Alice has reviewed the available evidence and is pro-X, while Bob's equivalent research led him to the opposite conclusion. Each is moderately confident that, if their position on X were enacted, it would produce the best results on an agreed-upon scale.

Ideally, both would take turns expressing the strongest case in favor of their belief, while also acknowledging their areas of epistemic uncertainty. From there they could address the other's questions and concerns, each tailoring their arguments to fit the revealed strengths and weaknesses of both sides.

By the end, even if they still disagree, Alice and Bob will at least have a much better idea of where the other is coming from, and maybe even an improved understanding of their own position, having seen the original proposition from a fresh perspective. This outcome represents a win-win, in which both participants both benefit from having exchanged their ideas, regardless of the outcome.

Seems easy enough. So why do real debates often go so poorly?

don't argue against your own beliefs
be wary of ideologies that pre-explain disagreement in their own terms (weak man?)
- bad because it claims to have a simplistic answer to chesterton's fence, but it's rarely simple

<!--more-->
* table of contents
{: toc }

# Bayesian updating

But before getting into why debates go wrong, let's talk about how they might go right. One axiom of healthy debate is the Principle of Charity, or as Scott Alexander put it in his [first Slate Star Codex post](https://web.archive.org/web/20200110071406/https://slatestarcodex.com/2013/02/12/youre-probably-wondering-why-ive-called-you-here-today/):

> if you don’t understand how someone could possibly believe something as stupid as they do, that this is more likely a failure of understanding on your part than a failure of reason on theirs.

To restate in Bayesian terms, by the end of the debate, and unless they have good reason not to, the opposing sides should be closer than they started. But what constitutes "good reason" to move in the opposite direction of your opponent's argument?

## Bayesian updating

Although I've written previously about Bayesian networks, taken two graduate-level courses in probability and statistics, and even read a relevant textbook cover-to-cover, I confess that I still panic a little whenever I try to use Bayes' theorem. That's why I was excited when I recently learned that it's much more intuitive to think about it in terms of [odds ratios](https://wiki.lesswrong.com/wiki/Odds#Odds_form_of_Bayes.27_Rule), instead of probabilities.

Back to the original example, let's assume that Bob has a prior credence of 0.33 in X (on a scale of 0 to 1, where 0 represents maximally anti-X, and 1 represents maximally pro-X). This corresponds to an odds ratio of 1:2, which could be interpreted as something like "For every world in which X has good consequences, Bob believes there will be two worlds in which it has bad consequences." When confronted with Alice's argument in favor if X, how much (if at all) should he update in her direction?

This question turns on the value of the likelihood ratio, another Bayesian term designed to give me a stomach ache. But as it turns out, when thinking in terms of the odds ratio, this term has a nice, intuitive meaning as well. First considering the "numerator" of the odds ratio (or 1 in this case, the portion of the ratio where Bob thinks X will have good consequences), Bob can ask the following question: "How often does Alice support similar propositions that end up having good consequences?" (This term is Alice's "true positive rate," also called _sensitivity_ for some reason). Let's assume that Alice has a good track record, and assign a value of 0.8.

Bob can ask himself a similar question for the "denominator" of the odds ratio, something like "How often does Alice support similar propositions that end up having bad consequences?" (This is Alice's "false positive rate"). For this value, assume that Alice occasionally advocates for positions that later turn out to be wrong, and assign a value of 0.2.

Bob can now return to his prior odds ratio, in which he imagined three total worlds, one in which X has good consequences, and two where it does not, and compute the likelihood that each is realistic, given Alice's claim. In the one world where X has good consequences, Alice would be correct, giving this world a total weight of 1 * 0.8 = 0.8. In the two worlds where X has bad consequences, Alice would be incorrect, giving this world a total weight of 2 * 0.2 = 0.4. Bob's new odds ratio is simply the ratio of these two numbers, or 0.8:0.4 = 2:1.

The likelihood ratio is simply the ratio of the answers to the two questions that Bob just asked: 0.8/0.2 = 4/1. Put another way, Alice is four times more likely to correctly support similar propositions that end up having good consequences than bad ones. Knowing this, how should Bob update his position?

When should you update towards your debate opponent, when away? If your opponent is, on average, correlated with the truth in similar situations, you should move towards them.

People disagreeing with you should cause you to introspect. Ideologies that claim to know WHY people disagree are dangerous because they corrupt this process of Bayesian updating. If you think that your opponent is predisposed to get this type of argument wrong, then in a sense you're "correct" to update against their position, given that they have it. But this can obviously be abused. See every religion having a handy explanation that people who oppose their religion are infidels/Satanists/etc.

https://www.theatlantic.com/ideas/archive/2020/07/dehumanizing-condescension-white-fragility/614146/

move closer to opposing position in order to trick the person into thinking they should Bayesian update in your direction? different from thinking you're an extremist? or is it that you're more incentivized to view them as an extremist? either way then you would reduce your credence in the other person's

immune systems of ideologies which makes people who disagree seem less credible by generating explanations for disagreement that explain the objection in the terms of the original ideology.

as soon as you expose yourself as irrational then whatever effect you were having on someone else's position is lost and they might go in the opposite direction.

Some actual math?

Let's assume for the sake of assumption that both A&B consider each other generally truthful for the remainder of

# Misaligned incentives

Let's start with the partially charitable premise that, while both Alice and Bob would most like to believe the truth about X, they would also strongly prefer to stick with their current belief, if possible. Given this, a desirable outcome for Alice might be a quick and decisive victory over Bob, or else enough ambiguity to "agree to disagree."

Someone might object that, if they most want to understand the truth regarding X, Alice and Bob would be irrational to also prefer to retain their existing beliefs (one of which is "incorrect"), but this is not necessarily true. Several other factors may combine to make alternative outcomes more appealing, the first being the obvious validation that comes from besting your debate partner. But there is also the chance that your opponent might win, and it can be difficult to update even inconsequential beliefs. This is partially due to the fact that we have a limited amount of energy to spend on dialogue and reflection, but more fundamentally, it's because beliefs rarely exist in isolation.

Alice may not care much about prop. X specifically, but her credence in it may be derived from other, more cherished opinions in a kind of Bayesian network of beliefs. If she can be convinced that she was mistaken about X, what else might she be wrong about? Updating one node may require her to undertake a full review of the upstream effects; a potentially daunting prospect.

Since Bob likely feels the same way, despite their good intentions, both are incentivized to look for easy victories (at best) or stalemates (at worst). And these are sometimes easy to come by. Beliefs are like clouds: they can easily float along, untethered to reality, but sometimes lightning strikes and all of their potential is drained in an instant. This grounding effect often comes with exposure to people with more expertise in a given area, and since we are all at different stages in our education, is not an uncommon occurrence.

# Tactical dishonesty

However, quick victories are also possible via unnatural means. Besides dirty tricks like knowingly misrepresenting facts, and well-known (but still tempting) logical fallacies such as false equivalence and red herrings, one common and effective tactic is simply to project inflated confidence. If Alice has 80% credence in her pro-X belief, she could either accurately represent her uncertainty ("I think prop. X is good, but I'm wrong about one in every five times I hold similar opinions"), or she could instead simply state her belief as if it were a fact.

The latter tactic can be seen as an attempt to open the Overton Window (the range of acceptable opinions) on an individual scale. In a world where Alice inflates her confidence while Bob accurately reflects his uncertainty, the median opening position in the debate is skewed in Alice's favor, and Bob will have to work harder to reclaim lost territory.

(Note that Alice might actually be more confident than Bob for good reasons, like having done more relevant research, or bad, like the Dunning-Kruger effect. For the purposes of this example, assume that both are equally well-informed.)

The problem with this tactic is that Bob has the same incentives as Alice, and the same ability to misrepresent his anti-X position. In other words, overconfidence a symmetric weapon, just as potent in the hands of your enemy as your own. Bob doesn't want to get wrong-footed, and so he is also inclined to project inflated confidence, at least in his opening gambit.

# Prisoner's Dilemmas

The above situation may sound unlikely, but there are a whole class of problems with similar properties in the field of game theory, the most notorious being the Prisoner's Dilemma. For simplicity, let's assume that a fair debate (in which neither side inflated their confidence) would be genuinely intractable, and so the only path to victory is through less honorable means. A table of the potential outcomes might look something like this:

|                             | Alice is uncertain    | Alice inflates confidence |
|-----------------------------|-----------------------|---------------------------|
| **Bob is uncertain**        | Productive stalemate  | Alice wins, Bob loses     |
| **Bob inflates confidence** | Alice loses, Bob wins | Unproductive stalemate    |

To explore this further, let's put some arbitrary points to the various scenarios to help rank the possible outcomes from Alice and Bob's perspective:

| Points | Scenario               |
|--------|------------------------|
| 5      | Win                    |
| 3      | Productive stalemate   |
| 1      | Unproductive stalemate |
| 0      | Loss                   |

Both Alice and Bob prefer a decisive victory for the reasons mentioned above, but would be reasonably happy with a productive stalemate, in which they both honestly present their views and learn from each other. They would be less happy to project inflated confidence, only to find that their opponent is doing the same, but would consider it even worse to lose outright.

Putting these points back into the original table helps to demonstrate why Prisoners Dilemma's are so pernicious:

|                             | Alice is uncertain | Alice inflates confidence |
|-----------------------------|--------------------|---------------------------|
| **Bob is uncertain**        | `A = 3; B = 3`     | `A = 5; B = 0`            |
| **Bob inflates confidence** | `A = 0; B = 5`     | `A = 1; B = 1`            |

Imagine things from Bob's perspective. Assuming he doesn't know what Alice will do, he can evaluate his options in either scenario. If Alice is honest (column 1), then he gets `3` points for reciprocating (row 1), but `5` points for inflating his own confidence (row 2). If, however, Alice inflates her confidence (column 2), he still gets `1` point for responding in kind, but `0` points for being honest. No matter what Alice does, Bob stands to gain more from projecting inflated confidence (or defecting, in game theory terminology) than honestly reflecting his uncertainty (cooperating).

This is especially tragic because, from a simple utilitarian perspective, the best option is mutual cooperation, which nets `3 + 3 = 6` total points, more than either "winning" scenario. But both Alice and Bob have individual incentives that push them to defect, leading to the worst overall outcome of `1 + 1 = 2` points.

# Potential solutions

If Bob knows that Alice is likely to defect, but prefers to end up in the utility-maximizing outcome, how can he effectively signal his intent (in a way that won't be confused for another underhanded debate tactic)? Or put another way, what's the best way to communicate to your debate opponent that they are insufficiently confused?

Off the top of my head, I can think of a few potential solutions:

- In CFAR's Double Crux model, both sides of the debate not only state their belief about X, but also identify the underlying (and ideally falsifiable) assumptions upon which that belief rests. E.g. "I believe in X, but this is based in part on my belief in Y. If it was shown that Y was wrong, it would undermine my belief in X." I think this is a neat concept, but I worry that it's vulnerable to the same kinds of strategic dishonesty that lead to issues in crux-less debates. CFAR anticipates this objection, and provides several tips in the "Pitfalls" section of the above writeup.
- Instead of looking for a Double Crux, an easier option might be to simply ask your opponent what they think is the single best argument against their position. I personally have an annoying habit of disagreeing with people until they hit on what I consider to be the "correct" objection to my claim, so this method would likely be effective if used against me, FYI. However, an adversarial opponent could still offer a weak objection, or refuse to play along entirely, again leaving us back where we started.
- Try to compare your confidence levels on unrelated topics. You may find that your opponent simply has a different internal calibration, which you can use to create a conversion factor for their claims regarding X.
- If possible, offer to place a bet (either hypothetical or real) on an empirical version of the question at hand. Even going through the motions of negotiating acceptable odds might be enough to break both sides out of their natural tendency towards overconfidence. Unfortunately, this is not always practical, and may actually be impossible for some of the most important debates, like those involving existential risk. YMMV.
- Maybe just say "I think you're being overconfident" out loud and see how that goes.  
- Do any the above while wearing [this t-shirt](https://www.redbubble.com/i/t-shirt/I-Cooperate-in-the-Prisoner-s-Dilemma-by-Lalaithion/10939446.NL9AC).

# Other variants

A special case of insufficient confusion arises when both sides are pro-X, but with varying degrees of confidence. If Alice has 80% credence in this belief, but Bob only has 51%, they may nominally prefer the same overall outcome, but still end up disagreeing about the specifics. Bob is in a tricky position because, if nothing else, it's linguistically difficult to project confidence in your uncertainty.

However, there are plenty of real-world examples where uncertainty seems to be the correct position. My favorite example is the [never-ending series of studies](https://fivethirtyeight.com/features/you-cant-trust-what-you-read-about-nutrition/) showing that coffee (or chocolate or wine) either causes or prevents cancer (each provoking a shamelessly amnesic news article). A more consequential example might be something like increasing the minimum wage, on which the available evidence seems genuinely confusing.

Don't want to say something that you don't believe in, even if for Overton advantage.

I find myself in Bob's position a lot (especially when X involves systemic changes to existing institutions), and so far I haven't found a great solution. For now, the metaphor I like to employ Chesterton's fence (though unfortunately, it's as helpful as it is obscure):

> In the matter of reforming things, as distinct from deforming them, there is one plain and simple principle; a principle which will probably be called a paradox. There exists in such a case a certain institution or law; let us say, for the sake of simplicity, a fence or gate erected across a road. The more modern type of reformer goes gaily up to it and says, "I don't see the use of this; let us clear it away." To which the more intelligent type of reformer will do well to answer: "If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it."
