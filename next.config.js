/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@components/*": ["src/components/*"],
            "@context/*": ["src/context/*"],
            "@hooks/*": ["src/hooks/*"],
            "@mocks/*": ["src/mocks/*"],
            "@queries/*": ["src/queries/*"],
            "@styles/*": ["src/styles/*"],
            "@types/*": ["src/types/*"]
        }
        // ... omitted for brevity
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "/app/var.scss";`
    },
    // ... omitted for brevity
}

module.exports = nextConfig