const css = "color: #fc6d11e3; font-weight: bold; font-size:13px";
const createLogger = (diff = false) => ({ getState }) => next => action => {
  console.group(action.type);
  console.log(" type :  %c %s ", css, action.type);
  console.log(" payload :", { ...action.payload });
  console.log(" state :", getState());
  console.groupEnd();
  if (diff) {
    const stateObj = getState();
    const keys = Object.keys(stateObj);
    for (let x in keys) {
      if (stateCache[keys[x]]) {
        doComaprison(stateCache, stateObj, keys[x]);
      } else {
        stateCache[keys[x]] = stateObj[keys[x]];
      }
    }
  }
  next(action);
};

export default createLogger;
