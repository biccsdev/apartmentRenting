module.exports = {
    plugins: [
        'postcss-flexbugs-fixes',
        'postcss-preset-env',
        [
            'tailwindcss',
            {
                // The following line is optional and can be used to configure the path to your Tailwind config file
                config: './tailwind.config.js',
            },
        ],
    ],
};
