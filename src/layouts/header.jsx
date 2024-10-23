import React from "react";


const Header =()=>{


    return(
        <div className="head">
   <header>
        <ul className="naviger_menu">
            <li> <img src="../image/Plan1.jpg" width="90px" /></li>
            <li className="primo"> <button type="button" className="btn btn-outline-primary">Services</button> </li>
            <li > <a href="#" className="bi bi-geo-alt"> Lieux</a></li> <li> <a href="#"> Apropos </a></li>
            <li><div className="recherches">
                    <button className="btn btn-light recherche" id ="recherche"><i class="bi bi-search"></i></button>
                    <input type="text" className="form-control" placeholder="recherche"/>
                </div></li>
        </ul>
            <div className="language">
                    <select className="form-select" name="" id="">
                        <option value="Anglais">Anglais</option><option value="Francais">Francais</option>
                    </select> 
            </div>   
    </header>
        </div>
    )
}
export default Header;