make lint:
	npx eslint	.

install:
	npm ci

brain-games:
	node/bin/brain-games.js
	
brain-even:
	node/bin/brain-even.js

publish:
	npm publish --dry-run

brain-calc:
	node/bin/brain-calc.js

brain-gcd:
	node/bin/brain-gcd.js


