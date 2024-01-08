pipeline {
    agent any

    environment {
        rname = "projet_java_5info_front"
        rurl = 'goku47'
        imagename = "projet_java_5info_front"
        dockerhubCredentials = 'e95fc091-e281-4436-92db-c7c5e8f30f5c'  // Replace with your Docker Hub credentials ID
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
                    
                    // Use Docker Hub credentials to log in
                    withCredentials([usernamePassword(credentialsId: dockerhubCredentials, passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh "docker login -u ${env.DOCKERHUB_USERNAME} -p ${env.DOCKERHUB_PASSWORD}"
                    }
                    
                    sh "docker push ${imageName}"
                }
            }
        }
      stage('cleanup') {
            steps {
                script {
                    def imageName = "${rurl}/${imagename}:latest"
                    
                 
                    
                    sh "docker image rmi ${imageName}"
                      sh "docker logout"
                }
            }
        }
    }
}
