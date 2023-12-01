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
                                docker.build('proyectos-micros:v1', "--build-arg MONGO_URI=${MONGO_URI} .")   
                            }
                    }
                }
        }*/

        stage('Desplegar contenedor docker') {
            steps {
                    script {
             
                               sh """
                                sed '${MONGO_URI}' docker-compose.yml > docker-compose-updated.yml
                                docker-compose -f docker-compose-updated.yml up -d
                               """  
                            
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