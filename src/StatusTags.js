import React from 'react';
import Button from '@material-ui/core/Button';

function StatusTags(props) {
    return (
        <div>
            <Button variant="contained" style={{backgroundColor: '#ffc75f', color: 'white', width: '100px', height: '30px'}} disabled>
            Disabled
            </Button>
        </div>
    );
}

export default StatusTags;