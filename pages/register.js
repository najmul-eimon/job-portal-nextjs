import BgSection from "@/components/authentication/BgSection";
import Register from "@/components/authentication/Register";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Job Portal | Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register/>
      <BgSection/>
    </>
  )
}

export default Signup