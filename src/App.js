import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Internet from './pages/Internet';






function App() {
    return (
        <>


                <Routes>

                {/* Define the routes */}
                <Route path="/" element={<Home />} />
                <Route path="/Internet" element={<Internet />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Contact"  element={<Contact />} />
                {/* Add this route */}

                </Routes>

        </>

    );
}

export default App;

