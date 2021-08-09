import { useEffect, useState } from "react";

  

  const Product = () => {

    
    const img1="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg?q=70"
    const img2="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dzswzs2sq.jpeg?q=70"
    const img3="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dfu6speyf.jpeg?q=70"
    const img4="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8ddahkwrha.jpeg?q=70"

    const [mainImg, setMainImg] = useState(img1);


      const productData = {
          name: 'APPLE iPhone 12(Blue, 128 GB)',
          ratings: 5903,
          reviews: 476,
          price: 82900,
          imgurl: 'https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8dbzv8vh7t.jpeg?q=70'
      }

      useEffect(() => {

        setMainImg(img2);
          
      }, [])

      let count = 1;

      const [qty, setQty] = useState(1);

      const increment = () => {
      console.log('clicked!!');
      console.log(count);
      count++;
      setQty(qty + 1);
      }

      return (  
        <div>
         <div className="container">
      <h1>Product Details Page</h1>
      <div className="row">
          <div className="col-md-5">
              <div>
                  <img src={mainImg} style={{ display: 'block', margin: 'auto' }} />
              </div>
              <div className="row mt-3 mb-3">
                  <div className="col">
                      <img onClick={e => setMainImg(img1)} src={img1} style={{ height: '4rem' }} />
                  </div>
                  <div className="col">
                      <img onClick={e => setMainImg(img2)} src={img2} style={{ height: '4rem' }} />
                  </div>
                  <div className="col">
                      <img onClick={e => setMainImg(img3)} src={img3} style={{ height: '4rem' }} />
                  </div>
                  <div className="col">
                      <img onClick={e => setMainImg(img4)} src={img4} style={{ height: '4rem' }} />
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col-md-6">
                      <button className="btn btn-warning w-100"><i class="fa fa-cart-plus" aria-hidden="true"></i>ADD TO CART</button>
                  </div>
                  <div className="col-md-6">
                      <button className="btn btn-danger w-100"><i class="fa fa-bolt" aria-hidden="true"></i>BUY NOW</button>
                  </div>
              </div>
          </div>
          <div className="col-md-7">
              <h1>{productData.name}</h1>
              {/* <h1>{productData['name']}</h1> */}
              <p className="text-muted"><b>{productData.ratings} Ratings & {productData.reviews} Reviews</b></p>

              {/* <h3>Quantity : {count}</h3> */}
              <h6>Quantity : {qty}</h6>
              <button className="btn btn-secondary" onClick={increment}> <i class="fa fa-chevron-up" aria-hidden="true">^</i> </button>

              
<div className = "dyC4hf" > < div className = "CEmiEU" > < div className = "_25b18c" > <div className = "_30jeq3 _16Jk6d"> ₹82, 900 </div>
  < div className = "_1AtVbE col-12-12" > < div className = "_3Z0lU8" > < div className = "rd9nIL" > Available offers </div></div > < div className = "_3TT44I" > < div className = "WT_FyS" > < div className = "XUp0WS" > < span className = "_3j4Zjq row" > < li className = "_16eBzU col" > < span className = "u8dYXW" > Bank Offer </span><span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span > < div className = "Bv11UC _1qNw3R" > < span className = "fGhUR2" > T & C </span></div > </li></span > < span className = "_3j4Zjq row" > < img src = "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
  width = "18"
  height = "18"
  className = "_3HLfAg" /> < li className = "_16eBzU col" > < span className = "u8dYXW" > Bank Offer </span><span>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</span > < div className = "Bv11UC _1qNw3R" > < span className = "fGhUR2" > T & C </span></div > </li></span > < span className = "_3j4Zjq row" > < img src = "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
  width = "18"
  height = "18"
  className = "_3HLfAg" /> <li className = "_16eBzU col" > < span className = "u8dYXW" > Bank Offer </span><span>10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</span > < div className = "Bv11UC _1qNw3R" > < span className = "fGhUR2" > T & C </span></div > </li></span > < span className = "_3j4Zjq row" > < img src = "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
  width = "18"
  height = "18"
  className = "_3HLfAg" /> < li className = "_16eBzU col" > < span className = "u8dYXW" > Special Price </span><span>Extra ₹2000 off(price inclusive of discount)</span > < div className = "Bv11UC _1qNw3R" > < span className = "fGhUR2" > T & C </span></div > </li></span> <div><a className="_1JIkBw"><div className="row"><div className="IMZJg1"><span>View 4 more offers</span > </div></div> </a></div > </div>
  </div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}

export default Product;





  