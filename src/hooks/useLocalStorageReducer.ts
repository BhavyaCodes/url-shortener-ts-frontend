import { useReducer, useEffect } from "react";

function useLocalStorageReducer(
  key: string,
  defaultVal: any,
  reducer: () => {}
) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)!) || defaultVal;
    } catch (error) {
      value = defaultVal;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
