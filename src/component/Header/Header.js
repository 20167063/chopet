import React,{useRef,useEffect,useContext,useState} from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { ContextApi } from '../ContextApi/ContextApi';

export default function Header(){
  const context = useContext(ContextApi)
  const ref = useRef(null)
  useEffect(()=>{
    ref.current.focus();
  },[])
  const submitRef = useRef(null);
  const [searchTerm,setSeacrchTerm] = useState('');
  const handleSubmit = (e) => {
    const valueSubmit = e.target.value;
    setSeacrchTerm(valueSubmit);
    if(!context.onSubmitSeach) return;
    if(submitRef.current){
      clearTimeout(submitRef.current);
    }
    submitRef.current = setTimeout(()=>{
      const formValue = {
        searchTerm: valueSubmit,
      };
      context.onSubmitSeach(formValue);
    },500)
    
  }
  return(
    <div className="header-page">
    <div className="header-container">
      <div className="logo">
        <img src="https://chopet.vn/static/media/logoweb_450x75_default.dd253c6c.png" alt="chopet.vn" />
      </div>
      <div className="seach-bar">
        <input type="search" placeholder="Seach Country..." ref={ref} value={searchTerm} onChange={handleSubmit}/>
      </div>
      <div className="icoin-mxh">
        <FontAwesomeIcon className="icoin" icon={faCat} size="2x" color="white"/>
        <FontAwesomeIcon className="icoin" icon={faDog} size="2x" color="white"/>
        <FontAwesomeIcon className="icoin" icon={faUserCircle} size="2x" color="white"/>
      </div>
    </div>
    </div>
  )
}