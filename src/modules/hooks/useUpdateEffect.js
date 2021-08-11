import React, { useEffect, useRef } from "react"

function useUpdateEffect (effect, dependencies = [])  {
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}

export default useUpdateEffect;