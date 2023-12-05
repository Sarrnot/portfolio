FROM node:20

WORKDIR /code/web

ENTRYPOINT \
    echo "Running 'npm install'"; \
    npm install; \
    if [ "${ENV_MODE}" = "production" ]; then \
    echo "Running production server"; \
    npm run build; \
    npm run start; \
    elif [ "${ENV_MODE}" = "development" ]; then\
    echo "Running development server"; \
    npm run dev; \
    else \
    echo "Missing or invalid ENV_MODE variable."; \
    fi
