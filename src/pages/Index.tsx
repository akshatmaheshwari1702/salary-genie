import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CompanyDetailsForm } from "@/components/CompanyDetailsForm";
import { EmployeeDetailsForm } from "@/components/EmployeeDetailsForm";
import { SalaryDetailsForm } from "@/components/SalaryDetailsForm";
import { SalarySlipPreview } from "@/components/SalarySlipPreview";
import { FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { pdf } from "@react-pdf/renderer";
import { SalarySlipPDF } from "@/components/SalarySlipPDF";

const Index = () => {
  const { toast } = useToast();
  
  // Company details
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [logo, setLogo] = useState("");

  // Employee details
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Salary details
  const [basicSalary, setBasicSalary] = useState("");
  const [hra, setHra] = useState("");
  const [otherAllowances, setOtherAllowances] = useState("");
  const [deductions, setDeductions] = useState("");

  const handleGeneratePDF = async () => {
    try {
      const blob = await pdf(
        <SalarySlipPDF
          companyName={companyName}
          companyAddress={companyAddress}
          logo={logo}
          employeeName={employeeName}
          employeeId={employeeId}
          designation={designation}
          department={department}
          month={month}
          year={year}
          basicSalary={basicSalary}
          hra={hra}
          otherAllowances={otherAllowances}
          deductions={deductions}
        />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `salary-slip-${employeeId || "employee"}-${month}-${year}.pdf`;
      link.click();
      URL.revokeObjectURL(url);

      toast({
        title: "PDF Generated",
        description: "Salary slip has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Salary Slip Generator</h1>
          <p className="text-muted-foreground mt-1">Generate professional salary slips instantly</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Forms Section */}
          <div className="space-y-6">
            <CompanyDetailsForm
              companyName={companyName}
              setCompanyName={setCompanyName}
              companyAddress={companyAddress}
              setCompanyAddress={setCompanyAddress}
              logo={logo}
              setLogo={setLogo}
            />
            
            <EmployeeDetailsForm
              employeeName={employeeName}
              setEmployeeName={setEmployeeName}
              employeeId={employeeId}
              setEmployeeId={setEmployeeId}
              designation={designation}
              setDesignation={setDesignation}
              department={department}
              setDepartment={setDepartment}
              month={month}
              setMonth={setMonth}
              year={year}
              setYear={setYear}
            />
            
            <SalaryDetailsForm
              basicSalary={basicSalary}
              setBasicSalary={setBasicSalary}
              hra={hra}
              setHra={setHra}
              otherAllowances={otherAllowances}
              setOtherAllowances={setOtherAllowances}
              deductions={deductions}
              setDeductions={setDeductions}
            />

            <Button 
              onClick={handleGeneratePDF} 
              className="w-full"
              size="lg"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Generate PDF
            </Button>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Preview</h2>
            <SalarySlipPreview
              companyName={companyName}
              companyAddress={companyAddress}
              logo={logo}
              employeeName={employeeName}
              employeeId={employeeId}
              designation={designation}
              department={department}
              month={month}
              year={year}
              basicSalary={basicSalary}
              hra={hra}
              otherAllowances={otherAllowances}
              deductions={deductions}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
