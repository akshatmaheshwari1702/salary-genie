/**
 * Utility function to download a blob as a file
 * @param blob - The blob to download
 * @param filename - The filename for the download
 */
export const downloadBlob = (blob: Blob, filename: string): void => {
  try {
    // Create object URL
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    
    // Set link attributes for better compatibility
    link.style.display = "none";
    link.setAttribute("download", filename);
    
    // Add to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up object URL
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
    
    // Fallback: try to open blob in new window
    try {
      const url = URL.createObjectURL(blob);
      const newWindow = window.open(url, "_blank");
      if (!newWindow) {
        throw new Error("Popup blocked");
      }
      // Clean up after a delay
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (fallbackError) {
      console.error("Fallback download also failed:", fallbackError);
      throw new Error("Unable to download file. Please check your browser settings.");
    }
  }
};

/**
 * Utility function to generate a safe filename
 * @param employeeName - Employee name
 * @param month - Month
 * @param year - Year
 * @param employeeCode - Optional employee code
 */
export const generateSalarySlipFilename = (
  employeeName: string,
  month: string,
  year: string,
  employeeCode?: string
): string => {
  // Clean employee name for filename
  const cleanName = employeeName
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase();
  
  const cleanMonth = month.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanYear = year.replace(/[^0-9]/g, "");
  
  if (employeeCode) {
    const cleanCode = employeeCode.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    return `salary-slip-${cleanName}-${cleanCode}-${cleanMonth}-${cleanYear}.pdf`;
  }
  
  return `salary-slip-${cleanName}-${cleanMonth}-${cleanYear}.pdf`;
};