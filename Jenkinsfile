pipeline{

    agent any

    parameters{
        sctring(name: 'SPEC',defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'],description: "Choice the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            echo "Building the application"
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            echo "Deploying the application"
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}