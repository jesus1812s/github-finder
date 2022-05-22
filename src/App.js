import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className=" flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">Content</main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
