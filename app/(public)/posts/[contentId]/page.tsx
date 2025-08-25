import Footer from "@/lib/footer/footer";
import Header from "@/lib/header/header";
import Nav from "@/lib/nav/nav";
import bg from "../../../public/placable/post-bg.webp";
import Posts from "@/lib/post/Posts";

export default async function page({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const { contentId } = await params;

  return (
    <div>
      <Nav></Nav>
      <Header bg={bg}></Header>

      {/* Post Content */}
      <article className="mb-4">
        <Posts postId={contentId}></Posts>
      </article>

      <Footer></Footer>
    </div>
  );
}
