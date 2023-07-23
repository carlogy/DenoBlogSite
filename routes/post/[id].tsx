

import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";
import { getPost, deletePost } from "../../utils/db.ts";


export const handler: Handlers = {
    async GET(_, ctx) {
        const id = ctx.params.id;

        const content = await getPost(id);
        console.log(typeof content)

        if(content === null)  {
            return ctx.renderNotFound();
        }
        return ctx.render(content)

    },

    async POST(_, ctx) {
        const id = ctx.params.id;
        console.log(id);

        const deletedPost = await deletePost(id);
        if(deletedPost === null) {
            return  `unable to delete ${id} `;
        }

        return new Response("", {
            status: 302,
            headers: {
               Location: "/posts",
            },
        });
    }
};





export default function Post(props: PageProps) {

    const splitDataPoint = props.data.split("_jqz_")
    // console.log(splitDataPoint);
    const title = splitDataPoint[0];
    const content = splitDataPoint[1];


    return (
        <>
        <Header />
        <div class={'mt-5 px-2'}>
        <h1 class={ `text-4xl  font-semibold text-[#323232] pb-3`}>{title}</h1>
        <p class={`text-[#323232] px-2 mb-5`} >{content}</p>
        {/* <p>{props.data.id}</p> */}

        <form
              method="post">
         <button type="submit"
         class={`p-2 bg-[#0D7377]
                 text-[#323232]
                 border
                 border-solid
                 rounded
                 w-1/4
                 text-center
                 hover:font-semibold
                 active:border-black`}> Delete Post</button>
        </form>
        </div>
        <Footer />
        </>
    )
}