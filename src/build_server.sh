#!/bin/sh

tsc --outDir ../server/ ./server.ts
node ../server/server.js
