---
layout: post
title: SSC Podcast (and Unsong Audiobook)
excerpt: Automated readings of Slate Star Codex and Unsong, using Amazon Polly.
---

I've been a fan of Scott Alexander's [Slate Star Codex](https://slatestarcodex.com/) (SSC) for several years, and have already written [more](/blog/slate-star-codex) [than](/blog/lightfoot-prospiracy) [a few](/blog/chicago-budget) posts referencing his work. Other readers have been [similarly](https://guzey.com/favorite/slate-star-codex/) [inspired](https://www.lesswrong.com/posts/vwqLfDfsHmiavFAGP/the-library-of-scott-alexandria), and a few have even taken the time to produce [audio versions](https://sscpodcast.libsyn.com/) of his more recent entries. As an avid podcast listener, I've found these to be an extremely useful way to keep up-to-date with SSC in the context of my regular media workflow.

Unfortunately, audio coverage for older posts is somewhat sparse, and the same is true of his ([wonderful](https://www.scottaaronson.com/blog/?p=3259)) serial novel [Unsong](http://unsongbook.com/), with one [ongoing effort](https://unsong.libsyn.com/) currently only about halfway finished. That's why, late last year, I started a project to convert his entire back catalog into audio using Amazon Polly.

<!--more-->
* table of contents
{: toc }

# SSC Podcast

[![ssc-podcast]({{ site.baseurl }}/ssc-podcast/img/ssc-podcast.png "ssc-podcast"){: .center-image }]({{ site.baseurl }}/ssc-podcast/)

<cite>Just some quick artwork I made for the podcast feed. For an an actual SSC ebook, see [here](https://github.com/georgjaehnig/webpages-to-ebook#examples).</cite>

Having previously worked with text-to-speech (TTS) software to create a [web app for conversing while I had mono](/blog/speaking-aid), I was surprised by just how much the technology has improved in recent years. After testing the available options, I decided to use [Amazon Polly](https://aws.amazon.com/polly/), both because of its generous free tier, and also the [Neural TTS engine](https://docs.aws.amazon.com/polly/latest/dg/NTTS-main.html), which produces incredibly lifelike cadence and intonation.

Polly has several limitations, however. The first is that the API can only process several thousand characters at a time, meaning the user is responsible for chunking the raw text, and concatenating the resulting audio files. Also, although the [1 million character monthly limit](https://aws.amazon.com/polly/pricing/?nc=sn&loc=4) _sounds_ like a lot, that didn't stop me from running up a $250 AWS bill on my first attempt...

But, after some scraping and fine tuning, I eventually got a workable prototype and processed the entire corpus of SSC posts to date. The GitHub repo, which contains the scripts, audio files, and Jekyll-based web interface used to generate the podcast feed, can be found [here](https://github.com/danwahl/ssc-podcast).

I also run a local server that periodically scans the [SSC Archives](https://slatestarcodex.com/archives/) and automatically generates new episodes as posts are published. To subscribe, simply add the following link to your podcast app:

[https://danwahl.net/ssc-podcast/feed.xml](https://danwahl.net/ssc-podcast/feed.xml)

Note: there are still a few bugs that cause occasional issues, mostly related to novel (or sometimes broken) HTML formatting in Scott's posts. I plan to go through and fix this at some point, but PRs are also welcome!

# Unsong Audiobook

[![unsong-audiobook]({{ site.baseurl }}/unsong-audiobook/img/unsong-audiobook.png "unsong-audiobook"){: .center-image }]({{ site.baseurl }}/unsong-audiobook/)

<cite>Just some quick artwork I made for the audiobook feed. For an an actual Unsong ebook, see [here](https://github.com/moorederodeo/Unsong-In-Ebook-Format/releases/).</cite>

Using a fork of the SSC Podcast repo (with a few minor modifications), I also generated an audiobook version of Unsong. Although there are some predictable issues with the Names of God, and Uriel occasionally speaks in acronyms, I think it turned out nicely overall. The GitHub repo is [here](https://github.com/danwahl/unsong-audiobook), and you can subscribe on your podcast app using the following link:

[https://danwahl.net/unsong-audiobook/feed.xml](https://danwahl.net/unsong-audiobook/feed.xml)
