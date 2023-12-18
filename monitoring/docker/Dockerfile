FROM node:20

WORKDIR /code/monitoring

ENTRYPOINT \
    echo "Running 'npm install'"; \
    npm install; \
    echo "Building script"; \
    npm run build; \
    if [ "${ENV_MODE}" = "production" ]; then \
        echo "Running script (production)"; \
        npm run start; \
    elif [ "${ENV_MODE}" = "development" ]; then\
        echo "Creating npm link for libs"; \
        cd /code/libs && npm link; \
        cd /code/monitoring && npm link libs; \
        echo "Running script and watching for changes"; \
        npm run dev & npm run start-dev; \
    else \
        echo "Missing or invalid ENV_MODE variable."; \
    fi
