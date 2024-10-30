import { useEffect } from "react";
import Reblend, { useState } from "reblendjs";
import fetcher from "../../scripts/SharedFetcher";
import { ALL_TAG } from "../../scripts/config/RestEndpoints";

function TagSection() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetcher
      .fetch(ALL_TAG)
      .then((data) => {
        if (data?.data?.status) {
          setTags(data?.data["tags"]?.results || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div class="max-w-screen-md mx-auto flex flex-wrap">
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Garden
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Jewelry
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Industrial
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Tools
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Automotive
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Toys
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Outdoors
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Health
      </a>
      <a
        class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
        href="/archive/the-demo-archive-slug"
      >
        Electronics
      </a>
    </div>
  );
}

export default TagSection;
