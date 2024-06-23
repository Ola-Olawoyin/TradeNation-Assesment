pipeline {
    agent any

    tools {nodejs "node"}


    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git branch: 'master', url: 'https://github.com/Ola-Olawoyin/TradeNation-Assesment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                {
                    sh 'npm install'
                    sh 'npm update'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npm run test-headless'
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                // Generate the Mochawesome report
                sh 'npm run delete-mochawesome-report && npm run mochawesome-merge'
            }
        }

        stage('Publish Report') {
            steps {
                // Archive the test report
                archiveArtifacts artifacts: 'cypress/results/mochawesome/*.json', allowEmptyArchive: true

                // Publish the Mochawesome report
                publishHTML(target: [
                    reportDir: 'cypress/results/mochawesome',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Mochawesome Report',
                    alwaysLinkToLastBuild: true,
                    keepAll: true
                ])
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
            echo 'Build succeeded!'
        }
        failure {
            // Notify failure
            echo 'Build failed!'
        }
    }
}
