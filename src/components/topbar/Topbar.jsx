import "./topbar.scss"

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Mahdere</a>       
                </div>
                <div className="center" >
                    <ul>
                      <li >
                        <a href="#intro">Home</a>
                      </li>
                      <li >
                        <a href="#portfolio">Portfolio</a>
                      </li>
                      <li >
                        <a href="#works">Works</a>
                      </li>
                      <li >
                        <a href="#testimonials">Testimonials</a>
                      </li>
                      <li >
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                </div>
                <div className="right" >
                    <div className="contact">
                        <a href="https://wa.me/00251962439494/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/icons/whatsapp.png" alt="" />
                        </a>
                        <a href="https://t.me/debugging101" target="_blank" rel="noopener noreferrer">
                           <img src="assets/icons/telegram.png" alt="" />
                        </a>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
