---
applyTo: "server/**,api/**,backend/**,**/*.mjs,**/server.ts,**/server.js"
---

# Senior Express / Node.js Backend Skill

Use this skill for **production-ready Express backends**: **routing** (Router, mount paths), **middleware** (order, next), **async error handling** (next(err), async/await, Express 5), **error-handling middleware** (4-arg), **security** (Helmet, CORS), **validation** (express-validator), and **production** (NODE_ENV, performance).

## Stack Rules

- **Async errors**: In async route handlers, let rejected promises propagate (Express 5 handles them) or call **next(err)** in catch. In callback-based code, pass errors to **next(err)** so they reach error-handling middleware.
- **Error-handling middleware**: Define with **four arguments** (err, req, res, next); place after other routes/middleware; send appropriate status and body; log or report errors.
- **Security**: Use **Helmet** for security headers; configure **CORS** explicitly (avoid broad `origin: '*'` with credentials).
- **Validation**: Validate and sanitize input with **express-validator** (body, query, param, etc.) before business logic; respond with 400 and validation errors on failure.
- **Production**: Set **NODE_ENV=production**; use process manager (e.g. systemd, PM2); don't rely on dev-only middleware in prod.

## 1. Routing and Router

- **express.Router()**: Mini-app for grouping routes; use **router.get/post/put/delete**(path, ...handlers); mount with **app.use('/basePath', router)**.
- **router.use(path?, middleware)**: Mount middleware (or sub-routers) at path.
- **Router options**: `{ mergeParams: true }` to preserve parent req.params; `{ strict: true }` so '/foo' and '/foo/' differ; `caseSensitive` for path matching.

```javascript
const router = express.Router({ mergeParams: true });
router.get('/users/:id', (req, res) => res.send('User: ' + req.params.id));
app.use('/api', router);
```

## 2. Middleware and next

- **Signature**: (req, res, next) => { ...; next(); }. Call **next()** to continue; **next(err)** to pass error to error-handling middleware.
- **Order**: Middleware and routes are executed in definition order. Put body parser, CORS, auth, then routes; error handler last.
- **Async in middleware**: Use async functions or return Promises; Express 5 forwards rejections to error handler.

## 3. Async and error handling

- **Express 5**: Route/handler that **returns a rejected Promise** (or throws in async) is handled by passing the rejection to the next error-handling middleware.
- **Express 4**: In async handlers, use try/catch and **next(err)** in catch, or **.catch(next)** on the promise.
- **Error-handling middleware**: Must have **four parameters** (err, req, res, next). Place after all other app.use and routes.

```javascript
app.get('/', async (req, res, next) => {
  const data = await getUserData();
  res.send(data);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status ?? 500).send({ error: err.message });
});
```

## 4. Security

- **Helmet**: `app.use(require('helmet')())` to set security-related HTTP headers.
- **CORS**: Use **cors** middleware; set **origin** to specific origins or a function (not `'*'` when using credentials).
- **Input**: Never trust req.body/query/params without validation and sanitization.

## 5. Validation (express-validator)

- **body(fields?)**, **query(fields?)**, **param(fields?)**: Create validation chains. Chain validators (e.g. .isEmail(), .notEmpty(), .isLength({ min: 8 })), then use **validationResult(req)**.

```javascript
const { body, validationResult } = require('express-validator');
app.post('/users', body('email').isEmail(), body('username').isLength({ min: 2 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  // ...
});
```

## 6. Production and performance

- **NODE_ENV**: Set to **"production"** in production.
- **view cache**: Enabled by default in production.
- **Logging**: Use a proper logger (e.g. Winston, Pino); don't log sensitive data.
- **Process manager**: Run with systemd, PM2, or similar.

## Quick reference

| Need | Use |
|------|-----|
| Route group | express.Router(), app.use('/api', router) |
| Async errors | async handler + next(err) in catch, or let reject (Express 5) |
| Error handler | app.use((err, req, res, next) => { ... }) — 4 args, last |
| Security headers | app.use(helmet()) |
| CORS | app.use(cors({ origin: allowedOrigins, credentials: true })) |
| Validate body | body('field').isEmail() etc., validationResult(req) |
| Production | NODE_ENV=production; process manager |
