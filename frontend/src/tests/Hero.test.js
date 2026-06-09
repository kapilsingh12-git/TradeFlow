import React, { Component } from 'react';
import{render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from  '../landing_page/home/Hero';
// Component suite
describe('Hero component',()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText('hero');
        expect(heroImage).toBeInTheDocument();
          expect(heroImage).toHaveAttribute('src');
    expect(heroImage.src).toContain('homeHero.png');
    });
})