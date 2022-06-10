import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import OMA from './api';
import { TranslationUtils } from '../../locales/translation';
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["REGISTER"] = "REGISTER";
    ACTIONS["VERIFY"] = "VERIFY";
    ACTIONS["IDENTIFY"] = "IDENTIFY";
})(ACTIONS || (ACTIONS = {}));
var RESULT_STATUS;
(function (RESULT_STATUS) {
    RESULT_STATUS[RESULT_STATUS["REGISTERED"] = 0] = "REGISTERED";
    RESULT_STATUS[RESULT_STATUS["REGISTER_FAILED"] = 1] = "REGISTER_FAILED";
    RESULT_STATUS[RESULT_STATUS["VERIFIED"] = 2] = "VERIFIED";
    RESULT_STATUS[RESULT_STATUS["VERIFICATION_FAILED"] = 3] = "VERIFICATION_FAILED";
    RESULT_STATUS[RESULT_STATUS["REMOVED"] = 4] = "REMOVED";
    RESULT_STATUS[RESULT_STATUS["REMOVE_FAILED"] = 5] = "REMOVE_FAILED";
    RESULT_STATUS[RESULT_STATUS["UPDATED"] = 6] = "UPDATED";
    RESULT_STATUS[RESULT_STATUS["UPDATE_FAILED"] = 7] = "UPDATE_FAILED";
    RESULT_STATUS[RESULT_STATUS["MATCH_FOUND"] = 8] = "MATCH_FOUND";
    RESULT_STATUS[RESULT_STATUS["NO_MATCH_FOUND"] = 9] = "NO_MATCH_FOUND";
    RESULT_STATUS[RESULT_STATUS["MATCH_FAILED"] = 10] = "MATCH_FAILED";
    RESULT_STATUS[RESULT_STATUS["POOR_IMAGE_QUALITY"] = 11] = "POOR_IMAGE_QUALITY";
    RESULT_STATUS[RESULT_STATUS["ID_EXISTS"] = 12] = "ID_EXISTS";
    RESULT_STATUS[RESULT_STATUS["ID_DOES_NOT_EXISTS"] = 13] = "ID_DOES_NOT_EXISTS";
    RESULT_STATUS[RESULT_STATUS["SEARCH_FAIL"] = 14] = "SEARCH_FAIL";
})(RESULT_STATUS || (RESULT_STATUS = {}));
export class OpenbioFaceOmaComponent {
    constructor() {
        this.defaultWidth = 640;
        this.defaultHeight = 480;
        this.projectId = '1';
        this.recordId = '1';
        this.locale = 'pt';
        this.showHeader = true;
        this.showFullscreenLoader = false;
        this.captured = false;
        this.videoInterval = undefined;
    }
    async listenLocale(newValue) {
        this.setI18nParameters(newValue);
    }
    ;
    async setI18nParameters(locale) {
        TranslationUtils.setLocale(locale);
        this.translations = await TranslationUtils.fetchTranslations();
        this.componentContainer.forceUpdate();
    }
    addCustomLink(url) {
        let element = document.querySelector(`link[href="${url}"]`);
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', 'stylesheet');
            element.setAttribute('href', url);
            document.head.appendChild(element);
        }
    }
    async componentWillLoad() {
        this.setI18nParameters(this.locale);
        this.addCustomLink("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css");
        this.addCustomLink("https://cdn.jsdelivr.net/npm/@mdi/font@6.6.96/css/materialdesignicons.min.css");
        this.addCustomLink("https://fonts.googleapis.com/css?family=Poppins");
    }
    componentDidLoad() {
        let location = undefined;
        let queryObj = undefined;
        window.global = window;
        const _global = window || global;
        if (_global) {
            console.log(_global);
            location = _global.location;
        }
        this.startCamera();
    }
    screenUpdate() {
        this.componentContainer.forceUpdate();
    }
    startCamera() {
        this.captured = false;
        const videoElement = document.getElementsByTagName("openbio-oma-face")[0].lastElementChild.getElementsByClassName("webcam-video")[0];
        videoElement.setAttribute('autoplay', '');
        videoElement.setAttribute('muted', '');
        videoElement.setAttribute('playsinline', '');
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
                .then((stream) => {
                videoElement.srcObject = stream;
                setTimeout(() => {
                    videoElement.play();
                }, 1 * 1000);
            })
                .catch((e) => {
                console.error(e);
            });
        }
    }
    stopVideo() {
        clearInterval(this.videoInterval);
        this.videoInterval = undefined;
        this.videoElement.pause();
        this.screenUpdate();
    }
    async getImageFromVideo() {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            canvas.width = this.cameraWidth || this.defaultWidth;
            canvas.height = this.cameraHeight || this.defaultHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
                var reader = new FileReader();
                reader.onload = () => {
                    this.capturedImage = {
                        data: canvas.toDataURL('image/png'),
                        file: new File([reader.result], "image.png", { type: blob.type })
                    };
                    resolve(true);
                };
                reader.readAsArrayBuffer(blob);
            });
        });
    }
    setResultImage() {
        const snapShotElement = document.getElementsByTagName("openbio-oma-face")[0].lastElementChild.getElementsByClassName("webcam-snapshot")[0];
        snapShotElement.src = this.capturedImage.data;
        this.captured = true;
        this.screenUpdate();
        setTimeout(() => {
            this.showFullscreenLoader = false;
        }, 1000);
    }
    getCaptureText() {
        return this.captured ? this.translations.TRY_AGAIN : this.translations.MANUAL_CAPTURE;
    }
    confirmPicture() {
        const html = `
      <div>
        <img src="${this.capturedImage.data}" class="object-fit-contain" style="max-height: 300px" />
        <div class="swal2-content">
          <h2 style="display: flex;
            justify-content: center;
            font-size: 1.4em;
            font-weight: 600;
            margin: 20px;
            word-wrap: break-word;"
          >${this.translations.CONFIRM_CAPTURE}</h2>
          <div id="swal2-content" style="display: block;">${this.translations.MAKE_SURE_PHOTO_WELL_FRAME}</div>
        </div>
      </div>
    `;
        return Swal.fire({
            html,
            type: "warning",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonColor: this.primaryColor || '#0D3F56',
            confirmButtonText: this.translations.CONFIRM,
            cancelButtonText: this.translations.BACK,
        }).then((result) => {
            return result.value;
        });
    }
    showLivenessError() {
        Swal.fire({
            type: "warning",
            title: 'Falha ao verificar vivacidade',
            text: 'Verifique a iluminação e tente refazer a coleta',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonColor: this.primaryColor || '#0D3F56',
            confirmButtonText: this.translations.CONFIRM,
        }).then(() => {
            this.startCamera();
        });
    }
    getOMAMatcherBody() {
        return {
            images: [{ faceType: "front", faceData: this.capturedImage.data }],
            projectID: this.projectId,
            registrationID: this.recordId,
            requestKey: this.requestKey,
        };
    }
    getOMALivenessBody() {
        const omaLivenessBody = new FormData();
        omaLivenessBody.append('Image', this.capturedImage.file);
        omaLivenessBody.append('data', this.capturedImage.file);
        omaLivenessBody.append('requestKey', this.requestKey);
        return omaLivenessBody;
    }
    async checkLiveness() {
        return new Promise(async (resolve) => {
            this.showFullscreenLoader = true;
            const resolveLiveness = await OMA.checkLiveness(this.getOMALivenessBody(), this.token);
            this.showFullscreenLoader = false;
            resolve(true);
        });
    }
    async confirmImageUpdate() {
        Swal.fire({
            type: "warning",
            title: 'Cadastro já existente',
            text: 'Você deseja atualizar o cadastro com a nova captura?',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonColor: this.primaryColor || '#0D3F56',
            confirmButtonText: this.translations.CONFIRM,
            cancelButtonText: this.translations.BACK,
        }).then((result) => {
            if (result.value) {
                this.updateRecord();
            }
        });
    }
    async updateRecord() {
        this.showFullscreenLoader = true;
        if (await this.verify()) {
            this.showFullscreenLoader = true;
            OMA.update(this.getOMAMatcherBody(), this.token).then(() => {
                this.showFullscreenLoader = false;
                if (this.callback) {
                    this.callback({ recordId: this.recordId, image: this.capturedImage.data });
                }
                return Swal.fire({
                    type: "success",
                    title: 'Cadastro atualizado',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonColor: this.primaryColor || '#0D3F56',
                });
            });
        }
        else {
            this.showFullscreenLoader = false;
            return Swal.fire({
                type: "error",
                title: 'Falha ao atualizar cadastro',
                text: 'O ID fornecido já está vinculado a outra pessoa',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonColor: this.primaryColor || '#0D3F56',
                confirmButtonText: this.translations.BACK,
            });
        }
    }
    async verifyRecordIdExistency() {
        return new Promise(async (resolve) => {
            this.showFullscreenLoader = true;
            const resolveContains = await OMA.contains({ projectID: this.projectId, registrationID: this.recordId, requestKey: this.requestKey }, this.token);
            this.showFullscreenLoader = false;
            if (resolveContains.ResultStatus === RESULT_STATUS.ID_EXISTS) {
                this.confirmImageUpdate();
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    }
    async register() {
        if (await this.checkLiveness()) {
            if (!await this.verifyRecordIdExistency()) {
                this.showFullscreenLoader = true;
                await OMA.register(this.getOMAMatcherBody(), this.token);
                this.showFullscreenLoader = false;
                if (this.callback) {
                    this.callback({ recordId: this.recordId, image: this.capturedImage.data });
                }
                return Swal.fire({
                    type: "success",
                    title: 'Cadastrado com sucesso',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonColor: this.primaryColor || '#0D3F56',
                });
            }
        }
    }
    async verify() {
        this.showFullscreenLoader = true;
        return await OMA.verify(this.getOMAMatcherBody(), this.token).then((resolve) => {
            this.showFullscreenLoader = false;
            if (this.action === ACTIONS.VERIFY && this.callback) {
                this.callback({ recordId: this.recordId, match: resolve.ResultStatus === RESULT_STATUS.VERIFIED });
                return Swal.fire({
                    type: resolve.ResultStatus === RESULT_STATUS.VERIFIED ? 'success' : 'error',
                    title: resolve.ResultStatus === RESULT_STATUS.VERIFIED ? 'Autenticado' : 'Falha na autenticação',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonColor: this.primaryColor || '#0D3F56',
                });
            }
            else {
                return resolve.ResultStatus === RESULT_STATUS.VERIFIED;
            }
        });
    }
    async takeSnapShot() {
        this.stopVideo();
        await this.getImageFromVideo();
        if (await this.confirmPicture()) {
            this.showFullscreenLoader = true;
            if (this.action === ACTIONS.REGISTER) {
                this.register();
            }
            else {
                this.verify();
            }
            this.setResultImage();
        }
        else {
            this.startCamera();
        }
    }
    render() {
        return (h("div", { style: { "background-color": this.containerBackgroundColor || "#FFFFFF" } },
            h("div", { class: "window-size", style: { "padding": '0' } },
                h("loader-component", { enabled: this.showFullscreenLoader }),
                h("div", { id: "notification-container" }),
                this.showHeader && h("nav", { class: 'navbar', style: { "background-color": this.primaryColor || "#0D3F56" } },
                    h("div", { class: 'title is-3 has-text-centered', style: { "width": "100%", "color": this.textColor || "#FFFFFF", "padding-top": "7px" } }, this.headerTitle || this.translations.BIOMETRIC_AUTHENTICATION)),
                h("div", { class: 'level', style: { "margin-top": "30px" } },
                    h("div", { class: 'rows has-text-centered', style: { width: "100%" } },
                        h("div", { class: "row", style: { display: "inline-block" } },
                            h("div", { style: {
                                    position: "relative",
                                    width: `${this.cameraWidth}px` || `${this.defaultWidth}px`,
                                    height: `${this.cameraHeight}px` || `${this.defaultHeight}px`,
                                    display: this.captured ? "none" : "inline-block"
                                } },
                                h("video", { id: "video", ref: el => { this.videoElement = el; }, class: "webcam-video", width: this.cameraWidth || this.defaultWidth, height: this.cameraHeight || this.defaultHeight, autoplay: true, muted: true, style: { display: this.captured ? "none" : "inline-block" } })),
                            h("img", { id: "img", height: this.cameraHeight || this.defaultHeight, class: "webcam-snapshot", style: {
                                    height: `${this.cameraHeight || this.defaultHeight}px !important`,
                                    display: this.captured ? "inline" : "none",
                                    marginBottom: "5px"
                                } })),
                        h("div", { class: "row has-text-centered", style: { 'margin-top': '1vh', 'padding-bottom': '2vh' } },
                            h("a", { class: `btn-primary`, style: {
                                    "background-color": this.primaryColor || "#0D3F56",
                                    "border": `1px solid ${this.primaryColor || "#0D3F56"}`,
                                    "color": this.textColor || "#FFFFFF"
                                }, onClick: () => this.captured ? this.startCamera() : this.takeSnapShot() }, this.getCaptureText())))))));
    }
    static get is() { return "openbio-oma-face"; }
    static get properties() { return {
        "action": {
            "type": String,
            "attr": "action"
        },
        "callback": {
            "type": "Any",
            "attr": "callback"
        },
        "cameraHeight": {
            "type": Number,
            "attr": "camera-height"
        },
        "cameraWidth": {
            "type": Number,
            "attr": "camera-width"
        },
        "captured": {
            "state": true
        },
        "capturedImage": {
            "state": true
        },
        "componentContainer": {
            "elementRef": true
        },
        "containerBackgroundColor": {
            "type": String,
            "attr": "container-background-color"
        },
        "headerTitle": {
            "type": String,
            "attr": "header-title"
        },
        "locale": {
            "type": String,
            "attr": "locale",
            "mutable": true,
            "watchCallbacks": ["listenLocale"]
        },
        "primaryColor": {
            "type": String,
            "attr": "primary-color"
        },
        "projectId": {
            "type": String,
            "attr": "project-id"
        },
        "recordId": {
            "type": String,
            "attr": "record-id"
        },
        "requestKey": {
            "type": String,
            "attr": "request-key"
        },
        "showFullscreenLoader": {
            "state": true
        },
        "showHeader": {
            "type": Boolean,
            "attr": "show-header"
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        },
        "token": {
            "type": String,
            "attr": "token"
        },
        "translations": {
            "state": true
        },
        "videoElement": {
            "state": true
        },
        "videoInterval": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:openbio-oma-face:**/"; }
}