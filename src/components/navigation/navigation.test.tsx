import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './navigation';

test('renders social midia images and links', () => {
  const { container } = render(<Navigation />);
  
  let openedMenu = container.getElementsByClassName("opened");
  let closedMenu = container.getElementsByClassName("closed");

  fireEvent.mouseOver(container);
  expect(openedMenu[0]).toHaveStyle('display: block;');
  
  // expect(closedMenu[0]).toHaveStyle('display: none;');
  // console.log(closedMenu[0].className);

  fireEvent.mouseLeave(container);
  expect(openedMenu[0]).toHaveClass('hide opened');
  expect(closedMenu[0]).toHaveClass('show closed');
        
   
//   expect(getByAltText('icon')).toBeInTheDocument();
//   const linkElement = getByAltText(/facebook/i);
//   expect(linkElement).toBeInTheDocument();
});
