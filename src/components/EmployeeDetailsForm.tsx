import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EmployeeDetailsFormProps {
  employeeName: string;
  setEmployeeName: (value: string) => void;
  employeeCode: string;
  setEmployeeCode: (value: string) => void;
  employeeType: string;
  setEmployeeType: (value: string) => void;
  designation: string;
  setDesignation: (value: string) => void;
  dateOfJoining: string;
  setDateOfJoining: (value: string) => void;
  baseLocation: string;
  setBaseLocation: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  panNo: string;
  setPanNo: (value: string) => void;
  bankName: string;
  setBankName: (value: string) => void;
  accountNo: string;
  setAccountNo: (value: string) => void;
  ifscCode: string;
  setIfscCode: (value: string) => void;
  branchName: string;
  setBranchName: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
}

export const EmployeeDetailsForm = ({
  employeeName,
  setEmployeeName,
  employeeCode,
  setEmployeeCode,
  employeeType,
  setEmployeeType,
  designation,
  setDesignation,
  dateOfJoining,
  setDateOfJoining,
  baseLocation,
  setBaseLocation,
  state,
  setState,
  panNo,
  setPanNo,
  bankName,
  setBankName,
  accountNo,
  setAccountNo,
  ifscCode,
  setIfscCode,
  branchName,
  setBranchName,
  month,
  setMonth,
  year,
  setYear,
}: EmployeeDetailsFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="employeeName">Employee Name</Label>
            <Input
              id="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employeeCode">Employee Code</Label>
            <Input
              id="employeeCode"
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
              placeholder="Enter code"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="employeeType">Employee Type</Label>
            <Input
              id="employeeType"
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
              placeholder="e.g., Full Time"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Enter designation"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dateOfJoining">Date of Joining</Label>
            <Input
              id="dateOfJoining"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              placeholder="DD-MM-YYYY"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="baseLocation">Base Location</Label>
            <Input
              id="baseLocation"
              value={baseLocation}
              onChange={(e) => setBaseLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter state"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="panNo">PAN No</Label>
            <Input
              id="panNo"
              value={panNo}
              onChange={(e) => setPanNo(e.target.value)}
              placeholder="Enter PAN"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <Input
              id="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter bank name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="accountNo">Account No</Label>
            <Input
              id="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              placeholder="Enter account number"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ifscCode">IFSC Code</Label>
            <Input
              id="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="Enter IFSC code"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="branchName">Branch Name</Label>
            <Input
              id="branchName"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              placeholder="Enter branch name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="month">Month</Label>
            <Input
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="e.g., April"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="e.g., 2025"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
