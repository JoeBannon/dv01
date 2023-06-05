import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// CONTEXTS.
import { DataContext } from 'src/contexts/data';

const Start = React.memo((props) => {
    const dataContext = useContext(DataContext);

    return (
        <BarChart width={600} height={300} data={dataContext.sorted}>
            <XAxis dataKey="grade_2" />
            <YAxis dataKey="total" />
            <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
    );
});

export default Start;