import AuthForm from "../../components/AuthForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function LoginPage() {
  return (
    <main className="page">
      <SiteHeader />
      <AuthForm mode="login" />
      <SiteFooter />
    </main>
  );
}
