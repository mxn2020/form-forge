import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FormsListPage from "./pages/FormsListPage";
import BuilderPage from "./pages/BuilderPage";
import SubmissionsPage from "./pages/SubmissionsPage";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (<div style={{ display: "flex" }}>
    <Sidebar />
    <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>{children}</main>
  </div>);
}

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout><FormsListPage /></AdminLayout>} />
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/inbox" element={<AdminLayout><SubmissionsPage /></AdminLayout>} />
      <Route path="/settings" element={<AdminLayout><FormsListPage /></AdminLayout>} />
    </Routes>
  </BrowserRouter>);
}
