const video = document.getElementById('video');
const canvas = document.getElementById('output');
const context = canvas.getContext('2d');
const statusElement = document.getElementById('status');
const counterElement = document.getElementById('counter');
const boingSound = new Audio('jump.wav');

let detector;
let previousHipY = null;
let jumpTreshold = 30;
let jumpCooldown = 0;
let jumpCount = 0;

async function init() {
    try {

        const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
        detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);

        await setupCamera();
        video.play();

    } catch (err) {

    }
}

async function setupCamera() {
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {width: 640, height: 480},
            audio: false
        
        });

        video.srcObject = stream;

    } catch (err) {

        console.error("Camera setup failed: " + err);
        statusElement.textContent = "Error: " + err;
        throw err; // Handle camera setup error and stop execution

    }
}

async function detectJumps(video, detector){
    const poses = await detector.estimatePoses(video);

    console.log("Poses detected: ", poses);

}