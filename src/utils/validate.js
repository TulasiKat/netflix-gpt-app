const checkValidData = (email, password, name=null) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^(?!\d)[A-Za-z]*(?:[A-Za-z][A-Za-z])+/.test(name);
    
    if (name==="" && isNameValid===false){
        return "Full Name not valid"
    }
    if (!isEmailValid){
        return "Email ID is not valid";
    }
    if (!isPasswordValid){
        return "Password is not valid";
    }
    if (name && isNameValid===false){
        return "Full Name not valid"
    }
    return null;
}

export default checkValidData;