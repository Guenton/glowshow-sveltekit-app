import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const alchemyColors = {
	'alchemy-primary': '#272266',
	'alchemy-secondary': '#43B14A',
	'alchemy-tertiary': '#FFC918',
	'alchemy-success': '#4F67AF',
	'alchemy-warning': '#F57C00',
	'alchemy-error': '#FF3333',
	'alchemy-surface': '#0c0a1f',
	'alchemy-surface-light': '#ceced2',
	'alchemy-surface-dark': '#06050f',
};

export const glowshowTheme: CustomThemeConfig = {
	name: 'glowshow-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Raleway`,
		'--theme-font-family-heading': `SourceSans3`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #FBB040
		'--color-primary-50': '254 243 226', // #fef3e2
		'--color-primary-100': '254 239 217', // #feefd9
		'--color-primary-200': '254 235 207', // #feebcf
		'--color-primary-300': '253 223 179', // #fddfb3
		'--color-primary-400': '252 200 121', // #fcc879
		'--color-primary-500': '251 176 64', // #FBB040
		'--color-primary-600': '226 158 58', // #e29e3a
		'--color-primary-700': '188 132 48', // #bc8430
		'--color-primary-800': '151 106 38', // #976a26
		'--color-primary-900': '123 86 31', // #7b561f
		// secondary | #0F0A0A
		'--color-secondary-50': '219 218 218', // #dbdada
		'--color-secondary-100': '207 206 206', // #cfcece
		'--color-secondary-200': '195 194 194', // #c3c2c2
		'--color-secondary-300': '159 157 157', // #9f9d9d
		'--color-secondary-400': '87 84 84', // #575454
		'--color-secondary-500': '15 10 10', // #0F0A0A
		'--color-secondary-600': '14 9 9', // #0e0909
		'--color-secondary-700': '11 8 8', // #0b0808
		'--color-secondary-800': '9 6 6', // #090606
		'--color-secondary-900': '7 5 5', // #070505
		// tertiary | #F24333
		'--color-tertiary-50': '253 227 224', // #fde3e0
		'--color-tertiary-100': '252 217 214', // #fcd9d6
		'--color-tertiary-200': '252 208 204', // #fcd0cc
		'--color-tertiary-300': '250 180 173', // #fab4ad
		'--color-tertiary-400': '246 123 112', // #f67b70
		'--color-tertiary-500': '242 67 51', // #F24333
		'--color-tertiary-600': '218 60 46', // #da3c2e
		'--color-tertiary-700': '182 50 38', // #b63226
		'--color-tertiary-800': '145 40 31', // #91281f
		'--color-tertiary-900': '119 33 25', // #772119
		// success | #256EFF
		'--color-success-50': '222 233 255', // #dee9ff
		'--color-success-100': '211 226 255', // #d3e2ff
		'--color-success-200': '201 219 255', // #c9dbff
		'--color-success-300': '168 197 255', // #a8c5ff
		'--color-success-400': '102 154 255', // #669aff
		'--color-success-500': '37 110 255', // #256EFF
		'--color-success-600': '33 99 230', // #2163e6
		'--color-success-700': '28 83 191', // #1c53bf
		'--color-success-800': '22 66 153', // #164299
		'--color-success-900': '18 54 125', // #12367d
		// warning | #9046CF
		'--color-warning-50': '238 227 248', // #eee3f8
		'--color-warning-100': '233 218 245', // #e9daf5
		'--color-warning-200': '227 209 243', // #e3d1f3
		'--color-warning-300': '211 181 236', // #d3b5ec
		'--color-warning-400': '177 126 221', // #b17edd
		'--color-warning-500': '144 70 207', // #9046CF
		'--color-warning-600': '130 63 186', // #823fba
		'--color-warning-700': '108 53 155', // #6c359b
		'--color-warning-800': '86 42 124', // #562a7c
		'--color-warning-900': '71 34 101', // #472265
		// error | #BA1B1D
		'--color-error-50': '245 221 221', // #f5dddd
		'--color-error-100': '241 209 210', // #f1d1d2
		'--color-error-200': '238 198 199', // #eec6c7
		'--color-error-300': '227 164 165', // #e3a4a5
		'--color-error-400': '207 95 97', // #cf5f61
		'--color-error-500': '186 27 29', // #BA1B1D
		'--color-error-600': '167 24 26', // #a7181a
		'--color-error-700': '140 20 22', // #8c1416
		'--color-error-800': '112 16 17', // #701011
		'--color-error-900': '91 13 14', // #5b0d0e
		// surface | #0F0A0A
		'--color-surface-50': '219 218 218', // #dbdada
		'--color-surface-100': '207 206 206', // #cfcece
		'--color-surface-200': '195 194 194', // #c3c2c2
		'--color-surface-300': '159 157 157', // #9f9d9d
		'--color-surface-400': '87 84 84', // #575454
		'--color-surface-500': '15 10 10', // #0F0A0A
		'--color-surface-600': '14 9 9', // #0e0909
		'--color-surface-700': '11 8 8', // #0b0808
		'--color-surface-800': '9 6 6', // #090606
		'--color-surface-900': '7 5 5', // #070505
	},
};
