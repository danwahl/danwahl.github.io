import re
import json

if __name__ == '__main__':
	p = re.compile('^(?=.{8}$)[a-zA-Z]+$') 
	
	words = []
	with open('/usr/share/dict/words', 'r') as f:
		for w in f:
			m = p.match(w)
			if m:
				words.append(m.group())
	
	with open('words.json', 'w') as f:
		json.dump(words, f)