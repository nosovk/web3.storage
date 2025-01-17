import clsx from 'clsx';
import { useCallback, Fragment, useState } from 'react';
import { useDropzone } from 'react-dropzone';

/**
 * @typedef {Object} DropzoneProps
 * @prop {string} [className]
 * @prop {React.ReactNode} [icon]
 * @prop {string} [dragAreaText]
 * @prop {function} [onChange]
 * @prop {function} [onError]
 * @prop {number} [maxFiles]
 * @prop {string} [accept]
 * @prop {boolean} [multiple]
 * @prop {{
 *          progress: number,
 *          name: string, uploadId:
 *          string,
 *          failed: boolean
 *        }[]} [filesInfo] external upload information of files
 * @prop {{loading: string, complete: string, failed: string}} [content]
 */

/**
 *
 * @param {DropzoneProps} props
 */
const Dropzone = ({
  className,
  icon,
  dragAreaText,
  onChange,
  onError,
  filesInfo = [],
  content = {
    loading: 'Loading',
    complete: 'Complete',
    failed: 'Failed',
  },
  ...props
}) => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const onDropAccepted = useCallback(
    files => {
      setAcceptedFiles(acceptedFiles.concat(files));
      onChange?.(files);
    },
    [onChange, acceptedFiles]
  );

  const onDropRejected = useCallback(files => onError && onError(files), [onError]);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    onDropRejected,
    ...props,
  });

  return (
    <div className={clsx(className, 'Dropzone')}>
      <div {...getRootProps({ className: 'droparea' })}>
        <input className="inputField" name="file" {...getInputProps()} />
        {icon && <div className="icon">{icon}</div>}
        {dragAreaText && <p className="dragAreaText">{dragAreaText}</p>}
      </div>
      <div className="filelist">
        {filesInfo.map(fileInfo => (
          <Fragment key={`file-${fileInfo.uploadId}`}>
            <div className="filename">{fileInfo.name}</div>
            <div className="status">
              {!!fileInfo.failed
                ? content.failed
                : fileInfo.progress !== 100
                ? <div className="loading-c">
                    <span className="loading-label">{content.loading}</span>
                    <span className="loading-count">{fileInfo.progress || 0}%</span>
                  </div>
                : content.complete}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

Dropzone.defaultProps = {};

export default Dropzone;
