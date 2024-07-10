// src/ThreadList.js
import React, { useEffect, useState } from "react";
import { fetchThreads } from "./fethchThread";

export const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getThreads = async () => {
      const threadsData = await fetchThreads(offset);
      console.log(threadsData);
      setThreads(threadsData);
    };
    getThreads();
  }, [offset]);

  return (
    <section className="threads">
      <h2>新着スレッド</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
      <button onClick={() => setOffset(offset + 10)}>次の10件</button>
    </section>
  );
};

export default ThreadList;
