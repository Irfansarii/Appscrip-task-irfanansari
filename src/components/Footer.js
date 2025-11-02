"use client";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="subscribe">
          <h4 >Be the first to know</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-row">
            <input type="email" placeholder="Enter your e-mail..." />
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>

        <div className="contact">
          <h4>Contact Us</h4>
          <p>+44 221 133 5360</p>
          <p className="">customercare@mettamuse.com</p>
          <h5 className="">Currency</h5>
          <div className="currency"><img className="flagImage" src="assets/United States of America (US).png"/> USD</div>
        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <h4 className="brand">mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <div className="circle"><img src="assets/insta.png" width={50}/>  </div>
            <div className="circle"><img src="assets/linkedin.png"  width={50}/></div>
          </div>
          

          <h4>mettā muse Accepts</h4>
          <div className="payments">
            <div className="pay"><img src="assets/googlePay.png" width={50}/></div>
            <div className="pay"><img src="assets/mastercard.png"  width={50}/></div>
            <div className="pay"><img src="assets/paypal.png"  width={50}/></div>
             <div className="pay"><img src="assets/amex.png"  width={50}/></div>
            <div className="pay"><img src="assets/applePay.png"  width={50}/></div>
            <div className="pay"><img src="assets/pay.png"  width={50}/></div>
          </div>
        </div>
      </div>

      <div className="copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
