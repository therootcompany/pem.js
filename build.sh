#!/bin/bash

# TODO convert to JS
cat browser/native.js parser.js packer.js > all.tmp.js
sed -i '' '/use strict/d' all.tmp.js
sed -i '' '/require/d' all.tmp.js
sed -i '' '/exports/d' all.tmp.js
echo ';(function () {' > all.js
echo "'use strict';" >> all.js
echo "var PEM = window.PEM = {};" >> all.js
echo "var Enc = {};" >> all.js
cat all.tmp.js >> all.js
rm all.tmp.js
echo '}());' >> all.js

mv all.js dist/pem.all.js
uglifyjs dist/pem.all.js > dist/pem.all.min.js
