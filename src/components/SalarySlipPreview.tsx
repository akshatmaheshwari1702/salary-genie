import { Card, CardContent } from "@/components/ui/card";

interface SalarySlipPreviewProps {
  companyName: string;
  companyAddress: string;
  logo: string;
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  month: string;
  year: string;
  basicSalary: string;
  hra: string;
  otherAllowances: string;
  deductions: string;
}

export const SalarySlipPreview = ({
  companyName,
  companyAddress,
  logo,
  employeeName,
  employeeId,
  designation,
  department,
  month,
  year,
  basicSalary,
  hra,
  otherAllowances,
  deductions,
}: SalarySlipPreviewProps) => {
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
    <Card className="w-full max-w-3xl mx-auto" id="salary-slip">
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">{companyName || "Company Name"}</h1>
            <p className="text-sm text-muted-foreground">{companyAddress || "Company Address"}</p>
          </div>
          {logo && (
            <div className="w-20 h-20 flex items-center justify-center">
              <img src={logo} alt="Company Logo" className="max-w-full max-h-full object-contain" />
            </div>
          )}
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-foreground">SALARY SLIP</h2>
          <p className="text-sm text-muted-foreground">
            For the month of {month || "Month"} {year || "Year"}
          </p>
        </div>

        {/* Employee Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 bg-muted/50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground">Employee Name</p>
            <p className="font-medium">{employeeName || "Name"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Employee ID</p>
            <p className="font-medium">{employeeId || "ID"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Designation</p>
            <p className="font-medium">{designation || "Designation"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Department</p>
            <p className="font-medium">{department || "Department"}</p>
          </div>
        </div>

        {/* Salary Details */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-foreground">Earnings</h3>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Basic Salary</span>
              <span className="font-medium">₹{Number(basicSalary || 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">HRA</span>
              <span className="font-medium">₹{Number(hra || 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Other Allowances</span>
              <span className="font-medium">₹{Number(otherAllowances || 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b-2 border-border font-semibold">
              <span>Gross Salary</span>
              <span>₹{calculateGross().toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-foreground">Deductions</h3>
          <div className="flex justify-between py-2 border-b-2 border-border">
            <span className="text-muted-foreground">Total Deductions</span>
            <span className="font-medium">₹{Number(deductions || 0).toLocaleString()}</span>
          </div>
        </div>

        {/* Net Salary */}
        <div className="bg-primary/10 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-foreground">NET SALARY</span>
            <span className="text-xl font-bold text-primary">
              ₹{calculateNet().toLocaleString()}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            This is a computer generated salary slip and does not require signature
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
