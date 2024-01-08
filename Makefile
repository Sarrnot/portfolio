setup:
	cp -n docker-compose.example.yml docker-compose.yml
	cp -n .env.example .env
	cp -n monitoring/.env.example monitoring/.env
	cp -n web/.env.example web/.env
	docker compose run shared ./docker/scripts/prepare.sh
	docker compose run monitoring ./docker/scripts/prepare.sh

up:
	docker compose up -d --build

down:
	docker compose down -t 1