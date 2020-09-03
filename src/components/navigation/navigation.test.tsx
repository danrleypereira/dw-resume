import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './navigation';

test('Hide and show correct menu when hover and mouseLeave', () => {
  const { container } = render(<Navigation />);
  
  let openedMenu = document.getElementById("opened");
  let closedMenu = document.getElementById("closed");

  fireEvent.mouseOver(container);
  expect(openedMenu).toHaveStyle('display: block;');
  // expect(closedMenu).toHaveClass('hide');

  fireEvent.mouseLeave(container);
  expect(openedMenu).toHaveClass('hide');
  expect(closedMenu).toHaveClass('show');
});
