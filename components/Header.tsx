

export function Header() {
    return (
       <div class={`w-full text-[#777] md:bg-gray-200 `} >

       <nav class={` flex bg-gray-200 pt-2 pl-2 h-10 md:h-16 md:pt-5 md:pl-4 md:mr-4`}>


      <div class="flex-auto  md:flex-grow ">
        <p class="font-medium">DAILY BLOG</p>
      </div>
      <div>
      <ul class="inline-flex  ">

<li class=' px-2' id="home"><a href="/">HOME</a></li>
<li class=' px-2' id="about"><a href="/compose">COMPOSE</a></li>
<li class=' px-2' id="contact"><a href="/posts">POSTS</a></li>
</ul>


    </div>
  </nav>

       </div>
    )
}