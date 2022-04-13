import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import Navigation from './navigation';
import { Container } from 'react-dom';

var navigation: HTMLElement
beforeEach(() => {
  const { container } = render(<Navigation />);
  navigation = container
})
test('Hide and show correct menu when mouseEnter and mouseLeave', () => {
  // let openedMenu = document.getElementById("opened");


  // const div = navigation.querySelector('div')

  // fireEvent.mouseEnter(navigation)
  // expect(navigation).toHaveClass('navigation')
  // const navigation: HTMLElement = document.getElementById("navigation")!
  
  // fireEvent.mouseEnter(getByTestId(navigation, 'navigation'))
  // fireEvent.mouseEnter(screen);
  // expect(screen.getByTestId('opened')).toBe(1)
  
  // let closedMenu = document.getElementById("closed");

  
  // expect(closedMenu).toHaveClass('hide');

  // fireEvent.mouseLeave(container);
  // expect(openedMenu).toHaveClass('hide');
  // expect(closedMenu).toHaveClass('show');
});
