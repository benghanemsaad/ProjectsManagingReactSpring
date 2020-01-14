
![App Screenshot](screenshot.png,screenshot2.png,screenshot3.png,screenshot4.png,screenshot5.png,screenshot6.png,screenshot7.png,screenshot8.png,screenshot9.png,screenshot10.png,screenshot11.png,screenshot12.png,screenshot13.png,screenshot14.png,screenshot15.png,screenshot16.png,screenshot17.png)

## Setting up the Backend Server (spring-social)

+ **Create MySQL database**

	```bash
	mysql> create database spring_social
	```

+ **Configure database username and password**

	```yml
	# spring-social/src/main/resources/application.yml
	spring:
	    datasource:
	        url: jdbc:mysql://localhost:3306/spring_social?useSSL=false
	        username: <YOUR_DB_USERNAME>
	        password: <YOUR_DB_PASSWORD>
	```


+ **Run spring**

	```bash
	mvn spring-boot:run
	```

## Setting up the Frontend Server (react)

```bash
cd react
npm install && npm start
```