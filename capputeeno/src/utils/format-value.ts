export function formatValue(valueInCents: number) {
    const reais = (valueInCents / 100).toFixed(2);
    return `R$ ${reais.replace('.', ',')}`;
}