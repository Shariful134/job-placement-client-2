import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
