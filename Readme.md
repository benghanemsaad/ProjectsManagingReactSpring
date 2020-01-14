![App Screenshot](screenshot.png)
![App Screenshot](screenshot2.png)
![App Screenshot](screenshot3.png)
![App Screenshot](screenshot4.png)
![App Screenshot](screenshot5.png)
![App Screenshot](screenshot6.png)
![App Screenshot](screenshot7.png)
![App Screenshot](screenshot8.png)
![App Screenshot](screenshot9.png)
![App Screenshot](screenshot10.png)
![App Screenshot](screenshot11.png)
![App Screenshot](screenshot12.png)
![App Screenshot](screenshot13.png)
![App Screenshot](screenshot14.png)
![App Screenshot](screenshot15.png)
![App Screenshot](screenshot16.png)
![App Screenshot](screenshot17.png)


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