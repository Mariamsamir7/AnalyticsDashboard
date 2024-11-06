import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import SaasPage from './pages/SaasPage';
import AnalyticsPage from "./pages/AnalyticsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import PricingPage from "./pages/PricingPage";
import ChatApp from "./pages/ChatPage";
import BlankPage from "./pages/BlankPage";
import ProjectsPage from "./pages/ProjectsPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import TasksPage from "./pages/TasksPage";
import CalenderPage from "./pages/CalenderPage";



const AppRouter: React.FC = () => (
    <Routes>
      <Route path="AnalyticsDashboard/" element={<DefaultPage />} />
      <Route path="Dashboard/saas" element={<SaasPage />} />
      <Route path="Dashboard/analytics" element={<AnalyticsPage />} />
      <Route path="Pages/Profile" element={<ProfilePage />} />
      <Route path="Pages/Settings" element={<SettingsPage />} />
      <Route path="Pages/Pricing" element={<PricingPage />} />
      <Route path="Pages/Chat" element={<ChatApp />} />
      <Route path="Pages/Blank" element={<BlankPage />} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/Invoices/List" element={<ListPage />} />
      <Route path="/Invoices/Detail" element={<DetailPage/>} />
      <Route path="/tasks" element={<TasksPage/>} />
      <Route path="/calendar" element={<CalenderPage/>} />


    </Routes>
);

export default AppRouter;