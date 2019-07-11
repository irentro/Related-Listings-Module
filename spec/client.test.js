import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../client/src/app';

describe('React component test suite', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(
    <div 
      className="section-header">More places to stay
    </div>)).toBe(true);
  });
})