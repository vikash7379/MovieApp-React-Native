import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function useDebounce( value, delay ){
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return ()=>clearTimeout(timer)

  }, [value]);

  return debounceValue;
};
