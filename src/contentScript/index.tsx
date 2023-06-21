import React from 'react';
import { createRoot } from 'react-dom/client';
import ContentScript from './contentScript';

const init = (() => {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute("class", "root");
    document.body.appendChild(rootContainer);
    if (!rootContainer) {
        throw new Error("Can not find RootContainer");
    }
    const root = createRoot(rootContainer);
    console.log(rootContainer);
    root.render(<ContentScript />);
});

init();