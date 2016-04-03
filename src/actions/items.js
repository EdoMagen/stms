import Spotify from 'spotify-web-api-js';

// Initialize Spotify object
const spotify = new Spotify();

export const ADD_ITEM = 'ADD_ITEM';
export function addItem(fields) {
  return {
    type: ADD_ITEM,
    fields,
  };
}

export const DELETE_ITEM = 'DELETE_ITEM';
export function delItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
function requestItems(artist) {
  return {
    type: REQUEST_ITEMS,
    artist,
  };
}

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
function receiveItems(artist, json) {
  return {
    type: RECEIVE_ITEMS,
    artist,
    items: json,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}

export const FAVORITE_ITEM = 'FAVORITE_ITEM';
export function favItem(id) {
  return {
    type: FAVORITE_ITEM,
    id,
  };
}

/*
  API handling
  Usage: store.dispatch(fetchItems('artist'))

  In this example we only pull Pink Floyd albums, but the same
  method can be used to search tracks etc.
*/

export function emitFetchItems(artist) {
  return function (dispatch) {
    // First dispatch: Initialize the app with data
    dispatch(requestItems(artist));
    spotify.getArtistAlbums(artist || '0k17h0D3J5VfsdmQ1iZtE9', { limit: 50 })
    .then(function (data) {

      // add favorite property to received items
      data.items.map((item) => item.isFav = false); //eslint-disable-line
      dispatch(receiveItems(artist, data.items));
    });
    // TODO: Add catch any error in the network call.
  };
}

export function emitFavoriteItem(id) {
  return function (dispatch) {
    dispatch(favItem(id));
  };
}
