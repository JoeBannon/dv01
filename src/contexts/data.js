import React, { useState, createContext, useEffect, useTransition, useMemo, useCallback } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

export const DataContext = createContext();
DataContext.displayName = 'context / DataContext';

export const DataProvider = (props) => {
    const [ isPending, startTransition ] = useTransition();
    const [ data, setData ] = useState(false);
    const [ filters, setFilters ] = useState({});

    useEffect(() => {
        startTransition(() => {
            if (data == false) axios.get('/data/data.csv').then((response) => {
                const parsedData = Papa.parse(response.data, { header: true, dynamicTyping: true });
                const newData    = Object.values(parsedData.data).sort((a, b) => sorting(a, b));
                setData(newData);
            }).catch(console.log);
        });
    }, []);

    const ownerships = useMemo(() => {
        if (data) return Object.values(data).reduce((unique, item) => {
            return unique.includes(item.home_ownership) ? unique : [ ...unique, item.home_ownership ];
        }, []);
        else return false;
    }, [ data ]);

    const terms = useMemo(() => {
        if (data) return Object.values(data).reduce((unique, item) => {
            return unique.includes(item.term) ? unique : [ ...unique, item.term ];
        }, []);
        else return false;
    }, [ data ]);

    const years = useMemo(() => {
        if (data) return Object.values(data).sort((a,b) => a.v_year - b.v_year).reduce((unique, item) => {
            return unique.includes(item.v_year) ? unique : [ ...unique, item.v_year ];
        }, []);
        else return false;
    }, [ data ]);

    const quarters = useMemo(() => {
        if (data) return Object.values(data).sort((a,b) => a.v_quarter - b.v_quarter).reduce((unique, item) => {
            return unique.includes(item.v_quarter) ? unique : [ ...unique, item.v_quarter ];
        }, []);
        else return false;
    }, [ data ]);

    const sorted = useMemo(() => {
        if (data) return Object.values(data).reduce((acc, item) => reducing(acc, item, filters), []);
        else return false;
    }, [ data, filters ]);

    const save = useCallback((key,value) => {
        if (key == 'reset') setFilters({});
        else setFilters(filters => ({ ...filters, [key]:value != 'false' ? value : false }));
    }, []);

    return (
        <DataContext.Provider value={{ isPending, sorted, ownerships, terms, years, quarters, filters, save }}>
            {props.children}
        </DataContext.Provider>
    );
};
DataProvider.displayName = 'context / DataProvider';

function sorting (a, b) {
    if (a.grade_2 != b.grade_2) return Number(a.grade_2) - Number(b.grade_2);
    else return Number(a.v_quarter) - Number(b.v_quarter);
};

function reducing (acc, item, filters) {
    if (filters.ownership && filters.ownership != item.home_ownership) return acc;
    if (filters.term && filters.term != item.term) return acc;
    if (filters.year && filters.year != item.v_year) return acc;
    if (filters.quarter && filters.quarter != item.v_quarter) return acc;

    const found = acc.find(a => a.grade_2 === item.grade_2);
    if (found) found.total += item.V1;
    else acc.push({ grade_2: item.grade_2, total: item.V1 });
    return acc;
};