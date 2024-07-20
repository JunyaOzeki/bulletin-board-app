import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "./fetchPosts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThreadContext } from "./ThreadProvider";

export const PostList = () => {
  const { threads } = useContext(ThreadContext);
  const { thread_id } = useParams(); // URLパラメータからthread_idを取得
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [threadTitle, setThreadTitle] = useState(""); // スレッドのタイトルを保持する状態
  const [newPostContent, setNewPostContent] = useState(""); // 新規投稿の内容を保持する状態
  const navigate = useNavigate(); // React Routerのナビゲーションを利用するためのフック

  useEffect(() => {
    // 投稿データを取得
    const getPosts = async () => {
      const response = await fetchPosts(thread_id, offset);
      setPosts(response.posts);
    };
    getPosts();

    // スレッドタイトルを取得
    const thread = threads.find((t) => t.id === thread_id);
    if (thread) {
      setThreadTitle(thread.title);
    }
  }, [thread_id, offset, threads]);

  // フォームの送信時の処理
  const handlePostSubmit = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信をキャンセル

    // APIにPOSTリクエストを送信して新しいスレッドを作成
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post: newPostContent }),
        }
      );

      if (!response.ok) {
        throw new Error("作成に失敗しました。");
      }

      setNewPostContent(""); // フォームをリセット

      // 投稿が成功した場合、投稿リストを更新するために新しい投稿を取得
      const updatedPosts = await fetchPosts(thread_id, offset);
      setPosts(updatedPosts.posts);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <section className="post-list">
      <h2>{threadTitle}</h2>
      <ul className="posts">
        {posts.map((post) => (
          <li className="post" key={post.id}>
            {post.post}
          </li>
        ))}
      </ul>
      <div className="new-post">
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="投稿しよう！"
            required
          ></textarea>
          <button type="submit" disabled={newPostContent.trim() === ""}>
            投稿
          </button>
        </form>
      </div>
    </section>
  );
};
