FROM openjdk:8
# file author / maintainer
MAINTAINER "Leandro Souza" "leandro.alcantara.souza@gmail.com"

WORKDIR /app
RUN mv ../../../target/angular-spring-security.jar /app
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar angular-spring-security.jar.jar" ]