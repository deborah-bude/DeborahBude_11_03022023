import logo from '../assets/logo.png'

export function Header() {
    const siteName = "Kasa";

    return <header>
        <img src={logo} alt={siteName} className='kasa-logo' />
        <div>
            <a href="/">Accueil</a>
            <a href="/apropos">À propos</a>
        </div>
    </header>
}