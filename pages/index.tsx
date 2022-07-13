import { Footer, Header } from "@components/common";
import Header1 from "@components/common/Header1";
import Test from "@components/common/Test";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      {/* <Header /> */}
      <Header1/>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
