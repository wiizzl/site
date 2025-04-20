const formatDate = (date: Date) => {
  return date.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
};

export { formatDate };
