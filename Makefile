setup:
	cp -n docker-compose.example.yml docker-compose.yml

up:
	docker compose up -d --build

up-local:
	docker compose --env-file ./.env.local up -d --build 

down:
	docker compose down -t 1