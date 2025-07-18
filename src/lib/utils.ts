const formatDate = (value: string | Date) => {
  const date = typeof value === "string" ? new Date(value) : value;

  return new Intl.DateTimeFormat("en-EN", {
    month: "long",
    year: "numeric",
  }).format(date);
};

export { formatDate };
