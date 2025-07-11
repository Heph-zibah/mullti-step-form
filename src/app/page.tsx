import Footer from "@/components/custom/Footer";
import Layout from "@/layout/Layout";
import Steps from "@/components/custom/Steps";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow lg:flex lg:items-center lg:justify-center">
        <Layout>
          <Steps />
        </Layout>
      </div>
      <Footer />
    </div>
  );
}
