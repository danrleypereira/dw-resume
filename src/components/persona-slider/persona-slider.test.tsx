import React from 'react';
import { render } from '@testing-library/react';
import PersonaSlider from './persona-slider';

test('renders social midia images and links', () => {
  const { container } = render(<PersonaSlider />);
//   console.log(getByAltText("icon"));
    let images = container.querySelectorAll(".persona-slider");
    const sources = [
        'engineer-min.png',
        'educator-min.png',
        'citizen-min.png',
    ];
    for(let i=0; i <images.length; i++) {
        expect(images[i])
          .toHaveAttribute('src', sources[i]);
    }  
        
   
//   expect(getByAltText('icon')).toBeInTheDocument();
//   const linkElement = getByAltText(/facebook/i);
//   expect(linkElement).toBeInTheDocument();
});
