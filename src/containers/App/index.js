import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* general components */
import { Header } from 'components/General/Header';
import { Footer } from 'components/General/Footer';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
