pipeline {
    agent any
    
    environment {
        MONGO_URI = credentials('MONGO_URI')
    }

    stages {
        stage('Clonar repositorio'){
            steps {
                git branch: 'main', 
                credentialsId: 'git-jenkins', 
                url: 'https://github.com/julioiud/micro-tw-v3-2.git'
            }
        }

        /*stage('Construir image de docker'){
            steps {
                    script {
                        withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                        ]) {
                            sh """
                                docker-compose build -t .
                            """  
                        }
                    }
                }
        }*/

        stage('Desplegar contenedor docker') {
            steps {
                    script {
                        withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                        ]) {
                            sh """
                                docker-compose -f docker-compose.yml up -d -e MONGO_URI=${MONGO_URI} -e PORT=4002
                            """  
                        }
                    }
            }
        }
    }

    /*post {
        always {
            emailext {
                subject: "Estado del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build, accede a los detalles en ${env.BUILD_URL}",
                to: 'dcmr34012@gmail.com',
                cc: 'L3garda@gmail.com',
                from: 'jenkins@iudigital.edu.co'
            }
        }
    }*/
}