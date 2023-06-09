import Link from 'next/link'
import SectionTitle from '../shared/SectionTitle'
import InputBox from './InputBox'
import SocialButton from './SocialButton'

const Register = () => {
  return (
    <section className="register section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {/* section title */}
            <SectionTitle subtitle="Register" title="Start for free today" description="Access to all features. No credit card required." />
            
            {/* google, facebook button */}
            <SocialButton/>

            <h4 className="divider">Or continue with</h4>

            <form action="#!">
              <InputBox inputType="text" label="Full Name" id="fname" />

              <InputBox inputType="email" label="Email" id="emaill" />

              <InputBox inputType="text" label="Username" id="uname" placeholder="Your Usernname" />

              <InputBox inputType="password" label="Password" id="pass" placeholder="Password" />

              <div className="input-box input-check-box">
                <label htmlFor="chk" className="check-container">
                  <input type="checkbox" className="input-check" id="chk"/>
                  <span className="checkmark"></span>
                  <span>I accept the <Link href="/">Terms</Link></span>
                </label>
              </div>

              <div className="input-box">
                <button type="submit" className="animate-btn animate-btn-fill">Submit & Register</button>
              </div>

              <div className="input-box">
                <p>Already have an account? <Link href="/login">Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register