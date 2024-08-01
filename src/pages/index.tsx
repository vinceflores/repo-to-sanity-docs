import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipBoard = () => {
    navigator.clipboard
      .writeText(
        `
         npm i repos-to-sanity @octokit/graphql @sanity/client
          @tanstack/react-query 
    `
      )
      .then(() => {
        setCopied(true);
      });
  };
  useEffect(() => {
    if (!hover) {
      setCopied(false);
    }
  }, [hover]);

  return (
    <header className={clsx("hero hero--primary bg-transparent", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text-black dark:text-white">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-black dark:text-white">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary dark:bg-white bg-purple-300 button--lg"
            to="/docs/Quickstart/Installation"
          >
            QuickStart
          </Link>
        </div>
        <div
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          className="bg-black relative my-3 rounded-lg mx-auto text-sm font-mono line-clamp-1 text-white  w-[90%] md:w-1/3 text-nowrap p-3 overflow-scroll"
        >
          npm i repos-to-sanity @octokit/graphql @sanity/client
          @tanstack/react-query
          <button
            hidden={!hover}
            onClick={() => setCopied(!copied)}
            className="sticky p-1 right-0 cursor-pointer border-none hover:scale-125 rounded-md bg-gray-500 text-white "
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
