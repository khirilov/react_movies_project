function Footer() {
    return  (
        <footer className='grey darken-3 white-text'>
            <div className="footer-copyright">
            <div className="container">
                @ {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
            </div>
    </footer>
    )
}
export default Footer;