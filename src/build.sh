#!/bin/sh

tsc --outDir ../client/js/ ./client.ts
#cat ../client/js/client.js
tsc --outDir ../server/ ./server.ts
#cat ../server/server.js
node ../server/server.js
