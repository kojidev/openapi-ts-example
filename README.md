This repository is an example how to use `@kojidev/openapi-ts` library. 

`npm run build` will produce git ignored `openapi.json` file in the root directory.

`docker-compose up -d` will start [Redoc](https://hub.docker.com/r/redocly/redoc) container with the `openapi.json` file set as `SPEC_URL`.
