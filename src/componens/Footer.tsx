import '../assets/fonts/style.css'
import '../styles/footer.scss'

export function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="wrapper">

                <div className="links">
                    <ul>
                        <li><button >Contact me</button></li>
                        <li><button >Credits</button></li>
                    </ul>
                </div>

                <div className="social">
                    <div><a href="https://twitter.com"><i className="icon-twitter"></i></a></div>
                    <div><a href="https://linkedin.com"><i className="icon-linkedin"></i></a></div>
                    <div><a href="https://discordapp.com"><i className="icon-discord"></i></a></div>
                </div>
            </div>
            <div className="brand"><p>Nothing is true, everything is permitted.</p></div>
        </div>
    </footer>
    )
}