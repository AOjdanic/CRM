FROM gradle:9.3.1-jdk21-alpine

WORKDIR /app

COPY build.gradle settings.gradle ./
COPY gradle ./gradle

RUN gradle dependencies --no-daemon || true

COPY src ./src

EXPOSE 8080

CMD ["gradle","bootRun","--no-daemon"]