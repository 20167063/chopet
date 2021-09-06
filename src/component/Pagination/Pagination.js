import React from 'react'
import "./Pagination.css"

export default function Pagination({itemOfList,totalItem,setPageNum,pageCurrent,onPageChange}) {
  const pageNumber = [];
  const pagelast = Math.ceil(totalItem/itemOfList);
  for(let i = 1; i <= pagelast; i++){
    pageNumber.push(i);
  }
  const setPage = (number) =>{
    if(!setPageNum) return;
    setPageNum(number)
  }
  const handleNewpage = (newPage) => {
    if(onPageChange){
      onPageChange(newPage)
    }
  }
  return(
    <div className="pagination">
      <button 
      disabled={pageCurrent <= 1}
      onClick={()=>handleNewpage(pageCurrent-1)}
      >Prev</button>
      <nav>
        <ul className="list_page">
          {pageNumber.map((number,index)=>{
            return(
            <li key={index} onClick={()=>{setPage(number)}} className={`${pageCurrent === index + 1 ? "isActive" : ""}`}>
              {number}
            </li>
            )
          })}
        </ul>
      </nav>
      <button 
      disabled={pageCurrent >= pagelast}
      onClick={()=>handleNewpage(pageCurrent+1)}
      >Next</button>
    </div>
  )
}