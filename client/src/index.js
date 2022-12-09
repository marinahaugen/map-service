import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import App from './app/App';
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root'));
root.render(<App />);
