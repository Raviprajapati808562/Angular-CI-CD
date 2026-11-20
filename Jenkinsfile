
pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Check Node and NPM') {
            steps {
                bat '''
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    npm ci --cache "%USERPROFILE%\\.npm" --prefer-offline
                '''
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
                script {
                    // Remove the old container if it exists
                    bat(
                        returnStatus: true,
                        script: 'docker rm -f angular-app'
                    )

                    // Start the new container
                    bat '''
                        docker run -d ^
                            --name angular-app ^
                            --restart unless-stopped ^
                            -p 4200:4000 ^
                            angular-app:latest

                        if errorlevel 1 exit /b 1
                    '''
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps --filter name=angular-app'
            }
        }
    }

    post {
        success {
            echo 'Angular build and Docker deployment completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check Jenkins Console Output.'
        }
    }
}
