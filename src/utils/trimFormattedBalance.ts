export function trimFormattedBalance(
  balance: string | undefined,
  decimals = 4
) {
  if (!balance) {
    return '0';
  }
  const [integer, decimal] = balance.split('.');
  const trimmedDecimal = decimal.slice(0, decimals);
  return `${integer}.${trimmedDecimal}`;
}
