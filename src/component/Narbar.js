import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Narbar = ({authenticate,setAuthenticate}) => {
  const menuList = ["여성","Divided","남성","신생아/유아","아동","H&M Home","Sale","지속가능성"];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
    setAuthenticate(false);
  };



  const search =(event)=>{
    if(event.key === "Enter"){
      console.log("we click this key", event.key);
      let keyword = event.target.value;
      console.log("key press",keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div>
        <div>
            <div className="login-button" onClick={()=>goToLogin()}>
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticate ? "로그아웃":"로그인"}</div>
            </div>
        </div>
        <div className="nav-section"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s" /></div>
        <div className="menu-area">
            <ul className="menu-list">
              {menuList.map((menu)=>(
                <li>{menu}</li>
                )
              )}
            </ul>
          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input className="input-border-bottom" type="text" onKeyPress={search}/>      
          </div>
        </div>
    </div>
  )
}

export default Narbar
