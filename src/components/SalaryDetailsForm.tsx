import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SalaryDetailsFormProps {
  basicSalary: string;
  setBasicSalary: (value: string) => void;
  hra: string;
  setHra: (value: string) => void;
  otherAllowances: string;
  setOtherAllowances: (value: string) => void;
  deductions: string;
  setDeductions: (value: string) => void;
}

export const SalaryDetailsForm = ({
  basicSalary,
  setBasicSalary,
  hra,
  setHra,
  otherAllowances,
  setOtherAllowances,
  deductions,
  setDeductions,
}: SalaryDetailsFormProps) => {
  const calculateGross = () => {
    return (
      Number(basicSalary || 0) +
      Number(hra || 0) +
      Number(otherAllowances || 0)
    );
  };

  const calculateNet = () => {
    return calculateGross() - Number(deductions || 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
          <Label htmlFor="otherAllowances">Other Allowances</Label>
          <Input
            id="otherAllowances"
            type="number"
            value={otherAllowances}
            onChange={(e) => setOtherAllowances(e.target.value)}
            placeholder="Enter other allowances"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deductions">Total Deductions</Label>
          <Input
            id="deductions"
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            placeholder="Enter deductions"
          />
        </div>
        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Gross Salary:</span>
            <span>₹{calculateGross().toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base font-semibold text-primary">
            <span>Net Salary:</span>
            <span>₹{calculateNet().toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
