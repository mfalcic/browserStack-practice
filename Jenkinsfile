pipeline{

    agent any

    parameters{
        choice(name: 'SPEC', choices:['cy:ui','cy:ui:edge'], description: "Choice the scripts path that you want to execute")
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
                bat "npm run ${SPEC} --browser ${BROWSER}" 
            }
        }
        stage('Parallelization'){
            steps{
                echo "Run test with browserStack Automate featue in parallel env and browsers."
                bar "npm run cy:browserstack"
            }

        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}