import Reblend from "reblendjs";
import PageLayout from "../layouts/PageLayout";
import ArticleHeading from "../components/Article/ArticleHeading";
import WrittenBy from "../components/Article/WrittenBy";
import CommentSection from "../components/Article/CommentSection/CommentSection";
import TagSection from "../components/Article/TagSection";
import MoreFromAuthor from "../components/Article/MoreFromAuthor/MoreFromAuthor";
import RelatedPost from "../components/Article/RelatedPost/RelatedPost";
import ArticleBlock from "../components/Article/ArticleBlock";

function Article() {
  return (
    <PageLayout>
      <div >
        <ArticleHeading />
        <div class="container mt-10" >
          <div class="relative" >
            <div class="nc-SingleContent space-y-10" >
              <ArticleBlock />
              <TagSection />
              <div
                class="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"
                
              ></div>
              <WrittenBy />
              <CommentSection />
            </div>
          </div>
        </div>
        <div
          class="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28"
          
        >
          <div class="container" >
            <RelatedPost />
            <MoreFromAuthor />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Article;
