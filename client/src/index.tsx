import App from './app/App';
import {createRoot} from "react-dom/client";

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import './index.css'

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
