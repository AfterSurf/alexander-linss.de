/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: 'export',
  images: {
      unoptimized: true,
  },
};

export default nextConfig;