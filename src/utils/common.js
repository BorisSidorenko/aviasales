export const getHoursAndMinutesFromMinutes = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours > 0 ? `${hours}ч` : ``} ${minutes > 0 ? `${minutes}м` : ``}`.trim();
}