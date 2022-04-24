.PHONY: build

build:
	npm install
	gulp build

docker:
	docker build -t drums.ermilov.org .

serve: docker
	docker run -it -p 80:80 -p 443:443 drums.ermilov.org
