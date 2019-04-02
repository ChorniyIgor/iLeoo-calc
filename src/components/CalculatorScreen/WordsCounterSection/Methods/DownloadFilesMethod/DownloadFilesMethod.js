import React from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import classes from "./DownloadFilesMethod.css";
import { addFiles, deleteFile } from "../../../../../redux/actions/wordsCounter";
import Loader from "../../../../../hoc/Loader/Loader";

const DownloadFilesMethod = props => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: props.addFiles
  });

  return (
    <div>
      <div>
        <div {...getRootProps()} className={classes.Drag_zone}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Отпути:)</p>
          ) : (
            <ul className={classes.Drag_zoneList}>
              {Object.keys(props.files).map((fileName, i) => {
                const fileInfo = props.files[fileName];
                return (
                  <li
                    key={i}
                    onClick={evt => {
                      evt.stopPropagation();
                      props.deleteFile(fileName);
                    }}
                  >
                    <span className={classes.fileName}>{fileName}</span>
                    <span className={classes.wordsCount}>
                      {fileInfo.wordsCount === "unknown" ? (
                        "неможливо визначити"
                      ) : fileInfo.wordsCount ? (
                        fileInfo.wordsCount
                      ) : (
                        <Loader />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <label>
        <h2>{props.filesWordsCountInput}</h2>
        <span>Wörter</span>
      </label>
      <div>
        <i />
        <p>
          Ihre Datei ist erfolgreich zugefügt. Die Wörter sind leider nicht zahlbar, deshalb
          analysieren wir gern Ihre Datei und erstellen ein Angebot auf Basis des rechts angegebenen
          Wortpreises.
        </p>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    files: state.wordsCounter.files,
    filesWordsCountInput: state.wordsCounter.filesWordsCountInput
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addFiles: files => {
      dispatch(addFiles(files));
    },
    deleteFile: fileName => {
      dispatch(deleteFile(fileName));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadFilesMethod);
