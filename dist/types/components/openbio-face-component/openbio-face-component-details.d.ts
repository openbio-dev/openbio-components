import { HTMLStencilElement } from '../../stencil.core';
export declare class OpenbioFaceComponentDetails {
    private ws;
    private wsStatusInterval;
    private canvas?;
    private person;
    private payload;
    private keysForEvaluate;
    constructor();
    componentContainer: HTMLStencilElement;
    detached: boolean;
    isTagComponent: boolean;
    tempPerson: any;
    tempFace: any;
    deviceReady: boolean;
    eyeAxisLocationRatio: string;
    centerLineLocationRatio: string;
    eyeSeparation: string;
    offAngleGaze: string;
    eyeAxysAngle: string;
    poseAngleYaw: string;
    rightOrLeftEyeClosed: string;
    originalImage: string;
    croppedImage: string;
    segmentedImage: string;
    rawImage: string;
    crop: boolean;
    segmentation: boolean;
    autoCapture: boolean;
    autoCaptureCount: number;
    autoCapturing: boolean;
    autoCaptureInterval: any;
    dpiValue: number;
    flashCharge: number;
    cameraSettingsOptions: any;
    tab: number;
    anomalyOptions: Array<any>;
    anomaly: number;
    face: any;
    validation: any;
    backendSession: any;
    showLoader: boolean;
    cameraPresetOptions: any;
    flashProperty: number;
    flashWidth: number;
    aperture: number;
    shutterSpeed: number;
    imageFormat: number;
    isoValue: number;
    whiteBalance: number;
    preset: number;
    previewSize: number;
    previewType: number;
    isCapturing: boolean;
    isPreviewing: boolean;
    model: string;
    brand: string;
    serial: string;
    video: any;
    track: any;
    allowConfiguration: boolean;
    showCameraConfiguration: boolean;
    showPreviewTemplate: boolean;
    manualEyeSelection: any;
    faceDetected: boolean;
    deviceStatus: boolean;
    shallCapture: boolean;
    evaluations: Array<Object>;
    serviceConfigs: any;
    captureInput: HTMLInputElement;
    uploadedBase64: any;
    uploadedBase64Original: any;
    imageFilterBase64: any;
    serviceTime: any;
    cropperModal: boolean;
    imageAdjustmentModal: boolean;
    imageFilterModal: boolean;
    cropSegment: boolean;
    translations: any;
    adjustment: boolean;
    adjustedImage: string;
    croppedImageURL: string;
    locale: string;
    listenLocale(newValue: string): Promise<void>;
    componentWillLoad(): Promise<void>;
    addCustomLink(url: any): void;
    clearManualEyeSelection(): void;
    setI18nParameters(locale: any): Promise<void>;
    toggleManualEyeSelection(): void;
    cropWithEyesCoords(): void;
    eyeAxisLocationRatioMessage(status: string): void;
    centerLineLocationRatioMessage(status: string): void;
    eyeSeparationMessage(score: number): void;
    offAngleGazeMessage(status: string): void;
    eyeAxysAngleMessage(status: string): void;
    poseAngleYawMessage(status: string): void;
    rightEyeClosedMessage(status: string): void;
    leftEyeClosedMessage(status: string): void;
    setEvaluateMessageFor(type: any, status: any): void;
    checkInvalidEvaluations(): Object;
    tryAutoCapture(): void;
    open(): void;
    applyCameraSettings(): Promise<void>;
    fetchCurrentCameraSettings(): Promise<void>;
    isWebcam(): boolean;
    buildWebcam(): any;
    resetAutoCapturing(): void;
    fileToBase64: (file: any) => Promise<unknown>;
    componentDidLoad(): Promise<void>;
    configureSegmentation(): void;
    componentDidUnload(): void;
    findSetting(settings: any, name: string): any;
    clearImagesObjects(): void;
    clearImages(): void;
    close(): void;
    getWebcam(): void;
    startPreview(backToPreview?: boolean): void;
    restartPreview(): void;
    stopPreview(): void;
    capture(manual?: boolean): void;
    setPresetValues(event: any): void;
    setCameraValue(event: any): void;
    increaseZoom(): void;
    decreaseZoom(): void;
    updateCameraSettings(): void;
    setFeature(event: any): void;
    acceptData(): void;
    emitLoadInformation(): void;
    sendBiometryInformation(face: any): void;
    activeTabClass(num: number): string;
    setActiveTab(num: number): void;
    setSelection(event: any): void;
    saveAnomaly(): void;
    saveFace(): Promise<void>;
    storeCapturedFace(saveFaceResult: any): void;
    openImageAdjustment(): Promise<void>;
    onInputChange(files: any): Promise<void>;
    _base64ToArrayBuffer(base64: any): ArrayBuffer | SharedArrayBuffer;
    filterCallback(_this: any, filteredImageBase64: string): Promise<void>;
    saveCrop(finalImageBase64: string, originalImage: string): Promise<void>;
    applyImageAdjust(): void;
    cropCallback(_this: any, croppedBase64Image: string, originalImage: string, segment: boolean): Promise<void>;
    imageAdjustmentCallback(_this: any, adjustment: boolean, adjustedImage: string): void;
    closeImageAdjustment(_this: any): void;
    saveImage(_this: any): void;
    render(): any;
}
