import React from 'react'

const Footer = () => {
  return (
    <footer className="footer"> 
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__item">
                <div className="team__logo">
                        <img src="/images/logoteam.png" alt=""/>
                </div>
            </div>
           <div className="footer__item">
                <div className="contract">
                    <div className="contract__title">
                        <h3>Liên hệ</h3>
                        </div>
                        <div className="contract__item">
                            <div className="email">
                            <p><strong>Gmail: </strong>xxx@dalteam.com</p> 
                        </div>
                        <div className="phone">
                            <p><strong>Phone: </strong>09xxxx1212xx</p> 
                        </div>

                        <div className="social">
                            
                        </div>
                    </div>
                </div>
          </div>


         </div>
        
      </div>
      <div className="footer__copyright">
        <p>
            Bản quyền @
        <script>document.write(new Date().getFullYear());</script>    
            của DAL Team        
        </p>  
    </div>
</footer>
  )
}

export default Footer