import Logo from "../../assets/Logo_Transparent.png";
import { useGlobalState } from '../../Context/GlobalState';

const LoginForm = () => {
  const { setIsAuthenticated,setAvatar,avatar,setUser } = useGlobalState();
  

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameBlur = (e) => {
    setUser(e.target.value); // Set user when the input loses focus
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-orange-400">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-[#8C52FF]">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="TRST" width={100}/>
        </div>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>
        {/* Avatar Input Section */}
        <div className=" relative flex justify-center mb-6">
          <label className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-[#8C52FF] overflow-hidden hover:opacity-80 transition-opacity">
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">Change Photo</span>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black mb-1"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              onBlur={handleUsernameBlur}
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF914D]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF914D]"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-black">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={() => setIsAuthenticated(true)}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
