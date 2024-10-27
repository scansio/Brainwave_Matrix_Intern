import Article from "./pages/Article";
import Author from "./pages/Author";
import Home from "./pages/Home";
import RelatedPostByTag from "./pages/RelatedPostByTag";

export const routes = {
  "/": Home,
  "/home": Home,
  "/article/:slug": Article,
  "/tag/:tagName": RelatedPostByTag,
  "/author": Author,
};
