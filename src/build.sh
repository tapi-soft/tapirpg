#!/bin/sh

tsc --outDir ../client/js/ ./client.ts --out ../client/js/client.js
#cat ../client/js/client.js
tsc --outDir ../server/ ./server.ts --out ../server/server.js
#cat ../server/server.js
node ../server/server.js
