import ContentSwitcher from "@components/layout/ContentSwitcher";
import MainContent from "@components/layout/MainContent";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainContent>
      <ContentSwitcher />
    </MainContent>
  );
};

export default Home;
