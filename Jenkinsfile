pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'node' // Assumes you have NodeJS configured in Jenkins Global Tool Configuration
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
          
                bat 'npm run test:headless'
            }
        }

        stage('Generate Report') {
            steps {
               
                bat 'npm run mochawesome-merge'
            }
        }

        stage('Archive and Publish Report') {
            steps {
                
                archiveArtifacts artifacts: 'cypress/results/mochawesome/*.json', allowEmptyArchive: true

               
                publishHTML(target: [
                    reportDir: 'cypress/results/mochawesome',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Mochawesome Report',
                    alwaysLinkToLastBuild: true,
                    keepAll: true
                ])
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
