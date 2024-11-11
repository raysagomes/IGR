import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer className="footerdiv row py-5 my-2 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    </a>
                    <p className="fontcolorwhite">© 2024</p>
                </div>

                <div className="col mb-3 coluna-a-direita-footer" style={{ textDecoration: 'none' }}>
                    <h5>Section</h5>
                    <br />
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="/textos" className="fontcolorwhite nav-link p-0">Textos</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/vocab" className="fontcolorwhite nav-link p-0">Vocabulário</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/conversacoes" className="fontcolorwhite nav-link p-0">Conversações</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/gramatica" className="fontcolorwhite nav-link p-0">Gramática</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
