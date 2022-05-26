import React from 'react'

const Topic = () => {
  return (
    <section className="topic">
        <div className="container" > 
          <div className="topic__wrapper">                   
                <div className= "topic__tab" >
                    <ul>
                        <li className="active">
                            Đời sống
                        </li>
                        <li>
                            Thức ăn
                        </li>
                        <li>
                            Tâm sự
                        </li>
                    </ul>
                </div>
                <div className= "topic__content" >
                    <div className="topic__item">
                        <div  className="item__image" >                          
                        <img src="/images/suggests_item.jpg" alt=""/>    
                                </div>
                                <div  className="item_title" >                          
                                    <h3>
                                     Cuộc sống hàng ngày
                                    </h3>
                                </div>  
                            </div>
                            <div className="topic__item">
                                <div  className="item__image" >                          
                                    <img src="/images/suggests_item.jpg" alt=""/>    
                                </div>
                                <div  className="item__title" >                          
                                    <h3>
                                     Cuộc sống hàng ngày
                                    </h3>
                                </div>  
                            </div>
                            <div className="topic__item">
                                <div  className="item__image" >                          
                                    <img src="/images/suggests_item.jpg" alt=""/>    
                                </div>
                                <div  className="item__title" >                          
                                    <h3>
                                     Cuộc sống hàng ngày
                                    </h3>
                                </div>  
                            </div>
                            <div className="topic__item">
                                <div  className="item__image" >                          
                                    <img src="/images/suggests_item.jpg" alt=""/>    
                                </div>
                                <div  className="item__title" >                          
                                    <h3>
                                     Cuộc sống hàng ngày
                                    </h3>
                                </div>
                             </div>
                         </div>
                    </div>    
                </div>  
        </section>
  )
}

export default Topic