export default (cache, current, key) => {
  const cacheKeys = Object.keys(cache[key]);
  const currentKeys = Object.keys(current[key]);
  for (let y in cacheKeys) {
    let cacheVal = cache[key][cacheKeys[y]];
    const currentVal = current[key][currentKeys[y]];

    if (isNotEqual(cacheVal, currentVal)) {
      if (cacheVal === "") {
        cacheVal = "null";
      }
      console.group("DIFF");
      console.log("diffff", cacheKeys[y], cacheVal, "==>", currentVal);
      console.groupEnd();
    }
  }
};
