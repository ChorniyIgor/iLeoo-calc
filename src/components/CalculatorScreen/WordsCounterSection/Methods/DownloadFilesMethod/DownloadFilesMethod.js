import React from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import classes from "./DownloadFilesMethod.css";
import { addFiles, deleteFile } from "../../../../../redux/actions/wordsCounter";
import Loader from "../../../../../hoc/Loader/Loader";
import img from "../../../../../assets/img/download.gif";

const DownloadFilesMethod = props => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: props.addFiles
  });

  const DragZoneStyles = [classes.Drag_zone];
  if (isDragActive) DragZoneStyles.push(classes.isDragActive);

  return (
    <div>
      <div>
        <div className={classes.Drag_zoneWrap}>
          <div className={classes.Drag_zoneLogo}>
            <img src={img} alt="Drop zone" />
          </div>
          <div {...getRootProps()} className={DragZoneStyles.join(" ")}>
            <input {...getInputProps()} />
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
                        "Error"
                      ) : fileInfo.wordsCount ? (
                        fileInfo.wordsCount
                      ) : (
                        <Loader />
                      )}
                      <i className=" fas fa-times " />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div>
        {props.isFilesCountingError ? (
          <div className={classes.ErrorMsg}>
            <i className="fas fa-exclamation" />
            Ihre Datei ist erfolgreich zugefügt. Die Wörter sind leider nicht zahlbar, deshalb
            analysieren wir gern Ihre Datei und erstellen ein Angebot auf Basis des rechts
            angegebenen Wortpreises.
          </div>
        ) : (
          <label>
            <span className={classes.DownloadFilesMethodWordsRes}>
              Total: {props.filesWordsCountInput} Wörter
            </span>
          </label>
        )}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    files: state.wordsCounter.files,
    filesWordsCountInput: state.wordsCounter.filesWordsCountInput,
    isFilesCountingError: state.wordsCounter.isFilesCountingError
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
