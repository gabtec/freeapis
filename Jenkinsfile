pipeline {
  environment {
    registry = "reg.gabtec.pt/gabtec"
    registryCredential = 'harbor-id'
  }

  agent any
  stages {
    stage('Build') {
      steps {
        echo "Starting building image..."
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}

// node {
//   checkout scm
//   stage('Build') {
//     echo "Starting building docker image..."
//     docker.withRegistry('https://reg.gabtec.pt', 'harbor-id') {
//       def image = docker.build("reg.gabtec.pt/freeapis:v0.2")
//       image.push()
//     }
//   }
// }
