pipeline {
    agent any

    stages {
        stage('Clonar repositorio'){
            steps {
                git branch: 'main', 
                credentialsId: 'git-jenkins', 
                url: 'https://github.com/julioiud/micro-tw-v3-2.git'
            }
        }

        stage('Construir image de docker'){
            steps {
                    script {
                        withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                        ]) {
                            sh """
                                docker-compose -f docker-compose.yml build proyectos-micros
                            """  
                        }
                    }
                }
        }

        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh """
                            docker-compose -f docker-compose-update.yml up -d -e MONGO_URI=${MONGO_URI} -e PORT=4002
                        """
                    }
                }
            }
        }
    }
}