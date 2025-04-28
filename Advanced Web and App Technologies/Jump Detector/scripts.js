const video = document.getElementById('video');
const canvas = document.getElementById('output');
const context = canvas.getContext('2d');
const statusElement = document.getElementById('status');
const counterElement = document.getElementById('counter');
const boingSound = new Audio('jump.wav');

let detector;
let previousHipY = null;
let jumpTreshold = 17;
let jumpCooldown = false;
let jumpCount = 0;

async function init() {
    try {

        const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
        detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);

        await setupCamera();
        video.play();

        video.onloadeddata = async () => {
            console.log("Video is ready.");
            await detectJumps(video, detector);
        };

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

    if (poses.length > 0 && !jumpCooldown){ //make sure we have actually detected a pose
        const keypoints = poses[0].keypoints;
        const leftHip = keypoints[11];
        const rightHip = keypoints[12];

        if (leftHip.score > 0.5 && rightHip.score > 0.5){ //make sure we have a valid pose
            const averagedHipY = (leftHip.y + rightHip.y) / 2;

            if (previousHipY !== null){
                const deltaY = previousHipY - averagedHipY;

                if (deltaY > jumpTreshold){
                    //alert("Jump detected!");
                    jumpCount++;
                    boingSound.play();
                    counterElement.textContent = "Jumps: " + jumpCount;
                    //trigger jump cooldown
                    jumpCooldown = true;
                    setTimeout(() => {
                        jumpCooldown = false;
                    }, 700);
                }
                
            }

            previousHipY = averagedHipY;
        }

    }

    

    requestAnimationFrame(()=>detectJumps(video, detector));

}

init();