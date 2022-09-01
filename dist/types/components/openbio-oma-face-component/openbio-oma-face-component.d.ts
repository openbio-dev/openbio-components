import '../../stencil.core';
import { IOMAMatcherBody } from './interfaces';
interface ICapturedImage {
    data: string;
    file: File;
}
export declare class OpenbioFaceOmaComponent {
    private defaultWidth;
    private defaultHeight;
    projectId: string;
    recordId: string;
    requestKey: string;
    token: string;
    livenessMin: number;
    allowLivenessNoncompliance: boolean;
    locale: string;
    headerTitle: string;
    action: 'REGISTER' | 'VERIFY';
    showHeader: boolean;
    primaryColor: string;
    textColor: string;
    containerBackgroundColor: string;
    cameraWidth: number;
    cameraHeight: number;
    callback: Function;
    componentContainer: HTMLStencilElement;
    showFullscreenLoader: boolean;
    translations: any;
    captured: boolean;
    videoInterval: any;
    videoElement: HTMLVideoElement;
    capturedImage: ICapturedImage;
    listenLocale(newValue: string): Promise<void>;
    setI18nParameters(locale: any): Promise<void>;
    addCustomLink(url: string): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    screenUpdate(): void;
    startCamera(): void;
    stopVideo(): void;
    getImageFromVideo(): Promise<{}>;
    setResultImage(): void;
    getCaptureText(): any;
    confirmPicture(): any;
    showLivenessError(): void;
    getOMAMatcherBody(): IOMAMatcherBody;
    getOMALivenessBody(): FormData;
    checkLiveness(): Promise<{}>;
    confirmImageUpdate(): Promise<void>;
    updateRecord(): Promise<any>;
    verifyRecordIdExistency(): Promise<{}>;
    register(): Promise<any>;
    verify(): Promise<any>;
    takeSnapShot(): Promise<void>;
    render(): JSX.Element;
}
export {};
