import nextra from "nextra";
import NextBundleAnalyzer from "@next/bundle-analyzer";
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
  contentDirBasePath: "/",
});

const withNextBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withNextBundleAnalyzer(
  withNextra({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    ...(process.env.BUILD_STANDALONE && {
      output: "standalone",
    }),
  })
);
