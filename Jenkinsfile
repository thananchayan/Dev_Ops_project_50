pipeline {
    agent any

    environment {
        DOCKER_CLI_HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Build Fron-end') {
            steps {
                dir('front-end') {
                    script {
                        // Build Docker image for client
                        sh 'docker build -t front-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        
        stage('Build Back-end') {
            steps {
                dir('back-end') {
                    script {
                        // Build Spring Boot application using Maven
                        sh 'mvn clean package -DskipTests'
                        // Build Docker image for server
                        sh 'docker build -t back-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Stop and remove previous containers
                    sh 'docker-compose down --remove-orphans'
                    // Deploy using docker-compose
                    sh 'docker-compose up --build -d'
                }
            }
        }
    }
}
