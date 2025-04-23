import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h2>
          Hello, This is a Web Development Assignment
      </h2>

      <h3>Description : Design and Deploy a web application in a PaaS environment</h3>
      <div>
      <b>What is PaaS?</b><br></br>
      Platform as a service (PaaS) is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
      </div>
      <br></br>

      <div>
      <b>What AWS Amplify is?</b><br></br>
      AWS Amplify is a set of purpose-built tools and features that lets frontend web and mobile developers quickly and easily build full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as your use cases evolve. With Amplify, you can configure a web or mobile app backend, connect your app in minutes, visually build a web frontend UI, and easily manage app content outside the AWS console. Ship faster and scale effortlessly—with no cloud expertise needed.
      </div>
      <br></br>
      
      <div>
        <b>Steps : </b>
        <ul>
          <li>Login to the AWS console</li>
          <li>Find for AWS Amplify in the services.</li>
          <li>Get Started with Amplify service.</li>
          <li>Click on Host a Web App.</li>
          <li>Then choose to launch it with Github and authenticate your GitHub account for the same..</li>
          <li>After that choose the Repository containing your source code ( subfolder if needed)</li>
          <li>Then Launch the application with the default configurations provided by AWS Amplify</li>
          <li>Configurations may be different on type of framework / technology you are launching your application ( REACT is my case ).</li>
        </ul>
      </div>
    </>
  )
}

export default App
