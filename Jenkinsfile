pipeline {

    agent any


    options{
        ansiColor('xterm')
    }



    stages {
        stage('Building') {
            steps{
                echo "Building The Application Under Test" 
            }
           
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
           steps{
          echo "Deploying The Application Under Test"
        }
           } 

        post{
           always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
           } 
        }

    
}
