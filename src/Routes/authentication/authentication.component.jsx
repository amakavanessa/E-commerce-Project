import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
const Authentication = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //     // console.log(response);
  //   })();
  // }, []);
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  return (
    <div className="authentication-container">
      {/*<button onClick={logGoogleUser}> Sign in with Google Popup </button>*/}
      <SignInForm />
      <SignUpForm />
      {/*incase of signIn with redirect<button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>*/}
    </div>
  );
};

export default Authentication;
