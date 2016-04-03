import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { FavList } from 'containers/FavList';
import { FavListViewer } from 'containers/FavListViewer';
import { NotFound } from 'containers/404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="list" component={FavList} />
      <Route path="listviewer" component={FavListViewer} />
      <Route status={404} path="*" component={NotFound} />
  </Route>
);
