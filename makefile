stop:
	docker stop $(shell docker ps -aq)

rm-all:
	docker rm $(shell docker ps -aq)

rm-all-images:
	docker rmi -f $(shell docker images -q)

nuke:
	make stop && make rm-all && make rm-all-images

up:
	docker-compose -p seedlings up

down:
	docker-compose down

build:
	docker-compose -p seedlings up --build

rebuild:
	make down && make build

enter-api:
	docker exec -it seedlings_api_1 /bin/bash

enter-frontend:
	docker exec -it seedlings_frontend_1 /bin/bash

enter-mongo-express:
	docker exec -it seedlings_mongo-express_1 /bin/bash
