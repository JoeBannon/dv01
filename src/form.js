import React, { useContext, useCallback } from "react";

// CONTEXTS.
import { DataContext } from 'src/contexts/data';

// SCSS.
import 'src/scss/table.scss';

const Start = React.memo((props) => {
    return (
        <div id="table">
            <SelectOwnership />
            <SelectTerm />
            <SelectYear />
            <SelectQuarter />
        </div>
    );
});

const SelectOwnership = React.memo((props) => {
    const dataContext = useContext(DataContext);
    const Changes = useCallback((e) => dataContext.save('ownership', e.target.value), []);

    return (
        <div className="column">
            <div>OWNERSHIP</div>
            <div>
                <select onChange={Changes} value={dataContext.filters.ownership || 'false'}>
                    <option value="false">ALL</option>
                    {dataContext.ownerships && dataContext.ownerships.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
        </div>
    );
});

const SelectTerm = React.memo((props) => {
    const dataContext = useContext(DataContext);
    const Changes = useCallback((e) => dataContext.save('term', e.target.value), []);

    return (
        <div className="column">
            <div>TERM</div>
            <div>
                <select onChange={Changes} value={dataContext.filters.term || 'false'}>
                    <option value="false">ALL</option>
                    {dataContext.terms && dataContext.terms.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
        </div>
    );
});

const SelectYear = React.memo((props) => {
    const dataContext = useContext(DataContext);
    const Changes = useCallback((e) => dataContext.save('year', e.target.value), []);

    return (
        <div className="column">
            <div>YEAR</div>
            <div>
                <select onChange={Changes} value={dataContext.filters.year || 'false'}>
                    <option value="false">ALL</option>
                    {dataContext.years && dataContext.years.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
        </div>
    );
});

const SelectQuarter = React.memo((props) => {
    const dataContext = useContext(DataContext);
    const Changes = useCallback((e) => dataContext.save('quarter', e.target.value), []);

    return (
        <div className="column">
            <div>QUARTER</div>
            <div>
                <select onChange={Changes} value={dataContext.filters.quarter || 'false'}>
                    <option value="false">ALL</option>
                    {dataContext.quarters && dataContext.quarters.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
        </div>
    );
});

export default Start;