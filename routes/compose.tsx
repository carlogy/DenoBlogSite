import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";


export default function ComposeBlog() {
    return (
        <div>
            <Head>
        <title>Compose</title>
      </Head>
            <Header />
            {/* <div class='container mx-auto px-10'></div> */}
            <h1 class='text-3xl ml-40'>Compose</h1>
            <form class='mx-40 mt-5'>
                    <div>
                    <label>Title</label>
                    <input type="text"
                        class='w-full
                               border
                               solid
                                border-color-grey
                                rounded'/>
                    </div>

                     <div>
                        <label>Post</label>
                        <textarea class='w-full
                                         border
                                         solid
                                         border-color-grey
                                         rounded'></textarea>
                    </div>
                    <div class='bg-green-400 border-green-400 rounded border solid w-1/4 text-center'>
                    <button type='submit'>Publish</button>
                    </div>


            </form>
        </div>
    )
}