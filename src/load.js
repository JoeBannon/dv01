import React, { useContext, useCallback } from "react";

// CONTEXTS.
import { DataProvider, DataContext } from 'src/contexts/data';

// HELPERS.
import Spinner from 'src/helpers/spinner';

// LAYOUTS.
import Chassis from 'src/layouts/chassis.js';

// LAZY.
const Graph = React.lazy(() => import('src/graph'));
const Table = React.lazy(() => import('src/table'));
const Form  = React.lazy(() => import('src/form'));

const Start = React.memo((props) => {
    return (
        <DataProvider>
            <Waiting />
        </DataProvider>
    );
});

const Waiting = React.memo((props) => {
    const dataContext = useContext(DataContext);
    return (<Loading isLoading={dataContext.sorted ? false : true} />);
});
Waiting.displayName = 'load, waiting';

const Container = React.memo((props) => {
    return (
        <Chassis>
            <Chassis.Anatomy>
                <Graph />
                <Table />
                <Form />
                <Reset />
            </Chassis.Anatomy>
        </Chassis>
    );
});

const Reset = React.memo((props) => {
    const dataContext = useContext(DataContext);
    const Reset = useCallback((e) => dataContext.save('reset'), []);

    return (
        <div style={{ textAlign:'center' }}>
            <button onClick={Reset}>RESET</button>
        </div>
    );
});

// HOC.
const Loading = Spinner(Container);
export default Start;