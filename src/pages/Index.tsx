import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CompanyDetailsForm } from "@/components/CompanyDetailsForm";
import { EmployeeDetailsForm } from "@/components/EmployeeDetailsForm";
import { SalaryDetailsForm } from "@/components/SalaryDetailsForm";
import { SalarySlipPreview } from "@/components/SalarySlipPreview";
import { FileDown, TestTube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { pdf } from "@react-pdf/renderer";
import { SalarySlipPDF } from "@/components/SalarySlipPDF";
import { TestSalarySlipPDF } from "@/components/TestSalarySlipPDF";
import { SimpleSalarySlipPDF } from "@/components/SimpleSalarySlipPDF";
import { MinimalSalarySlipPDF } from "@/components/MinimalSalarySlipPDF";
import { OLIVER_LOGO_BASE64 } from "@/assets/oliverLogoBase64";
import { downloadBlob, generateSalarySlipFilename } from "@/utils/downloadHelpers";
import { debugPDFGeneration } from "@/utils/debugPDF";

const Index = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Company details
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [logo, setLogo] = useState("");

  // Employee details
  const [employeeName, setEmployeeName] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [baseLocation, setBaseLocation] = useState("");
  const [state, setState] = useState("");
  const [panNo, setPanNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Salary details
  const [basicSalary, setBasicSalary] = useState("");
  const [hra, setHra] = useState("");
  const [specialAllowance, setSpecialAllowance] = useState("");
  const [tds, setTds] = useState("");
  const [professionalTax, setProfessionalTax] = useState("");
  const [providentFund, setProvidentFund] = useState("");

  const handleTestPDF = async () => {
    if (isGenerating) return;
    
    try {
      setIsGenerating(true);
      
      // Debug information
      debugPDFGeneration();
      
      toast({
        title: "Testing PDF Generation",
        description: "Generating a simple test PDF...",
      });

      const blob = await pdf(
        <TestSalarySlipPDF
          employeeName="Test Employee"
          month="November"
          year="2024"
        />
      ).toBlob();

      downloadBlob(blob, "test-salary-slip.pdf");

      toast({
        title: "Test PDF Generated",
        description: "Simple test PDF created successfully!",
      });
    } catch (error) {
      console.error("Test PDF Generation Error:", error);
      toast({
        title: "Test Failed",
        description: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTestSimplePDF = async () => {
    if (isGenerating) return;
    
    try {
      setIsGenerating(true);
      
      console.log("=== Simple PDF Test Debug ===");
      console.log("Form data:", {
        employeeName: employeeName || "Test Employee",
        employeeCode: employeeCode || "EMP001",
        designation: designation || "Software Developer",
        month: month || "November",
        year: year || "2024",
        basicSalary: basicSalary || "50000",
        hra: hra || "15000",
        specialAllowance: specialAllowance || "10000",
        tds: tds || "5000",
        professionalTax: professionalTax || "200",
        providentFund: providentFund || "6000"
      });
      
      toast({
        title: "Testing Simple Salary PDF",
        description: "Generating a simple salary slip PDF...",
      });

      console.log("Creating PDF component...");
      const pdfComponent = (
        <MinimalSalarySlipPDF
          employeeName={employeeName || "Test Employee"}
          employeeCode={employeeCode || "EMP001"}
          designation={designation || "Software Developer"}
          month={month || "November"}
          year={year || "2024"}
          basicSalary={basicSalary || "50000"}
          hra={hra || "15000"}
          specialAllowance={specialAllowance || "10000"}
          tds={tds || "5000"}
          professionalTax={professionalTax || "200"}
          providentFund={providentFund || "6000"}
        />
      );
      
      console.log("Converting to PDF blob...");
      const blob = await pdf(pdfComponent).toBlob();
      console.log("PDF blob created successfully, size:", blob.size);

      const fileName = generateSalarySlipFilename(
        employeeName || "Test Employee", 
        month || "November", 
        year || "2024", 
        employeeCode
      );
      console.log("Generated filename:", fileName);
      
      console.log("Starting download...");
      downloadBlob(blob, `minimal-${fileName}`);

      toast({
        title: "Simple PDF Generated",
        description: "Simple salary slip PDF created successfully!",
      });
      console.log("=== Simple PDF Test Complete ===");
    } catch (error) {
      console.error("=== Simple PDF Generation Error ===");
      console.error("Error details:", error);
      console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
      toast({
        title: "Simple PDF Test Failed",
        description: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGeneratePDF = async () => {
    if (isGenerating) return;
    
    try {
      // Validate required fields
      if (!employeeName.trim()) {
        toast({
          title: "Validation Error",
          description: "Employee name is required to generate PDF.",
          variant: "destructive",
        });
        return;
      }

      if (!month.trim() || !year.trim()) {
        toast({
          title: "Validation Error",
          description: "Month and year are required to generate PDF.",
          variant: "destructive",
        });
        return;
      }

      setIsGenerating(true);

      // Show loading toast
      toast({
        title: "Generating PDF",
        description: "Please wait while we create your salary slip...",
      });

      console.log("=== Full PDF Generation Debug ===");
      console.log("Logo check:");
      console.log("- Logo exists:", !!OLIVER_LOGO_BASE64);
      console.log("- Logo length:", OLIVER_LOGO_BASE64.length);
      console.log("- Logo starts with data:image:", OLIVER_LOGO_BASE64.startsWith("data:image"));
      console.log("- Logo preview:", OLIVER_LOGO_BASE64.substring(0, 50) + "...");
      console.log("Attempting full version with logo...");
      
      // Always try the full version - don't use fallback for now
      const blob = await pdf(
        <SalarySlipPDF
          companyName="Oliver Publications LLP"
          companyAddress="Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015"
          logo={OLIVER_LOGO_BASE64}
          employeeName={employeeName}
          employeeCode={employeeCode}
          employeeType={employeeType}
          designation={designation}
          dateOfJoining={dateOfJoining}
          baseLocation={baseLocation}
          state={state}
          panNo={panNo}
          bankName={bankName}
          accountNo={accountNo}
          ifscCode={ifscCode}
          branchName={branchName}
          month={month}
          year={year}
          basicSalary={basicSalary}
          hra={hra}
          specialAllowance={specialAllowance}
          tds={tds}
          professionalTax={professionalTax}
          providentFund={providentFund}
        />
      ).toBlob();
      console.log("✅ Full version succeeded, blob size:", blob.size);

      // Generate filename and download
      const fileName = generateSalarySlipFilename(employeeName, month, year, employeeCode);
      downloadBlob(blob, fileName);

      toast({
        title: "PDF Generated Successfully",
        description: `Salary slip for ${employeeName} has been downloaded.`,
      });
    } catch (error) {
      console.error("PDF Generation Error:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please check your data and try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
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
            <CompanyDetailsForm />
            
            <EmployeeDetailsForm
              employeeName={employeeName}
              setEmployeeName={setEmployeeName}
              employeeCode={employeeCode}
              setEmployeeCode={setEmployeeCode}
              employeeType={employeeType}
              setEmployeeType={setEmployeeType}
              designation={designation}
              setDesignation={setDesignation}
              dateOfJoining={dateOfJoining}
              setDateOfJoining={setDateOfJoining}
              baseLocation={baseLocation}
              setBaseLocation={setBaseLocation}
              state={state}
              setState={setState}
              panNo={panNo}
              setPanNo={setPanNo}
              bankName={bankName}
              setBankName={setBankName}
              accountNo={accountNo}
              setAccountNo={setAccountNo}
              ifscCode={ifscCode}
              setIfscCode={setIfscCode}
              branchName={branchName}
              setBranchName={setBranchName}
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
              specialAllowance={specialAllowance}
              setSpecialAllowance={setSpecialAllowance}
              tds={tds}
              setTds={setTds}
              professionalTax={professionalTax}
              setProfessionalTax={setProfessionalTax}
              providentFund={providentFund}
              setProvidentFund={setProvidentFund}
            />

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Button 
                  onClick={handleTestPDF} 
                  className="w-full"
                  size="sm"
                  variant="outline"
                  disabled={isGenerating}
                >
                  <TestTube className="mr-1 h-3 w-3" />
                  Basic Test
                </Button>
                
                <Button 
                  onClick={handleTestSimplePDF} 
                  className="w-full"
                  size="sm"
                  variant="outline"
                  disabled={isGenerating}
                >
                  <TestTube className="mr-1 h-3 w-3" />
                  Minimal Test
                </Button>
              </div>

              <Button 
                onClick={handleGeneratePDF} 
                className="w-full"
                size="lg"
                disabled={isGenerating}
              >
                <FileDown className="mr-2 h-5 w-5" />
                {isGenerating ? "Generating PDF..." : "Generate PDF"}
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Preview</h2>
            <div className="overflow-auto">
              <SalarySlipPreview
                employeeName={employeeName}
                employeeCode={employeeCode}
                employeeType={employeeType}
                designation={designation}
                dateOfJoining={dateOfJoining}
                baseLocation={baseLocation}
                state={state}
                panNo={panNo}
                bankName={bankName}
                accountNo={accountNo}
                ifscCode={ifscCode}
                branchName={branchName}
                month={month}
                year={year}
                basicSalary={basicSalary}
                hra={hra}
                specialAllowance={specialAllowance}
                tds={tds}
                professionalTax={professionalTax}
                providentFund={providentFund}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
