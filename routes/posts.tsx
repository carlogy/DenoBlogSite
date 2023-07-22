import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost } from "../utils/db.ts";




export default function Posts() {



const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";


  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <div class="pt-5 ml-2  ">
      <h1 class={ `text-4xl  font-semibold text-[#323232] pb-5`}>Posts</h1>
      <p class={`pr-4 pl-1`} >{homeStartingContent}</p>
      </div>
      <Footer />
    </>
  );
}
