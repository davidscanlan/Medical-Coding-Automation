import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';


const SelectBox = ({ model, setModel }) => {
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl
            margin='normal'
            style={{ width: '250px' }}
            variant='outlined'>
            <InputLabel ref={inputLabel} htmlFor="model-select">Procedure</InputLabel>
            <Select
                value={model}
                labelWidth={labelWidth}
                onChange={e => setModel(e.target.value)}
                inputProps={{
                    name: 'model',
                    id: 'model-select',
                }}
            >
                <MenuItem value={'gpt2'}>General Medicine</MenuItem>
                <MenuItem value={'gpt2-medium'}>Surgery</MenuItem>
                <MenuItem value={'gpt2-large'}>Cardiology</MenuItem>
                <MenuItem value={'gpt2-large'}>Neurology</MenuItem>
            </Select>
        </FormControl>
    )
};

export default SelectBox;