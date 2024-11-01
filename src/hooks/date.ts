const getLocaleDate = (date: Date, lang: string) => {
    return date.toLocaleDateString(lang, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};

export { getLocaleDate };
