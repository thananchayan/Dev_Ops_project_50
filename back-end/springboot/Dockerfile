

# FROM eclipse-temurin:20
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]




# Use an appropriate base image for your application
FROM openjdk:20-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot application jar into the container
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Copy the application.properties into the container
COPY src/main/resources/application.properties /app/application.properties

# Expose the port the application runs on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

