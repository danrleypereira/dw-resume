import React from 'react';
import { render } from '@testing-library/react';
import PersonaSlider from './persona-slider';

test('renders some image from DW', () => {
  const { container } = render(<PersonaSlider />);
    let images = container.querySelectorAll(".img-flex");
    let imageE = images[0]
    const sources = [
        'engineer-min.png',
        'educator-min.png',
        'citizen-min.png',
    ];

    let thereIsImage = false
    thereIsImage = sources.some((image) => {
      return imageE.getAttribute('src') === image
    })

    expect(thereIsImage).toBe(true)
    expect(imageE).toBeInTheDocument();
});
