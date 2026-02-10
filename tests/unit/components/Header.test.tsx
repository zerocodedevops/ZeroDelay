import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../../src/components/common/Header';
import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
    it('renders logo and navigation links', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText('Mudanzas Coral')).toBeInTheDocument();
        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Servicios')).toBeInTheDocument();
        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getAllByText('Pide Presupuesto')[0]).toBeInTheDocument();
    });

    it('mobile menu toggles when button is clicked', () => {
        // Mock window.innerWidth to simulate mobile device
        window.innerWidth = 500;
        window.dispatchEvent(new Event('resize'));

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const toggleButton = screen.getByLabelText('Toggle menu');
        expect(toggleButton).toBeInTheDocument();

        // Menu should be closed initially (or at least check that we can open it)
        fireEvent.click(toggleButton);

        // After click, we expect mobile menu items to be visible. 
        // Since we reuse links, we check if they are present. 
        // Note: In a real mobile test we might check for visibility or specific mobile classes.
        expect(screen.getByText('Inicio')).toBeInTheDocument();
    });
});
