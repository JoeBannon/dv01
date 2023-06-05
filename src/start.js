import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// LAZy.
const Routing = React.lazy(() => import('src/routing'));

// SCSS.
import 'src/scss/body.scss';
import 'src/scss/forms.scss';

const Start = React.memo((props) => {
    return (
        <Suspense fallback={null}>
            <Routing />
        </Suspense>
    );
});

document.addEventListener('DOMContentLoaded', (e) => {
    const container = document.getElementById('react');
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Start />
        </React.StrictMode>
    );
});