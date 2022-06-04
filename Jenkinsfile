def dockerImage
pipeline {
  
  environment {
    registry = "reg.gabtec.pt/gabtec/freeapis"
    registryCredential = 'harbor-id'
  }

  agent any
  stages {
    stage('Build') {
      steps {
        echo "Starting building image..."
        script {
          // docker.build registry + ":$BUILD_NUMBER"
          dockerImage = docker.build registry
        }
        echo "Docker image build OK."
      }
    }
    stage('Deploy Image') {
      steps{
        echo "Starting image deploy..."
        script {
          docker.withRegistry( 'https://reg.gabtec.pt/', registryCredential ) {
            //dockerImage.push()
            dockerImage.push("${env.BUILD_NUMBER}")
            dockerImage.push("latest")
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
