import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';


export function Footer() {
    return (

        <div className='w-full mx-auto fixed bottom-0 bg-[#0D7377] text-[#323232]'>
        <div className=" flex justify-center text-center align-middle pt-2">
        <div className="flex-shrink m-2  hover:text-[#212121]">
        <a  href="https://www.linkedin.com/in/carlogyannuzzi/">
        <FaLinkedin className='ml-5 ' />
        LinkedIn</a>
        </div>
        <div className="flex-shrink m-2  hover:text-[#212121]">
        <a  href="https://twitter.com/1carlogy">
        <FaTwitter className="ml-4" />
        Twitter</a>
        </div>
        <div className="flex-shrink m-2  hover:text-[#212121]">
        <a  href="https://github.com/carlogy">
        <FaGithub className='ml-4' />
        GitHub</a>
        </div>


      </div>
      <p className="text-center pb-1">© Carlo Yannuzzi.</p>
      </div>
      );
}
