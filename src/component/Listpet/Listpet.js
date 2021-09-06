import React,{useContext,useState} from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import Pagination from '../Pagination/Pagination'
import "./listPet.css"

export default function Listpet(){
  const [pageCurrent, setPageCurrent] = useState(1)
  const [numItemOfPage, setNumItemOfPage] = useState(10)

  const {listClone} = useContext(ContextApi);
  console.log('listClone',listClone);
  const itemLastShow = pageCurrent * numItemOfPage;
  const itemFirstShow = itemLastShow - numItemOfPage;
  const lisPagination = listClone.slice(itemFirstShow,itemLastShow)
  const setPageNum = (number) =>{
    setPageCurrent(number);
  }
  const onPageChange = (newPage) => {
    setPageCurrent(newPage)
  }
  return(
    <div>
    <div className="wrapper">
      {lisPagination.map((item,index)=>{
        return(
          <div className="itemList" key={index}>
          <img src={item.image?.url} alt={item.origin}/>
          <div>{item.name}</div>
          </div>
        )
      })}
    </div>
    <div className="pagenavigation">
      <Pagination itemOfList={numItemOfPage} totalItem={listClone.length} setPageNum={setPageNum} pageCurrent={pageCurrent} onPageChange={onPageChange}/>
    </div>
    </div>
  )
}