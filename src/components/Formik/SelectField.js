import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import OPTIONS_SELECT from '../../constants/select';
import { ErrorMessage } from 'formik';

function SelectField({ field, placeholder, label, form }) {
    const { name, value } = field;
    const selectedOption = OPTIONS_SELECT.find(option => option.value === value)
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    console.log(field, form);
    const handleSelectChange = (selected) => {
        console.log(selected);
        const selectedValue = selected ? selected.value : selected;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };

        field.onChange(changeEvent);
    }
    const styleSelect = {
        control: styles => {
            const borderError = showError ? 'red' : '#ced4da';
            return {
                ...styles,
                fontSize: '1.7rem',
                borderColor: borderError
            }
        },
        option: (provided, state) => ({
            ...provided,
            fontSize: '1.7rem',
            borderBottom: '1px solid #f9f9f9',
            color: 'blue',
            padding: '1rem',
        }),
    }
    return (
        <FormGroup>
            {label && <Label style={{ fontSize: '2rem' }} for={name}>{label} </Label>}
            <Select
                id={name}
                styles={styleSelect}
                {...field}
                value={selectedOption}
                onChange={handleSelectChange}
                options={OPTIONS_SELECT}
                placeholder={<div style={{ fontSize: '1.7rem' }}>{placeholder}</div>}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} style={{ fontSize: '1.5rem' }} component={FormFeedback} />
        </FormGroup>
    )
}

export default SelectField
