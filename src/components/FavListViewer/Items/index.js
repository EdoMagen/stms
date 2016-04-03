import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class FavItems extends Component {

  static propTypes = {
    items: React.PropTypes.array,
    dispatch: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    const favItems = items.filter(function (item) {
      return item.isFav;
    });
    return (
      <div className={styles}>
        {!items.length &&
          <div>
            <span className="glyphicon glyphicon-bell"></span>
            <span>No data yet, go add favorites</span>
          </div>
        }
        {
        favItems.map((item, index) =>
          <div className="favorite col-xs-12 col-sm-12 col-md-6 col-lg-6" key={`${item.id}Fav`}>
            <div className="favorite-left">
              <a href={item.external_urls.spotify} target="_blank">
                <img className="favorite-object" src={item.images[0].url}/>
              </a>
              </div>
              <div className="favorite-body">
                <h3 className="favorite-heading">{item.name}</h3>
                <p>
                  <a href={item.external_urls.spotify} target="_blank">
                    <button type = "button" className = "btn btn-success btn-lg">Listen Now</button>
                  </a>
                </p>
              </div>
          </div>
        )
      }
      </div>
    );
  }
}
