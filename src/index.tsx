import ReactDOM from 'react-dom/client';
import App from './components/App';
import { registerServiceWorker } from './registerServiceWorker';

const container = document.getElementById('root');
// @ts-ignore
const root = ReactDOM.createRoot(container);
root.render(<App />);
registerServiceWorker();
