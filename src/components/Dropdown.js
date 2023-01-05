import React, { useState } from 'react';
import {MenuItems} from './MenuItems.js';
import { Link } from "react-router-dom";
import './Dropdown.css';
import { faL } from '@fortawesome/free-solid-svg-icons';


function Dropdwon (){
    const [click ,setClick]= useState(false);
    const handleClick = () => setClick(!click);


    return<>
        <ul onClick={handleClick} className=
        {click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
            {MenuItems.map((item , index ) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                            {item.title}
                        </Link>

                    </li>
                )
            })}
        </ul>


    </>
}export default Dropdwon;