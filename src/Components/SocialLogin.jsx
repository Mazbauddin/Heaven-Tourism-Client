import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthHooks from "../Hooks/UseAuthHooks";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin, facebookLogin } =
    useAuthHooks();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider divider-error text-[#ff691a]">continue with</div>
      <div className="flex justify-around mb-10">
        {/* google */}
        <FaGoogle
          onClick={() => handleSocialLogin(googleLogin)}
          className="text-[20px] cursor-pointer text-[#ff691a]"
          title="Google"
        ></FaGoogle>
        {/* github */}
        <FaGithub
          onClick={() => handleSocialLogin(githubLogin)}
          className="text-[20px] cursor-pointer text-[#ff691a]"
          title="Github"
        ></FaGithub>
        {/* twitter */}
        <FaTwitter
          onClick={() => handleSocialLogin(twitterLogin)}
          className=" text-[20px] cursor-pointer text-[#ff691a]"
          title="Twitter"
        ></FaTwitter>
        {/* facebook */}
        <FaFacebook
          onClick={() => handleSocialLogin(facebookLogin)}
          className="text-[20px] cursor-pointer text-[#ff691a]"
          title="Facebook"
        ></FaFacebook>
      </div>
    </>
  );
};

export default SocialLogin;
