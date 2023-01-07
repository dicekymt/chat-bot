import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
            '& > * + *': {
                margin: 0
            },
        }}>
            <CircularProgress />
        </Box>
    );
}

export default Loading
