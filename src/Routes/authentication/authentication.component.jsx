import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';
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
    <AuthenticationContainer>
      {/*<button onClick={logGoogleUser}> Sign in with Google Popup </button>*/}
      <SignInForm />
      <SignUpForm />
      {/*incase of signIn with redirect<button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>*/}
    </AuthenticationContainer>
  );
};

export default Authentication;
