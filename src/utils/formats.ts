export function formatCurrency(valor: number){
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

export function formatDate(valor: string){
  return new Intl.DateTimeFormat('pt-BR').format(
    new Date(valor)
  );
}