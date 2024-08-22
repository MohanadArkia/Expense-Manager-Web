/** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;

import withPurgeCSSModules from "next-purge-css-modules";

export default withPurgeCSSModules({
  purgeCss: {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ["html", "body"],
  },
});
