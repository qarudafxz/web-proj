export default async function fetchFood() {
  return fetch(
    `${input}?${new URLSearchParams({
      ...query,
      appid: import.meta.env.VITE_SPOONCULAR_MENU_ITEM,
    }).toString()}`,
    init
  ).then(async (res) => {
    data: await res.json(),
    res,
  }));
}