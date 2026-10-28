import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [mensajeExito, setMensajeExito] = useState(false);

  const handleFinalizarCompra = () => {
    setMensajeExito(true);
    clearCart();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Pantalla de Pago y Checkout</h2>
      <p style={{ color: 'green', fontWeight: 'bold' }}>Acceso concedido mediante Token JWT en LocalStorage.</p>

      {/* Mensaje de confirmación en pantalla */}
      {mensajeExito && (
        <div style={{
          backgroundColor: '#e8f5e9',
          color: '#2e7d32',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #a5d6a7',
          marginBottom: '20px',
          fontWeight: '600'
        }}>
          ¡Compra realizada con éxito!
        </div>
      )}

      {cart.length === 0 ? (
        <p>{mensajeExito ? 'Gracias por tu compra.' : 'El carrito está vacío.'}</p>
      ) : (
        <div>
          <h3>Resumen de la Compra:</h3>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <span>{item.title} (x{item.cantidad})</span>
              <span>${(item.price * item.cantidad).toFixed(2)}</span>
            </div>
          ))}
          <h4 style={{ margin: '16px 0' }}>Total a Pagar: ${totalPrice.toFixed(2)}</h4>
          <button 
            onClick={handleFinalizarCompra} 
            style={{ 
              padding: '10px 20px', 
              background: '#3793de', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}