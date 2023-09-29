/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "/src/app/var.scss";`
    },
    // ... omitted for brevity
}

module.exports = nextConfig