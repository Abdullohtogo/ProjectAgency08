module.exports = {
    apps: [
        {
            name: 'Satori Businiess Panel',
            port: 3102,
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            args: 'preview',
        },
    ],
}
