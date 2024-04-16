import SignupLabel from '../components/signuplabel'
import {SignupCard} from '../components/SignUpCard'
export default function Signup(){
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2'>
           <SignupCard></SignupCard>
          <div className='hidden lg:block'><SignupLabel></SignupLabel></div>
      </div>
    )
}
