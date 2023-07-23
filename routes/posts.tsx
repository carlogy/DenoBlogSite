import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/db.ts";


export const handler: Handlers = {
    async  GET(_, ctx) {
        const posts = await listPosts();
        // console.log(posts);
        // console.log(typeof posts)
        return ctx.render(posts);
    }
}

export default function Posts(props: PageProps<string, string>[]) {

const ParsedPosts: { id: any; title: any; content: any; }[] = [];

props.data.map(([id, title]) => {
  ParsedPosts.push(

      {
      id: id,
      title: title?.split("_jqz_")[0],
      content: title?.toString().split("_jqz_")[1].substring(0,100),
})
})

// console.log(ParsedPosts);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <div class="pt-5 ml-2  ">
      <h1 class={ `text-4xl  font-semibold text-[#323232] pb-5`}>Posts</h1>
      {/* <p class={`pr-4 pl-1`} >{homeStartingContent}</p> */}

      <ul class={`w-full`}>
            {ParsedPosts?.map((value) => (
              <li class={`pr-4 pl-1`}>
                <h2 class={`text-2xl font-medium text-[#323232] mb-2`}>{value.title}</h2>
                <p class={`inline-flex text-[#323232]`}>{value.content + "..."}
                <a class={`inline-flex pl-2 hover:font-semibold hover:text-underline`} href={`post/${value.id}`}>Read More</a>
                </p>
              </li>))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
