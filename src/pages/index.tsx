import Wrapper from "@components/layout";
import Main from "@components/layout/Main";
import SEO from "@components/misc/SEO";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home" description="" />
      <Main>
        <div className="flex flex-col text-gray-500 items-center">
          <div className="text-2xl mb-2 lg:mb-5 uppercase duration-300">
            Welcome to
          </div>
          <div className="text-3xl lg:text-5xl mb-20 uppercase duration-300">
            NextJS Project Starter
          </div>

          <div className="w-full lg:w-96 text-orange-300 rounded-lg">
            <div className="flex items-center bg-slate-900 rounded-t-lg p-2 space-x-2">
              <div className="flex-none flex items-center space-x-2">
                <div className="w-4 h-4 bg-rose-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <div className="w-4 h-4 bg-green-500 rounded-full" />
              </div>

              <p className="flex-1 text-center">pre build stack</p>
            </div>

            <ul className="bg-slate-800 text-orange-300 p-5 rounded-b-lg">
              <li>TailwindCSS</li>
              <li>Typescript</li>
              <li>PWA</li>
              <li>SEO</li>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Husky</li>
            </ul>
          </div>
        </div>
      </Main>
    </Wrapper>
  );
};

export default Home;
