import React from 'react'
import { Formik, Form, FastField } from 'formik';
import { Button } from 'reactstrap';
import InputField from './InputField';
import SelectField from './SelectField';
import RandomPhotoField from './RandomPhotoField';
import * as Yup from 'yup';


function FormPhoto({ onSubmit, initialValues, isAddMode }) {
    
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('* This field is required'),
        categoryId : Yup.number().required('* This field is required').nullable(),
        photo: Yup.string().required('* This field is required'),

    })

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => {
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category ?"
                        />
                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="Photo"
                        />

                        <Button 
                            style={{ padding: '0.5rem 1.2rem', fontSize: '1.7rem', borderRadius: '1rem' }} 
                            type='submit' 
                            color='primary'
                        >
                            {isAddMode ? 'Add to album' : 'Update your photo'}
                        </Button>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default FormPhoto
