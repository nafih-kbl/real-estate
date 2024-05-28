import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

export default function GAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("error showing", error.message);
    }
  };
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-2 hover:opacity-95 uppercase'>Continue with google</button>
  )
}
