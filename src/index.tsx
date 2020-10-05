import { HTMLRenderer } from 'render-jsx';


const renderer = new HTMLRenderer();
renderer.render(<div>Hellow World!</div>).on(document.body);