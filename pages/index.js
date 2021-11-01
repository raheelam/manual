import { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Services from "../components/services";
import Quiz from "../components/Quiz";
import { getQuestions } from "./api/questionnaires";

function Home(props) {
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
      {isQuizMode && (
        <Quiz setIsQuizMode={setIsQuizMode} questions={props.questions} />
      )}
    </Layout>
  );
}

//getServerSideProps to generate during every request

//to generate during build time
export async function getStaticProps(context) {
  try {
    //use fetch for external endpoints
    let resp = await getQuestions();
    return {
      props: { questions: resp.questions },
      //revalidate: 25200
    };
  } catch (err) {
    return { props: { questions: [] } };
  }
}

export default Home;
