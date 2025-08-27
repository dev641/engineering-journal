import nextra from "nextra";
import NextBundleAnalyzer from "@next/bundle-analyzer";
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
});

const withNextBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withNextBundleAnalyzer(
  withNextra({
    reactStrictMode: true,
    ...(process.env.BUILD_STANDALONE && {
      output: "standalone",
    }),
  })
);
