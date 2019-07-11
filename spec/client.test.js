import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../client/src/app';
import List from '../client/src/list.jsx'

describe('React component test suite', () => {
  it('App should exist', () => {
    const component = shallow(<List />);

    expect(component.exists()).toBe(true);
  });
})