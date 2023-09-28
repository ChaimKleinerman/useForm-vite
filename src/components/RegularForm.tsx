import { useForm } from "react-hook-form";

interface FormData {
    username: string;
    email: string;
    password: string;
}

function formAlert() {
    const { register, handleSubmit,formState:{errors} } = useForm<FormData>();

    function onSubmit(data: FormData) {
        alert(JSON.stringify(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Change Me To React Hook Form</h1>
            <div>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter UserName"
                    {...register("username", { required: true, minLength:{value:2,message:'invalid username'} })}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    {...register("email", {
                        required: true,
                        pattern:
                            {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:'invalid mail'}
                    })}
                />
                
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                            message: "the password is not valid"
                        },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.username && <p>{errors.username.message}</p>}
                
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default formAlert;
