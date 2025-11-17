import { OLIVER_LOGO_BASE64 } from "@/assets/oliverLogoBase64";
import { convertNumberToWords } from "@/utils/numberToWords";
import * as ReactPDF from "@react-pdf/renderer";

export const debugPDFGeneration = () => {
  console.log("=== PDF Generation Debug Info ===");
  
  // Check if @react-pdf/renderer is available
  try {
    console.log("✅ @react-pdf/renderer is available");
    console.log("Version info:", {
      Document: typeof ReactPDF.Document,
      Page: typeof ReactPDF.Page,
      pdf: typeof ReactPDF.pdf,
    });
  } catch (error) {
    console.error("❌ @react-pdf/renderer is not available:", error);
  }

  // Check logo data
  console.log("Logo data check:");
  console.log("Logo exists:", !!OLIVER_LOGO_BASE64);
  console.log("Logo starts with data:image:", OLIVER_LOGO_BASE64.startsWith("data:image"));
  console.log("Logo length:", OLIVER_LOGO_BASE64.length);
  console.log("Logo preview:", OLIVER_LOGO_BASE64.substring(0, 100) + "...");

  // Check browser compatibility
  console.log("Browser compatibility:");
  console.log("Blob support:", typeof Blob !== "undefined");
  console.log("URL.createObjectURL support:", typeof URL !== "undefined" && typeof URL.createObjectURL === "function");
  console.log("Document.createElement support:", typeof document !== "undefined" && typeof document.createElement === "function");

  // Test number conversion
  try {
    const testAmount = 50000;
    const result = convertNumberToWords(testAmount);
    console.log("✅ Number to words conversion works:", result);
  } catch (error) {
    console.error("❌ Number to words conversion failed:", error);
  }

  console.log("=== End Debug Info ===");
};