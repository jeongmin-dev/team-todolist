import { useCallback, useState } from "react";

function useInputs(initialState) {
  // {text:"",input:""}
  const [inputs, setInputs] = useState(initialState);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => setInputs(initialState), [initialState]);

  return { inputs, onChange, reset };
}

export default useInputs;
