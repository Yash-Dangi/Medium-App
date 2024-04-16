import {SigninCard} from "../components/SigninCard";
import SignupLabel from "../components/signuplabel";

export default function Signin(){
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
           <SigninCard></SigninCard>
          <div className="hidden lg:block"><SignupLabel></SignupLabel></div>
      </div>
    )
}
