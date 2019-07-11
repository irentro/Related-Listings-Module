import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../client/src/app';

describe('React component test suite', () => {
  it('App should exist', () => {
    const component = shallow(<App />);

    expect(component.exists()).toBe(true);
  });
})