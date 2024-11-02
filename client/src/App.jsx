import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AdminLayout from "./pages/AdminLayout";
import DashboardStaticsComp from "./components/adminComp/DashboardStaticsComp";
import DashboardPostsComp from "./components/adminComp/DashboardPostsComp";
import { Toaster } from "sonner";


function App() {


  return (
    <>
    <Router>
    <Toaster />
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />

        </Route>
        <Route path="/admin" element={<AdminLayout />} >
        <Route index element={<DashboardStaticsComp />} />
        <Route path="posts" element={<DashboardPostsComp />} />
        {/* <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="comments" element={<CommentsPage />} />
        <Route path="settings" element={<SettingsPage />} /> */}
        </Route>

       


      </Routes>

    </Router>
    </>
  )
}

export default App
