import Image from "next/image";

const SocialButton = () => {
  return (
    <div className="row btn-row-gutter">
      <div className="col-md-6">
        <button type="button" className="signup-btn">
          <Image src="/images/svg/google-color.svg" alt="Google" width={32} height={32}/>
          Sign up with Google
        </button>
      </div>
      <div className="col-md-6">
        <button type="button" className="signup-btn">
          <Image src="/images/svg/facebook-color.svg" alt="Facebook" width={33} height={32}/>
          Sign up with Facebook
        </button>
      </div>
    </div>
  )
}

export default SocialButton;