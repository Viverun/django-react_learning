import Form from "../components/Forms";
function Login() {
    // You MUST return the JSX
    return (
        <>
            <Form route='/api/token/' method='login'/>
        </>
    );
}

export default Login;