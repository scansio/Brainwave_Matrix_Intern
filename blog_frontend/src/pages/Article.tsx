import Reblend, { IAny, useEffect, useState } from "reblendjs";
import PageLayout from "../layouts/PageLayout";
import ArticleHeading from "../components/Article/ArticleHeading";
import WrittenBy from "../components/Article/WrittenBy";
import CommentSection from "../components/Article/CommentSection/CommentSection";
import TagSection from "../components/Article/TagSection";
import MoreFromAuthor from "../components/Article/MoreFromAuthor/MoreFromAuthor";
import RelatedPost from "../components/Article/RelatedPost/RelatedPost";
import ArticleBlock from "../components/Article/ArticleBlock";
import { useParams } from "reblend-router";
import Notfound from "./Notfound";
import fetcher from "../scripts/SharedFetcher";
import { Card, Placeholder } from "react-bootstrap";

function Article() {
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<IAny | null>(null);
  const [articleNotfound, setArticleNotfound] = useState(false);
  const [loadingArticle, setLoadingArticle] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetcher.fetch({}).then(() => {});
    }
  }, [params.slug]);

  return !params.slug || articleNotfound ? (
    <Notfound />
  ) : (
    <PageLayout>
      <div>
        <ArticleHeading article={article} />
        <div class="container mt-10">
          <div class="relative">
            <div class="nc-SingleContent space-y-10">
              {loadingArticle ? (
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} />
                  <Placeholder xs={4} />
                  <Placeholder xs={4} />
                  <Placeholder xs={6} />
                  <Placeholder xs={8} />
                </Placeholder>
              ) : (
                <>
                  <ArticleBlock article={article!} />
                  <TagSection />
                  <div class="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
                  <WrittenBy author={article?.author} />
                  <CommentSection />
                </>
              )}
            </div>
          </div>
        </div>
        <div class="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
          <div class="container">
            {loadingArticle ? (
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} />
                <Placeholder xs={4} />
                <Placeholder xs={4} />
                <Placeholder xs={6} />
                <Placeholder xs={8} />
              </Placeholder>
            ) : (
              <>
                <RelatedPost tag={article?.tag} />
                <MoreFromAuthor />
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Article;
