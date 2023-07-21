

import { PageProps } from "$fresh/server.ts";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";


export default function Post(props: PageProps) {
    const { postId } = props.params;

    return (
        <>
        <Header />
        <div class={'mt-5 px-2'}>
        <h1 class={ `text-4xl  font-semibold text-[#323232] pb-3`}>Title Goes Here</h1>
        <p class={`text-[#323232] px-2`} >This is the first Post</p>
        </div>
        <Footer />
        </>
    )
}