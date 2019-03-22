import { createContext } from 'react';

const Context = createContext({
    domain: 'undefined',
    isServer: 'no'
});

export default Context;
