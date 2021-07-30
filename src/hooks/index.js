import { useEffect, useRef } from "react";

const useUpdateEffect = (effect, dependencies = []) => {
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}

export {
  useUpdateEffect,
}