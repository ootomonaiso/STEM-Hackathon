import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
  tone: 'paper' | 'ink' | 'accent';
};

const FeatureList: FeatureItem[] = [
  {
    id: '01',
    label: 'Entry',
    title: '参加の手引き',
    description: '申し込みから当日までの流れを、必要な順に追える入口です。',
    href: '/docs/handbook/registration',
    tone: 'paper',
  },
  {
    id: '02',
    label: 'Practice',
    title: 'DevDojo',
    description: 'GitHub・Git・生成AIの基礎を、ハッカソン準備の文脈で学べます。',
    href: '/docs/devdojo/github-git/basics',
    tone: 'ink',
  },
  {
    id: '03',
    label: 'Review',
    title: 'ハッカソン履歴',
    description: '過去大会の雰囲気やテーマを見て、今回のアイデアの参考にできます。',
    href: '/docs/history/2025/hackathon-spring',
    tone: 'accent',
  },
];

function FeatureCard({id, label, title, description, href, tone}: FeatureItem) {
  return (
    <article className={`${styles.card} ${styles[tone]}`}>
      <div className={styles.cardMeta}>
        <span className={styles.cardId}>{id}</span>
        <span className={styles.cardLabel}>{label}</span>
      </div>
      <Heading as="h2" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <Link className={styles.cardLink} to={href}>
        このカテゴリを開く
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Quick Paths</p>
          <Heading as="h2" className={styles.title}>
            情報を探すのではなく、次の行動をすぐ選べるように。
          </Heading>
        </div>
        <div className={styles.grid}>
          {FeatureList.map(feature => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
