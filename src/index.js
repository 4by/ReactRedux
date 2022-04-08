import React from 'react';
import ReactDOM from 'react-dom';
import SyncApp from './syncApp';
import AsyncApp from './asyncApp';


ReactDOM.render(
    <React.StrictMode>
            {/* <SyncApp /> */}
            <AsyncApp />
    </React.StrictMode>,
    document.getElementById('root')
);

