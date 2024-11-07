import { useParams } from "reblend-router";
import Reblend from "reblendjs";

const Profile = () => {
  const params = useParams<{ articleSlug: string }>();

  return <>Profileing Article</>;
};
export default Profile;
