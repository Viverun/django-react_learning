import Form from "../components/Forms";


function Register() {
    // You MUST return the JSX
    return (
        <>
            <Form route='/api/user/register/' method='register'/>
        </>
    );
}

export default Register;