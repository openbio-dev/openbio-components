const e=new Map;e.set(4,"RIGHT-LITTLE"),e.set(3,"RIGHT-RING"),e.set(2,"RIGHT-MIDDLE"),e.set(1,"RIGHT-INDEX"),e.set(0,"RIGHT-THUMB"),e.set(5,"LEFT-THUMB"),e.set(6,"LEFT-INDEX"),e.set(7,"LEFT-MIDDLE"),e.set(8,"LEFT-RING"),e.set(9,"LEFT-LITTLE");const E={SERVER_HOST:"localhost:4000",WS_HOST:"localhost:5000",IPINFO_ADDRESS:"http://ipinfo.io/json?token=61ed945b6baf67",captureTypes:{ONE_FINGER_FLAT:0,TWO_FINGER_FLAT:1,ROLLED_FINGER:2,FOUR_FINGER_FLAT:3},anomalyTypes:{SIGNATURE_ANOMALY:0,FACE_ANOMALY:1,MODAL_ANOMALY:2,DOCUMENT_ANOMALY:3},settingTypes:{PERSON_REQUIRED_FIELD:0,MODAL_SETTINGS:1,FACE_SETTINGS:2,SIGNATURE_SETTINGS:3},device:{AKYSCAM:"AKYSCAM",WEBCAM:"WEBCAM",IB:"IB",MSP:"MSP",SECUGEN:"SECUGEN",WACOM:"WACOM",CANON:"CANON"},processor:{AWPREFACE:"AWPREFACE",IDKIT:"IDKIT",AK_MATCHER:"AK_MATCHER"},valueTypes:{INTEGER:0,STRING:1,BOOLEAN:2},dpiValue:{1:300},fingerNames:["Polegar direito","Indicador direito","Médio direito","Anelar direito","Mínimo direito","Polegar esquerdo","Indicador esquerdo","Médio esquerdo","Anelar esquerdo","Mínimo esquerdo"],fingerNamesMap:e,palmNames:["Hipotenar esquerda","Palma esquerda","Palma direita","Hipotenar direita"]};export{E as c};