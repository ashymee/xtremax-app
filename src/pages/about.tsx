import Wrapper from "@components/layout";
import Main from "@components/layout/Main";
import SEO from "@components/misc/SEO";

const about = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About" description="" />
      <Main>
        <div className="text-5xl text-gray-500">About</div>
      </Main>
    </Wrapper>
  );
};

export default about;
