import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewThread = () => {
  const [title, setTitle] = useState(""); // スレッドタイトルの状態管理
  const navigate = useNavigate(); // React Routerのナビゲーションを利用するためのフック

  // フォームの送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信をキャンセル

    // APIにPOSTリクエストを送信して新しいスレッドを作成
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title }),
        }
      );

      if (!response.ok) {
        throw new Error("スレッドの作成に失敗しました。");
      }

      // スレッドの作成が成功したらトップページに戻る
      navigate("/");
    } catch (error) {
      console.error("Error creating thread:", error);
      // エラーが発生した場合に適切な処理を記述（例: エラーメッセージをユーザーに表示するなど）
    }
  };

  return (
    <section className="new-thread">
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // タイトル入力時にstateを更新
          placeholder="スレッドタイトル"
          required
        />
        <div>
          <button type="button" onClick={() => navigate("/")}>
            Topに戻る
          </button>
          <button type="submit">作成</button>
        </div>
      </form>
    </section>
  );
};

export default NewThread;
