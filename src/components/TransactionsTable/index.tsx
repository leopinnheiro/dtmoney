import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency, formatDate } from "../../utils/formats";
import trashImg from '../../assets/trash.svg';
import { Container, Actions } from "./styles";

export function TransactionsTable() {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={'amount ' + transaction.type}>{formatCurrency(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
              <Actions>
                <button
                  className="remove-transaction"
                  type="button"
                  onClick={() => removeTransaction(transaction.id)}
                >
                  <img src={trashImg} alt="Remover transação" />
                </button>
              </Actions>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}