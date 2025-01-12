const LOCALE: Intl.LocalesArgument = "en-GB";

const formatDate = (
    date?: Date | string | number,
    defaultValue: string = "",
    options: Intl.DateTimeFormatOptions = {}
) => {
    if (!date) return defaultValue;

    return new Date(date).toLocaleDateString(LOCALE, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        ...options,
    });
};

const formatTime = (date: Date | string | number) => {
    return new Date(date).toLocaleTimeString(LOCALE, {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
};

export { formatDate, formatTime };
