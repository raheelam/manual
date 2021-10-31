import { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Services from "../components/services";
import Quiz from "../components/Quiz";

export default function Home() {
  const [isQuizMode, setIsQuizMode] = useState(false);
  return (
    <Layout pageTitle="Manual Landing Page">
      {!isQuizMode && (
        <>
          <Hero setIsQuizMode={setIsQuizMode} />
          <Services />
          <Footer />
        </>
      )}
      {isQuizMode && <Quiz setIsQuizMode={setIsQuizMode} />}
    </Layout>
  );
}
