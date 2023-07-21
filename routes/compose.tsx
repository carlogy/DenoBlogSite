import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from '../components/Footer.tsx';



export default function ComposeBlog() {
    return (
        <div>
            <Head>
        <title>Compose</title>
      </Head>
            <Header />

            <h1 class={ `text-4xl font-semibold text-[#323232] pl-1 pt-5 md:mx-2`}>Compose</h1>
            <form class='mt-5 px-2 md:mx-2'>
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
                                />
                    </div>

                     <div class={`pt-1`}>
                        <label class={`text-[#323232] text-lg `} >Post</label>
                        <textarea class='w-full
                                         border
                                         solid
                                         border-[#323232]
                                         rounded'></textarea>
                    </div>
                    <div class='bg-[#0D7377] border-[#0D7377] rounded border solid w-1/4 text-center'>
                    <button class={`text-[#323232]`} type='submit'>Publish</button>
                    </div>
             </form>
            <Footer />
        </div>

    )
}