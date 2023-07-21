

import { PageProps } from "$fresh/server.ts";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";


export default function Post(props: PageProps) {
    const { postId } = props.params;

    return (
        <>
        <Header />
        <div class={'mx-40 mt-5'}>
        <h1 class={ `text-4xl  font-semibold text-[#323232] pb-5`}>Title Goes Here</h1>
        <p>This is the first Post</p>
        </div>
        <Footer />
        </>
    )
}