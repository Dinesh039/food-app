import { Link } from 'react-router-dom';

function Header(){

    return(<div><nav class="navbar bg-dark">
    <h1>
      <i class="fas fa-code"></i> <Link to="/">DeveloperConnect</Link>
    </h1>
    <ul>
      
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav></div>)
}

export default Header;