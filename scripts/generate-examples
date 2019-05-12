#!/bin/sh

THEMES="default flatly slate cyborg streak"

AGLIO_CMD=./bin/aglio.js

mkdir -p examples
for theme in $THEMES; do
    (echo "Generating examples/$theme.html";
    "$AGLIO_CMD" -i ./example.apib -o "examples/$theme.html" --theme-variables "$theme" && \
        echo "Generating examples/$theme-triple.html" && \
		"$AGLIO_CMD" -i ./example.apib -o "examples/$theme-triple.html" --theme-variables "$theme" --theme-template triple) &
done

wait
