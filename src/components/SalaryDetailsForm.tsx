import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SalaryDetailsFormProps {
  basicSalary: string;
  setBasicSalary: (value: string) => void;
  hra: string;
  setHra: (value: string) => void;
  specialAllowance: string;
  setSpecialAllowance: (value: string) => void;
  tds: string;
  setTds: (value: string) => void;
  professionalTax: string;
  setProfessionalTax: (value: string) => void;
  providentFund: string;
  setProvidentFund: (value: string) => void;
}

export const SalaryDetailsForm = ({
  basicSalary,
  setBasicSalary,
  hra,
  setHra,
  specialAllowance,
  setSpecialAllowance,
  tds,
  setTds,
  professionalTax,
  setProfessionalTax,
  providentFund,
  setProvidentFund,
}: SalaryDetailsFormProps) => {
  const calculateGrossEarning = () => {
    return (
      Number(basicSalary || 0) +
      Number(hra || 0) +
      Number(specialAllowance || 0)
    );
  };

  const calculateTotalDeductions = () => {
    return (
      Number(tds || 0) +
      Number(professionalTax || 0) +
      Number(providentFund || 0)
    );
  };

  const calculateNetPay = () => {
    return calculateGrossEarning() - calculateTotalDeductions();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Earnings</h3>
          <div className="space-y-2">
            <Label htmlFor="basicSalary">Basic Salary</Label>
            <Input
              id="basicSalary"
              type="number"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              placeholder="Enter basic salary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hra">HRA</Label>
            <Input
              id="hra"
              type="number"
              value={hra}
              onChange={(e) => setHra(e.target.value)}
              placeholder="Enter HRA"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialAllowance">Special Allowance</Label>
            <Input
              id="specialAllowance"
              type="number"
              value={specialAllowance}
              onChange={(e) => setSpecialAllowance(e.target.value)}
              placeholder="Enter special allowance"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Deductions</h3>
          <div className="space-y-2">
            <Label htmlFor="tds">Tax Deducted at Source (TDS)</Label>
            <Input
              id="tds"
              type="number"
              value={tds}
              onChange={(e) => setTds(e.target.value)}
              placeholder="Enter TDS"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="professionalTax">Professional Tax</Label>
            <Input
              id="professionalTax"
              type="number"
              value={professionalTax}
              onChange={(e) => setProfessionalTax(e.target.value)}
              placeholder="Enter professional tax"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="providentFund">Provident Fund (Employee)</Label>
            <Input
              id="providentFund"
              type="number"
              value={providentFund}
              onChange={(e) => setProvidentFund(e.target.value)}
              placeholder="Enter PF"
            />
          </div>
        </div>

        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Gross Earning:</span>
            <span>₹{calculateGrossEarning().toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium">Total Deductions:</span>
            <span>₹{calculateTotalDeductions().toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base font-semibold text-primary">
            <span>Net Pay:</span>
            <span>₹{calculateNetPay().toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
