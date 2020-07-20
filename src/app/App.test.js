import React from 'react';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../store';
import App from './App';

describe('App', () => {
  test('Does match snapshots', () => {
    const shallowedApp = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(shallowedApp).toMatchSnapshot()
  });
})

