import { sortTransferOptions } from "./constants";

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

const getSortedTicketsByPrice = (ticketsToSort, ascOrder = true) => {
    return ticketsToSort.sort((currentTicket, nextTicket) => {
        return ascOrder ?
        currentTicket.price - nextTicket.price :
        nextTicket.price - currentTicket.price;
    });
}

const getSegmentsDurationReducer = (currentSegment, nextSegment) => currentSegment.duration + nextSegment.duration;

const getSortedTicketsByDuration = (ticketsToSort, ascOrder = true) => {
    return ticketsToSort.sort((currentTicket, nextTicket) => {
        return ascOrder ? 
        currentTicket.segments.reduce(getSegmentsDurationReducer) - nextTicket.segments.reduce(getSegmentsDurationReducer) :
        nextTicket.segments.reduce(getSegmentsDurationReducer) - currentTicket.segments.reduce(getSegmentsDurationReducer);
    });
}

export const getSortedTickets = (tickets, currentSortOption) => {        
    const ticketsToSort = tickets.slice();  
    
    switch (currentSortOption) {
        case sortTransferOptions.price:    
            return getSortedTicketsByPrice(ticketsToSort);
        case sortTransferOptions.duration:        
            return getSortedTicketsByDuration(ticketsToSort);
        default:
            return ticketsToSort;
    }
}