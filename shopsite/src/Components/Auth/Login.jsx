import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../utils/useLogin'
import { ToastContainer, toast } from 'react-toastify'

const formInputs = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@example.com',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
]
const Login = () => {
  const { login, isLoading, error } = useLogin()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleFormData = (e) => {
    setFormData((preVal) => ({
      ...preVal,
      [e.target.name]: e.target.value,
    }))
  }
  const handleLogin = (event) => {
    event.preventDefault()
    if (!formData.email || !formData.password) {
      alert('Please Provide All Details')
      return
    } else {
      login(formData)
    }
  }

  useEffect(() => {
    toast(error)
  }, [error])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-8 px-8 py-10 bg-white rounded-lg shadow-lg '>
        <div className='flex flex-col items-center justify-center gap-2 px-14'>
          <h2 className='text-4xl font-bold'>Sign In</h2>
          <p className='text-lg font-semibold text-center text-slate-400'>
            Enter your credentials to access your <br />
            account
          </p>
        </div>

        <form
          className='flex flex-col w-full gap-8'
          onSubmit={handleLogin}
        >
          {formInputs.map((elem) => {
            return (
              <div
                key={elem.name}
                className='flex flex-col gap-1'
              >
                <label className='text-lg font-bold'>{elem.label}</label>
                <input
                  className='px-2 py-3 rounded-md shadow-md text-md'
                  value={formData[elem.name]}
                  type={elem.type}
                  placeholder={elem.placeholder}
                  name={elem.name}
                  onChange={handleFormData}
                />
              </div>
            )
          })}
          <button
            type='submit'
            className='py-3 font-bold text-white rounded-md bg-slate-950 hover:bg-slate-700'
          >
            Sign In
          </button>
        </form>

        <h3 className='text-lg font-semibold'>
          Don't have an account?{' '}
          <Link
            className='font-bold underline'
            to={'/signin'}
          >
            Login
          </Link>
        </h3>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
