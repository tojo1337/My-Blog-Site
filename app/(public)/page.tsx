import bg from "../../public/placable/header-bg.webp";
import Header from "@/lib/header/header";
import Footer from "@/lib/footer/footer";
import Nav from "@/lib/nav/nav";
import ExploreMore from "@/lib/explore-btn/explore-btn";
import Categories from "@/lib/achievements/Achievements";
import Popular from "@/lib/popular/popular";
import Timeline from "@/lib/timeline/timeline";
import WhoAmI from "@/lib/whoami/whoami";

export default function page() {
  return (
    <div>
      <Nav></Nav>
      <Header bg={bg}>
        <ExploreMore />
      </Header>
      <Categories
        title="Achievements"
        desc="Lorem Lipsum dolor"
        notFound="No Achievement found"
      />
      <Popular title="Popular Posts" desc="Lorem lipsum dolor" />
      <WhoAmI />
      <Timeline />
      <Footer></Footer>
    </div>
  );
}
