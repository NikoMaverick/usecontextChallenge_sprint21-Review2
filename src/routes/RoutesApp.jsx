import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "../themes/ThemeContext";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";
import Header from "../components/Header";
import Button from "../components/Button";

const RoutesApp = () => {
  const { theme } = useTheme()
  return (
    <Router>
      <section className={`App ${theme}`}>
        <Button />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myjob" element={<MyJob />} />
      </Routes>
      </section>
    </Router>
  )
}

export default RoutesApp