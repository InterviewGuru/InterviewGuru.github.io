import React, { useEffect, useState } from 'react'

export default function Home() {
  const [baseUrl, setBaseUrl] = useState('http://localhost:3000');


  useEffect(() => {
    getBaseUrl();
  }, []);
  
  const getBaseUrl = () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
      if(process.env.NODE_ENV === 'development') {
          setBaseUrl('http://localhost:3000');
      } else {
          setBaseUrl('https://www.techschool.in');
      }
  }
  
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='header-wrapper'>
            <div className="welcome-text">Welcome to Tech-School</div>
            <div className="sub-welcome-text">A platform for learning and sharing</div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className="box-wrapper home-page-box">
            <div className='box-title'>Front-End</div>
            <ul>
              <li><a href={`${baseUrl}/#/react-interview-questions-and-answers`} target="_blank"> React Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/javascript-interview-questions-and-answers`} target="_blank"> Javascript Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/html-interview-questions-and-answers`} target="_blank"> HTML Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/css-interview-questions-and-answers`} target="_blank"> CSS Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/angular-interview-questions-and-answers`} target="_blank"> Angular Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/vuejs-interview-questions-and-answers`} target="_blank"> Vue JS Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/flutter-interview-questions-and-answers`} target="_blank"> Flutter Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/react-native-interview-questions-and-answers`} target="_blank"> React Native Interview Questions</a></li>
              <li><a href={`${baseUrl}/#/ionic-interview-questions-and-answers`} target="_blank"> Ionic Interview Questions</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="box-wrapper home-page-box">
            <div className='box-title'>Back-End</div>
            <ul>
              <li><a href="https://www.techschool.in//#/csharp-interview-questions-and-answers" target="_blank"> C # Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/nodejs-interview-questions-and-answers" target="_blank"> Node.js Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/expressjs-interview-questions-and-answers" target="_blank"> Express.js Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/python-interview-questions-and-answers" target="_blank"> Python Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/django-interview-questions-and-answers" target="_blank"> Django Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/ruby-on-rails-interview-questions-and-answers" target="_blank"> Ruby on Rails Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/java-interview-questions-and-answers" target="_blank"> Java Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/spring-interview-questions-and-answers" target="_blank"> Spring Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/php-interview-questions-and-answers" target="_blank"> PHP Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/laravel-interview-questions-and-answers" target="_blank"> Laravel Interview Questions</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='box-wrapper home-page-box'>
            <div className='box-title'>Database</div>
            <ul>
              <li><a href="https://www.techschool.in//#/mysql-interview-questions-and-answers" target="_blank"> MySQL Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/mongodb-interview-questions-and-answers" target="_blank"> MongoDB Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/sql-interview-questions-and-answers" target="_blank"> SQL Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/postgresql-interview-questions-and-answers" target="_blank"> PostgreSQL Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/oracle-interview-questions-and-answers" target="_blank"> Oracle Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/cassandra-interview-questions-and-answers" target="_blank"> Cassandra Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/redis-interview-questions-and-answers" target="_blank"> Redis Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/firebase-interview-questions-and-answers" target="_blank"> Firebase Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/dynamodb-interview-questions-and-answers" target="_blank"> DynamoDB Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/couchbase-interview-questions-and-answers" target="_blank"> Couchbase Interview Questions</a></li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='box-wrapper home-page-box'>
            <div className='box-title'>DevOps and Cloud Technologies</div>
            <ul>
              <li><a href="https://www.techschool.in//#/docker-interview-questions-and-answers" target="_blank"> Docker Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/kubernetes-interview-questions-and-answers" target="_blank"> Kubernetes Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/jenkins-interview-questions-and-answers" target="_blank"> Jenkins Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/ansible-interview-questions-and-answers" target="_blank"> Ansible Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/git-interview-questions-and-answers" target="_blank"> Git Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/bitbucket-interview-questions-and-answers" target="_blank"> Bitbucket Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/aws-interview-questions-and-answers" target="_blank"> AWS Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/azure-interview-questions-and-answers" target="_blank"> Azure Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/google-cloud-interview-questions-and-answers" target="_blank"> Google Cloud Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/terraform-interview-questions-and-answers" target="_blank"> Terraform Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/puppet-interview-questions-and-answers" target="_blank"> Puppet Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/chef-interview-questions-and-answers" target="_blank"> Chef Interview Questions</a></li>
              <li><a href="https://www.techschool.in//#/nagios-interview-questions-and-answers" target="_blank"> Nagios Interview Questions</a></li>
            </ul>
          </div>
          </div>
          <div className='col-md-4'>
            <div className='box-wrapper home-page-box'>
              <div className='box-title'>System design and architecture</div>
              <ul>
                <li><a href="https://www.techschool.in//#/system-design-interview-questions-and-answers" target="_blank"> System Design Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/oop-interview-questions-and-answers" target="_blank"> OOP Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/design-patterns-interview-questions-and-answers" target="_blank"> Design Patterns Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/microservices-interview-questions-and-answers" target="_blank"> Microservices Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/rest-api-interview-questions-and-answers" target="_blank"> REST API Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/graphql-interview-questions-and-answers" target="_blank"> GraphQL Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/grpc-interview-questions-and-answers" target="_blank"> gRPC Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/websockets-interview-questions-and-answers" target="_blank"> Websockets Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/apache-kafka-interview-questions-and-answers" target="_blank"> Apache Kafka Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/rabbitmq-interview-questions-and-answers" target="_blank"> RabbitMQ Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/apache-camel-interview-questions-and-answers" target="_blank"> Apache Camel Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/elastic-search-interview-questions-and-answers" target="_blank"> Elastic Search Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/solr-interview-questions-and-answers" target="_blank"> Solr Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/memcached-interview-questions-and-answers" target="_blank"> Memcached Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/caching-interview-questions-and-answers" target="_blank"> Caching Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/load-balancing-interview-questions-and-answers" target="_blank"> Load Balancing Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/message-queue-interview-questions-and-answers" target="_blank"> Message Queue Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/service-discovery-interview-questions-and-answers" target="_blank"> Service Discovery Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/api-gateway-interview-questions-and-answers" target="_blank"> API Gateway Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/service-mesh-interview-questions-and-answers" target="_blank"> Service Mesh Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/event-driven-architecture-interview-questions-and-answers" target="_blank"> Event Driven Architecture Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/cqrs-interview-questions-and-answers" target="_blank"> CQRS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/event-sourcing-interview-questions-and-answers" target="_blank"> Event Sourcing Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/saga-pattern-interview-questions-and-answers" target="_blank"> Saga Pattern Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/domain-driven-design-interview-questions-and-answers" target="_blank"> Domain Driven Design Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/hexagonal-architecture-interview-questions-and-answers" target="_blank"> Hexagonal Architecture Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/onion-architecture-interview-questions-and-answers" target="_blank"> Onion Architecture Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/clean-architecture-interview-questions-and-answers" target="_blank"> Clean Architecture Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/serverless-interview-questions-and-answers" target="_blank"> Serverless Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/faas-interview-questions-and-answers" target="_blank"> FaaS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/aws-lambda-interview-questions-and-answers" target="_blank"> AWS Lambda Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/azure-functions-interview-questions-and-answers" target="_blank"> Azure Functions Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/google-cloud-functions-interview-questions-and-answers" target="_blank"> Google Cloud Functions Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/api-interview-questions-and-answers" target="_blank"> API Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/oauth-interview-questions-and-answers" target="_blank"> OAuth Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/jwt-interview-questions-and-answers" target="_blank"> JWT Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/sso-interview-questions-and-answers" target="_blank"> SSO Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/cors-interview-questions-and-answers" target="_blank"> CORS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/csrf-interview-questions-and-answers" target="_blank"> CSRF Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/xss-interview-questions-and-answers" target="_blank"> XSS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/sql-injection-interview-questions-and-answers" target="_blank"> SQL Injection Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/ddos-interview-questions-and-answers" target="_blank"> DDoS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/encryption-interview-questions-and-answers" target="_blank"> Encryption Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/hashing-interview-questions-and-answers" target="_blank"> Hashing Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/salting-interview-questions-and-answers" target="_blank"> Salting Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/jwt-interview-questions-and-answers" target="_blank"> JWT Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/oauth-interview-questions-and-answers" target="_blank"> OAuth Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/sso-interview-questions-and-answers" target="_blank"> SSO Interview Questions</a></li>
              </ul>
            </div>
            </div>
            <div className='col-md-4'>
              <div className='box-wrapper home-page-box'>
                <div className='box-title'>QA</div>
                <ul>

                  <li><a href="https://www.techschool.in//#/manual-testing-interview-questions-and-answers" target="_blank"> Manual Testing Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/automation-testing-interview-questions-and-answers" target="_blank"> Automation Testing Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/selenium-interview-questions-and-answers" target="_blank"> Selenium Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/cucumber-interview-questions-and-answers" target="_blank"> Cucumber Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/junit-interview-questions-and-answers" target="_blank"> JUnit Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/testng-interview-questions-and-answers" target="_blank"> TestNG Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/jmeter-interview-questions-and-answers" target="_blank"> JMeter Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/loadrunner-interview-questions-and-answers" target="_blank"> LoadRunner Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/postman-interview-questions-and-answers" target="_blank"> Postman Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/soapui-interview-questions-and-answers" target="_blank"> SoapUI Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/rest-assured-interview-questions-and-answers" target="_blank"> Rest Assured Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/appium-interview-questions-and-answers" target="_blank"> Appium Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/jira-interview-questions-and-answers" target="_blank"> JIRA Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/bugzilla-interview-questions-and-answers" target="_blank"> Bugzilla Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/mantis-interview-questions-and-answers" target="_blank"> Mantis Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/testrail-interview-questions-and-answers" target="_blank"> TestRail Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/testlink-interview-questions-and-answers" target="_blank"> TestLink Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-case-interview-questions-and-answers" target="_blank"> Test Case Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-plan-interview-questions-and-answers" target="_blank"> Test Plan Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-strategy-interview-questions-and-answers" target="_blank"> Test Strategy Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-scenario-interview-questions-and-answers" target="_blank"> Test Scenario Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-suite-interview-questions-and-answers" target="_blank"> Test Suite Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-bed-interview-questions-and-answers" target="_blank"> Test Bed Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-data-interview-questions-and-answers" target="_blank"> Test Data Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-coverage-interview-questions-and-answers" target="_blank"> Test Coverage Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-metrics-interview-questions-and-answers" target="_blank"> Test Metrics Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-report-interview-questions-and-answers" target="_blank"> Test Report Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-execution-interview-questions-and-answers" target="_blank"> Test Execution Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-automation-framework-interview-questions-and-answers" target="_blank"> Test Automation Framework Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-automation-interview-questions-and-answers" target="_blank"> Test Automation Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-strategy-interview-questions-and-answers" target="_blank"> Test Strategy Interview Questions</a></li>
                  <li><a href="https://www.techschool.in//#/test-plan-interview-questions-and-answers" target="_blank"> Test Plan Interview Questions</a></li>
                  </ul></div>
              </div>
      </div>
    </>
  )
}
