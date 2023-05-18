import { Link } from "react-router-dom";


const SignUp = () => {

    const handleSignUp = (event) =>{
        event.preventDefault()
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col  w-4/5 lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
                                <p>Already have a account ? <Link to="/login"><span className="text-blue-600">login</span></Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <input onClick={handleSignUp} className="btn btn-primary" type="submit" value="Login" />
                                <input onClick={{}} className="btn btn-primary mt-5" type="submit" value="Google" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;