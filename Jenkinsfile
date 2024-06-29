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
                        sh 'docker build -t
                         front-end-image:latest -f Dockerfile .'
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
                stage('Install Docker Compose') {
            steps {
                script {
                    // Check and install Docker Compose if not present
                    sh '''
                    if ! [ -x "$(command -v docker-compose)" ]; then
                        echo "docker-compose not found, installing..."
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /tmp/docker-compose
                        chmod +x /tmp/docker-compose
                        sudo mv /tmp/docker-compose /usr/local/bin/docker-compose
                    else
                        echo "docker-compose is already installed"
                    fi
                    '''
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
                    sh 'docker ps'
                }
            }
        }
    }
}
