import { useGlobalState } from "../Context/GlobalState";

const SomeComponent = () => {
  const { loading, user, error, setLoading, setUser } = useGlobalState();

  // Example usage of the global context values and functions
  const handleLogin = () => {
    setLoading(true);
    // Simulate a login process
    setTimeout(() => {
      setUser({ name: "PARESH ESAVE" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="dark:text-white bg-slate-600 dark:bg-gray-800 p-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <button 
        onClick={handleLogin}
        className="mt-2 rounded-md bg-blue-500 text-white px-2 py-1"> 
          Login
        </button>
      )}
      <br />
      <button 
      onClick={() => setUser(null)}
      className="mt-2 rounded-md bg-red-500 text-white px-2 py-1">
        Logout
      </button>
    </div>
  );
};

export default SomeComponent;
