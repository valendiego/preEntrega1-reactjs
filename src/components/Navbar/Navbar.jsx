import styles from './Navbar.module.css'
import logo from './assets/Gothical.ttf'

const NavBar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>Goth Store</h1>
                <ul className={styles.ul}>
                    <li className={styles.list__item}><button className={styles.nav__link}>Inicio</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Productos</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Nosotros</button></li>
                    <li className={styles.list__item}><button className={styles.nav__link}>Contacto</button></li>
                </ul>
                <div className={styles.nav__icons}>
                    <div className='bi bi-heart-fill' style={{color:"#2c2c2c", fontSize:"1.6rem", marginRight: "20px"}}></div>
                    <div className='bi bi-bag' style={{color:"#2c2c2c", fontSize:"1.6rem"}}></div>
                    <span className='contador'>0</span>
                </div>
            </nav>
        </header>

    )
}

export default NavBar