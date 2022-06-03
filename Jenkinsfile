<<<<<<< HEAD
// pipeline {
//   agent any
//   stages {
//     stage('Build') {
//       steps {
//         echo "Starting building image..."
//         script {
//           sh 'docker build -t reg.gabtec.pt/freeapis:v0.1 .'
//         }
//       }
//     }
//   }
// }

node {
  checkout scm
  stage('Build') {
    echo "Starting building docker image..."
    docker.withRegistry('https://reg.gabtec.pt', 'harbor-id') {
      def image = docker.build("reg.gabtec.pt/freeapis:v0.2")
      image.push()
    }
  }
}
=======
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "Starting building image..."
        script {
          sh 'docker build -t reg.gabtec.pt/freeapis:v0.1 .'
          sh 'docker push reg.gabtec.pt/freeapis:v0.1'
        }
      }
    }
  }
}

// node {
//   checkout scm
//   stage('Build') {
//     echo "Starting building docker image..."
//     docker.withRegistry('https://reg.gabtec.pt', 'harbor_key') {
//       def image = docker.build("reg.gabtec.pt/freeapis:v0.1")
//       image.push()
//     }
//   }
// }
>>>>>>> eea9d93f031ab907469bc429c695bf8aed6bdb12
