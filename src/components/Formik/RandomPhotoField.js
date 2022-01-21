import { ErrorMessage } from 'formik';
import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from '../RandomPhoto/index';

function RandomPhotoField({ form, field, label }) {
    const { name, value } = field;
    console.log(field, form);
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleImageUrlChange = (url) => {
        form.setFieldValue(name, url);
    }

    return (
        <FormGroup>
            {label && <Label style={{ fontSize: '2rem' }} for={name}>{label}</Label>}
            <RandomPhoto
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                classname={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} style={{ fontSize: '1.5rem' }} component={FormFeedback} />

        </FormGroup>
    )
}

export default RandomPhotoField
