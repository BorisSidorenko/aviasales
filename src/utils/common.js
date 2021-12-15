import { sortTransferOptions, filterOptions, filterOptionsMap } from "./constants";

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

const getSegmentsStopsReducer = (currentSegment, nextSegment) => currentSegment.stops.length + nextSegment.stops.length;

const getSortedTicketsByDuration = (ticketsToSort, ascOrder = true) => {
    return ticketsToSort.sort((currentTicket, nextTicket) => {
        return ascOrder ? 
        currentTicket.segments.reduce(getSegmentsDurationReducer) - nextTicket.segments.reduce(getSegmentsDurationReducer) :
        nextTicket.segments.reduce(getSegmentsDurationReducer) - currentTicket.segments.reduce(getSegmentsDurationReducer);
    });
}

const getOptimatlSortedTickets = (ticketsToSort) => {    
    return ticketsToSort.sort((currentTicket, nextTicket) => {        
        if (currentTicket.segments.reduce(getSegmentsStopsReducer) > nextTicket.segments.reduce(getSegmentsStopsReducer)) return 1;
        if (currentTicket.segments.reduce(getSegmentsStopsReducer) < nextTicket.segments.reduce(getSegmentsStopsReducer)) return -1;
        if (currentTicket.price > nextTicket.price) return 1;
        if (currentTicket.price < nextTicket.price) return -1;

        return 0;
    });
}

const getFilteredTickets = (tickets, currentFilterOptions) => {
    if (currentFilterOptions.includes(filterOptions.ALL)) {
        return tickets;
    } 

    let filteredTickets = [];

    currentFilterOptions.forEach((option) => {
        const filteredTicketsByOption = tickets.filter((ticket) => ticket.segments.every((segment) => segment.stops.length === filterOptionsMap.get(option)));
        filteredTickets = [...filteredTickets, ...filteredTicketsByOption];
    })    

    return filteredTickets;
}

export const getSortedTickets = (tickets, currentSortOption, currentFilterOptions) => {        
    const ticketsToSort = getFilteredTickets(tickets, currentFilterOptions);
    
    switch (currentSortOption) {
        case sortTransferOptions.PRICE:            
            return getSortedTicketsByPrice(ticketsToSort);
        case sortTransferOptions.DURATION:        
            return getSortedTicketsByDuration(ticketsToSort);
        default:
            return getOptimatlSortedTickets(ticketsToSort);
    }
}