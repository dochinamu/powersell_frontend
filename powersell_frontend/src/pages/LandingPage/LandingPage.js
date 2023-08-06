import React, { useState } from 'react';
import '../../css/style.css';

import mypage from '../../images/icons/mypage.jpg';
import banner from '../../images/home/banner.jpg';
import products from '../../data/product';
import { Link } from 'react-router-dom';


function LandingPage() {
  const [feedback, setFeedback] = useState("")
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  }


  return (
    <div id="pc-width" className="app">

      {/* Header */}
      <header className="header">
        <p className='title'>싸다9</p>
        <Link to={`/authentication`}>
        <img className='mypage-button' src={mypage}></img>
        </Link>
      </header>

      {/* Banner */}
      <div className="banner">
        <img src={banner} alt="Promotion Banner" />
      </div>

      {/* Products */}
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
            <img className='product-img' src={product.thumbnail} alt={product.name} />
            <p className='product-name' >{product.name}</p>
            <p className="original-price">{product.originalPrice}원</p>
            <h2 className="discount">{product.discountRate}% {product.salePrice}원</h2>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <hr/>
      </div>
      {/* Footer */}
      <form className="footer">
        <h3 className='footerMessage'>💌powersell팀에게 남기고 싶은 말💌</h3>
        <textarea onChange={handleFeedbackChange} value={feedback} className='feedback-input' type="text" placeholder="짧은 한 줄 소감도 큰 도움이 됩니다!" />
        <input type="submit" className='submit-button' value='제출하기'/>
      </form>

    </div>
  )
}

export default LandingPage