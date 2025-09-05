import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const shema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string().email("El email no es valido").required("El email es obligatorio")
})


function FormContainer() {
    return (
        <>
            <div>
                <h1>Formulario de Registro</h1>
                <Formik
                    initialValues={{ name: '', email: '' }}
                    validatetionSchema={shema}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2))
                    }}
                >
                    <Form>
                        <label>Nombre</label>
                        <Field name="name"/> {/*input de formik*/}
                        <ErrorMessage name="name"/> 

                        <label>Email</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email"/>

                        <button type="submit">Enviar</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default FormContainer