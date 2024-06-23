pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'node' 
    }

    options{
        ansiColor('xterm')
    }

    stages {
        stage('Checkout') {
            steps {
            
                git branch: 'master', url: 'https://github.com/Ola-Olawoyin/TradeNation-Assesment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
              
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
          
                bat 'npm run test-headless'
            }
        }

       

        stage('Deploy') {
            steps {
               
                echo 'Deploying application...'
                
            }
        }
    }

    post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
        success {
            // Notify success
            echo 'Build and deployment succeeded!'
        }
        failure {
            // Notify failure
            echo 'Build or deployment failed!'
        }
    }
}
