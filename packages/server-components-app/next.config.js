//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNxnew } = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  nx: {
    projectRoot: __dirname,
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNxnew(nextConfig);
