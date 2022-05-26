import React from 'react'

const Blog = () => {
  return (
        <section className="blog">
            <div className="container">
             <div className="blog__wrapper">
                <div className="blog__item news">
                    <div className="blog__title">
                        <h2>
                            Blog mới
                        </h2>      
                    </div>
                    <div  className="blog__news" >  
                        <div  className="news__image" >                          
                            <img src="/images/news_img.png" alt=""/>    
                        </div>                        
                        <div  className="news__title" >                          
                            <h3>
                                Cuộc sống hàng ngày
                            </h3>
                        </div>
                        <div  className="news__content" >                          
                            <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, ipsum nec feugiat pulvinar, ipsum arcu convallis urna, facilisis lobortis nibh felis pulvinar ex. Aliquam sem ligula, elementum at posuere ut, ultricies non massa. Sed iaculis vel nisi et cursus. Cras eget
                            </p>
                        </div>
                        <div  className="news_more" >                          
                            <a href="" ><u>Xem thêm</u></a>
                        </div>
                    </div>
                </div>

                <div className="blog__item suggests">
                    <div className="blog__title">
                        <h2>
                            Đề xuất
                        </h2>
                    </div>
                    <div  className="suggests__blog" >
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                            </div>
                        </div> 
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item_2.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                             </div>
                        </div>
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item_3.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
             </div>
        </section>    
    
  )
}

export default Blog