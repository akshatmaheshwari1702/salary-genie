const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

function convertLessThanThousand(num: number): string {
  if (num === 0) return '';
  
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '');
  
  return ones[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' ' + convertLessThanThousand(num % 100) : '');
}

export function convertNumberToWords(num: number): string {
  if (num === 0) return 'Zero only';
  
  // Handle negative numbers
  const isNegative = num < 0;
  const absoluteNum = Math.abs(num);
  
  const crore = Math.floor(absoluteNum / 10000000);
  const lakh = Math.floor((absoluteNum % 10000000) / 100000);
  const thousand = Math.floor((absoluteNum % 100000) / 1000);
  const remainder = absoluteNum % 1000;
  
  let result = '';
  
  if (crore > 0) {
    result += convertLessThanThousand(crore) + ' Crore ';
  }
  
  if (lakh > 0) {
    result += convertLessThanThousand(lakh) + ' Lakh ';
  }
  
  if (thousand > 0) {
    result += convertLessThanThousand(thousand) + ' Thousand ';
  }
  
  if (remainder > 0) {
    result += convertLessThanThousand(remainder);
  }
  
  // Add "Minus" prefix for negative numbers
  return (isNegative ? 'Minus ' : '') + result.trim() + ' only.';
}
