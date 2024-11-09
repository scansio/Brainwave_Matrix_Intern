import Reblend, { SharedConfig, useRef, useState } from "reblendjs";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import {
  ALL_ARTICLE,
  BASE,
  CREATE_ARTICLE,
} from "../../scripts/config/RestEndpoints";
import fetcher from "../../scripts/SharedFetcher";
import { toast } from "react-toastify";
import { HOTLIST } from "../../scripts/config/contants";
import PaginatedTable from "../paginating/PaginatedTable";
import { Link, redirectTo } from "reblend-router";
import EditForm from "./EditForm";

function AuthorHome() {
  const [reload, setReload] = useState(false);
  const [itemId, setItemId] = useState("");
  const [showConfirmDeletion, setShowConfirmDeletion] = useState(false);
  const [deletingArticle, setDeletingArticle] = useState(false);
  const [openEditingForm, setOpenEditingForm] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  const urlRef = useRef(ALL_ARTICLE);

  const out = (articleRow: any) => {
    return (
      <ButtonGroup size="sm">
        <Button
          onClick={() => {
            setItemId(articleRow._id);
            setShowConfirmDeletion(true);
          }}
          style={{ padding: "5px" }}
          title="Delete this article"
          variant="danger"
          disabled={deletingArticle}
        >
          <i class="fa fa-trash" aria-hidden="true">
            Delete
          </i>
        </Button>
        <Button
          style={{ padding: "5px" }}
          title="Edit this article"
          variant="warning"
          onClick={() => {
            setEditFormData(articleRow);
            setOpenEditingForm(true);
          }}
        >
          <i className="fas fa-edit">Edit</i>
        </Button>
      </ButtonGroup>
    );
  };

  const createArticleButton = () => {
    return (
      <Button
        style={{ padding: "5px", fontSize: "11px" }}
        onClick={() => {
          setEditFormData(null);
          setOpenEditingForm(true);
        }}
      >
        Add
      </Button>
    );
  };

  const fieldRef = useRef({
    coverImageUrl: {
      name: "Cover",
      type: String,
      transform: {
        out: (rowData: any) => (
          <img src={BASE + rowData.coverImageUrl} alt="Cover" />
        ),
      },
      virtual: true,
    },
    _id: { name: "Id", type: String },
    title: { name: "Title", type: String },
    slug: { name: "Slug", type: String },
    content: {
      name: "Content",
      type: String,
      transform: {
        out: (rowData: any) => "Click to open",
      },
    },
    likeByIds: {
      name: "Likes",
      type: String,
      transform: {
        out: (rowData: any) => rowData.likedByids?.length || 0,
      },
    },
    seoDescription: {
      name: "Seo Description",
      type: String,
    },
    numComments: {
      name: "Comments",
      type: Number,
      transform: {
        out: (rowData: any) => (
          <a href={"/author/" + rowData.slug + "/comments"}>
            {rowData.numComments}
          </a>
        ),
      },
    },
    tags: {
      name: "Tags",
      type: String,
      transform: {
        out: (rowData: any) => rowData.tags?.join("|"),
      },
    },
    readingTimeInMinute: {
      name: "Read Time",
      type: String,
      transform: {
        out: (rowData: any) => <>{rowData.readingTimeInMinute || 0} ms</>,
      },
    },
    readers: {
      name: "Readers",
      type: String,
      transform: {
        out: (rowData: any) => rowData.readers?.length || 0,
      },
    },
    published: { name: "Published", type: Boolean },
    "createdAt.date": { name: "Created", type: Date },
    "updatedAt.date": { name: "Updated", type: Date, hideFromSearch: true },
    action: {
      name: createArticleButton,
      type: String,
      virtual: true,
      transform: { out },
    },
  });

  async function deleteArticle(e: any) {
    e.preventDefault();
    setDeletingArticle(true);
    const gdFetchArticle = {
      url: CREATE_ARTICLE,
      data: {
        id: itemId,
        status: HOTLIST,
      },
    };
    fetcher
      .fetch(gdFetchArticle)
      .then((data) => {
        if (!data?.data?.status) {
          toast.error(data.data.message);
        } else {
          toast.success(data.data.message);
          setReload((prev) => !prev);
        }
        setDeletingArticle(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setDeletingArticle(false);
      });
  }

  return (
    <>
      <Modal
        show={openEditingForm}
        onHide={() => setOpenEditingForm(false)}
        fullscreen
        animation
      >
        <ModalHeader closeButton onHide={() => setOpenEditingForm(false)}>
          <h3 class="text-bold">
            {editFormData
              ? `Editing "${(editFormData as any).title}"`
              : "Creative writing"}
          </h3>
        </ModalHeader>
        <ModalBody className="pt-10">
          {openEditingForm ? <EditForm data={editFormData as any} /> : null}
        </ModalBody>
      </Modal>

      <Modal
        show={showConfirmDeletion}
        onHide={() => setShowConfirmDeletion(false)}
        type="danger"
        backdrop
        centered
        animation
      >
        <ModalBody>
          <span>Are Sure you want to delete this article</span>
        </ModalBody>
        <ModalFooter>
          <Button onClick={(e) => deleteArticle(e)}></Button>
        </ModalFooter>
      </Modal>

      <PaginatedTable
        url={urlRef.current}
        dataName="Articles"
        fields={fieldRef.current}
        primaryKey="title"
        /* setData={data => setData(data)} */ forCurrentUser={false}
        reload={reload}
      />
    </>
  );
}

export default AuthorHome;
