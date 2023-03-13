import google from '../../assets/images/svg/google-color.svg'
import facebook from '../../assets/images/svg/facebook-color.svg'

const SocialButton = () => {
  return (
    <div className="row btn-row-gutter">
      <div className="col-md-6">
        <button type="button" className="signup-btn">
          <img src={google} alt="Google"/>
          Sign up with Google
        </button>
      </div>
      <div className="col-md-6">
        <button type="button" className="signup-btn">
          <img src={facebook} alt="Google"/>
          Sign up with Facebook
        </button>
      </div>
    </div>
  )
}

export default SocialButton;