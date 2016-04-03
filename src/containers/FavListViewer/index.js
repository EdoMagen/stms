import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { FavItems } from 'components/FavListViewer/Items';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'SMTS | My favorites',
  description: 'Listen to any of your favorite albums',
  canonical: 'http://stms.co.il/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'spotify,react,redux,stms',
    },
  },
};

@connect(
  state => state.items,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class FavListViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
              <h1>
                Your favorites
              </h1>
            </div>
          </div>

          <div className="row">

            <FavItems {...this.props} />

          </div>
        </div>
      </section>
    );
  }
}
