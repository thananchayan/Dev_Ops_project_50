# FROM openjdk:20-jre-slim
# VOLUME /tmp
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]
# EXPOSE 8080



FROM openjdk:21

EXPOSE 8080

COPY target/*.jar ticket-booking-server.jar

ENTRYPOINT ["java", "-jar", "/ticket-booking-server.jar"]
