import Dropzone, { DropzoneOptions } from 'dropzone';

interface UploaderProps {
  id: HTMLElement | string;
  url: string;
  clickElement?: HTMLElement;
  options?: DropzoneOptions;
}

interface Events {
  onAddedfile?: (file: Dropzone.DropzoneFile) => any;
  onAddedfiles?: (files: Dropzone.DropzoneFile[]) => any;
  onError?: (file: Dropzone.DropzoneFile, message: ApiResponse | string, xhr: any) => any;
  onSending?: (file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData) => any;
  onUploadProgress?: (file: Dropzone.DropzoneFile, progress: number, bytesSent: number) => any;
  onSuccess?: (file: Dropzone.DropzoneFile, response: ApiResponse) => any;
  onCanceled?: (file: Dropzone.DropzoneFile) => any;
  onThumbnail?: (file: Dropzone.DropzoneFile, dataUrl: string) => any;
  onQueueComplete?: () => any;
  onComplete?: (file: Dropzone.DropzoneFile) => any;
  onMaxFilesExceeded?: (file: Dropzone.DropzoneFile) => any;
}

class Uploader {
  public uploader;

  private static defaultOption: DropzoneOptions = {
    method: 'POST',
    parallelUploads: 1,
    maxFilesize: 10,           // MB
    clickable: true,
    acceptedFiles: 'image/*',
    paramName: 'file',
    dictMaxFilesExceeded: '',
    dictFileTooBig: '파일크기 초과 (최대 {{maxFilesize}}MB)',
    dictInvalidFileType: '업로드 불가한 유형의 파일입니다.',
    autoProcessQueue: true,
    resizeMethod: 'contain',
    createImageThumbnails: false,
    previewsContainer: false,
  };

  constructor({ id, url, clickElement, options }: UploaderProps) {
    const children: HTMLElement[] = [];

    if (clickElement) {
      Array.from(clickElement.children).forEach(i => {
        children.push(i as HTMLElement);
      });
    }

    const token = sessionStorage.getItem('token');
    const headers = Object.assign(
      {},
      {
        Accept: '*/*',
        'Cache-Control': '',
        'X-Requested-With': '',
      },
      token? { Authorization: `Bearer ${token}` } : null,
    );

    const dropzoneOptions = Object.assign(
      {},
      Uploader.defaultOption,
      options,
      { url },
      { headers },
      children.length > 0 ? { clickable: [clickElement, ...children] } : {},
    );

    this.uploader = new Dropzone(id, dropzoneOptions);
  }

  public on({
    onAddedfile,
    onAddedfiles,
    onError,
    onSending,
    onUploadProgress,
    onSuccess,
    onCanceled,
    onThumbnail,
    onQueueComplete,
    onComplete,
    onMaxFilesExceeded,
  }: Events) {
    const self = this;

    onAddedfile && this.uploader.on('addedfile', onAddedfile);
    onAddedfiles && this.uploader.on('addedfiles', files => {
      const newFiles = [...files].filter(file => file.status !== 'error');
      onAddedfiles(newFiles);
    });
    onError && this.uploader.on('error', onError);
    onSending && this.uploader.on('sending', onSending);
    onUploadProgress && this.uploader.on('uploadprogress', onUploadProgress);
    onSuccess && this.uploader.on('success', onSuccess);
    onCanceled && this.uploader.on('canceled', onCanceled);
    onThumbnail && this.uploader.on('thumbnail', onThumbnail);
    onQueueComplete && this.uploader.on('queuecomplete', onQueueComplete);
    this.uploader.on('complete', file => {
      self.uploader.removeFile(file);
      onComplete && onComplete(file);
    });

    onMaxFilesExceeded && this.uploader.on('maxfilesexceeded', onMaxFilesExceeded);
  }

  removeFile(file: Dropzone.DropzoneFile) {
    return this.uploader.removeFile(file);
  }

  processQueue() {
    this.uploader.processQueue();
  }

  getQueuedFiles() {
    return this.uploader.getQueuedFiles();
  }

  getUploadingFiles() {
    return this.uploader.getUploadingFiles();
  }

  getRejectedFiles() {
    return this.uploader.getRejectedFiles();
  }

  enable() {
    this.uploader.enable();
  }

  disable() {
    this.uploader.disable();
  }

  off() {
    this.uploader.off();
  }

  destroy() {
    this.uploader.destroy();
  }
}

export default Uploader;
