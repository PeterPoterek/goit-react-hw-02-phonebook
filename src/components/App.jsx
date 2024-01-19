import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
  });

  return <>App</>;
};
