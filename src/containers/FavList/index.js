import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/FavList/Items';
import { CallApiButton } from 'components/FavList/CallApiButton';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'STMS | Spotify favorites',
  description: 'Pick your favorite albums and add them to your favorites.',
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
export class FavList extends Component {
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
                Spotify Favorite Picker
              </h1>
            </div>
          </div>

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <CallApiButton {...this.props} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Items {...this.props} />
            </div>


          </div>
        </div>
      </section>
    );
  }
}
