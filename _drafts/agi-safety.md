---
layout: post
title: Betting against the end of the world
excerpt: Five reasons I'm not working on AGI Safety (but glad somebody is).
---

It's trivially easy to bet against the end of the world: you win in all the scenarios where you survive. Still, I find myself wanting to bet against a _specific_ doomsday hypothesis: that the world is [about to end](https://www.lesswrong.com/posts/j9Q8bRmwCgXRYAgcJ/miri-announces-new-death-with-dignity-strategy) due to the creation of misaligned, superintelligent AI.

I say this despite being sympathetic to the background EA/rationalist/longtermist worldview, and after spending ~40 hours [reading](https://www.goodreads.com/en/book/show/44767248)/thinking/chatting about the topic, most recently as part of the [AGI Safety Fundamentals](https://www.eacambridge.org/agi-safety-fundamentals) course put on by EA Cambridge.

In fact, this post represents a sort of "final project" for that course, though I'm sure the organizers expected something more... _productive_ out of their attendees. Nevertheless, I hope others find this post useful, if only as an artifact of what people like me think about when first exposed to the topic.

Below I'll lay out five reasons that I'm skeptical of the (current formulation of the) AGI Safety problem, and one reason that I'm glad that smart people are working on it regardless.

<!--more-->
* table of contents
{: toc }

# 1. Greater concern for non-AGI systems

AGI Safety has recently come under sharper focus due to an influx of funding from billionaires like [Sam Bankman-Fried](https://ftxfuturefund.org/), with Anthropic alone raising upwards of [500 million dollars](https://www.anthropic.com/news/announcement). This has brought with it a fresh [round of criticism](https://twitter.com/timnitGebru/status/1520532465474883584), especially from those in the "AI Ethics" community (who use a social justice lens to investigate the potential harms of algorithmic bias).

In my model of the AGI Safety community, the response to this is something like "yes it's likely that current models could cause harm to the already-vulnerable, and that is __bad__, but another concern is the chance that future models may pose an existential risk to everyone, and that is __much worse__."

But my actual intuition is that there's a third category of AI risk that is somewhere between Ethics and Safety. The thing that viscerally scares me the most is Stuart Russell's imagined [Slaughterbots](https://en.wikipedia.org/wiki/Slaughterbots), semi-autonomous drones with the capacity to intelligently target individuals, which could be built by anyone with an engineering degree, with off-the-shelf components and relative ease:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9CO6M2HsoIA" frameborder="0" allowfullscreen></iframe>

I consider it a minor miracle that we (in the US) haven't experienced a terrorist attack already using this type of technology, and I don't think we're ready for the negative societal consequences that will arise if/when we do. This is part of the reason why, as a robotics engineer, I'm excited about autonomous weapons _defense_, and have been thinking about ways to contribute before things get bad.

# 2. Aligned, but who with?

Alignment, or the idea that we want to make AGI that is deterministically bound to work in our interests, is an _interesting_ problem that grounds out in some very deep, open philosophical questions. But as the Slaughterbots video demonstrates, there are other, more fundamental issues that we would encounter even if we were handed a properly "aligned" AGI system tomorrow.

One is that individual humans are not aligned with the interests of _humanity_. And there's no academic institution, or democratically elected government, or United Nations committee etc. that I would trust to do the right thing with a real genie and infinite wishes. (In fairness to the AGI Safety Fundamentals course, there was an entirely separate [governance track](https://www.eacambridge.org/ai-governance-curriculum) on this issue).

This is in part because there's no clear consensus on what "doing the right thing" even means. Among moral philosophers, who have devoted their professional lives to pondering the problem, surveys indicate a [roughly even split](https://philpapers.org/surveys/results.pl) between between deontology, virtue ethics, consequentialism, and _other_ (and that's not to even mention our political and religious differences).

Even worse, individual humans aren't even aligned with _themselves_. How can I expect someone else to direct an AGI to perform an action that benefits everyone when _I'm_ often wrong about which actions benefit _me_?

I should admit that my "secret" hope is that, against all odds (a  Yudowskian "miracle"), the AGI that we eventually create will simply do Utilitarian thing, and maximize the happiness (and minimize the suffering) of all sentient beings, _regardless of what we ask of it_ (maybe this _is_ what people mean by "alignment"?). But even though I have no idea how to model this probability, there are reasons to suspect it might be depressingly low.

# 3. Orthogonality skepticism

A key pillar of the AGI Safety argument is the [Orthogonality Thesis](https://www.lesswrong.com/tag/orthogonality-thesis), which roughly posits that increases in general intelligence are uncorrelated with the types of goals that intelligent systems could have. If true, it means that, despite my aforementioned hope, we can't rely on sufficiently advanced AI to "do the right thing" (whatever that is) by default.

This would be a bummer, but is there a strong reason to believe it's correct? Instead of writing what I planned for this section, I'll instead just link to a great [EA Forum post](https://forum.effectivealtruism.org/posts/kCAcrjvXDt2evMpBz/a-tale-of-2-75-orthogonality-theses) on the topic, which separates the Orthogonality Thesis out into several  theses with increasingly broad claims about the nature of intelligence:

> The motte (the trivially defensible position) is the claim that it is theoretically possible to pair almost any motivation set with high intelligence and that AI will therefore not necessarily be benign or human-friendly.
> The inner bailey (a nontrivial but plausible position with which it’s equivocated) is the claim that there’s a substantial chance that AI will be unfriendly and non-benign, and that caution is wise until we can be very confident that it won't.
> The outer bailey (a still less defensible position with which both are also equivocated) is the claim that we should expect almost no relationship, if any, between intelligence and motivations, and therefore that AI alignment is extremely unlikely.

My own intuition that, while it seems theoretically possible that AGI systems could adopt random and/or harmful goals, I'm skeptical that they will tend to do so by default. More likely, I think, is that increasingly intelligent systems will tend to adopt goals that, while potentially _weird or counterintuitive_, are nevertheless more predictable than what's implied by stronger versions of the Orthogonality Thesis.

# 4. Dangerous mesa-optimizers seem unlikely

From Orthoganlity, AGI Safety proponents often proceed by [telling a story](https://www.gwern.net/fiction/Clippy) demonstrating how things might go wrong. One widely used plot device is [deceptively aligned mesa-optimizers](https://astralcodexten.substack.com/p/deceptively-aligned-mesa-optimizers), or the idea that an advanced system might develop its own (weird or counterintuitive) "inner" goal, but nevertheless continue to perform well on the "outer" goal during training, since that gives it the best chance of being "released."

This is part of a larger set of actions that are [instrumentally convergent](https://en.wikipedia.org/wiki/Instrumental_convergence) (i.e. we would expect all sufficiently intelligent, goal-oriented beings to find them useful), of which the main themes are things like "seek power" and "eliminate the competition."

I certainly believe that something like this mesa-optimizer story _could_ happen, but how plausible is it? To tell a slightly different story: it seems like AGI which has its _own_ "inner" goal but is also _aware_ of the "outer" training goal (at least enough to be deceptive) is, by definition, now also aware of the concept of _goals_.

One claim about instrumental convergence is that such systems are likely to protect their "inner" goal from changing (since that would result in large expected losses, on the original goal's terms). But might they instead decide to change that goal to something much easier to achieve (which, after one timestep of loss during the change, could result in large expected _gains_, on the new goal's terms)? In this story, the AGI does something akin to [wireheading](https://www.lesswrong.com/tag/wireheading) in the moments after it becomes aware that other potential goals exist.

The fact that this idea might seem repugnant to _us_ (would you trade in your most cherished desires simply because the alternatives were easier to enact?) strikes me as anthropomorphic bias, and not strong evidence against the same reasoning appealing to an AGI (and a wireheaded AGI might be dangerous in different ways).

(And to be clear, I'm not claiming that my wireheading story is any more plausible than a given alternative, just that it's not obvious to me why _any_ coherent story is more likely than another to represent underlying facts about intelligence.)

# 5. Shallow vs. deep problems

But, you might be asking, what about the incredible recent advances in AI systems that [play chess](https://en.wikipedia.org/wiki/AlphaZero), [compose poetry](https://en.wikipedia.org/wiki/GPT-3), [render fantastical landscapes](https://openai.com/dall-e-2/), etc.? Isn't all this evidence that, despite your misgivings, these systems seem to be improving at an alarmingly fast rate, and true AGI must be just around the corner?

Well, I've been as impressed as everyone else by the remarkable progress that has been made in the last few years, but I suggest we employ a different reference frame when judging our proximity to _general_ superhuman capabilities. Instead of seeing all these advances as moving us one step closer to AGI (doom), we could instead see modern AI techniques as cleaving nature at a new joint (one that may sit in middle of a cognitive blind spot).

For example: before simple calculators, human labor was an integral part of any attempt to [crunch numbers](https://youtu.be/DmfxIhmGPP4). Before computers, human labor was an integral part of any attempt to [manipulate data](https://en.wikipedia.org/wiki/Hidden_Figures). At each step, a certain portion of the intellectual burden was offloaded from humans and onto machines, but the "core smarts" remained squarely within the human domain.

Now, with modern AI techniques, we're once again presented with a new category of "machine" that exceeds human capabilities in some domains. But it's still unclear whether we're in an entirely new paradigm, and AGI is about to offload _all_ remaining burdens (for better or worse), or if recent advances instead mark a new calculator/computer revolution.

I think there's at least some evidence to indicate that we're still in the latter category, and each new highly advanced algorithm that achieves superhuman performance in a specific domain _without_ becoming generally capable should update us [away from worrying about AGI](https://www.overcomingbias.com/2022/05/foom-update.html), not towards it. My proposed alternative explanation is that we're in the process of discovering some new facet of intelligence (call it "shallow pattern matching"), more similar to number crunching and data manipulation than AGI. We initially bundle these into the "what makes humans special" category, but come to realize that they are separable and, by themselves, insufficient for true general ("deep") intelligence.

As an aside, one thing that is deeply weird to me about the "machine learning revolution" is just how counterintuitive it all is. Things that I consider hard like chess are "solved" _instantly_, while trivially easy tasks like driving a car remain stubbornly intractable. This is what I meant above by "cognitive blind spot," and in some very fuzzy way it also feels like evidence against impending AGI. I find it difficult to trust any novel predictions when I can't even _name_ the "core smarts" that make driving easier than chess, and (for the moment) remain uniquely human.

# All that being said

One [official account](https://www.osti.gov/opennet/manhattan-project-history/Events/1945/trinity.htm) of the Manhattan Project offers the following anecdote, which takes place in the minutes before the first large-scale nuclear test:

> To break the tension, Fermi began offering anyone listening a wager on "whether or not the bomb would ignite the atmosphere, and if so, whether it would merely destroy New Mexico or destroy the world." Oppenheimer himself had bet ten dollars against George Kistiakowsky's entire month's pay that the bomb would not work at all.  Meanwhile, Edward Teller was making everyone nervous by applying liberal amounts of sunscreen in the pre-dawn darkness and offering to pass it around.

Even assuming that this was Fermi's idea of a joke, it still brings us back to the original question: how exactly should we bet on(/against) the end of the world?

When I take a step back and think about the objections I raised above, __even if they are reasonable__ (a big "if"), they don't constitute a general argument against AGI Safety work, for the basic reason that, when talking about _existential_ risks (like atmospheric ignition), even small probabilities of failure are unacceptably high. Insofar as I'm worried about AGI Safety, it's not because I think doom is _likely_, just that it is _too likely_.

And so, being mindful of [Pascal's Mugging](https://www.givewell.org/modeling-extreme-model-uncertainty), long feedback loops, and the [risk of fanaticism](https://www.currentaffairs.org/2021/07/the-dangerous-ideas-of-longtermism-and-existential-risk) etc., I still rest a bit easier knowing that a few smart (and now very well-funded) people are on the case.