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

        }

        stage('Desplegar contenedor docker') {

        }
    }

    post {
        always {

        }
    }
}