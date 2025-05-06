

const useEMICalculator = (loanAmount, interestRate, term) => {
    const calculateEMI = () => {
      const monthlyRate = interestRate / 12 / 100;
      const months = term * 12;
      const emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
  
      const schedule = [];
      let remainingBalance = loanAmount;
  
      for (let i = 1; i <= months; i++) {
        const interest = remainingBalance * monthlyRate;
        const principal = emi - interest;
        remainingBalance -= principal;
        schedule.push({
          month: i,
          principal: principal.toFixed(2),
          interest: interest.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
        });
      }
  
      return { emi: emi.toFixed(2), schedule };
    };
  
    return calculateEMI;
  };
  
  export default useEMICalculator;
  