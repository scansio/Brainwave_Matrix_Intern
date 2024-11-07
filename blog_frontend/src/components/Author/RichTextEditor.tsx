import { Spinner } from "react-bootstrap";
import Reblend, { useEffect, useState } from "reblendjs";
import TextArea from "./TextArea";

function RichTextEditor({
  setcontent = () => {},
  content,
}: {
  setcontent: (p: any) => any;
  content: string;
}) {
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");
  const textArea = new TextArea();

  let round = 0;

  const intervalId = setInterval(() => {
    if ((window as any).$) {
      if ($("#summernote") && ($("#summernote") as any).summernote) {
        textArea.setOnChangeListener(setcontent);
        ($("#summernote") as any).summernote({
          placeholder: "Write your article here ...",
          /* tabsize: 2, */
          width: "100%",
          height: "500" /* 
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview", "help"]],
          ],
          fontNames: [
            "Arial",
            "Arial Black",
            "Comic Sans MS",
            "Courier New",
            "Merriweather",
            ...[
              "Arial",
              "Arial Black",
              "Comic Sans MS",
              "Courier New",
              "Helvetica Neue",
              "Helvetica",
              "Impact",
              "Lucida Grande",
              "Tahoma",
              "Times New Roman",
              "Verdana",
            ],
          ],
          lineHeights: [
            "0.2",
            "0.3",
            "0.4",
            "0.5",
            "0.6",
            "0.8",
            "1.0",
            "1.2",
            "1.4",
            "1.5",
            "2.0",
            "3.0",
          ], */,
          /* codeviewFilter: false,
          codeviewIframeFilter: true, 
          content,*/
        });
        content && ($("#summernote") as any).summernote("pasteHTML", content);
        clearInterval(intervalId);
        setLoading(false);
      }
    } else {
      if (round >= 4) {
        clearInterval(intervalId);
        setLoadingError("Could not load editor please reload this page");
        setLoading(false);
      } else {
        round++;
      }
    }
  }, 500);

  useEffect(() => {
    return () => {
      if ($ && $("#summernote") && ($("#summernote") as any).summernote) {
        ($("#summernote") as any).summernote("destroy");
      }
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      />
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      ></script>
      <link
        href="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote-bs5.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote-bs5.min.js"></script>
      {textArea}
      {loading ? (
        <div>
          Initiating editor please wait... <Spinner />
        </div>
      ) : loadingError ? (
        <div>{loadingError}</div>
      ) : null}
    </>
  );
}

export default RichTextEditor;
