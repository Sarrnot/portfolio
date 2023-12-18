setup:
	cp -n docker-compose.example.yml docker-compose.yml
	cp -n .env.example .env
	cp -n monitoring/.env.example monitoring/.env

up:
	docker compose up -d --build

down:
	docker compose down -t 1