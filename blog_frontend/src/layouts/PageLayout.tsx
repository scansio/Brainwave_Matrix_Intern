import Reblend from "reblendjs";
import Header from "./Header";
import Footer from "./Footer";

function PageLayout({ children }: any) {
  return (
    <div class="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200 font-body">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
