
import { Text, Button, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
export default function FormFormik() {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
      <View>
        <Text>  Login   </Text> 
        <Formik  
        initialValues={{email: "", password: "",userName:"",phoneNumber:""}}

        validationSchema={
            Yup.object({
                userName: Yup.string()
                .required("user name is Required").min(2,"Too Short !!"),
                email: Yup.string()
                .required("Email is Required").email('Invalid email address'),
                password: Yup.string().required("Password is Required").min(8, "Too Short !!"),
                phoneNumber:Yup.number("must Number").required("Number is required")
            })
        } 
        // Usage:

        > 
        
        {props => (
            <View> 
            <TextInput placeholder='userName' onChangeText={props.handleChange("userName")} />
                {
                    props.touched.userName && props.errors.userName ?  
                    <Text style={{color:'red'}}>  {props.errors.userName} </Text> : null
                }
                <TextInput placeholder='Email' onChangeText={props.handleChange("email")} />
                {
                    props.touched.email && props.errors.email ?  
                    <Text style={{color:'red'}}>  {props.errors.email} </Text> : null
                }
                
                <TextInput  placeholder='password' secureTextEntry={true} type={passwordShown ? "text" : "password" } onChangeText={props.handleChange("password")} />
                
                {
                    props.touched.password && props.errors.password ?  
                    <Text style={{color:'red'}}>  {props.errors.password} </Text> : null
                }
                <button onClick={togglePassword}>Show Password</button>
                <TextInput placeholder='phoneNumber' onChangeText={props.handleChange("phoneNumber")} />
                {
                    props.touched.phoneNumber && props.errors.phoneNumber ?  
                    <Text style={{color:'red'}}>  {props.errors.phoneNumber} </Text> : null
                }
                <Button title='Login' onPress={props.handleSubmit} />

            </View>

        )}
        
        </Formik>
      
      </View>
        
  );
}

