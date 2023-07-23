import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from '../components/Footer.tsx';
import { savePost } from "../utils/db.ts";


export const handler: Handlers = {
    GET(_, ctx) {
        return ctx.render();

    },
   async POST(req) {
        const form = await req.formData();

        const formTitle = new String(form.get("title"));
        const binder = "_jqz_";
        const formPostContent = new String(form.get("postContent"));

        const title = formTitle.concat(binder.toString(), formPostContent.toString());

        // const content = form.get("postContent")
        if (title === null) {
            return new Response("Invalid content" , {status: 400});
        }

        const id = await savePost(title);

        return new Response("", {
            status: 302,
            headers: {
               Location: `/post/${id}`,
            },
        });

    }
}


export default function ComposeBlog() {
    return (
        <div>
            <Head>
        <title>Compose</title>
      </Head>
            <Header />

            <h1 class={ `text-4xl font-semibold text-[#323232] pl-1 pt-5 md:mx-2`}>Compose</h1>
            <form action="/compose" method="post" class='mt-5 px-2 md:mx-2'>
                    <div class={``}>
                    <label class={`text-[#323232] text-lg`}>Title</label>
                    <input type="text"
                        class={`w-full
                               border
                               solid
                                border-[#323232]
                                rounded
                                mt-1
                                pt-1
                                text-[#323232]
                                focus:border-[#212121]`}
                                name="title"
                                required />
                    </div>

                     <div class={`pt-1`}>
                        <label class={`text-[#323232] text-lg `} >Post</label>
                        <textarea class='w-full
                                         border
                                         solid
                                         border-[#323232]
                                         rounded'
                                    name="postContent"
                                    type="text"
                                    required></textarea>
                    </div>
                    <div class='bg-[#0D7377] border-[#0D7377] rounded border solid w-1/4 text-center'>
                    <button class={`text-[#323232]`} type='submit'>Publish</button>
                    </div>
             </form>
            <Footer />
        </div>

    )
}