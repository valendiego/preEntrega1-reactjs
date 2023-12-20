import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>𝕲𝖔𝖙𝖍 𝕾𝖙𝖔𝖗𝖊</h1>
                <ul className={styles.ul}>
                    <li className={styles.list__item}><button className={styles.nav__link}>Inicio</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Productos</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Nosotros</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Contacto</button></li>
                </ul>
                <CartWidget />
            </nav>
        </header>

    )
}

export default NavBar