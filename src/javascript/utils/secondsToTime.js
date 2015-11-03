export function timeUnitFormat(time) {
    if (time < 1) {
        return '00';
    } else if (time < 10) {
        return '0' + time;
    }
    return time;
}

export function secondsToTime(secs) {
    secs = Math.round(secs);
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    let time = '';

    if (hours > 0) {
        time += hours + ':';
    }

    time += timeUnitFormat(minutes) + ':';
    time += timeUnitFormat(seconds);

    return time;
}
