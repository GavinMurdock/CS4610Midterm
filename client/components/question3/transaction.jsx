export const Transaction = ({ transaction }) => {
  const amount = transaction.amount;
  const from = transaction.fromUser.name;
  const to = transaction.toUser.name;

  return (
    <div className="spaced">
      ${amount} was sent from {from} to {to}
    </div>
  );
};
