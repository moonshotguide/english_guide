/* @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      //Min Width
      'android': '320px',
      // => @media (min-width: 320px) { ... }
      'androidWeb': '419px',
      // => @media (min-width: 320px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... } 
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }      
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      //Max Width
      'maxandroid': {'max': '418px'},
      // => @media (max-width: 639px) { ... }
      'maxtablet': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'maxmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'maxlaptop': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'maxdesktop': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'max2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    },
    extend: {
      margin: {
        320: "320px",
      },
      width: {
        190: "190px",
        200: "200px",
        236: "236px",
        240: "240px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
        'fill_available': "-webkit-fill-available",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      flex: {
        0.7: "0.7 1 0%",
      },
      maxHeight: {
        370: "370px",
        450: "450px",
        "heightImg": "calc(100vh - (24px + 24px + 4px + 4px + 8px + (48px + 20px + 12px)))",
      },
      maxWidth: {
        370: "370px",
        "widthImg": "calc(100vw)",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        'sd-moon': '#05070A',
        'sd-moon-from': '#005c793d',
        'sd-moon-to': '#1a00283d',
        'sd-button': '#19112c',
        'sd-button-from': '#ae3f3780',
        'sd-button-to': '#16568780',
        'sd-button-text': '#E8CDF5',

        // GH light mode
        'gh_l_text_primary':'#000000',
        'gh_l_button_hover':'#536E88',
        'gh_l_button_text':'#24292f',
        // background
        'gh-l-bg-primary':'#F6F8FA',
        'gh-l-bg-default':'#fff',
        'gh-l-bg-secondary':'#C2D1E0',
        'gh_l_bg_button':'#6588A9',

        // GH dark mode
        'gh_text_primary':'#FFFFFF',
        'gh_button_hover':'#0369a1',
        'gh_button_text':'#FFFFFF',
        // background
        'gh-bg-primary': '#161b22',
        'gh-bg-default': '#0d1117',
        'gh-bg-secondary': '#010409',
        'gh_bg_button':'#0ea5e9',
        //dark
        'gh_btn_primary':'#262b40',
        'gh_btn_primary_hover':'#1d2030',
        'gh_btn_alternative':'#1E40AF',
        'gh_btn_alternative_hover':'#2563EB',


        // Golden dark mode
        'gold_text_primary':'#FFFFFF',
        'gold_button_hover':'#0369a1',
        'gold_button_text':'#FFFFFF',
        // background
        'gold-bg-primary': '#161b22',
        'gold-bg-default': '#0d1117',
        'gold-bg-secondary': '#010409',
        'gold_bg_button':'#0ea5e9',
        //dark
        'gold_btn_primary':'#262b40',
        'gold_btn_primary_hover':'#1d2030',
        'gold_btn_alternative':'#744113',
        'gold_btn_alternative_hover':'#a27432',
        //light
        'l_gold_btn_primary':'#f2f4f6',
        'l_gold_btn_primary_hover':'#e3e7ec',
        'l_gold_btn_alternative':'#7e5a27',
        'l_gold_btn_alternative_hover':'#4e2c0c',
        'l_gold_primary':'#F0F3FE',
        'l_gold_default':'#E4E8F4',


        // SD light mode
        'sd_l_text_primary':'#000000',
        'sd_l_button_hover':'#a62828',
        'sd_l_button_text':'#fff',
        // background
        'sd_l_bg_primary':'#e5e5e5',
        'sd_l_bg_primary_2':'#c7c7c7',
        'sd_l_bg_default':'#fff',
        'sd_l_bg_secondary':'#000000',
        'sd_l_bg_button':'#F03200',
        //light
        'sd_btn_primary':'#f2f4f6',
        'sd_btn_primary_hover':'#e3e7ec',
        'sd_btn_alternative':'#F03200',
        'sd_btn_alternative_hover':'#a91636'



      },
      // backgroundImage: {
      //   'hero-pattern': "url('./assets/box.svg')"
      // },
      textColor: {
        lightGray: "#F1EFEE",
        primary: "#FAFAFA",
        secColor: "#efefef",
        navColor: "#BEBEBE",
        light: "#1f2937",
      },
      backgroundColor: {
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      boxShadow: {
        'primary': 'inset 0 1px 0 hsl(0deg 0% 100% / 15%), 0 1px 1px rgb(17 24 39 / 8%)',
        'active': 'inset 0 4px 6px rgb(17 24 39 / 25%)',
      },
      borderWidth: {
        'default' : '0.0625rem',
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};