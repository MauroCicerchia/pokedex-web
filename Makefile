APP=daemon-pokedex-web
COMMIT=$(shell git rev-parse HEAD)
IMAGE=$(DOCKER_USER)/$(APP):$(COMMIT)

local: clean compile build-docker local-docker

deploy: clean compile build-docker upload-heroku

push-docker: clean compile build-docker upload-docker

clean:
	rm -rf build

compile:
	npm run build

copy-files:
	cp package*.json build

build-docker:
	docker build -t $(IMAGE) .

local-docker:
	docker run -p5000:5000 $(IMAGE)

upload-docker:
	docker login -u $(DOCKER_USER) -p $(DOCKER_PASSWORD)
	docker push $(IMAGE)

upload-heroku:
	docker login --username=$(HEROKU_USER) --password=$(HEROKU_PASSWORD) registry.heroku.com
	heroku container:login
	heroku container:push web --app=$(APP)
	heroku container:release web --app=$(APP)
	