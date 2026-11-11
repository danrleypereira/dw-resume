import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('lists deeply nested tools without any graph clicks', () => {
  render(<Skills />);
  expect(screen.getByText('Allure')).toBeInTheDocument();
  expect(screen.getByText('Bruno')).toBeInTheDocument();
});
