import { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Your metadata
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode; // 👈 type children explicitly
}) {
  const pageMap = await getPageMap();
  const banner = (
    <Banner storageKey='engineering-journal-banner'>
      Welcome to Engineering Journal 🎉
    </Banner>
  );
  const navbar = (
    <Navbar
      logo={<b>Engineering Journal</b>}
      projectLink='https://github.com/dev641/engineering-journal'
    />
  );
  const footer = (
    <Footer style={{ textAlign: "center" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        {new Date().getFullYear()} © Engineering Journal.
      </div>
    </Footer>
  );

  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head>{/* Additional <meta> tags etc. */}</Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase='https://github.com/shuding/nextra/tree/main/docs'
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
