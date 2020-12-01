---
layout: post
title: Words that are like pleasing
excerpt: >-
  A computer solves in two seconds a problem I've been working on for two
  decades.
redirect_from: /pleasing-words
---

For most of my life I've had the habit of tapping my fingers when I'm thinking/nervous/fidgety, which is *a lot*. Besides playing along to whatever song is in my head, I've also gone through a few phases exploring different tapping sequences.

The first I can remember is from elementary school, trying to find the optimal sequence one-handed taps (if you're curious, it's `index - ring - pinky - middle - thumb`). Then I must have learned some math, because I have a pretty clear memory of working through some modular division in one of my (many, painful) childhood dentist appointments.

For the last few decades(!), maybe since I started typing, I've been on a quest to find words that can be spelled using each finger only once. And until earlier today, using trial and error, I had only ever found *one*: `pleasing`.

<!--more-->
* table of contents
{: toc }

# The code

In retrospect, this is a problem that I could have solved at any time since learning to program in college. But my quest, the origins of which predate that knowledge, has somehow remained locked in its own domain, even as I've tried to solve [every](/fairvote-sim) [other](/stochastic-altruism-2016) [problem](/hearing-aid) [with](/global-warming) [code](/speaking-aid). The challenge I put to myself today was not just to find a solution, but to do it with a [regex](http://regex.info/blog/2006-09-15/247) one-liner.

First, I played around with some Python, using the Unix [words](https://en.wikipedia.org/wiki/Words_(Unix)) file:

```python
import re

if __name__ == '__main__':
    # https://stackoverflow.com/a/3533526/4938355
    p = re.compile('^(?=.{8}$)(?=.*[aqz])(?=.*[swx])(?=.*[de])(?=.*[bcfgrtv])(?=.*[hjmnuy])(?=.*[ik])(?=.*[lo])(?=.*[p]).+$')

    words = open('/usr/share/dict/words', 'r')
    for w in words:
        m = p.match(w)
        if m:
            print m.group()
```

Then, the one-liner in Perl:

```perl
perl -ne 'while(/^(?=.{8}$)(?=.*[aqz])(?=.*[swx])(?=.*[de])(?=.*[bcfgrtv])(?=.*[hjmnuy])(?=.*[ik])(?=.*[lo])(?=.*[p]).+$/g){print "$&\n";}' /usr/share/dict/words
```

# The words

And finally, I present the definitive list of words that can be typed on a QWERTY keyboard using each finger only once:

``` text
biplanes
canopies
elapsing
esophagi
harelips
lifespan
misplace
palmiest
panelist
pelicans
plainest
plaudits
pleasing
poniards
pralines
```

This must be how Turing felt when he cracked the Enigma. On to the [next tapping challenge](https://www.youtube.com/watch?v=AbndgwfG22k)...

# Addendum

After showing this to a few coworkers, I was surprised to learn that people use different fingers for certain keys. Specifically, there seems to be a debate about whether the left index or middle finger is responsible for `c`.

Even though the [answer is obvious](https://www.quora.com/What-finger-should-I-use-to-type-C), I figured it would be easy enough to implement the search in JavaScript. Two (needlessly complicated) hours of programming later...

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js" integrity="sha512-/DXTXr6nQodMUiq+IUJYCt2PPOUjrHJ9wFrqpJ3XkgPNOZVfMok7cRw6CSxyCQxXn6ozlESsSh1/sMCTF1rL/g==" crossorigin="anonymous"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
	var words;

	// load words
	d3.json("/assets/js/pleasing-words/words.json", function(data) {
		words = data;
		$("#submit").prop("disabled", false);
		testMatch();
	});

	// test for matches
	function testMatch() {
		// clear results
		$("#results").html("");

		// get values from teext boxes
		var lp = $("#lp").val();
		var lr = $("#lr").val();
		var lm = $("#lm").val();
		var li = $("#li").val();
		var ri = $("#ri").val();
		var rm = $("#rm").val();
		var rr = $("#rr").val();
		var rp = $("#rp").val();

		// create regex
		var re = new RegExp("^(?=.{8}$)(?=.*[" + lp + "])(?=.*[" + lr + "])(?=.*[" + lm + "])(?=.*[" + li + "])(?=.*[" + ri + "])(?=.*[" + rm + "])(?=.*[" + rr + "])(?=.*[" + rp + "]).+$")
		//console.log(re)

		// iterate through words, find match
		words.forEach(function(word) {
			// check for match
			match = re.exec(word);

			// add to list
			if(match) {
				//console.log(match);
				$("#results").append(match + "\n");
			}
		});
	}
</script>

<form>
  <div class="form-row" style="margin-bottom: 15px;">
    <div class="col">
      <input type="text" id="lp" class="form-control" value="aqz">
    </div>
    <div class="col">
      <input type="text" id="lr" class="form-control" value="swx">
    </div>
    <div class="col">
      <input type="text" id="lm" class="form-control" value="cde">
    </div>
    <div class="col">
      <input type="text" id="li" class="form-control" value="bfgrtv">
    </div>
  </div>
  <div class="form-row" style="margin-bottom: 15px;">
    <div class="col">
      <input type="text" id="ri" class="form-control" value="hjmnuy">
    </div>
    <div class="col">
      <input type="text" id="rm" class="form-control" value="ik">
    </div>
    <div class="col">
      <input type="text" id="rr" class="form-control" value="lo">
    </div>
    <div class="col">
      <input type="text" id="rp" class="form-control" value="p">
    </div>
  </div>
  <button type="button" id="submit" class="btn btn-primary" onClick="testMatch()" disabled>Submit</button>
</form>

<div class="language-text highlighter-rouge"><div class="highlight"><pre class="highlight"><code id="results">
</code></pre></div></div>
