pipeline {
      agent any
      stages{
	stage('Checkout') {
	   steps {
              checkout scm
               }
	     }
	stage( 'Install Dependencies'){
            steps {
                sh 'npm install'
                }
             }
	stage('Run tests'){
	    steps{
	        sh 'npm test'
	 }
	}
	stage('Build') {
            steps {
                  echo 'Building the application...'
                   sh 'npm run build'
   			 }
		      }
		}
	post{
	   success {
	         echo 'pipeline completed'
	}
	   failure {
	          echo 'failed'
	}
	}

          }
