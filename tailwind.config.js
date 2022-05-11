module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
      extend: {
        colors: {
          gray: {
            150: "#EFEFEF",
            160: "#CCCCCC",
          },
          violet: "#A194FE",
          bgviolet: "#8147FF",
          bgred: "#FD8D32",
          bgorange: "#FDCB5C",
          green: "#26DA38",
          bggreen: "#E5FEE6",
          white: "#FFFFFF",
          red: "#F40D26"
        },
        fontFamily: {
          'logo': ['Shojumaru', 'cursive'],
          'qr': ['Vampiro One', 'cursive']
        },
        screens:{
          "3xl": "1600px",
        }
      },
      colors: {
        gray: {
          200: "#949494"
        }
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
    },  
    plugins: [],
    
}