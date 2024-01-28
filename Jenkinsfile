pipeline{

    agent any

    parameters{
        string(name: 'SPEC',choice:['cy:ui','cy:ui:edge'],defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'],description: "Choice the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building the application"
            }

        }
        stage('Testing'){
            steps{
                bat "npm i"
                // bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                bat "nom run ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }

        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}