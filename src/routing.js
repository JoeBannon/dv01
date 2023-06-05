import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// LAZY.
const Load = React.lazy(() => import('src/load'));

const Start = React.memo((props) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NextPhase />} />
                <Route path="/:page" element={<NextPhase />} />
                <Route path="/:dept/:page" element={<NextPhase />} />
            </Routes>
        </Router>
    );
});

const NextPhase = React.memo((props) => {
    return (
        <Suspense fallback={null}>
            <Load />
        </Suspense>
    );
});

export default Start;