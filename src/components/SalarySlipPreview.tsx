
import { Card } from "@/components/ui/card";
import { convertNumberToWords } from "@/utils/numberToWords";
import { OLIVER_LOGO_BASE64 } from "@/assets/oliverLogoBase64";

interface SalarySlipPreviewProps {
  employeeName: string;
  employeeCode: string;
  employeeType: string;
  designation: string;
  dateOfJoining: string;
  baseLocation: string;
  state: string;
  panNo: string;
  bankName: string;
  accountNo: string;
  ifscCode: string;
  branchName: string;
  month: string;
  year: string;
  basicSalary: string;
  hra: string;
  specialAllowance: string;
  tds: string;
  professionalTax: string;
  providentFund: string;
}

export const SalarySlipPreview = (props: Omit<SalarySlipPreviewProps, 'logo'>) => {
  const {
    employeeName,
    employeeCode,
    employeeType,
    designation,
    dateOfJoining,
    baseLocation,
    state,
    panNo,
    bankName,
    accountNo,
    ifscCode,
    branchName,
    month,
    year,
    basicSalary,
    hra,
    specialAllowance,
    tds,
    professionalTax,
    providentFund,
  } = props;
  const companyName = "Oliver Publications LLP";
  const companyAddress = "Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015";
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

  console.log(calculateNetPay())

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden" id="salary-slip">
      <div className="bg-white text-black">
        {/* Header */}
        <div className="grid grid-cols-[200px_1fr] border-2 border-black">
          <div className="border-r-2 border-black p-4 flex items-center justify-center">
            <img src={OLIVER_LOGO_BASE64} alt="Company Logo" className="max-w-full max-h-32 object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="border-b-2 border-black p-3 text-center">
              <h1 className="text-2xl font-bold text-red-600">{companyName}</h1>
            </div>
            <div className="border-b-2 border-black p-2 text-center text-sm">
              <p className="font-semibold">Office Address: {companyAddress}</p>
            </div>
            <div className="p-3 text-center">
              <h2 className="text-xl font-bold">Salary Slip for {month || "Month"} {year || "Year"}</h2>
            </div>
          </div>
        </div>

        {/* Employee Details Grid */}
        <div className="border-x-2 border-b-2 border-black">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] border-b-2 border-black">
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Employee Name:</p>
              <p className="text-sm">{employeeName || "Name"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Employee Type:</p>
              <p className="text-sm">{employeeType || "Type"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2">
              <p className="text-sm font-bold">Employee Code:</p>
              <p className="text-sm">{employeeCode || "Code"}</p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-b-2 border-black">
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Designation:</p>
              <p className="text-sm">{designation || "Designation"}</p>
            </div>
            <div className="p-2">
              <p className="text-sm font-bold">Date of Joining:</p>
              <p className="text-sm">{dateOfJoining || "DD-MM-YYYY"}</p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] border-b-2 border-black">
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Base Location:</p>
              <p className="text-sm">{baseLocation || "Location"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">State:</p>
              <p className="text-sm">{state || "State"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2">
              <p className="text-sm font-bold">PAN No:</p>
              <p className="text-sm">{panNo || "PAN"}</p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Bank Name:</p>
              <p className="text-sm">{bankName || "Bank"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">Account No:</p>
              <p className="text-sm">{accountNo || "Account"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2 border-r-2 border-black">
              <p className="text-sm font-bold">IFSC Code:</p>
              <p className="text-sm">{ifscCode || "IFSC"}</p>
            </div>
            <div className="w-px"></div>
            <div className="p-2">
              <p className="text-sm font-bold">Branch Name:</p>
              <p className="text-sm">{branchName || ""}</p>
            </div>
          </div>
        </div>

        {/* Earnings and Deductions Table */}
        <div className="grid grid-cols-2 border-x-2 border-b-2 border-black">
          {/* Earnings */}
          <div className="border-r-2 border-black">
            <div className="bg-gray-100 p-2 border-b-2 border-black text-center">
              <h3 className="font-bold">Earnings</h3>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-center font-bold text-sm">Components</div>
              <div className="p-2 text-center font-bold text-sm">Amount (Rs.)</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">Basic</div>
              <div className="p-2 text-right text-sm">{Number(basicSalary || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">HRA</div>
              <div className="p-2 text-right text-sm">{Number(hra || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">Special Allowance</div>
              <div className="p-2 text-right text-sm">{Number(specialAllowance || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black bg-gray-100">
              <div className="p-2 border-r-2 border-black font-bold text-sm">Gross Earning (A)</div>
              <div className="p-2 text-right font-bold text-sm">{calculateGrossEarning().toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black bg-gray-100">
              <div className="p-2 border-r-2 border-black font-bold text-sm">Net Pay (A - B)</div>
              <div className="p-2 text-right font-bold text-sm">{calculateNetPay().toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-2 border-r-2 border-black font-bold text-sm">Total Pay</div>
              <div className="p-2 text-right font-bold text-sm">{calculateNetPay().toLocaleString()}</div>
            </div>
          </div>

          {/* Deductions */}
          <div>
            <div className="bg-gray-100 p-2 border-b-2 border-black text-center">
              <h3 className="font-bold">Deductions</h3>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-center font-bold text-sm">Common Deductions</div>
              <div className="p-2 text-center font-bold text-sm">Amount (Rs.)</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">Tax Deducted at Source (TDS)</div>
              <div className="p-2 text-right text-sm">{Number(tds || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">Professional Tax</div>
              <div className="p-2 text-right text-sm">{Number(professionalTax || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black text-sm">Provident Fund (Employee)</div>
              <div className="p-2 text-right text-sm">{Number(providentFund || 0).toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-black bg-gray-100">
              <div className="p-2 border-r-2 border-black font-bold text-sm">Total Deductions (B)</div>
              <div className="p-2 text-right font-bold text-sm">{calculateTotalDeductions().toLocaleString()}</div>
            </div>
            <div className="p-3 border-b-2 border-black">
              <p className="text-sm text-center">{calculateNetPay().toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-x-2 border-b-2 border-black border-t-4 border-t-blue-600 p-3 text-center">
          <p className="text-sm font-semibold">Note: This is a Computer-Generated Slip and does not require signature</p>
        </div>
      </div>
    </Card>
  );
};
