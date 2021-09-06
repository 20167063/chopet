import { createContext,useState,useEffect } from "react";
import axios from 'axios';


export const ContextApi = createContext(null);

const ListContext = ({children}) => {
  const [list,setList] = useState([]);
  const [listClone,setListClone] = useState([])
  useEffect(()=>{
    loadData();
  },[])
  const loadData = async() =>{
    try{
      const res = await axios.get("https://api.thecatapi.com/v1/breeds")
      setList(res.data)
      setListClone(res.data)
    }catch(error){
      alert(error)
    }
  }
  const onSubmitSeach = (data) =>{
    const newList = [...list];
    const listFilter = newList.filter(function(item) {
      const x = item.name.toLowerCase()
      const y = data.searchTerm.toLowerCase()
      if(data.searchTerm === ""){
        return item
      }
      if(x.includes(y)){
        return item;
      }
    })
    setListClone(listFilter);
  }
  const shareData = {
    listClone,
    onSubmitSeach,
  }
  return(
    <ContextApi.Provider value={shareData}>
      {children}
    </ContextApi.Provider>
  )
}
export default ListContext;

