/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx}"],
	theme: {
		extend: {},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			tilt: ["Tilt Warp", "sans-serif"],
		},
		textColor: {
			primary: "#3d59ba",
			btnTextColor: "#0c1a8d",
			headColor: "#2b2b45",
		},
		backgroundColor: {
			primButton: "#d9ddf5",
		},
	},
	plugins: [],
};
