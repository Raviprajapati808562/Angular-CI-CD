
pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t angular-app:latest .'
            }
        }

        stage('Run Angular Container') {
            steps {
                bat 'docker rm -f angular-app 2>NUL'
                bat 'docker run -d --name angular-app -p 4000:4000 angular-app:latest'
            }
        }
    }

    post {
        success {
            echo 'Angular build, Docker image, and container started successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
