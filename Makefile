.PHONY: dev
dev:
	npm -w client run dev

.PHONY: init
init:
	$(MAKE) clean
	npm install

.PHONY: clean
clean:
	npm run clean
	npm -w client run clean
