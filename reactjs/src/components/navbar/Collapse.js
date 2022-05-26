import React from 'react'
import AuthContext from '../../context/AuthContext';
import {useState, useContext } from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
const Collapse = () => {
     let {user, logoutUser} =  useContext(AuthContext)
    //  <a href=""> Logout</a>
  return (
    <div className="navbar__collapse">
    <ul>  
        <li className="navbar__item">
            <a className="link" href="#">TRANG CHỦ</a> 
        </li>
        <li className="navbar__item">
            <a className="link" href="#">CHỦ ĐỀ</a> 
        </li>
        <li className="navbar__item">
            <a className="link" href="#">VỀ CHÚNG TÔI</a> 
        </li>
        <li className="navbar__item">
        {user ? (<AccountCircleTwoToneIcon  onClick={logoutUser}  className='icon__user' fontSize="large"></AccountCircleTwoToneIcon>) : (<a className="link" href="/login">ĐĂNG NHẬP</a> )}
          {/* {user && <p>Hello {user.username}</p>} */}   
        </li> 
    </ul>  
</div>
  )
}

export default Collapse