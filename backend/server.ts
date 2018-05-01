import * as  jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'
import { handleAuthentication } from './auth'
import { handleAuthorization } from './authz'
/**tsc server.ts --watch || tsc -w*/
/**To run node ./server */
/**nodemon --watch backend .\backend\server.js */
const server: Express = jsonServer.create() as Express;
const router = jsonServer.router('../db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

//
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('../keys/cert.pem'),
  key: fs.readFileSync('../keys/key.pem'),
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on localhost:3001')
})
