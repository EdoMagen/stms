import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

const metaData = {
  title: 'Page Not Found',
  description: 'We have no idea where it went',
  canonical: 'http://stms.co.il/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: '404, not found, error',
    },
  },
};

export class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h1>
                404 Bro.
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
