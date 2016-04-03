import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { TopImage } from 'components/Home/TopImage';
import { Tools } from 'components/Home/Tools';

const metaData = {
  title: 'SMTS | Example project',
  description: 'Example project with react-redux architecture',
  canonical: 'http://stms.co.il/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'spotify,react,redux,stms',
    },
  },
};

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Tools />
      </section>
    );
  }
}
