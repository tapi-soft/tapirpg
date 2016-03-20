#!/bin/sh

tsc --outDir ../client/js/ ./client.ts
cat ../client/js/client.js
