

import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";
import { getPost } from "../../utils/db.ts";


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
};



export default function Post(props: PageProps) {

    // const { postId } = props.params;
    const splitDataPoint = props.data.split("_jqz_")
    console.log(splitDataPoint);
    const title = splitDataPoint[0];
    const content = splitDataPoint[1];


    return (
        <>
        <Header />
        <div class={'mt-5 px-2'}>
        <h1 class={ `text-4xl  font-semibold text-[#323232] pb-3`}>{title}</h1>
        <p class={`text-[#323232] px-2`} >{content}</p>
        </div>
        <Footer />
        </>
    )
}