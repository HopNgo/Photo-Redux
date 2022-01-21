import React from 'react'
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
function InputField({ placeholder, label, field, form }) {
    console.log(field, form);
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <Label style={{ fontSize: '2rem' }} for={name}>{label} </Label>}
            <Input
                style={{ padding: '0.7rem', fontSize: '1.7rem' }}
                type='text'
                id={name}
                placeholder={placeholder}
                {...field}
                invalid={showError}
            />
            <ErrorMessage name={name} style={{fontSize:'1.5rem'}} component={FormFeedback} />
        </FormGroup>
    )
}

export default InputField
