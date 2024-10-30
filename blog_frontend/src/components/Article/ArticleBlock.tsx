import Reblend, { IAny } from "reblendjs";

function ArticleBlock({ article }: { article: IAny }) {
  return (
    <div
      id="single-entry-content"
      class="prose lg:prose-lg !max-w-screen-md mx-auto dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: article?.content }}
    />
  );
}

export default ArticleBlock;
