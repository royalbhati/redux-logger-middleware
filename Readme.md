# Basic implementation of redux-logger

## Usage

```javascript
import createLogger from "logger";
import { applyMiddleware, compose } from "redux";

const middlewareList = [];
let stateCache = {};
if (!isProd) {
  middlewareList.push(createLogger(true)); // diff ==true
  // make it false if dont want to diff the state
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
```

## Note

> This is Not a library or a package, it just a simple implemntation of redux-logger for learning purpose.
