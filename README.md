# Fractal Blockchain

# How to use

Once api is up and running you can query for an upstream tree by going to `http://localhost:5000/tree/input?[indicator_ids[]={id}]` where `[indicator_ids[]={id}]` is a list of indicators in the form of `indicator_id[]={id}&indicator_id[]={id}...`. If nothing is provided, the API will return a 404 response warning the user to provide indicators in the query. If an indicator is not found in the tree, then the API will return a 404 NOT_FOUND error saying that the tree requested does not exist.

## Running:

- Run `make start`, this will lint, test and transpile the project into the `/dist` folder

- `docker-compose` will take care of the rest, it will spin up a container for the api which can be access at `http://localhost:5000`

- Make sure you do not have a local service running on port 5000 (you may change it in `docker-compose.yml`)
