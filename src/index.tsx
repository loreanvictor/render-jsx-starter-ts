import { CommonDOMRenderer } from 'render-jsx/dom';


const renderer = new CommonDOMRenderer();
renderer.render(<div>Hellow World!</div>).on(document.body);
