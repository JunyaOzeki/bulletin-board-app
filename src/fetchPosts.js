// fetchPosts.js

export const fetchPosts = async (threadId, offset = 0) => {
  const response = await fetch(
    `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts?${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};
