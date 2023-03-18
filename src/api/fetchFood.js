export default async function fetchFood() {
	return fetch(
		`${input}?${new URLSearchParams({
			...query,
			appid: import.meta.env.VITE_SPOONCULAR_MENU_ITEM,
		}).toString()}`,
		init
	).then(async (res) => {
		data: await res.json(), res;
	});
}

export const fetchFoodTitle = async (food) => {
	return fetchFood(
		"https://api.spoonacular.com/food/menuItems/search?query=burger&number=2",
		undefined,
		{ query: food }
	);
};

// const fetchFood = async (name) => {
// 	await fetch(`https://api.spoonacular.com/food/menuItems/search?query=${name}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((err) => {
// 			throw err;
// 		});
// };
