import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Emaily</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!" class="active">Login With Google</a></li>
          <li><a href="#!">Test2</a></li>
        </ul>
      </div>
    </nav>);
  }
}
export default Header;
