import * as React from 'react';
import { Link } from 'gatsby';
import * as Style from './layout.module.css'

function Layout({pageTitle, children}) {
  return (
    <div className={Style.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={Style.navLinks}>
          <li className={Style.navLinkItem}>
            <Link to="/" className={Style.navLinkText}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={Style.navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={Style.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;