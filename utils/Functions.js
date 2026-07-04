export const checkEmailFormat = (email)=>{
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
}

export const checkPasswordFormat = (pass)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //Big letter, small letter, number, lenght 8
    return regex.test(pass);
}

export const submitHandler = (setErrors,email,pass,name)=>{
    const newErrors = {};

    if(name.length===0)
        newErrors.name = "Nume invalid";

    if (!checkEmailFormat(email)) 
        newErrors.email = "Email invalid";
        
    if (!checkPasswordFormat(pass)) 
        newErrors.password = "Parola trebuie sa contina o litera mare, o litera mica, o cifra si sa fie diemnsiunea 8 cel putin";
        
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    setErrors({});
    return;
}
export const ChangeFieldHandler = (field, value,setForm,setErrors) => {
    setForm(prev => ({
        ...prev,
        [field]: value
    }));

    setErrors(prev => ({
        ...prev,
        [field]: null
    }));
};

export const blurFieldHandler = (field, value,setErrors) => {
    let error = null;

    if (field === "email") {
        if (!checkEmailFormat(value)&&value.length>0) {
            error = "Email invalid";
        }
    }

    if (field === "password") {
        if (!checkPasswordFormat(value)&&value.length>0) {
            error = "Parola trebuie sa contina o litera mare, o litera mica, o cifra si sa fie diemnsiunea 8 cel putin";
        }
    }
    if(field === "name"){
        if(!value.length>0)
            error = "Completeaza nume"
    }

    setErrors(prev => ({
        ...prev,
        [field]: error
    }));
};