import LoginForm from "@/components/LoginForm";

const login = () => {
    return(
        <div className='min-h-screen pt-28 px-10'>
            <h1 className='text-5xl font-bold'>Member</h1>
            <LoginForm></LoginForm>
        </div>
    )
}

export default login;