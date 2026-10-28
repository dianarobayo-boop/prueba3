import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const isHovered = hoveredPath === path;

    return {
      color: isHovered ? '#60a5fa' : isActive ? '#3b82f6' : '#ffffff',
      textDecoration: 'none',
      fontWeight: isActive ? '700' : '500',
      fontSize: '1rem',
      padding: '10px 18px',
      borderRadius: '8px',
      backgroundColor: isHovered 
        ? 'rgba(59, 130, 246, 0.15)' 
        : isActive 
          ? 'rgba(59, 130, 246, 0.25)' 
          : 'transparent',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
    };
  };

  return (
    <header style={{
      backgroundColor: '#121212',
      borderBottom: '2px solid #2563eb',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        padding: '30px 24px', 
      }}>
        {/* Logo / Marca con hover azul */}
        <Link 
          to="/" 
          style={{ 
            color: '#3b82f6', 
            textDecoration: 'none', 
            fontSize: '1.4rem', 
            fontWeight: 'bold',
            letterSpacing: '-0.5px'
          }}
        >
          MiTienda
        </Link>

        {/* Enlaces de navegación */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {[
            { path: '/', label: 'Inicio' },
            { path: '/catalogo', label: 'Catálogo' },
            { path: '/checkout', label: `Carrito ${totalItems > 0 ? `(${totalItems})` : ''}` },
            { path: '/login', label: 'Iniciar sesión' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={getLinkStyle(path)}
              onMouseEnter={() => setHoveredPath(path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}