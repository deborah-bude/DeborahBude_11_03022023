import logo from "../assets/logo-clair.png"

export default function Footer() {
    const siteName = "Kasa";

    return <footer className="pied-page">
    <img src={logo} alt={siteName} className="kasa-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
}