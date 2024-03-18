
'use client'
import React, { useEffect, useState } from "react";
const SignUp=()=>{
    const[fname,setfname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const[errors, setErrors]=useState({});
    const[isFormValid,setIsFormValid]=useState(false);

    useEffect(() => { 
        validateForm(); 
    }, [fname, email,password,cpassword]); 
    const validateForm=()=>{
        let errors={};
        if (!fname) { 
            errors.name = 'Name is required.'; 
        } 
  
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 
  
        if (!password) { 
            errors.password = 'Password is required.'; 
        } else if (password.length < 6) { 
            errors.password = 'Password must be at least 6 characters.'; 
        } 
        if(password!=cpassword){
            errors.cpassword='password not matched please write proper password'
        }
  
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    }

    const handlesubmit=(event)=>{
        event.pereventdefault();
        if(isformvalid){
            console.log("Form submitted Successfully")
        }
        else{
            console.log("Form has errors. Please correct them.")
        }
    }
    return(
     
        <div style={styles.container}>
            <div style={styles.form}>
            <h1 style={styles.heading}> 
                    SignUp Page 
                </h1> 
            <input  style={styles.input} type="text" placeholder="FirstName" value={fname} onChange={(e)=>setfname(e.target.value)}/>
            {errors.name && <p style={styles.error}>{errors.fname}</p>}

            <input  style={styles.input}  type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            {errors.email && <p style={styles.error}>{errors.email}</p>}

            <input  style={styles.input}  type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            {errors.pass && <p style={styles.error}>{errors.pass}</p>}

            <input  style={styles.input}  type="password" placeholder="ConfirmPassword" value={cpassword} onChange={(e)=>setcpassword(e.target.value)}/>

            <button  style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }} 
                    disabled={!isFormValid}  type="submit" onClick={handlesubmit}>SignUp</button>

            </div>
        </div>
        
    )
}
const styles = { 
    container: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f0f0f0', 
    }, 
    heading: { 
        fontWeight: 'bold', 
        fontSize: '25px', 
        color: "green", 
        textAlign: "center", 
    }, 
    subHeading: { 
        fontWeight: 'bold', 
        fontSize: '25px', 
        textAlign: "center", 
  
    }, 
    form: { 
        backgroundColor: '#fff', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        width: '100%', 
        maxWidth: '400px', 
        margin: '0 auto', 
    }, 
    input: { 
        width: '100%', 
        padding: '12px', 
        marginBottom: '12px', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        fontSize: '16px', 
        transition: 'border-color 0.2s ease', 
    }, 
    button: { 
        backgroundColor: 'green', 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: '16px', 
        padding: '12px', 
        border: 'none', 
        borderRadius: '10px', 
        cursor: 'pointer', 
        width: '40%', 
        transition: 'opacity 0.2s ease', 
    }, 
    error: { 
        color: 'red', 
        fontSize: '14px', 
        marginBottom: '6px', 
    }, 
}; 

export default SignUp;