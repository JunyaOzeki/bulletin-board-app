export const fetchThreads = async (offset = 0) => {
  const response = await fetch(
    `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};
