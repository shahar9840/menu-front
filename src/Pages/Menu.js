import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


function Menu({categories}) {
const [dishes,setDishes]=React.useState([])

  
  return (
    <div className='bg-menu' >
      <div style={{backgroundColor:'#F5FFFA',borderRadius:'3px',paddingTop:"1px",paddingBottom:'1px',boxShadow:"0px 2px 10px #D3D3D3"}}><div style={{marginLeft:'10%'}}><Link style={{transition: "filter 0.8s",textDecoration:"none",color:'black',filter: "brightness(70%)"}} to='/'><h1>חזרה</h1></Link></div></div>
      <div className='grid' style={{marginTop:"1%"}}>
      <div style={{backgroundColor:"#F5FFFA" ,borderRadius:'3px',boxShadow:"0px 2px 10px #D3D3D3"}}>
      {
        categories.map((category)=>(
        <div onClick={()=>(setDishes(category.dishes))} style={{border:"1px solid lightGray",margin:'5px',borderRadius:'3px',pointerEvents:"fill"}}>
              <img style={{width:"200px",height:'200px',margin:'10px', borderRadius:'3px'}} src={category.imageUrl}/>
              <div><h3>{category.name}</h3></div>
        </div>
        ))
      }
          </div>
          <div>
            <div><h1>שם קטגוריה</h1></div>
            <div style={{display:'flex',flexWrap: "wrap",margin:'5px'}}>
          {
            dishes.map((dish)=>(
                <div className='card' style={{backgroundColor:"#F5FFFA",borderRadius:'3px',boxShadow:"0px 2px 10px #D3D3D3"}}>
                  <img style={{width:"200px",height:'200px'}} src={dish.imageUrl}/>
                  <div><h3>{dish.name}|{dish.price}₪</h3></div>
                  <div><h4>{dish.description}</h4></div>
                </div>
              
              ))
            }
            </div>
                
                
          </div>
        </div>
    </div>
  )
}

export default Menu