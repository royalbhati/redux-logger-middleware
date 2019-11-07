export const isNotEqual = (a, b) => {
  if (a && b) {
    if (typeof a === "object" && typeof b === "object") {
      if (Object.entries(a).length === 0 && Object.entries(b).length === 0) {
        return true;
      }
    } else if (a !== b) {
      return true;
    }
  }
  return false;
};
