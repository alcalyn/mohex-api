run: install start logs

start:
	docker compose up -d

stop:
	docker compose down

restart: stop start logs

install:
	docker compose run api bash -c "yarn install"

logs:
	docker compose logs -f

bash:
	docker compose run api bash
