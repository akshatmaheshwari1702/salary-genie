import { pdf } from "@react-pdf/renderer";
import { SalarySlipPDF } from "@/components/SalarySlipPDF";
import { OLIVER_LOGO_BASE64 } from "@/assets/oliverLogoBase64";

export const testPdfGeneration = async () => {
  try {
    const testData = {
      companyName: "Oliver Publications LLP",
      companyAddress: "Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015",
      logo: OLIVER_LOGO_BASE64,
      employeeName: "John Doe",
      employeeCode: "EMP001",
      employeeType: "Full Time",
      designation: "Software Developer",
      dateOfJoining: "01-01-2023",
      baseLocation: "Indore",
      state: "Madhya Pradesh",
      panNo: "ABCDE1234F",
      bankName: "State Bank of India",
      accountNo: "1234567890",
      ifscCode: "SBIN0001234",
      branchName: "Main Branch",
      month: "November",
      year: "2024",
      basicSalary: "50000",
      hra: "15000",
      specialAllowance: "10000",
      tds: "5000",
      professionalTax: "200",
      providentFund: "6000"
    };

    console.log("Starting PDF generation test...");
    
    // Create the PDF blob
    const blob = await pdf(
      SalarySlipPDF(testData)
    ).toBlob();

    console.log("PDF generated successfully!");
    console.log("Blob size:", blob.size, "bytes");
    console.log("Blob type:", blob.type);

    return {
      success: true,
      blob,
      size: blob.size,
      type: blob.type
    };
  } catch (error) {
    console.error("PDF generation test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
};