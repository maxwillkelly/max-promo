/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
