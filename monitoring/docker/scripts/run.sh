#!/bin/bash

if [ "${ENV_MODE}" = "production" ]; then
    echo "Running script";
    npm run start;
elif [ "${ENV_MODE}" = "development" ]; then
    echo "Creating npm link for shared";
    cd /code/shared && npm link;
    cd /code/monitoring && npm link shared;
    echo "Running script and watching for changes";
    npm run dev & npm run start-dev;
else
    echo "Missing or invalid ENV_MODE variable.";
fi
