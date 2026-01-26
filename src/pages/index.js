import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import pic from "../../static/img/spike.jpg";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img width={300} src={pic} style={{ borderRadius: "50%" }} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            进入博客 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Sexxion个人网站`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <title>Sexxion个人网站</title>
        <meta property="og:title" content="Sexxion个人网站" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
