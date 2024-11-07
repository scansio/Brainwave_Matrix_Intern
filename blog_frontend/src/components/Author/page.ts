import AuthorHome from "./AuthorHome";
import Edit from "./CreateTag";
import EditForm from "./EditForm";
import Preview from "./Preview";
import Profile from "./Profile";

export const page = {
  "/preview/:articleSlug": Preview,
  "/edit/:articleSlug?": EditForm ,
  "/profile": Profile,
  "/": AuthorHome,
};
