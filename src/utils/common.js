export const getPriceFormatted = (price) => `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р`;

export const getDurationFormatted = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours > 0 ? `${hours}ч` : ``} ${minutes > 0 ? `${minutes}м` : ``}`.trim();
}

export const getTimeFromDate = (date) => new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const addMinutesToDate = (initialDate, minutesToAdd) => {
    const startDate = new Date(initialDate);
    const resultDate = new Date(startDate.getTime() + minutesToAdd * 60000);
    return getTimeFromDate(resultDate);
}