import React from 'react';
import { render } from '@testing-library/react';
import {SocialMidiaAside} from './aside-social-midia';
import { links } from 'data/links';

test('renders social midia images and links', () => {
  const { container } = render(<SocialMidiaAside />);
//   console.log(getByAltText("icon"));
    let images = container.querySelectorAll(".social-midia-icon");
    const sources = [
        'github.svg',
        'linkedin.svg',
        'instagram.svg',
        'facebook.svg'
    ];
    for(let i=0; i <images.length; i++) {
        expect(images[i])
          .toHaveAttribute('src', sources[i]);
    }  
        
   
//   expect(getByAltText('icon')).toBeInTheDocument();
//   const linkElement = getByAltText(/facebook/i);
//   expect(linkElement).toBeInTheDocument();
});

test('sidebar links point to the shared profile URLs', () => {
  const { container } = render(<SocialMidiaAside />);
  const hrefs = Array.from(container.querySelectorAll('a')).map((a) => a.getAttribute('href'));
  expect(hrefs).toEqual([links.github, links.linkedin, links.whatsapp, links.instagram, links.facebook]);
});
