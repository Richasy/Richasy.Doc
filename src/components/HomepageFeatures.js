import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '应用说明',
    Svg: require('../../static/img/undraw_richasy_report.svg').default,
    description: (
      <>
        界面设计得再优美，一旦复杂度上去，总会存在被用户忽略的功能点。为了能展示应用的全部功能，
        特在此发布应用的使用说明。
      </>
    ),
  },
  {
    title: '服务文档',
    Svg: require('../../static/img/undraw_richasy_data.svg').default,
    description: (
      <>
        我也提供了一些对外的服务，比如一些API，你同样可以在这里找到关于这些服务的详细文档说明。
      </>
    ),
  },
  {
    title: '公开文件',
    Svg: require('../../static/img/undraw_richasy_china.svg').default,
    description: (
      <>
        面对不同的国家和地区，不同的商店与服务，我总有一些需要对外公开的文件，你也可以在这个文档库中找到它们。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
