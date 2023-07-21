

export function Header() {
    return (
       <div class='w-full h-16  bg-gray-200'>
        <nav class="">
    <div class="container flex mx-40 pt-5 text-[#71717a]">
      <div class="flex-1 ">
        <p class="">DAILY BLOG</p>
      </div>
        <ul class="pr-32">

          <li class='inline-flex px-1  ' id="home"><a href="/">HOME</a></li>
          <li class='inline-flex px-1 ' id="about"><a href="/compose">COMPOSE</a></li>
          <li class='inline-flex px-1 ' id="contact"><a href="/contact">CONTACT</a></li>
        </ul>
    </div>
  </nav>

       </div>
    )
}