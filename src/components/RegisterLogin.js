/*File written by: Chevva,Meghana, Student ID: 1002114458*/ 
import React, { useRef, useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../css/RegisterLogin.css';
import Footer from './Footer';

const RegisterLogin = () => {
    const [isLoginPanelActive, setIsLoginPanelActive] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [education, setEducation] = useState('');

    const or = useRef(null);
    const ol = useRef(null);
    const rf = useRef(null);
    const lf = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoginPanelActive) {
            ol.current.classList.add('active');
            lf.current.classList.add('active');
            or.current.classList.remove('active');
            rf.current.classList.remove('active');
        } else {
            ol.current.classList.remove('active');
            lf.current.classList.remove('active');
            or.current.classList.add('active');
            rf.current.classList.add('active');
        }
    }, [isLoginPanelActive]);

    const handleSignIn = () => {
        setIsLoginPanelActive(true);
    };

    const handleSignUp = () => {
        setIsLoginPanelActive(false);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (password === 'student') {
            navigate('/dashboard');
        } else if (password === 'visitor') {
            navigate('/visitor');
        } else if (password === 'department') {
            navigate('/department');
        }else if (password === 'departmentadmin') {
            navigate('/department-admin');
        } else if (password === 'super-admin') {
            navigate('/super-admin');
        } else {
            alert('Incorrect password. Please try again.');
        }
        setEmail('');
        setPassword('');
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        alert(`Registered as ${firstName} ${lastName} with role: ${role} and education: ${education}`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRole('');
        setEducation('');
    };

    return (
        <div className='container'>
            <div className="overlayRight" ref={or}>
                <h1 className='Titlen'>Digital Thesis Repository System</h1>
                <p className='text'>Already a member?</p>
                <br></br>
                <button className="button-85" id="signIn" onClick={handleSignIn}>
                    Login Now
                </button>
                <br></br>
            </div>

            <div className="SignInForm" ref={lf}>
                <form action="#" className="form" id="form2" onSubmit={handleLoginSubmit}>
                    <fieldset className='fieldsetR'>
                        <legend className='legend'><h1>Login</h1></legend>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="inputR" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <br></br>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="inputR"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        
                        <p className='fp'><Link to='/forgotPassword' className='linkfp'>Forgot your password?</Link></p>
<br></br>
                        <div className='input3'>
                            <button type="submit" className="button-85">Sign In</button>
                        </div>
                    </fieldset>
                    <Footer />
                </form>
                
            </div>

            <div className="SignUpForm" ref={rf}>
                <form action="#" className="form" id="form1" onSubmit={handleSignUpSubmit}>
                    <fieldset className='fieldsetR'>
                        <legend className='legend'><h1>Register</h1></legend>
                        <div className='names'>
                            <input 
                                type='text' 
                                name="firstName" 
                                placeholder='First Name' 
                                className="inputR" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required 
                            />
                            &nbsp;
                            <input 
                                type='text' 
                                name="lastName" 
                                placeholder='Last Name' 
                                className="inputR" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required 
                            />
                        </div>
                        <br></br>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="inputR" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <br></br>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="inputR" 
                            required 
                        />
                        <br></br>
                        <input 
                            type="password" 
                            name="cPassword" 
                            placeholder="Confirm Password" 
                            className="inputR" 
                            required 
                        />
                        <br />
                        <select 
                            className="inputR" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select Role type</option>
                            <option value="Student">Student</option>
                            <option value="Department Admin">Department Admin</option>
                            <option value="Visitor">Visitor</option>
                        </select>
                        <br></br>
                        <select 
                            className="inputR" 
                            value={education} 
                            onChange={(e) => setEducation(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Level of Education</option>
                            <option value="Bachelor's">Bachelor's</option>
                            <option value="Master's">Master's</option>
                            <option value="PhD">PhD</option>
                        </select>
                        <br></br>
                        <div className='input3'>
                            <button type="submit" className="button-85">Sign Up</button>
                        </div>
                        <br />
                    </fieldset>
                    <Footer />
                </form>
            </div>

            <div className="overlayLeft" ref={ol}>
                <h1 className='Titlen'>Digital Thesis Repository System</h1>
                <p className='text'>Don't have an account?</p>
                <br></br>
                <button className="button-85" id="signUp" onClick={handleSignUp}>
                    Register Here
                </button>
                <br></br>
            </div>
        </div>
    );
};

export default RegisterLogin;
