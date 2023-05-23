/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-livvic)',
				serif: 'var(--font-spectral)',
			},

			colors: {
				'pa-red-1': '#F7EDE8',
				'pa-red-2': '#D6A287',
				'pa-red-3': '#B65E38',
				'pa-red-4': '#A73D1C',
				'pa-teal-1': '#EEF3F6',
				'pa-teal-2': '#95C1D3',
				'pa-teal-3': '#0097B4',
				'pa-teal-4': '#0088A7',
				'pa-blue-1': '#EDEDF0',
				'pa-blue-2': '#969FB5',
				'pa-blue-3': '#456486',
				'pa-blue-4': '#054F73',
				'pa-navy-1': '#E6E7EB',
				'pa-navy-2': '#7E8B9F',
				'pa-navy-3': '#254660',
				'pa-navy-4': '#002C49',
				'pa-green-1': '#EFF0EC',
				'pa-green-2': '#AAB89D',
				'pa-green-3': '#68885A',
				'pa-green-4': '#49763E',
				'pa-gold-1': '#F7F3EF',
				'pa-gold-2': '#D6C4AA',
				'pa-gold-3': '#B6986C',
				'pa-gold-4': '#A98551',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
