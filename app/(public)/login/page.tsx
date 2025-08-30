import bg from "../../../public/placable/login.webp";
import Footer from "@/lib/footer/footer";
import Header from "@/lib/header/header";
import Nav from "@/lib/nav/nav";

export default function page() {
  return (
    <div>
      <Nav></Nav>
      <Header bg={bg} title="Login" subtitle=""></Header>
      {/* Add the login dialogue in here */}
      <Footer></Footer>
    </div>
  );
}
