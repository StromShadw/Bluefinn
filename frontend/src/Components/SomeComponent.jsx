import { useGlobalContext } from "../Context/GlobalState";

const SomeComponent = () => {
  const { loading, user, error, setLoading, setUser } = useGlobalContext();

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
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default SomeComponent;
