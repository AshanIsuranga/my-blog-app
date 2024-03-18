import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);

  //const [errorMessage, setErrorMessage] = useState(null);
  //const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
      //return setErrorMessage('Please fill out all fields.');
    }
    try{
      dispatch(signInStart());
      //setLoading(true);
      //setErrorMessage(null);
      const res = await fetch('/api/auth/SignIn', {           //stores the fetched data as response
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      //setLoading(false);
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(error) {
      dispatch(signInFailure(error.message));
      //setErrorMessage(error.message);
      //setLoading(false);
    }
    
  };
    return <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md: items-center gap-5'>
        {/* left */}
        <div className="">
        <Link to="/" className='font-bold dark:text-white-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
        via-purple-500 to-pink-500 rounded-lg text-white'>sahands</span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        This is  demo project, you can signIN with your email and password or with google
      </p>
        </div>
        {/* left */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit= {handleSubmit}>
        <div>
          <Label  value='Your email' />
          <TextInput type='text' placeholder='Email' id='email' onChange={handleChange}/>
        </div>
        <div>
          <Label  value='your password' />
          <TextInput type='text' placeholder='*******' id='password'onChange={handleChange}/>
        </div>
        <Button gradientDuoTone='purpleToPink' type='submit' disabled = {loading}>
          {loading ? (
            <>
            <Spinner size='sm' />
            <span className='pl-3'>Loading...</span>
            </>
          ) : (
            'Sign In'
          )}
        </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Do not have an account?
            </span>
            <Link to='/SignUp' className='text-blue-500'>
              SignUp
            </Link>
          </div>
          { errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  
  }