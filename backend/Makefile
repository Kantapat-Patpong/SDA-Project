DOCKER_IMAGE = my-redis-image
DOCKER_CONTAINER = my-redis-container

# คำสั่งสำหรับ build Docker image
build:
	docker build -t $(DOCKER_IMAGE) .

# คำสั่งสำหรับ run Docker container
run:
	docker run --name $(DOCKER_CONTAINER) -p 6379:6379 -d $(DOCKER_IMAGE)

# คำสั่งสำหรับ stop Docker container
stop:
	docker stop $(DOCKER_CONTAINER)

# คำสั่งสำหรับ remove Docker container
rm:
	docker rm $(DOCKER_CONTAINER)

# คำสั่งสำหรับ remove Docker image
rmi:
	docker rmi $(DOCKER_IMAGE)

# คำสั่งแสดงสถานะของ Docker containers
status:
	docker ps
