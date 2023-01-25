import React from 'react'
import logo from './logo.svg'
import * as errorDetails from 'grpc-web-error-details'
import './App.css'

// ### VERSION 1
// import { Notification, SendAlertRequest } from './gen/alert_pb'
// import { AlertServiceClient } from './gen/AlertServiceClientPb'

// ### VERSION 2
// import grpc from '@grpc/grpc-js'
// import { grpc } from '@improbable-eng/grpc-web'
// import { AlertService, AlertServiceClient } from './gen/alert_pb_service'
// import { SendAlertRequest, Notification } from './gen/alert_pb'

// VERSION 3
import { WealthServiceClient } from './gen/WealthServiceClientPb'
import { Wealth } from './gen/wealth_pb'

// import { AuthClient } from './gen/AuthServiceClientPb'
// import { SignUpRequest } from './gen/auth_pb'

import { AuthServiceClient } from './gen/AuthServiceClientPb'
import { Auth } from './gen/auth_pb'

const token =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGV2LXBvbSIsImF1ZCI6ImRldi1wb20iLCJhdXRoX3RpbWUiOjE2NzQ2NzY3OTAsInVzZXJfaWQiOiJPOUIzaHc3bDFSWU1Rbk1tNUsyMW5NcGRORncyIiwic3ViIjoiTzlCM2h3N2wxUllNUW5NbTVLMjFuTXBkTkZ3MiIsImlhdCI6MTY3NDY3Njc5MCwiZXhwIjoxNjc0NjgwMzkwLCJlbWFpbCI6InJvZHJpZ28uY29uZHVydUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicm9kcmlnby5jb25kdXJ1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QSkuJ6cZnGG4SOcntx8hoBZ5LzZS0xuvruJrjZdDNzoXRTHbhRlfL792R7bnSRQlJisKDeEb9Yrl-SZ_hEZm0BjmUfyHAvE18_IljR5UAFDDYIEOzy5tGSJxKc6MFrs--R69C1wBlAYHzW4eeLbIA2-H3zcC_HsXvB540eXyipF8xM0d2vO3pVkmkgB-enYaoUzpqIjuBv9R10qCSbLsRMCw1tcpL3xA5G2w_IWhc8B_6n_Q3l6Yv2I54TIvJTDv2sPD4sUCKhZcnoJbGcP-gCpe_OzaaZ75J8pnVDIRBo2tR1UeVOS2UyX9jL1fUhlbbzdD_dNwYS9FQIobGi3E0Q'

function App() {
  const [response, setResponse] = React.useState('')
  const [statusMessage, setStatusMessage] = React.useState('')
  const [responseWealth, setResponseWealth] = React.useState('')
  const [statusMessageWealth, setStatusMessageWealth] = React.useState('')

  React.useEffect(() => {
    // const verifyEmailRequest = new VerifyEmailRequest()
    // verifyEmailRequest.setEmail('rodrigo.mucu@gmail.com')

    // grpc.unary(Auth.VerifyEmail, {
    //   request: verifyEmailRequest,
    //   host: 'http://us-east-1.dev.pomwm.com:443/api',
    //   metadata: { Authorization: `Bearer ${token}` },
    //   onEnd: (res) => {
    //     const { status, statusMessage, headers, message, trailers } = res
    //     console.log('Resposta Auth')
    //     console.log('Status: ', status)
    //     console.log(statusMessage)
    //     console.log(headers)
    //     console.log(trailers)

    //     setStatusMessage(statusMessage)

    //     if (status === grpc.Code.OK && message) {
    //       const resp = JSON.stringify(message.toObject())
    //       console.log('Deu certo Auth: ', resp)
    //       setResponse(resp)
    //     }
    //   },
    // })

    const client = new AuthServiceClient(
      'http://us-east-1.dev.pomwm.com:443/public/api'
    )
    // const client = new AuthClient('http://localhost:9090/api')
    const signUpRequest = new Auth.SignUpRequest()
    signUpRequest.setEmail('rodrigo.mucura')
    signUpRequest.setName('R')
    signUpRequest.setBirthDate('19/04/198')
    signUpRequest.setPhoneNumber('+551194103')

    const metadata = { authorization: `Bearer ${token}` }

    client.signUp(signUpRequest, metadata, (err, response) => {
      console.log('Error: ', err)

      if (err) {
        setStatusMessage(`Status ${err.code}`)
        setResponse(`Error ${err.message}`)
      }

      if (response) {
        setStatusMessage(`Status ${response.getMessage()}`)
        setResponse(JSON.stringify(response.getData()))
      }

      const [status, details] = errorDetails.statusFromError(err)
      console.log('## STATUS: ', status)
      console.log('## DETAIL: ', details)
      if (status && details) {
        for (const d of details) {
          // use `instanceof` for type guard
          if (d instanceof errorDetails.BadRequest) {
            // use appropriate methods on details for further information
            for (const v of d.getFieldViolationsList()) {
              console.log(
                `Violation at field ${v.getField()}: ${v.getDescription()}`
              )
            }
          }
        }
      }
    })

    // const client = new AlertServiceClient('http://localhost:9090/')
    // const request = new SendAlertRequest()

    // const notification = new Notification()
    // notification.setId('123asd45')
    // notification.setMessage('Testasdae')
    // notification.setSummary('12345asdasd')

    // request.setNotification(notification)

    // const teste = {} as BrowserHeaders

    // client.sendAlert(
    //   request,
    //   { Authorization: `Bearer ${token}` },
    //   (err, response) => {
    //     console.log('Error: ', err)
    //     console.log('Response: ', response)
    //   }
    // )

    // grpc.unary(AuthService.SignUp, {
    //   request: signUpRequest,

    //   host: 'http://us-east-1.dev.pomwm.com:443/api',
    //   // host: 'http://localhost:9090/api',
    //   metadata: { Authorization: `Bearer ${token}` },

    //   onEnd: (res) => {
    //     const { status, statusMessage, headers, message, trailers } = res
    //     console.log('Resposta Wealth')
    //     console.log('Status: ', status)
    //     console.log('Message: ', message)
    //     console.log(statusMessage)
    //     console.log(headers)
    //     console.log(trailers)

    //     // const [status2, details] = errorDetails.statusFromError
    //     // console.log('agora: ', status2)
    //     // console.log('details: ', details)

    //     setStatusMessage(statusMessage)

    //     if (headers.has('grpc-status-details-bin')) {
    //       try {
    //         const errDetails = atob(headers.get('grpc-status-details-bin')[0])

    //         console.log(errDetails)
    //       } catch (error) {}
    //     }

    //     if (status === grpc.Code.OK && message) {
    //       const resp = JSON.stringify(message.toObject())
    //       console.log('Deu certo: ', message.toObject())
    //       setResponse(resp)
    //     }
    //   },
    // })

    const client2 = new WealthServiceClient(
      'http://us-east-1.dev.pomwm.com:443/api'
    )

    const getWealthRequest = new Wealth.GetResumeRequest()
    getWealthRequest.setIdUser('qwert12345')

    client2.getWealthResume(getWealthRequest, metadata, (err, response) => {
      console.log('Success: ', response)

      console.log('Error: ', err)

      if (err) {
        setStatusMessageWealth(`Status ${err.code}`)
        setResponseWealth(`Error ${err.message}`)
      }

      if (response) {
        setStatusMessageWealth(`Sucesso`)
        setStatusMessageWealth(`Result ${response.toString()}`)
      }

      const [status, details] = errorDetails.statusFromError(err)
      console.log('## STATUS: ', status)
      console.log('## DETAIL: ', details)
      if (status && details) {
        for (const d of details) {
          // use `instanceof` for type guard
          if (d instanceof errorDetails.BadRequest) {
            // use appropriate methods on details for further information
            for (const v of d.getFieldViolationsList()) {
              console.log(
                `Violation at field ${v.getField()}: ${v.getDescription()}`
              )
            }
          }
        }
      }
    })

    // grpc.unary(WealthService.GetWealthResume, {
    //   request: getWealthRequest,
    //   // TODO - Este IP deve estar em uma variável de ambiente e estar protegida por um endereço com DNS
    //   // host: 'http://id2087706287-front-proxy-09a7fe25ce9c6767.elb.us-east-1.amazonaws.com:443',
    //   host: 'http://us-east-1.dev.pomwm.com:443/api',
    //   // host: 'http://localhost:9090',
    //   metadata: { Authorization: `Bearer ${token}` },
    //   onEnd: (res) => {
    //     const { status, statusMessage, headers, message, trailers } = res
    //     console.log('Resposta Wealth')
    //     console.log('Status: ', status)
    //     console.log(statusMessage)
    //     console.log(headers)
    //     console.log(trailers)

    //     setStatusMessage(statusMessage)

    //     if (status === grpc.Code.OK && message) {
    //       const resp = JSON.stringify(message.toObject())
    //       console.log('Deu certo: ', message.toObject())
    //       setResponse(resp)
    //     }
    //   },
    // })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div>
        <h2>Resultado Auth: {response}</h2>
        <h2>Status Auth: {statusMessage}</h2>
      </div>
      <div>
        <h2>Resultado Wealth: {responseWealth}</h2>
        <h2>Status Wealth: {statusMessageWealth}</h2>
      </div>
    </div>
  )
}

export default App

// React.useEffect(() => {
//   const client = new AlertServiceClient('http://localhost:9090/')
//   const request = new SendAlertRequest()

//   const notification = new Notification()
//   notification.setId('123asd45')
//   notification.setMessage('Testasdae')
//   notification.setSummary('12345asdasd')

//   request.setNotification(notification)

//   client.sendAlert(
//     request,
//     { Authorization: `Bearer ${token}` },
//     (err, response) => {
//       console.log('Error: ', err)
//       console.log('Response: ', response)
//     }
//   )
// }, [])

// VERSAO 2
// React.useEffect(() => {
//   const sendAlertRequest = new SendAlertRequest()
//   const notification = new Notification()
//   notification.setId('TesteID')
//   notification.setMessage('MENSAGEMMMM')
//   notification.setSummary('SUMARYYY')

//   sendAlertRequest.setNotification(new Notification())

//   grpc.unary(AlertService.SendAlert, {
//     request: sendAlertRequest,
//     // TODO - Este IP deve estar em uma variável de ambiente e estar protegida por um endereço com DNS
//     host: 'http://3.85.131.12:9090',
//     metadata: { Authorization: `Bearer ${token}` },
//     onEnd: (res) => {
//       const { status, statusMessage, headers, message, trailers } = res
//       console.log('Resposta')
//       console.log(statusMessage)
//       console.log(headers)
//       console.log(trailers)

//       if (status === grpc.Code.OK && message) {
//         console.log('Deu certo: ', message.toObject())
//       }
//     },
//   })
// }, [])
