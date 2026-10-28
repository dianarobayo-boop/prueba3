export default function FiltroPrecio({ precioMax, setPrecioMax }) {
  return (
    <div style={{ marginBottom: '20px', padding: '12px', background: '#f0f0f0', borderRadius: '8px' }}>
      <label style={{ fontWeight: 'bold' }}>
        Filtrar por Precio Máximo: ${precioMax}
      </label>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        value={precioMax}
        onChange={(e) => setPrecioMax(Number(e.target.value))}
        style={{ width: '100%', marginTop: '8px' }}
      />
    </div>
  );
}