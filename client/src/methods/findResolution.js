export default function findResolution(common_res, height) {
    const resolutions = common_res.resolutions;
    if (!resolutions || resolutions.length === 0) return null;

    const keys = resolutions.map(obj => parseInt(Object.keys(obj)[0]));
    const n = keys.length;

    // if the current height is smaller than the smallest available resolution
    if (height < keys[n - 1]) {
        return null;
    }

    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (keys[mid] === height) {
            return mid + 1;
        } else if (keys[mid] > height) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left < n ? left : null;
}