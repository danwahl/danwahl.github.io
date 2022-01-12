---
layout: post
title: Mono Speaking Aid
excerpt: A simple text-to-speech web app so I can talk to people while I have mono.
redirect_from: /speaking-aid
---

I was recently diagnosed with [Mononucleosis](https://en.wikipedia.org/wiki/Infectious_mononucleosis) (apparently [adults](https://en.wikipedia.org/wiki/Infectious_mononucleosis#Older_adults) can get it too), and it has not been a pleasant experience. The worst of the symptoms has been a swollen, sore, and mostly inoperable throat, which has made it nearly impossible speak above a whisper.

After searching around for a usable text-to-speech interface, and finding a lot of [incomplete](https://codepen.io/anon/pen/GOrbWY) or [costly](https://www.ibm.com/watson/services/text-to-speech/) options, I decided it would be easier to just make a simple app that did exactly what I want. Here's the final product, but fair warning, this was coded in a semi-delirious state between naps, and is probably not my best work.

<!--more-->
* table of contents
{: toc }

# The prototype

Just type into the box and press enter. The text will be read aloud and stored in the space below, where it can be clicked and read again.

<iframe src="https://bl.ocks.org/danwahl/raw/b5627fb24c137e8e8a8c7e3703c2e5af/" marginwidth="0" marginheight="0" width="100%" height="400" scrolling="yes"></iframe>

The background will turn <span style="color: green;">green</span> to indicate that it's speaking. Check your computer/phone audio settings if you don't hear anything.

Bookmarkable version [here](https://bl.ocks.org/danwahl/raw/b5627fb24c137e8e8a8c7e3703c2e5af/), source on GitHub [here](https://gist.github.com/danwahl/b5627fb24c137e8e8a8c7e3703c2e5af).


# Some notes

If you're looking for the opposite functionality, check out my [Web Speech Hearing Aid](/hearing-aid) post from last year. I might revisit this to add options for voice selection and speech rate, but the defaults seem to work well enough for now.
