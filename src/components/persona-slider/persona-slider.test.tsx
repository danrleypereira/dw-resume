import React from 'react';
import { render } from '@testing-library/react';
import PersonaSlider from './persona-slider';

test('loads the initial portrait eagerly with responsive sources and reserved dimensions', () => {
  const { container } = render(<PersonaSlider />);
    let images = container.querySelectorAll(".img-flex");
    let imageE = images[0]
    expect(imageE).toHaveAttribute('loading', 'eager');
    expect(imageE).toHaveAttribute('fetchpriority', 'high');
    expect(imageE).toHaveAttribute('width', '1013');
    expect(imageE).toHaveAttribute('height', '1265');
    expect(imageE.getAttribute('srcset')).toContain('480w');
    expect(imageE.getAttribute('srcset')).toContain('800w');
    expect(imageE).toBeInTheDocument();
});
