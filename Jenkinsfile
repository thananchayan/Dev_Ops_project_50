pipeline {
    agent any

    environment {
        DOCKER_CLI_HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Build Client') {
            steps {
                dir('front-end') {
                    script {
                        // Build Docker image for client
                        bat 'docker build -t front-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        
        stage('Build Server') {
            steps {
                dir('back-end') {
                    script {
                        // Build Spring Boot application using Maven
                        bat 'mvn clean package -DskipTests'
                        // Build Docker image for server
                        bat 'docker build -t back-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Stop and remove previous containers
                    bat 'docker-compose down --remove-orphans'
                    // Deploy using docker-compose
                    bat 'docker-compose up --build -d'
                }
            }
        }
    }
}