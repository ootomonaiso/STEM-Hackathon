import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroKicker}>STEM-Hackathon</p>
        <Heading as="h1" className={styles.heroTitle}>
          つくる力を、仲間と磨く。
        </Heading>
        <p className={styles.heroSubtitle}>
          参加の手引き、過去の記録、DevDojo の学習コンテンツを一箇所にまとめました。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/handbook/registration">
            参加の手引きを読む
          </Link>
          <Link className="button button--primary button--lg" to="/docs/devdojo/github-git/basics">
            DevDojo で学ぶ
          </Link>
        </div>
        <p className={styles.heroNote}>最終更新: 2026-03-25</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="学生のためのハッカソン参加・学習ポータル">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
