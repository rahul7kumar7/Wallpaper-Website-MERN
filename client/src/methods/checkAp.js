export default function checkAspectRatio(ratio, calculation) {
    return Math.abs(ratio - calculation) < 0.005;
}