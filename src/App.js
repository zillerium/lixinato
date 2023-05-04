import Doramo from './components/Doramo.js'
import Flowswap from './components/Flowswap.js'
import Catalox from './components/Catalox.js'
import Peacio from './components/Peacio.js'
import AssetFlow from './components/AssetFlow.js'
import Welcome from './components/Welcome.js'
import NavBar from './NavBar.js'
import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, BrowserRouter ,  Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

    <div className="page-container" >
         <Container>
		<NavBar />

                <Routes>
                     <Route index element={<Welcome />} />                    
                     <Route path="/doramo/" element={<Doramo />} />
                     <Route path="/peacio/" element={<Peacio />} />
                     <Route path="/flowswap/" element={<Flowswap />} />
                     <Route path="/catalox/" element={<Catalox />} />
                     <Route path="/assetflow/" element={<AssetFlow />} />
	  
	        </Routes>
	  </Container>

    </div>


    </div>
  );
}

export default App;
