import Reblend, { useEffect, useState } from "reblendjs";
import fetcher from "../../scripts/SharedFetcher";
import { ALL_TAG } from "../../scripts/config/RestEndpoints";

function TagSection() {
  const [tags, setTags] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetcher
      .fetch(ALL_TAG)
      .then((data) => {
        if (data?.data?.status) {
          setTags(data?.data["Tags"]?.results || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div class="max-w-screen-md mx-auto flex flex-wrap">
      {loading
        ? "Loading..."
        : tags?.map((tag) => (
            <a
              class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
              href={"/tag/" + tag.name}
            >
              {tag.name}
            </a>
          ))}
    </div>
  );
}

export default TagSection;
