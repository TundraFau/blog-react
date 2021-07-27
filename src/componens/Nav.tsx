import "../styles/nav.scss"
import "../styles/global.scss"

import planet from '../assets/icons/planet.svg'

export function Nav(){
    return(
        <header>
            <nav>
                <button id="stamp">
                    <img className='filter-baby-blue' src={planet} alt="planet"></img>                 
                    Jupiter
                </button>
                <div className="links">
                    <button className="nav_item active">Blog</button>
                    <button className="nav_item">Projects</button>
                    <button className="nav_item">Me</button>
                </div>
            </nav>
        </header>
    )
}

export {}