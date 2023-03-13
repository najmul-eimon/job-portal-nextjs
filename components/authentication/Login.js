import SectionTitle from '../shared/SectionTitle'
import { Link } from 'react-router-dom'
import InputBox from './InputBox'
import SocialButton from './SocialButton'

const Login = () => {
  return (
    <section className="register login section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {/* section title */}
            <SectionTitle subtitle="Welcome back" title="Member Login" description="Access to all features.no credit card required." />

            {/* google, facebook button */}
            <SocialButton/>

            <h4 className="divider">Or continue with</h4>

            <form action="#!">
              <InputBox inputType="text" label="Username or Email Address" placeholder="Your user name" id="luname" />

              <InputBox inputType="password" label="Password" id="lpass" />

              <div className="input-box input-check-box">
                <label htmlFor="chk" className="check-container">
                  <input type="checkbox" className="input-check" id="chk"/>
                  <span className="checkmark"></span>
                  <span>Remember me</span>
                </label>
                <Link to="/" className="forgot-pass">Forgot Password?</Link>
              </div>

              <div className="input-box">
                <button type="submit" className="animate-btn animate-btn-fill login-btn">Login</button>
              </div>

              <div className="input-box">
                <p>No account? <Link to="/register">Register Now</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login