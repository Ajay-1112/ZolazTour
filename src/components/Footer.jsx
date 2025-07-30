import {
  FaDiscord,
  FaRedditAlien,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" max-w-7xl mx-auto py-16">
      <div className="px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 flex flex-col space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
              Z
            </div>
            <span className="text-xl font-semibold">Zolaz</span>
          </div>

          <div className="flex space-x-4">
            <IconCircle icon={<FaDiscord />} />
            <IconCircle icon={<FaRedditAlien />} />
            <IconCircle icon={<FaTwitter />} />
            <IconCircle icon={<FaTelegramPlane />} />
            <IconCircle icon={<FaLinkedinIn />} />
          </div>

          <form className="flex flex-col space-y-2 max-w-sm">
            <label htmlFor="email" className="text-sm font-medium">
              Subscribe to our newsletter
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500">
              By submitting, you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-700 ">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Help</li>
            <li>Sales</li>
            <li>Advertise</li>
          </ul>
        </div>
        </div>
    </footer>
  );
}

function IconCircle({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-lg hover:bg-gray-200 transition">
      {icon}
    </div>
  );
}
