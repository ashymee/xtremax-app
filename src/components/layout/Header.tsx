import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-white px-4 w-full">
      <div className="py-2 px-4 flex items-center justify-between shadow-lg rounded-b-lg text-gray-600">
        <div className="font-bold">DevStreetLab</div>

        <div className="flex items-center space-x-3">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="https://github.com/ashymee/nextts-project-starter.git">
            <a target="_blank">
              <BsGithub />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
