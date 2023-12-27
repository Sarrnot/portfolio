#!/bin/bash

if [ "${ENV_MODE}" = "development" ]; then
    echo "Watching for changes";
    npm run dev;
fi
