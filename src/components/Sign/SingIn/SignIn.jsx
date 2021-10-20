import React from 'react'

import {useForm} from "react-hook-form";

import styles from './SignIn.module.scss'
import {NavLink} from "react-router-dom";


const SignIn = () => {
	const {register,handleSubmit} = useForm()
	return(
		<div className={styles.container}>
				<div className={styles.signWrapper}>
					<h1>Sign In</h1>
					 <div className={styles.modalBox}>
								<form className={styles.modalForm} action="submit">
									<label htmlFor='email' className={styles.formItem}>
										Company name
										<input {...register('email')} className={styles.formInput} placeholder='Enter email' type="email"/>
									</label>
									<label htmlFor='password' className={styles.formItem}>
										Enter password
										<input {...register('password')} className={styles.formInput} placeholder='Enter password' type="password"/>
									</label>
								</form>
						 <NavLink to={'signup'}>
							 <a>Forgot a password</a>
						 </NavLink>
							</div>
						</div>
				<div className={styles.heroWrapper}></div>

		</div>
	)
}

export default SignIn