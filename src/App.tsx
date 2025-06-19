import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompetitiveAnalysis from "./pages/CompetitiveAnalysis";
import DecisionMaking from "./pages/DecisionMaking";
import ImplementationRoadmap from "./pages/ImplementationRoadmap";
import StrategicAnalysisPage from "./pages/StrategicAnalysisPage";
import "./App.css";
import InnovativeSolutions from "./pages/InnovativeSolutions";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<StrategicAnalysisPage />} />
            <Route
              path="/competitive-analysis"
              element={<CompetitiveAnalysis />}
            />
            <Route
              path="/innovative-solutions"
              element={<InnovativeSolutions />}
            />
            <Route path="/decision-making" element={<DecisionMaking />} />
            <Route
              path="/implementation-roadmap"
              element={<ImplementationRoadmap />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
