import Reblend, {
  useState,
  useEffect,
  useRef,
  SharedConfig,
  IAny,
} from "reblendjs";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Image,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useParams } from "reblend-router";
import fetcher from "../../scripts/SharedFetcher";
import { toast } from "react-toastify";
import {
  ALL_TAG,
  BASE,
  CREATE_ARTICLE,
} from "../../scripts/config/RestEndpoints";
import { paginatingUrl } from "../../scripts/misc";
import { ACTIVE } from "../../scripts/config/contants";
import CreateTag from "./CreateTag";
import RichTextEditor from "./RichTextEditor";

function EditForm() {
  const dataIdRef = useRef("");
  const params = useParams<{ articleSlug: string }>();

  const data: {
    slug: string;
    content: string;
    title: string;
    coverImageUrl: string;
    seoDescription: string;
    tags: string[];
    published: boolean;
    _id: string;
  } | null = SharedConfig.get("EditFormData");

  const [isUpdate, setIsUpdate] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [slug, setslug] = useState("");
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [coverImage, setcoverImage] = useState<File | null>(null);
  const [coverImageUrl, setcoverImageUrl] = useState("");
  const [urlChanged, seturlChanged] = useState(false);
  const [seoDescription, setseoDescription] = useState("");
  const [tags, settags] = useState<string[]>([]);
  const [selectionTags, setSelectionTags] = useState<{ name: string }[]>(
    SharedConfig.get("TAGS") || []
  );
  const [published, setpublished] = useState(true);

  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (data && params.articleSlug) {
      (dataIdRef.current as any) = data._id;
      setslug(data.slug);
      setcontent(data.content);
      settitle(data.title);
      setcoverImageUrl(data.coverImageUrl);
      setseoDescription(data.seoDescription);
      settags(data.tags);
      setpublished(data.published);
      setIsUpdate(true);
    }
  }, []);

  useEffect(() => {
    if (coverImage) {
      let url = URL.createObjectURL(coverImage);
      setcoverImageUrl(url);
      seturlChanged(true);
    }
    return () => {
      if (coverImageUrl?.startsWith("data://")) {
        URL.revokeObjectURL(coverImageUrl);
      }
    };
    // eslint-disable-next-line reblend-hooks/exhaustive-deps
  }, [coverImage]);

  useEffect(() => {
    if (title) {
      let tempSlug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+$/, "");
      setslug(tempSlug);
    }
  }, [title]);

  const [loadingSeletionTags, setLoadingSelectionTags] = useState(false);
  const [selectionTagsFetched, setSelectionTagsFetched] = useState(false);

  useEffect(() => {
    SharedConfig.set("TAGS", selectionTags);
    if (selectionTagsFetched) {
      return;
    }
    if (selectionTags.length < 1) {
      setLoadingSelectionTags(true);
      fetcher
        .fetch(paginatingUrl(ALL_TAG, { status: ACTIVE }))
        .then((data) => {
          if (data?.data?.status) {
            setSelectionTags(data?.data["Tags"]?.results || []);
            setSelectionTagsFetched(true);
          }
          setLoadingSelectionTags(false);
        })
        .catch(() => {
          setLoadingSelectionTags(false);
        });
    }
  }, [selectionTags]);

  async function createArticle(e: any) {
    e.preventDefault();
    if (!content || content?.length < 100) {
      toast.error("Too short article");
      return;
    }
    setSubmitting(true);
    let fetchOptiondata: IAny | FormData = {};
    if (coverImage) {
      fetchOptiondata = new FormData();
      fetchOptiondata.append("coverImage", coverImage);
      fetchOptiondata.append("slug", slug);
      fetchOptiondata.append("content", content);
      fetchOptiondata.append("title", title);
      fetchOptiondata.append("seoDescription", seoDescription);
      fetchOptiondata.append("tags", tags);
      fetchOptiondata.append("published", published);
    } else {
      fetchOptiondata = {
        slug,
        content,
        title,
        seoDescription,
        tags,
        published,
      };
    }

    const gdFetchOption = {
      url: CREATE_ARTICLE,
      data: fetchOptiondata,
    };
    coverImage &&
      ((gdFetchOption as any).headers = {
        "Content-Type": "multipart/form-data",
      });
    let data;
    try {
      data = await fetcher.fetch(gdFetchOption);
    } catch (er: any) {
      toast.error(er.message);
    }
    if (data) {
      if (!data.data.status) {
        toast.error(data.data.message);
      } else {
        toast.success(data.data.message);
      }
    }
    setSubmitting(false);
  }

  async function updateArticle(e: any) {
    e.preventDefault();
    if (!content || content?.length < 100) {
      toast.error("Too short article");
      return;
    }
    setSubmitting(true);

    let fetchOptiondata: IAny | FormData = {};
    if (coverImage) {
      fetchOptiondata = new FormData();
      fetchOptiondata.append("coverImage", coverImage);
      fetchOptiondata.append("slug", slug);
      fetchOptiondata.append("content", content);
      fetchOptiondata.append("title", title);
      fetchOptiondata.append("seoDescription", seoDescription);
      fetchOptiondata.append("tags", tags);
      fetchOptiondata.append("published", published);
    } else {
      fetchOptiondata = {
        slug,
        content,
        title,
        seoDescription,
        tags,
        published,
      };
    }

    const gdFetchOption = {
      url: CREATE_ARTICLE,
      method: "PATCH",
      data: fetchOptiondata,
    };
    let data;
    try {
      data = await fetcher.fetch(gdFetchOption);
    } catch (er: any) {
      toast.error(er.message);
    }
    if (data) {
      if (!data.data.status) {
        toast.error(data.data.message);
      } else {
        toast.success(data.data.message);
      }
    }
    setSubmitting(false);
  }

  return (
    <>
      <CreateTag
        {...{
          openCreateModal,
          tags,
          selectionTags,
          settags,
          setSelectionTags,
          setOpenCreateModal,
        }}
      />
      <Form onSubmit={(e) => (isUpdate ? updateArticle(e) : createArticle(e))}>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <Row>
              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">CoverImage</InputGroup>

                <InputGroup className="fw-bold">
                  {coverImageUrl ? (
                    <Image
                      src={urlChanged ? coverImageUrl : BASE + coverImageUrl}
                    />
                  ) : null}
                </InputGroup>
                <Form.Control
                  type="file"
                  onChange={(e: any) => {
                    setcoverImage(e.target.files[0] as any as File);
                  }}
                />
              </Col>
              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">Title</InputGroup>
                <Form.Control
                  required={true}
                  type="text"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </Col>

              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">Slug</InputGroup>
                <Form.Control
                  required={true}
                  type="text"
                  value={slug}
                  onChange={(e) => setslug(e.target.value?.trim())}
                />
              </Col>
              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">Seo Description</InputGroup>
                <Form.Control
                  required={true}
                  type="text"
                  value={seoDescription}
                  onChange={(e) => setseoDescription(e.target.value)}
                />
              </Col>
              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">Tags</InputGroup>
                <ButtonGroup size="sm">
                  {loadingSeletionTags ? (
                    <Spinner />
                  ) : (
                    selectionTags?.map(({ name: selectionTag }) => (
                      <Button
                        variant={
                          tags?.includes(selectionTag) ? "primary" : "default"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (tags?.includes(selectionTag)) {
                            settags((prev) =>
                              [...prev].filter((preI) => selectionTag !== preI)
                            );
                          } else {
                            settags((prev) => [...prev, selectionTag]);
                          }
                        }}
                      >
                        {selectionTag}
                      </Button>
                    ))
                  )}
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenCreateModal(true);
                    }}
                  >
                    Add tag
                  </Button>
                </ButtonGroup>
              </Col>
              <Col
                className="p-1"
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                }}
              >
                <InputGroup style={{ margin: "2px" }}>
                  <InputGroup.Text className="fw-bold">
                    Published &nbsp;&nbsp;
                    <Form.Switch
                      checked={published}
                      onChange={(e) => setpublished(!published)}
                    />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup style={{ margin: "2px" }}>
                  <InputGroup.Text className="fw-bold">
                    Status &nbsp;&nbsp;
                    <Form.Switch
                      checked={!!status}
                      onChange={(e) => setStatus(status ? 0 : 1)}
                    ></Form.Switch>
                  </InputGroup.Text>
                </InputGroup>
                {submitting ? (
                  <Spinner />
                ) : (
                  <Form.Control
                    size="sm"
                    type="submit"
                    style={{ margin: "2px" }}
                    value={`${isUpdate ? "Update" : "Create"}`}
                    className="fw-bold utilityLink"
                  />
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <Row>
              <Col xs="12" className="p-1 pt-2">
                <InputGroup className="fw-bold">Content</InputGroup>
                <InputGroup>
                  <RichTextEditor setcontent={setcontent} content={content} />
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default EditForm;
