import React from 'react'
import './Login.scss'

function Login () {
	return (
		<div className='login'>
			<div className='border'>
				<h2>Log In</h2>
				<form method='post'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' placeholder='me@example.com' required />

					<label htmlFor='password'>Password</label>
					<input type='password' name='password' placeholder='**********' required />
					<button type='submit'>Log In</button>
				</form>
			</div>
		</div>
	)
}

export default Login;