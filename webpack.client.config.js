const webpack = require(webpack);

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            PIVOTAL_TRACKER_API_TOKEN: JSON.stringify(process.env.PIVOTAL_TRACKER_API_TOKEN)
        })
    ]
}