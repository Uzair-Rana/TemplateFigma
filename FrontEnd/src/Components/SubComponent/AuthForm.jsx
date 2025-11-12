import React, { useState } from "react";
import globalTailwindConfig from "../../config/globalTailwindConfig";
import axios from "axios";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const c = globalTailwindConfig.authFormSection;

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = isSignUp
                ? "http://localhost:8000/api/user/register/"
                : "http://localhost:8000/api/user/login/";

            const payload = isSignUp
                ? { name: formData.name, email: formData.email, password: formData.password }
                : { email: formData.email, password: formData.password };

            const response = await axios.post(url, payload);

            // Show success message
            alert("Success! Your data has been submitted.");

            // Clear form after success
            setFormData({ name: "", email: "", password: "" });
        } catch (error) {
            console.error(error);
            // Show error as popup
            if (error.response && error.response.data) {
                alert("Error: " + JSON.stringify(error.response.data));
            } else {
                alert("Network Error. Please try again.");
            }
        }
    };

    return (
        <div className={c.container}>
            {/* SIGN UP / LOGIN Toggle */}
            <div className={c.toggleWrapper}>
                <button
                    className={`${c.toggleButton} ${isSignUp ? c.toggleActive : c.toggleInactive}`}
                    onClick={() => setIsSignUp(true)}
                >
                    SIGN UP
                </button>
                <button
                    className={`${c.toggleButton} ${!isSignUp ? c.toggleActive : c.toggleInactive}`}
                    onClick={() => setIsSignUp(false)}
                >
                    LOGIN
                </button>
            </div>

            {/* Form Fields */}
            <form className={c.formWrapper} onSubmit={handleSubmit}>
                {isSignUp && (
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className={c.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="sr-only">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className={c.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        className={c.input}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className={c.submitButton}>
                    {isSignUp ? "Create an Account" : "Login"}
                </button>
            </form>

            {/* Divider with OR */}
            <div className={c.dividerWrapper}>
                <hr className={c.dividerLine} />
                <span className={c.dividerText}>or</span>
                <hr className={c.dividerLine} />
            </div>

            {/* Login via Twitter Button */}
            <button className={c.socialButton}>
                <svg
                    className={c.socialIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M18.9 4.3a8.8 8.8 0 01-2.6.7c-.8-.8-1.9-1.3-3.1-1.3A5.4 5.4 0 007 9.8c0 1.5.7 2.9 1.9 3.9a4.8 4.8 0 01-2.4-.7c0 .1 0 .2 0 .3a5.5 5.5 0 004.4 5.4 5 5 0 01-2.4.1c.3.8 1.2 1.5 2.2 1.5A11 11 0 0021 7.3V7a10 10 0 002.6-2.7z" />
                </svg>
                <span className={c.socialText}>Login via Twitter</span>
            </button>
        </div>
    );
};

export default AuthForm;
