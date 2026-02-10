import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../src/components/common/Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
    it('renders company information', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText('Mudanzas Coral')).toBeInTheDocument();
        expect(screen.getByText(/Empresa de mudanzas en Madrid/i)).toBeInTheDocument();
    });

    it('renders contact information', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText('91 123 45 67')).toBeInTheDocument();
        expect(screen.getByText('info@mudanzascoral.es')).toBeInTheDocument();
    });

    it('renders legal links', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText('Aviso Legal')).toBeInTheDocument();
        expect(screen.getByText('Privacidad')).toBeInTheDocument();
        expect(screen.getByText('Cookies')).toBeInTheDocument();
    });
});
