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
    docker.withRegistry('https://reg.gabtec.pt', 'harbor_key') {
      def image = docker.build("reg.gabtec.pt/freeapis:v0.1")
      image.push()
    }
  }
}