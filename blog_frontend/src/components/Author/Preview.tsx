import { useParams } from "reblend-router";
import Reblend, { useMemo } from "reblendjs";

const Preview = () => {
  const params = useParams<{ articleSlug: string }>();
  const url = useMemo(() => {
    if (params.articleSlug) {
      const tmpUrl = window.location.origin + "/article/" + params.articleSlug;
      return tmpUrl;
    }
    return "";
  }, [params.articleSlug]);

  return (
    <>
      <iframe
        style={{ border: 0, width: "100%", height: "90vh" }}
        src={url}
        title="Previewing Article"
      />
    </>
  );
};
export default Preview;
