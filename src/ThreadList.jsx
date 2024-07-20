import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchThreads } from "./fetchThreads";
import { useContext } from "react";
import { ThreadContext } from "./ThreadProvider";

export const ThreadList = () => {
  const { threads, setThreads } = useContext(ThreadContext);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getThreads = async () => {
      const threadsData = await fetchThreads(offset);
      setThreads(threadsData);
    };
    getThreads();
  }, [offset]);

  return (
    <section className="thread-list">
      <h2>新着スレッド</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setOffset(offset + 10)}>次の10件</button>
    </section>
  );
};

export default ThreadList;
