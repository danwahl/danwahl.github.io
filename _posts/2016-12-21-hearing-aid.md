---
layout: post
title: Web Speech Hearing Aid
excerpt: A speech-to-text hearing aid for talking to your older relatives.
redirect_from: /hearing-aid
---

My grandpa Frank recently celebrated his 100th birthday, and while he's still in great shape for a centenarian, his hearing isn't what it used to be. Despite wearing two hearing aids (turned up to eleven), he has trouble following most conversations, and sometimes struggles to make sense of things said to (shouted at) him directly.

He is, however, still pretty sharp, and his eyesight works reasonably well (with large print). So while I had some free time at home over the holidays, I built a little web app to help us communicate better.

<!--more-->
* table of contents
{: toc }

# The prototype

Just click anywhere in the box below and start talking (you'll probably be asked to [enable the microphone](https://support.google.com/chrome/answer/2693767?hl=en) first):

<iframe src="https://bl.ocks.org/danwahl/raw/dcc97e392481b93f6368eb8053bb5dd2/" marginwidth="0" marginheight="0" width="100%" height="400" scrolling="yes"></iframe>

The background will turn <span style="color: red;">red</span> to indicate that it's recording. Another click will pause input so that it's easy record only one side of the conversation.

Bookmarkable version [here](https://bl.ocks.org/danwahl/raw/dcc97e392481b93f6368eb8053bb5dd2/), source on GitHub [here](https://gist.github.com/danwahl/dcc97e392481b93f6368eb8053bb5dd2).

# Some notes

I used the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi.html), which is damn cool. It's almost suspiciously easy to get something like this working (the entire source code for this prototype clocks in at about 150 lines). There is one **major** issue, though: the ```isFinal``` tag in the ```onresult()``` callback is *not* populated correctly in the Android version of Chrome (when set to record continuously). From the API documentation:

{: .blockquote}
> The final boolean must be set to true if this is the final time the speech service will return this particular index value. If the value is false, then this represents an interim result that could still be changed.

However, the value is set to ```true``` for all results, including interm ones. This is apparently a [known](https://bugs.chromium.org/p/chromium/issues/detail?id=457068) [issue](https://stackoverflow.com/questions/35112561/speech-recognition-api-duplicated-phrases-on-android), and will hopefully be resolved eventually, but for now it means that the app only records continuously on the desktop.
