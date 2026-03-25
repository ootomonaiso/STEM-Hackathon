import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import LatestEventContent, {
  frontMatter as latestEventFrontMatter,
} from '@site/news/2026-spring-announcement.md';

import styles from './index.module.css';

type LatestEventFrontMatter = {
  readonly title?: string;
  readonly slug?: string;
  readonly status?: string;
  readonly updated_at?: string | Date;
};

const latestEvent = latestEventFrontMatter as LatestEventFrontMatter;

const guideSteps = [
  '大会案内を読んで開催内容を確認する',
  '参加の手引きで申込フローを把握する',
  'DevDojo で必要な準備を短時間で進める',
];

function formatFrontMatterValue(value: string | Date | undefined): string {
  if (!value) {
    return '未設定';
  }

  return value instanceof Date ? value.toISOString().slice(0, 10) : value;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          <section className={styles.introPanel}>
            <div className={styles.labelRow}>
              <span className={styles.sectionLabel}>STEM-Hackathon</span>
              <span className={styles.termChip}>Spring 2026</span>
            </div>

            <Heading as="h1" className={styles.heroTitle}>
              最新大会を起点に、
              <br />
              準備が進むポータルへ。
            </Heading>

            <p className={styles.heroLead}>
              {siteConfig.tagline}
              {' '}
              次回開催の情報を最初に確認し、そのまま参加準備や学習へつながる構成にしています。
            </p>

            <div className={styles.actionRow}>
              <Link
                className={styles.primaryLink}
                to={`/docs${latestEvent.slug ?? '/news/spring-announcement'}`}>
                最新大会を見る
              </Link>
              <Link className={styles.secondaryLink} to="/docs/handbook/registration">
                参加準備を始める
              </Link>
            </div>

            <div className={styles.noteGrid}>
              {guideSteps.map((step, index) => (
                <article key={step} className={styles.noteCard}>
                  <p className={styles.noteIndex}>{String(index + 1).padStart(2, '0')}</p>
                  <p className={styles.noteText}>{step}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.eventPanel} aria-labelledby="latest-event-heading">
            <div className={styles.eventTopRow}>
              <span className={styles.eventEyebrow}>Latest Update</span>
              <span className={styles.eventStatus}>
                {latestEvent.status ?? '最新情報を公開中'}
              </span>
            </div>

            <Heading as="h2" id="latest-event-heading" className={styles.eventTitle}>
              {latestEvent.title ?? '最新大会情報'}
            </Heading>

            <p className={styles.eventDate}>
              最終更新: {formatFrontMatterValue(latestEvent.updated_at)}
            </p>

            <div className={styles.eventBody}>
              <LatestEventContent />
            </div>

            <div className={styles.eventActions}>
              <Link
                className={styles.eventPrimary}
                to={`/docs${latestEvent.slug ?? '/news/spring-announcement'}`}>
                開催案内ページへ
              </Link>
              <Link className={styles.eventSecondary} to="/docs/devdojo/github-git/basics">
                事前学習を見る
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="学生のためのハッカソン参加・学習ポータル">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
