import * as React from 'react'
import { Link } from 'gatsby'
import { 
    header,
    heading,
    container,
    mainContainer,
    navLinks,
    navLinkItem,
    navLinkText
 } from '../components/layout.module.css'

const Layout = (({ pageTitle, children }) => {
    return (
        <div>
            <header className={header}><h1 className={heading}>{ pageTitle }</h1></header>
            <div className={container}>
                <main className={mainContainer}>{ children }</main>
                <nav>
                    <ul className={ navLinks }>
                        <li className={navLinkItem}>
                            <Link to='/' className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/about' className={navLinkText}>
                                About Me
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/skills' className={navLinkText}>
                                Skills
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
})

export default Layout