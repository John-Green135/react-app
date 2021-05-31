import {Link} from 'react-router-dom';

const Navbar = () =>{
    const branches = ["tubes", "webcams", "pornstars",  "paysites", "DVDS", "games", "sex toys", "health"]
    return(
        <main className = "navbar-main">
            <section className = "nav-links-section">
                {branches.map(branch=>(
                    <Link to = {`/${branch.replace(/ /g, "-")}`} key = {branch}>
                        <div  className="link">
                            <h2>{branch}</h2>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )   
}

export default Navbar