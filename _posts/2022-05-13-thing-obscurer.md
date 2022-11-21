---
layout: post
title: Thing Obscurer
excerpt: Complicated Stuff Without Simple Words.
hidden: true
---

XKCD author Randall Munroe's [Thing Explainer](https://xkcd.com/thing-explainer/) used only the most common [ten hundred words](/assets/js/thing-obscurer/words.js) to simply explain complicated topics. [Nydwracu's Fnords](https://slatestarcodex.com/2014/05/24/nydwracus-fnords/) did nearly the opposite, removing everything non-essential and clearly exposing the underlying message.

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

After taking a lengthy break from social media sites like Twitter and mainstream news outlets like The New York Times, I'm finding that I no longer have the stomach for their brand of emotionally/politically charged language (if I ever did). And this is not to mention their less sophisticated cousins like TikTok and CNN.

My (literal) mental model is that of a machine, pretty often functional, but sometimes on the fritz (in which state it's worse than useless). There's a large control panel with a bunch of knobs and dials, and through a non-trivial amount of effort, I've found a combination of settings that makes everything run smoothly enough.

[![joy.jpg]({{ site.baseurl }}/assets/images/thing-obscurer/joy.jpg "joy"){: .center-image }]({{ site.baseurl }}/assets/images/thing-obscurer/joy.jpg)

But when I read an article that uses charged language, it's the metaphorical equivalent of someone reaching in and haphazardly mashing a bunch of knobs and dials.

[![anger.jpg]({{ site.baseurl }}/assets/images/thing-obscurer/anger.jpg "anger"){: .center-image }]({{ site.baseurl }}/assets/images/thing-obscurer/anger.jpg)

This is not good! And it can sometimes take me a while to reach a new equilibrium again.

As an example, take this recent [Politico piece](https://www.politico.com/news/magazine/2022/05/12/carrick-flynn-save-world-congress-00031959) on Oregon Congressional candidate Carrick Flynn, which was my proximal motivation to write this post. The Thing Obscurer analysis of the opening section looks like:

> Flynn contend deadly robots type boogeyman donor Sam Bankman-Fried eccentric 30-- cryptocurrency billionaire chief donor PAC 10 million Flynn’s campaign Bankman-Fried’s support Flynn baffled observers energized Flynn’s opponents cast billionaire’s intervention shady carpetbagging crypto-baron influence cryptocurrency regulation Washington February rival campaign manager denounced Bankman-Fried “ tax-dodging billionaire”

There's nothing _wrong_ with this per-se, in the sense that the author is simply reporting on what Flynn and his opponents have said. But it's also akin to [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt), via the uncritical use/repetition of charged language like `[deadly, boogeyman, baffled, shady, carbetbagging, baron, denounced, tax-dodging]`. Words like this are meant to emotionally _engage_ (and maybe even _entertain_), but not necessarily _inform_ the reader. And when it comes to news, I mostly just want to be informed.

**Edit 2022-11-21: This example obviously did not age well, but the general point remains (I think).**

# Improvements

Thing Obscurer obviously doesn't work very well in its current form, but I do think something _like_ it might, ironically, help clarify tone/intent, and allow people like me to identify (and selectively avoid) needlessly inflammatory authors and sources. Some thoughts on potential improvements/alternatives:

- As it stands, Thing Obscurer does not conform to the "iron law" of ~13% summary length suggested by the SSC post. This could be achieved by reducing the XKCD word list a bit, but doing so would probably make the results even less comprehensible.
- There are already [ML summary algorithms](https://openai.com/blog/learning-to-summarize-with-human-feedback/) that work reasonably well. Something similar could probably be trained to distill articles into Fnords, or even directly remove/reword inflammatory language.
- However, sometimes emotional content is essential to the message, and the act of removing/rewording may risk discarding the core content. But even when this is true, our capacity for emotional engagement is not infinite, and we should at least choose our battles wisely.