module.exports = {
    apps: [
        {
            name: 'Commeta Hissa Landing',
            port: 3098,
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            args: 'preview',
        },
    ],
}
