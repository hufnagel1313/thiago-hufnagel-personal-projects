/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        "./**/*.{html,js}", 
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            width: {
                '4.5': '1.125rem', // 18px
                '7.5': '1.875rem', // 30px
                '13': '3.125rem', // 50px
                '15': '3.75rem', // 60px
                '18': '4.5rem', // 72px
            },
            height: {
                '4.5': '1.125rem', // 18px
                '7.5': '1.875rem', // 30px
                '13': '3.125rem', // 50px
                '15': '3.75rem', // 60px
                '18': '4.5rem', // 72px
            },
            padding: {
                '4.5': '1.125rem', // 18px
                '7.5': '1.875rem', // 30px
                '13': '3.125rem', // 50px
                '15': '3.75rem', // 60px
                '18': '4.5rem', // 72px
            },
            margin: {
                '4.5': '1.125rem', // 18px
                '7.5': '1.875rem', // 30px
                '13': '3.125rem', // 50px
                '15': '3.75rem', // 60px
                '18': '4.5rem', // 72px
            },
            spacing: {
                '4.5': '1.125rem', // 18px
                '7.5': '1.875rem', // 30px
                '13': '3.125rem', // 50px
                '15': '3.75rem', // 60px
                '18': '4.5rem', // 72px
            },
            fontFamily: {
                sans:[
                    "Proxima Nova"
                ],
                sarabun: [
                    "Sarabun",
                ],
                fontAwesome: [ 
                    '"Font Awesome 5 Pro"'
                ]
            },
            lineHeight: {
                '1.15': '1.15',
                '1.27': '1.27',
                '1.7': '1.7',
            },
            colors: {
                'primary': 'var(--primaryColor)',
                'secondary': 'var(--secondaryColor)',
                'salmon': 'var(--salmon)',
                'olive': 'var(--olive)',
                'dark': 'var(--dark)',
                'color_dark': 'var(--text-color_dark)'
            },
            animation: {
                preloader: 'preloader_spin .8s ease infinite',
            },
            keyframes: {
                preloader_spin: {
                    'to': {
                        transform: 'rotate(360deg)'
                    }
                },
            },
            zIndex: {
                '9999': '9999',
                '1024': '1024',
            }
        },
    },
    plugins: [
        [require("tw-elements/dist/plugin")],
    ],
}