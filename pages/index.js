import Head from "next/head";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";


function Index() {
  return (
    <>
      <Head>
        <title>Tienditech - Welcome </title>
      </Head>
      <Header />
      <Slideshow/>
      <Home />
      <Footer/>
    </>
  );
}

export default Index;
