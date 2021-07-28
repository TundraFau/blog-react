import "../styles/nav.scss"
import "../styles/global.scss"

import planet from '../assets/icons/planet.svg'

export function Nav(){
    return(
        <header>
            <nav>
                <a id="stamp">
                    <img src={planet} alt="planet"></img>                 
                    Jupiter
                </a>
                <div className="links">
                    <a className="nav_item active">Blog</a>
                    <a className="nav_item">Projects</a>
                    <a className="nav_item">Me</a>
                </div>
            </nav>
        </header>
    )
}

export {}