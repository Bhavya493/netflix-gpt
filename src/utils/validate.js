export const checkValidation = (email,password) => {
    const emailRegex = /[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const isPasswordValid = passwordRegex.test(password);

    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password";

    return null
}