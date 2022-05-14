---
layout: post
title: Thing Obscurer
excerpt: Complicated Stuff Without Simple Words.
---

XKCD author Randall Munroe's [Thing Explainer](https://xkcd.com/thing-explainer/) used only the most common [ten hundred words](/assets/js/thing-obscurer/words.js) to simply explain complicated topics. [Nydwracu's Fnords](https://slatestarcodex.com/2014/05/24/nydwracus-fnords/) did the opposite, removing everything non-essential and thereby exposing the underlying tone.

I like both of these ideas, so let's combine them. Copy/paste some text into the box, and below you'll see the same text with the most common "ten hundred" words (and some punctuation) removed.

<!--more-->
* table of contents
{: toc }

# Input text

<script src="/assets/js/thing-obscurer/words.js"></script>
<script language="javascript">
    var words;

    // parse words from | separated string to array
    words = __WORDS.split("|");

    // define function
    function obscure() {
        // read text in editor
        var text = document.getElementById("editor").value;

        // replace newlines with space
        text = text.replace(new RegExp("\n", "g"), " ");

        // remove all punctuation
        text = text.replace(new RegExp("[.,\/#!$%\^&\*;:{}=_`~()]", "g"), "");

        // remove all words in text that are also in words
        for (var i = 0; i < words.length; i++) {
            text = text.replace(new RegExp("\\b" + words[i] + "\\b", "gi"), "");
        }

        // write text to output box
        document.getElementById("output").innerText = text;
    }

    // run obscure after page is entirely loaded
    window.onload = obscure;
</script>

<div style="display: block;">
<textarea id="editor" name="editor" style="width: 100%; height: 300px;" onchange="obscure()">
Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.
</textarea>
</div>

# Result

<div id="output" style="padding: 20px; background-color: #f5f5f5;">
</div>

# Why do this?

After taking a lengthy break from social media sites like Twitter and mainstream news outlets like The New York Times, I'm finding that I no longer have the stomach for their brand of emotionally/politically charged language (if I ever did).

My (literal) mental model is that of a machine, pretty often functional, but sometimes on the fritz (in which state it's worse than useless). There's a large control panel with a bunch of knobs and dials, and through a non-trivial amount of effort, I've found a combination of settings that makes everything run smoothly enough.

[![joy.jpg]({{ site.baseurl }}/assets/images/thing-obscurer/joy.jpg "joy"){: .center-image }]({{ site.baseurl }}/assets/images/thing-obscurer/joy.jpg)

But when I read an article link this recent [Current Affairs piece](https://www.currentaffairs.org/2021/07/the-dangerous-ideas-of-longtermism-and-existential-risk) on longtermism, it's the metaphorical equivalent of someone reaching in and haphazardly mashing a bunch of knobs and dials.

[![anger.jpg]({{ site.baseurl }}/assets/images/thing-obscurer/anger.jpg "anger"){: .center-image }]({{ site.baseurl }}/assets/images/thing-obscurer/anger.jpg)

This is not good! And it can sometimes take me a while to reach a new equilibrium again.

I think using something like (or hopefully better than) the Thing Obscurer to generate a Fnords version of a thread/article might at least help make the underlying tone explicit. Which, in turn, could allow people like me to identify (and avoid) authors and sources that skew inflammatory.
