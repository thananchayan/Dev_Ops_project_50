pipeline {
    agent any

    environment {
        DOCKER_CLI_HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Build Front-end') {
            steps {
                dir('front-end') {
                    script {
                        // Build Docker image for client
                        sh 'docker build -t front-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        
        // stage('Build Back-end') {
        //     steps {
        //         dir('back-end') {
        //             script {
        //                 // Build custom Maven image with Java 20
        //                 sh '''
        //                 docker build -t custom-maven-java20 -f Dockerfile-maven-java20 .
        //                 '''
        //                 // Use the custom Maven Docker image to build Spring Boot application
        //                 docker.image('custom-maven-java20').inside {
        //                     sh 'mvn clean package -DskipTests'
        //                 }
        //                 // Build Docker image for server
        //                 sh 'docker build -t back-end-image:latest -f Dockerfile .'
        //             }
        //         }
        //     }
        // }
        
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
