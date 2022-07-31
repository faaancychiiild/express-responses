## custom express responses

### add dependency

```bash
#npm
$ npm i express-mocked-responses

#yarn
$ yarn add express-mocked-responses
```

### make use of

```typescript
import express, { Application, Router, Request, Response } from 'express'

import { SuccessResponse, ForbiddenException } from 'express-custom-responses1'

const app: Application = express()
const router = Router()

router.get('/healthcheck', (req: Request, res: Response) => {
  new SuccessResponse(res)
  /*
   * takes the required response argument and optional ones like so:
   * new SuccessResponse(res, body, status)
   */
})

router.post('/forbidden-path', (req: Request, res: Response) => {
  new ForbiddenException(res)
  /*
  * returns the same as res.status(403).json({
    message: 'Forbidden Attempt'
  })
  */
})

app.use(router)
```
