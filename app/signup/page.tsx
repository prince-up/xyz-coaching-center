import AuthForm from "../../components/AuthForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function SignupPage() {
  return (
    <main className="page">
      <SiteHeader />
      <AuthForm mode="signup" />
      <SiteFooter />
    </main>
  );
}
