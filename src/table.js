import React, { useContext } from "react";

// CONTEXTS.
import { DataContext } from 'src/contexts/data';

// SCSS.
import 'src/scss/table.scss';

const Start = React.memo((props) => {
    const dataContext = useContext(DataContext);

    return (
        <div id="table">
            {dataContext.sorted && dataContext.sorted.map((item, index) => <Column key={index} item={item} />)}
        </div>
    );
});

const Column = React.memo(({ item }) => {
    return (
        <div className="column">
            <div>Grade {item.grade_2}</div>
            <div>{Math.round(item.total)}</div>
        </div>
    );
});

export default Start;