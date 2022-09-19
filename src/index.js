import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from "./app"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />, document.querySelector('.root'))
