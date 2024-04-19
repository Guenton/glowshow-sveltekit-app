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

export const alchemyTheme: CustomThemeConfig = {
	name: 'alchemy-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Manrope`,
		'--theme-font-family-heading': `Outfit`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #272266
		'--color-primary-50': '223 222 232', // #dfdee8
		'--color-primary-100': '212 211 224', // #d4d3e0
		'--color-primary-200': '201 200 217', // #c9c8d9
		'--color-primary-300': '169 167 194', // #a9a7c2
		'--color-primary-400': '104 100 148', // #686494
		'--color-primary-500': '39 34 102', // #272266
		'--color-primary-600': '35 31 92', // #231f5c
		'--color-primary-700': '29 26 77', // #1d1a4d
		'--color-primary-800': '23 20 61', // #17143d
		'--color-primary-900': '19 17 50', // #131132
		// secondary | #43B14A
		'--color-secondary-50': '227 243 228', // #e3f3e4
		'--color-secondary-100': '217 239 219', // #d9efdb
		'--color-secondary-200': '208 236 210', // #d0ecd2
		'--color-secondary-300': '180 224 183', // #b4e0b7
		'--color-secondary-400': '123 200 128', // #7bc880
		'--color-secondary-500': '67 177 74', // #43B14A
		'--color-secondary-600': '60 159 67', // #3c9f43
		'--color-secondary-700': '50 133 56', // #328538
		'--color-secondary-800': '40 106 44', // #286a2c
		'--color-secondary-900': '33 87 36', // #215724
		// tertiary | #FFC918
		'--color-tertiary-50': '255 247 220', // #fff7dc
		'--color-tertiary-100': '255 244 209', // #fff4d1
		'--color-tertiary-200': '255 242 197', // #fff2c5
		'--color-tertiary-300': '255 233 163', // #ffe9a3
		'--color-tertiary-400': '255 217 93', // #ffd95d
		'--color-tertiary-500': '255 201 24', // #FFC918
		'--color-tertiary-600': '230 181 22', // #e6b516
		'--color-tertiary-700': '191 151 18', // #bf9712
		'--color-tertiary-800': '153 121 14', // #99790e
		'--color-tertiary-900': '125 98 12', // #7d620c
		// success | #4F67AF
		'--color-success-50': '229 232 243', // #e5e8f3
		'--color-success-100': '220 225 239', // #dce1ef
		'--color-success-200': '211 217 235', // #d3d9eb
		'--color-success-300': '185 194 223', // #b9c2df
		'--color-success-400': '132 149 199', // #8495c7
		'--color-success-500': '79 103 175', // #4F67AF
		'--color-success-600': '71 93 158', // #475d9e
		'--color-success-700': '59 77 131', // #3b4d83
		'--color-success-800': '47 62 105', // #2f3e69
		'--color-success-900': '39 50 86', // #273256
		// warning | #F57C00
		'--color-warning-50': '254 235 217', // #feebd9
		'--color-warning-100': '253 229 204', // #fde5cc
		'--color-warning-200': '253 222 191', // #fddebf
		'--color-warning-300': '251 203 153', // #fbcb99
		'--color-warning-400': '248 163 77', // #f8a34d
		'--color-warning-500': '245 124 0', // #F57C00
		'--color-warning-600': '221 112 0', // #dd7000
		'--color-warning-700': '184 93 0', // #b85d00
		'--color-warning-800': '147 74 0', // #934a00
		'--color-warning-900': '120 61 0', // #783d00
		// error | #FF3333
		'--color-error-50': '255 224 224', // #ffe0e0
		'--color-error-100': '255 214 214', // #ffd6d6
		'--color-error-200': '255 204 204', // #ffcccc
		'--color-error-300': '255 173 173', // #ffadad
		'--color-error-400': '255 112 112', // #ff7070
		'--color-error-500': '255 51 51', // #FF3333
		'--color-error-600': '230 46 46', // #e62e2e
		'--color-error-700': '191 38 38', // #bf2626
		'--color-error-800': '153 31 31', // #991f1f
		'--color-error-900': '125 25 25', // #7d1919
		// surface | #0c0a1f
		'--color-surface-50': '219 218 221', // #dbdadd
		'--color-surface-100': '206 206 210', // #ceced2
		'--color-surface-200': '194 194 199', // #c2c2c7
		'--color-surface-300': '158 157 165', // #9e9da5
		'--color-surface-400': '85 84 98', // #555462
		'--color-surface-500': '12 10 31', // #0c0a1f
		'--color-surface-600': '11 9 28', // #0b091c
		'--color-surface-700': '9 8 23', // #090817
		'--color-surface-800': '7 6 19', // #070613
		'--color-surface-900': '6 5 15', // #06050f
	},
};
