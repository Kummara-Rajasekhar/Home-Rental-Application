import React from 'react'
import './RegisterPage.scss'
const RegisterPage = () => {
  return (
    <div className='register'>
        <div className="register_content">
            <form action="">
                <input type="text" placeholder='First Name' name="firstname" required/>
                <input type="text" placeholder='Last Name' name="lastname" required/>
                <input type="email" placeholder='Email' name="email" required/>
                <input type="password" placeholder='Password' name="password" required/>
                <input type="password" placeholder='Confirm Password' name="confirmpassword" required/>
                <input id="image" type="file" name='profileImage' accept='image/*' style={{display: 'none'}} required/>
                <label htmlFor="image">
                    <img src="/assets/addImage.png" alt="add profile photo" />
                    <p>Upload Your Phot</p>
                </label>
                <button type='submit'>REGISTER</button>
            </form>
        </div>
      
    </div>
  )
}

export default RegisterPage
