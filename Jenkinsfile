pipeline {

    agent any


    options{
        ansiColor('xterm')
    }

    tools {nodejs "node"}


    stages {
        stage('Building') {
            echo "Building The Application Under Test"
        }

        stage('Testing') {
            steps {
            
                git url: 'https://github.com/Ola-Olawoyin/TradeNation-Assesment.git'
                 bat 'npm install'
                bat 'npm update'
                 bat 'npm run test-headless'

            }
        }

    
     stage('Deploying') {
            echo "Deploying The Application Under Test"
        }

        post{
           always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
           } 
        }

    
}
