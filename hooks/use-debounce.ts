import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    debouncedUpdate();

    return () => {
      debouncedUpdate.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

// lodash.debounce este o funcție oferită de biblioteca Lodash și este folosită
// pentru limitarea frecvenței cu care o funcție este apelată.
// Mai exact, debounce se asigură că o funcție este apelată doar după ce a trecut
// un anumit interval de timp de la ultima execuție.
