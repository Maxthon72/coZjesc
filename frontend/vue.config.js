const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,

    // Wyłączanie proxy
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', // Adres backendu
                changeOrigin: true,
                secure: false, // Ustaw na `true`, jeśli backend ma certyfikat SSL
            },
        },
    },


    // Debugowanie i źródła map
    configureWebpack: {
        devtool: 'source-map', // Umożliwia łatwe debugowanie
    },

    // Ewentualne ustawienia dla ikon Vuetify
    pluginOptions: {

    },
})