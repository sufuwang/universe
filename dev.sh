# docker network rm universe-network -f
# docker network create universe-network
# docker run -d --network universe-network -v /Users/sufuwang/Downloads/Code/universe/data/mysql:/var/lib/mysql --name mysql-container mysql
# docker run -d --network common-network -v /Users/guang/aaa:/data --name redis-container redis
# docker build -t nest-app .
# docker run -d --network universe-network -p 3000:3000 --name nest-container nest-app

docker-compose down --rmi all
docker-compose up -d