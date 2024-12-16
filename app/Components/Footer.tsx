import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 text-xs">
      <div className="px-6">
        <div className="grid grid-cols-6 gap-8">
          {/* Resources Section */}
          <div className="text-left">
            <h4 className="mb-4 font-thin">FIND A STORE</h4>
            <ul className="space-y-6">
              <li><a href="#" className="hover:underline font-light">BECOME A MEMBER</a></li>
              <li><a href="#" className="hover:underline font-light">SIGN UP FOR EMAIL</a></li>
              <li><a href="#" className="hover:underline font-light">Send Us Feedback</a></li>
              <li><a href="#" className="hover:underline font-light">STUDENTS DISCOUNT</a></li>
            </ul>
          </div>

          

          {/* Company Section */}
          <div className="text-left">
            <h4 className="mb-4 font-thin">Get Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline font-light">Order status</a></li>
              <li><a href="#" className="hover:underline font-light">Delivery</a></li>
              <li><a href="#" className="hover:underline font-light">Returns</a></li>
              <li><a href="#" className="hover:underline font-light">Payment Options</a></li>
              <li><a href="#" className="hover:underline font-light">Contact us on Nike.com Inquiries</a></li>
              <li><a href="#" className="hover:underline font-light">Contact us on all other Inquiries</a></li>
            </ul>
          </div>

          {/* Promotions & Discounts Section */}
          <div className="text-left">
            <h4 className="mb-4 font-thin">About Nike</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline font-light">News</a></li>
              <li><a href="#" className="hover:underline font-light">Careers</a></li>
              <li><a href="#" className="hover:underline font-light">Investors</a></li>
              <li><a href="#" className="hover:underline font-light">Sustainability</a></li>
            </ul>
          </div>
          <div className="absolute right-0 top-100 mt-2 mr-6 flex space-x-4">
          <img src="/fb.png" alt="Facebook" className="w-8 h-8" />
          <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
          <img src="/insta.png" alt="Instagram" className="w-8 h-8" />
          <img src="/youtube.png" alt="YouTube" className="w-8 h-8" />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-4 flex justify-between items-center text-xs">
          <p className="text-left font-thin">© 2024 Nike, Inc. All Rights Reserved</p>
          <div className="text-right space-x-4">
            <a href="#" className="hover:underline font-light text-xs">Guides</a>
            <a href="#" className="hover:underline font-light text-xs">Terms of Sale</a>
            <a href="#" className="hover:underline font-light text-xs">Terms of Use</a>
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
