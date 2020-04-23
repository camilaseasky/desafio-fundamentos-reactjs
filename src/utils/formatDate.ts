const formatDate = (transactionDate: Date): string => {
  return new Date(transactionDate).toLocaleDateString();
};

export default formatDate;
