import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import { emitFetchItems } from '../../../actions/items';


/* component styles */
import { styles } from './styles.scss';

export class CallApiButton extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    fields: React.PropTypes.object.isRequired,
    items: React.PropTypes.array,
    addItem: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onAdd = (event) => {
    if (this.props.fields.name.value) {
      /* add item*/
      this.props.addItem(this.props.fields);

      /* reset form */
      this.props.dispatch(reset('addItem'));
    }
    event.preventDefault();
  };

  onRequestItems = (event) => {
    event.preventDefault();
    this.props.dispatch(emitFetchItems('0k17h0D3J5VfsdmQ1iZtE9'));
  };

  render() {
    return (
      <form className={styles} onSubmit={this.onAdd}>
        <div className="form-group">
          <button className="btn btn-lg btn-info" onClick={this.onRequestItems}>Request Items from API (Async)</button>
        </div>
      </form>
    );
  }
}

CallApiButton = reduxForm({
  form: 'addItem',
  fields: ['name'],
  destroyOnUnmount: false,
})(CallApiButton);

export default CallApiButton;
