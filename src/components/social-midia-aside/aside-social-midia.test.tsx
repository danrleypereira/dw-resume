import React from 'react';
import { render } from '@testing-library/react';
import {SocialMidiaAside} from './aside-social-midia';

test('renders social midia images and links', () => {
  const { container } = render(<SocialMidiaAside />);
//   console.log(getByAltText("icon"));
    let images = container.querySelectorAll(".social-midia-icon");
    const sources = [
        'github-48.svg',
        'linkedin-48.svg',
        'instagram-48.svg',
        'facebook-48.svg'
    ];
    for(let i=0; i <images.length; i++) {
        expect(images[i])
          .toHaveAttribute('src', sources[i]);
    }  
        
   
//   expect(getByAltText('icon')).toBeInTheDocument();
//   const linkElement = getByAltText(/facebook/i);
//   expect(linkElement).toBeInTheDocument();
});
