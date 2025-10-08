import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Exclusive */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QuickShop</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm text-gray-400">
            Get 10% off your first order
          </p>
          <div className="flex border border-amber-50 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2  text-white  focus:outline-none"
            />
            <button className="bg-black text-black px-2 rounded-r-md">
              <img src={assets.sendicon} alt="" />
            </button>
            
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm text-gray-400">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="mt-2 text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm text-gray-400 mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 mb-4">
            <img
              src={assets.qrcode}
              alt="QR Code"
              className="w-16 h-16 bg-white"
            />
            <div className="flex flex-col gap-2">
              <img
                src={assets.gplay}
                alt="Google Play"
                className="h-8"
              />
              <img
                src={assets.appstore}
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;