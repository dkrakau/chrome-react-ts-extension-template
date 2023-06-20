import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './popup/popup';
import './index.css';

const init = (() => {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute("class", "root");
    if (!rootContainer) {
        throw new Error("Can not find RootContainer");
    }
    document.body.appendChild(rootContainer);
    const root = createRoot(rootContainer);
    console.log(rootContainer);
    root.render(<Popup />);
});

init();