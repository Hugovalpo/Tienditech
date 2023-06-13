import Head from "next/head";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";


function Index() {
  return (
    <>
      <Head>
        <title>Tienditech - Welcome </title>
      </Head>
      <Header />
      <Home />
      <Footer/>
    </>
  );
}

export default Index;
