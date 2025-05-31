import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#2c3e50', padding: '1rem', color: 'white' }}>
      <h2>Educação Financeira</h2>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Início</Link>
        <Link to="/dicas" style={{ color: 'white' }}>Dicas</Link>
      </nav>
    </header>
  );
}

export default Header;
