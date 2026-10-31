
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FanfictionOverview from "./pages/FanfictionOverview";
import FanfictionDetail from "./pages/FanfictionDetail";
import Contacts from "./pages/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<FanfictionOverview />} />
        <Route path="/work" element={<FanfictionOverview />} />
        <Route path="/work/:workId" element={<FanfictionDetail />} />
        <Route
          path="/work/:workId/:chapterNumber"
          element={<FanfictionDetail />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}
