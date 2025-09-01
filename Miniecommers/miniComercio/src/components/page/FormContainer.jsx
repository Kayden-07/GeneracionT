import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

function FormContainer() {
    return (
        <>
            <div>
                <h1>Formulario de Registro</h1>
                <Formik
                    initialValues={{ name: '', email: '' }}

                >
                    <Form>
                        <label>Nombre</label>
                        <Field name="name"/> {/*input de formik*/}
                        <ErrorMessage name="name"/> 
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default FormContainer