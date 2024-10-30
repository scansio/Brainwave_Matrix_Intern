import { Link } from "reblend-router";
import Reblend, { IAny, useEffect, useState } from "reblendjs";
import fetcher from "../../scripts/SharedFetcher";
import { USER_DETAIL } from "../../scripts/config/RestEndpoints";
import { Card, Placeholder } from "react-bootstrap";

function WrittenBy({
  author,
}: {
  author: { _id: string; firstname: string; lastname: string } | null;
}) {
  const [profile, setProfile] = useState<IAny | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (author?._id)
      fetcher
        .fetch(USER_DETAIL + author._id)
        .then((data) => {
          if (data?.data?.status) {
            setProfile(data?.data["details"]?.results || []);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
  }, [author]);

  return (
    <div class="max-w-screen-md mx-auto ">
      <div class="nc-SingleAuthor flex">
        {loading ? (
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        ) : (
          <>
            <Link href={"/publisher/" + profile?.slug}>
              <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 ring-1 ring-white dark:ring-neutral-900">
                <img
                  sizes="100px"
                  src={profile?.avatar}
                  class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                  alt="Birrell Chariot"
                />
                <span class="wil-avatar__name">B</span>
              </div>
            </Link>
            <div class="flex flex-col ml-3 max-w-lg sm:ml-5">
              <span class="text-xs text-neutral-400 uppercase tracking-wider">
                WRITTEN BY
              </span>
              <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                <Link href={"/publisher/" + profile?.slug}>
                  {author?.firstname + " " + author?.lastname}
                </Link>
              </h2>
              <span class="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
                {profile?.bio}
                <Link
                  className="text-primary-6000 font-medium ml-1"
                  href={"/publisher/" + profile?.slug}
                >
                  Read more
                </Link>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WrittenBy;
