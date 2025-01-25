// import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd"; // Ant Design Layout
import { GlobalStateProvider, useGlobalState } from "./Context/GlobalState";
import { ThemeProvider } from "./Context/ThemeContext";
import { useTheme } from "./Context/ThemeContext";

// Components
import SiderComponent from "./Components/Sidebar/SiderComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";

// Pages
import Login from "./pages/auth/Login";
import BusinessEntitiesPage from "./pages/organization/buisness entities/BusinessEntitiesPage";
import Employees from "./pages/organization/Employees/Employees";
import Location from "./pages/organization/Locations/Locations";
import LocationType from "./pages/organization/LocationType/LocationType";
import TrainingAwareness from "./pages/organization/Training&Awareness/TrainingAwareness";

function LoginLayout() {
  return (
    <Layout className="min-h-screen">
      <Layout.Content>
        <Login />
      </Layout.Content>
    </Layout>
  );
}

function ProtectedLayout() {
  const { darkTheme } = useTheme();

  return (
    <Layout className={`min-h-screen ${darkTheme ? "bg-[#FF914D]" : ""}`}>
      <SiderComponent />
      <Layout>
        <HeaderComponent />
        <Layout.Content>
          <Routes>
            <Route path="/business-entities" element={<BusinessEntitiesPage />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/location-type" element={<LocationType />} />
            <Route path="/training-awareness" element={<TrainingAwareness />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

function AppContent() {
  const { isAuthenticated } = useGlobalState();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !isAuthenticated ? (
            <LoginLayout />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/*"
        element={
          isAuthenticated ? <ProtectedLayout /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStateProvider>
          <AppContent />
        </GlobalStateProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// import { Layout } from "antd";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { ThemeProvider, useTheme } from "./Context/ThemeContext.jsx";
// import { GlobalStateProvider  } from "./Context/GlobalState.jsx";
// import HeaderComponent from "./Components/Header/HeaderComponent";
// import SiderComponent from "./Components/Sidebar/SiderComponent";
// import Login from "./pages/auth/Login.jsx";
// import BusinessEntitiesPage from "./pages/organization/buisness entities/BusinessEntitiesPage";
// import Employees from "./pages/organization/Employees/Employees.jsx";
// import Location from "./pages/organization/Locations/Locations.jsx";
// import LocationType from "./pages/organization/LocationType/LocationType.jsx";
// import TrainingAwareness from "./pages/organization/Training&Awareness/TrainingAwareness.jsx";
// import SomeComponent from "./Components/SomeComponent.jsx";
// import { useGlobalState } from "./Context/GlobalState.jsx";

// function LoginLayout() {
//   return (
//     <Layout className="min-h-screen">
//       <Layout.Content>
//         <Login />
//       </Layout.Content>
//     </Layout>
//   );
// }

// function ProtectedLayout() {
//   const { darkTheme } = useTheme();

//   return (
//     <Layout className={`min-h-screen ${darkTheme ? "bg-[#FF914D]" : ""}`}>
//       <SiderComponent />
//       <Layout className="">
//         <HeaderComponent />
//         <Layout.Content>
//           <Routes>
//             <Route path="/business-entities" element={<BusinessEntitiesPage />} />
//             <Route path="/employees" element={<Employees />} />
//             <Route path="/locations" element={<Location />} />
//             <Route path="/location-type" element={<LocationType />} />
//             <Route path="/training-awareness" element={<TrainingAwareness />} />
//           </Routes>
//         </Layout.Content>
//       </Layout>
//     </Layout>
//   );
// }

// function AppContent() {
//   const { isAuthenticated } = useGlobalState();

//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={
//           !isAuthenticated
//             ? <LoginLayout />
//             : <Navigate to="/" replace />
//         }
//       />
//       <Route
//         path="/*"
//         element={
//           isAuthenticated
//             ? <ProtectedLayout />
//             : <Navigate to="/login" replace />
//         }
//       />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <GlobalStateProvider >
//           <AppContent />
//         </GlobalStateProvider>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
