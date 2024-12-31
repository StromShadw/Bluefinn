import { IoPerson } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import Logo from "../../assets/logo.png";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-300 to-blue-900">
        <div className="bg-white p-8 rounded-xl shadow-lg w-1/3">
          <div className="flex flex-col items-center mb-6">
            <img src={Logo} alt="Logo" className="w-1/2" />
          </div>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
              <IoPerson className="text-gray-600" />
              <input type="text" placeholder="User Name" className="w-full bg-transparent outline-none text-gray-700 text-sm pl-2" />
            </div>
            
            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
              <TbLockPassword className="text-gray-600" />
              <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-gray-700 text-sm pl-2" />
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="text-teal-700 text-xl cursor-pointer hover:text-teal-800">
              Forgot Password? <span className="text-gray-700">Click here!</span>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <button className="bg-teal-600 text-white px-24 py-2 rounded-lg text-lg font-semibold cursor-pointer hover:bg-teal-700">
              Login
            </button>
          </div>

          <div className="text-xs text-center text-gray-600 mb-4">
            <div className="mb-2">
              <span>New Users:</span>
              <p>Please follow the instructions sent to your registered email address or contact the System Administrator.</p>
            </div>

            <div className="mb-2">
              <span>Supported Browsers:</span>
              <p>
                Please visit our{" "}
                <a href="#" title="Supported Platforms" className="text-teal-600 hover:underline" target="_blank">
                  website
                </a>{" "}
                for the latest list of supported browsers.
              </p>
            </div>

            <div className="mb-2">
              <span>Language:</span>
              <select className="bg-transparent text-gray-700 py-2 px-4 rounded-lg mt-2">
                <option value="de">German</option>
                <option value="no">Norwegian</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="pt">Portuguese</option>
                <option value="el">Greek</option>
                <option value="en" selected="">
                  English
                </option>
                <option value="it">Italian</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="zh">Chinese</option>
                <option value="ar">Arabic</option>
                <option value="ja">Japanese</option>
                <option value="he">Hebrew</option>
                <option value="nl">Dutch</option>
                <option value="tr">Turkish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
