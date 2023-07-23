import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";




export default function Home() {

    const homeStartingContent = "Welcome to this blog site. A place for you to read and write about experiences, interests and random thoughts. Click on compose at the top right to write an publish a new blog post. To view all of your posts click on Posts."

  return (
    <>
      <Head>
        <title>Daily Blog</title>
      </Head>
      <Header />
      <div class="pt-5 ml-2  ">
      <h1 class={ `text-4xl  font-semibold text-[#323232] pb-5`}>Home</h1>
      <p class={`pr-4 pl-1`} >{homeStartingContent}</p>
      </div>
      <Footer />
    </>
  );
}
