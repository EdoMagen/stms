import React, { Component } from 'react';
import { DataTable } from 'react-data-components';

/* component styles */
import { styles } from './styles.scss';

export class Items extends Component {

  static propTypes = {
    items: React.PropTypes.array,
    delItem: React.PropTypes.func,
    favItem: React.PropTypes.func,
    dispatch: React.PropTypes.func,
    sortBy: React.PropTypes.string,
    sortByAscending: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  onDelete = (event) => {
    event.preventDefault();
    const index = event.currentTarget.dataset.index;
    this.props.delItem(index);
  };

  onFav = (event) => {
    event.preventDefault();
    const index = event.currentTarget.dataset.index;
    this.props.favItem(index);
  };

  render() {
    const { items } = this.props;
    const renderAlbumCover =
      (val, row) =>
      <img src={row.images[0].url}/>;

    const renderFavButton =
      (val, row) =>
        <button
          type="button"
          className= {'btn btn-default btn-lg ' + (row.isFav ? 'fav' : '') }
          data-index={row.id}
          onClick={this.onFav}>
          <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Like
        </button>;

    const columns = [
      { title: 'Favorite', prop: 'isFav', render: renderFavButton },
      { title: 'Name', prop: 'name' },
      { title: 'Album Cover', prop: 'id', render: renderAlbumCover, className: 'cover' }];

    return (
      <div className={styles}>
        {!items.length && <span>No album data yet, click something</span>}
        <DataTable
          className="container datatable"
          keys={ ['id'] }
          columns={columns}
          initialData={items}
          initialPageLength={20}
          initialSortBy={{ prop: this.props.sortBy, order: 'ascending' }}
          pageLengthOptions={[5, 20, 50]}
          />
        </div>
    );
  }
}
