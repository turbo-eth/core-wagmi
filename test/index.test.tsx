import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ERC20Allowance } from '../src/index';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ERC20Allowance address="0x0000000" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
