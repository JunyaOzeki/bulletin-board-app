// Contextを利用したグローバルStateの管理

import { createContext, useState } from "react";

export const ThreadContext = createContext({});

export const ThreadProvider = (props) => {
  const { children } = props;
  const [threads, setThreads] = useState([]);

  return (
    <ThreadContext.Provider value={{ threads, setThreads }}>
      {children}
    </ThreadContext.Provider>
  );
};
