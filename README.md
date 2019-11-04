Building the Docker image: 

`docker image build -t lpp-route-finder:1.0.0 .`

Running the Docker image:

`docker container run --publish 8000:8080 --detach --name lpp-route-finder lpp-route-finder:1.0.0`

Removing the Docker image:

`docker container remove --force lpp-route-finder`