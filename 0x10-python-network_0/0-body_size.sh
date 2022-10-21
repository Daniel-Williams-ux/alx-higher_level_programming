#!/bin/bash
# Get the size of the HTTP response
curl -s "$1" | wc -c
