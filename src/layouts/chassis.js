import React, { useMemo } from 'react';

// SCSS.
import 'src/layouts/chassis.scss';

const Start = React.memo(({ dept = 'unknown', children, ...otherProps }) => {
    otherProps.className = useMemo(() => [ dept ].join(' '), [ dept ]);
    return (<div id="chassis" children={children} {...otherProps} />);
});
Start.displayName = 'layouts, chassis: Start';

Start.Anatomy = React.memo(({ dept = 'unknown', children, ...otherProps }) => {
    otherProps.className = useMemo(() => [ dept ].join(' '), [ dept ]);
    return (<div id="anatomy" children={children} {...otherProps} />);
});
Start.Anatomy.displayName = 'layouts, chassis: Start.Anatomy';

export default Start;