export const filterOptions = {
    ALL: "все",
    DIRECT: "без пересадок",
    ONE_STOP: "1 пересадка",
    TWO_STOPS: "2 пересадки",
    THREE_STOPS: "3 пересадки"
};

export const sortTransferOptions = {
    PRICE: "самый дешевый",
    DURATION: "самый быстрый",
    OPTIMAL: "оптимальный"
}

export const filterOptionsMap = new Map([
    [filterOptions.ALL, -1],
    [filterOptions.DIRECT, 0],
    [filterOptions.ONE_STOP, 1],
    [filterOptions.TWO_STOPS, 2],
    [filterOptions.THREE_STOPS, 3]
]);

export const searchURL = "https://front-test.beta.aviasales.ru/search";

export const ticketsURL = "https://front-test.beta.aviasales.ru";

export const DISPLAY_TICKETS_BY_DEFAULT = 5;