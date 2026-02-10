import { Link } from 'react-router-dom';
import logo from '../../assets/Logo0.png';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { to: '/proyectos/zero-delay', label: 'QUIENES SOMOS' },
        { to: '/proyectos/zero-delay/servicios', label: 'SERVICIOS' },
        { to: '/proyectos/zero-delay/blog', label: 'BLOG' },
        { to: '/proyectos/zero-delay/contacto', label: 'CONTACTO' },
    ];

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: '#F5F5F5',
                borderBottom: '1px solid #E0E0E0',
                boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            {/* Top Bar - Contact Info */}
            {!isMobile && (
                <div style={{
                    backgroundColor: '#FFFFFF',
                    borderBottom: '1px solid #E0E0E0',
                    padding: '0.5rem 0'
                }}>
                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '0 3rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {/* Left - Address */}
                        <div style={{
                            fontSize: '0.875rem',
                            color: '#666666',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#2196F3" />
                            </svg>
                            Av/ ZeroCode 83
                        </div>

                        {/* Right - Social + CTA */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Link
                                to="/proyectos/zero-delay/contacto"
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    background: 'linear-gradient(135deg, #4CAF50 0%, #45A049 100%)',
                                    color: '#FFFFFF',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    transition: 'transform 0.2s',
                                    display: 'inline-block',
                                    border: '2px solid #4CAF50'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                Pide Presupuesto
                            </Link>

                            {/* Social Icons */}
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2196F3', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2196F3', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2196F3', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2196F3', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2196F3', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '1rem 3rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/proyectos/zero-delay"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img src={logo} alt="Zero Delay Mudanzas" style={{ height: '90px', width: 'auto' }} />
                    </Link>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav
                            style={{
                                display: 'flex',
                                gap: '2.5rem',
                                alignItems: 'center',
                            }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    style={{
                                        color: '#333333',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '0.9375rem',
                                        letterSpacing: '0.5px',
                                        transition: 'color 0.3s',
                                        position: 'relative',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = '#2196F3';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = '#333333';
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* Contact Info - Phone */}
                    {!isMobile && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <a
                                href="tel:912622712"
                                style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '700',
                                    color: '#4CAF50',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#4CAF50" />
                                </svg>
                                91 262 27 12
                            </a>
                            <a
                                href="mailto:info@madrimudanzas.com"
                                style={{
                                    fontSize: '0.875rem',
                                    color: '#2196F3',
                                    textDecoration: 'none',
                                    marginTop: '0.25rem'
                                }}
                            >
                                ✉ info@madrimudanzas.com
                            </a>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                        >
                            <span
                                style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#333333',
                                    transition: 'all 0.3s',
                                    transform: isMobileMenuOpen
                                        ? 'rotate(45deg) translateY(6px)'
                                        : 'none',
                                }}
                            />
                            <span
                                style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#333333',
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    transition: 'all 0.3s',
                                }}
                            />
                            <span
                                style={{
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: '#333333',
                                    transition: 'all 0.3s',
                                    transform: isMobileMenuOpen
                                        ? 'rotate(-45deg) translateY(-6px)'
                                        : 'none',
                                }}
                            />
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMobile && isMobileMenuOpen && (
                    <nav
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginTop: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid #E0E0E0',
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    color: '#333333',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    padding: '0.5rem 0',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/proyectos/zero-delay/contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'linear-gradient(135deg, #4CAF50 0%, #45A049 100%)',
                                color: '#FFFFFF',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                textAlign: 'center',
                            }}
                        >
                            Pide Presupuesto
                        </Link>
                        <a
                            href="tel:912622712"
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#4CAF50',
                                textDecoration: 'none',
                                textAlign: 'center'
                            }}
                        >
                            91 262 27 12
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
