#!/usr/bin/env bash

echo "Starting tests"

# These tests mostly check for invalid rules or syntax errors
eslint -c config/es5.js config/es5.js
eslint -c config/node.js config/node.js

echo "All tests passed"
