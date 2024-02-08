pipeline{

    agent any

    parameters{
        choice(name: 'SPEC', choices:['cy:browserstack','cy:ui','cy:ui:edge'], description: "Choice the scripts path that you want to execute")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "install dependecies"
                bat "npm i"
            }

        }
        stage('Testing'){
            steps{
                
                // bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                bat "npm run ${SPEC}" 
            }
        }
        stage('Parallelization'){
            steps{
                echo "Run test with browserStack Automate featue in parallel env and browsers."
                bar "browserstack-cypress run"
            }

        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}