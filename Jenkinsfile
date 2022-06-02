// pipeline {
//   agent any
//   stages {
//     stage('test') {
//       steps {
//         echo "Starting test stage..."
//       }
//     }
//   }
// }
node {
  checkout scm
  stage('Build') {
    echo "Starting building docker image..."
    docker.withRegistry('https://reg.gabtec.pt', 'harbor_key') {
      def image = docker.build("reg.gabtec.pt/freeapis:v0.1")
      image.push()
    }
  }
}