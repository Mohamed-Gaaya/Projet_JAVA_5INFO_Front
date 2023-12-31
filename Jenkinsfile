pipeline {
    agent any

    environment {
        rname = "projet_java_5info_back"
        rurl = 'goku47'
        imagename = "projet_java_5info_back"
    }

    stages {
        stage('build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('test') {
            steps {
                script {
                    echo 'testing'
                }
            }
        }

        stage('build image') {
            steps {
                script {
                    def imageName = "${rurl}/${imagename}:latest"
                    
                    sh "docker build -t ${imageName} ."
                    sh "docker push ${imageName}"
                }
            }
        }
    }
}
