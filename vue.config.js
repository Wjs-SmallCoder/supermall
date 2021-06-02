module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //这里的@ 指的是src
                "assets": "@/assets",
                "network": "@/network",
                "common": "@/common",
                "views": "@/views",
                "components": "@/components"
            }
        }
    }
}
