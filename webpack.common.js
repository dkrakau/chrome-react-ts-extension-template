const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        popup: path.resolve('./src/index.tsx'),
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
            },
            {
                use: 'asset/resource',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/manifest.json'),
                    to: path.resolve('dist'),
                },
                {
                    from: path.resolve('src/assets/'),
                    to: path.resolve('dist'),
                }
            ]
        }),
        ...getHtmlPlugins([
            'popup',
            'options'
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: chunk,
        filename: `${chunk}.html`,
        chunks: [chunk],
    }))
}