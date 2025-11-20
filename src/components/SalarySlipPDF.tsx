import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Simple number to words conversion for PDF
const numberToWords = (num: number): string => {
  if (num === 0) return "Zero only";
  if (isNaN(num) || num < 0) return "Amount not available";

  try {
    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const thousand = Math.floor((num % 100000) / 1000);
    const remainder = num % 1000;

    let result = "";
    if (crore > 0) result += crore + " Crore ";
    if (lakh > 0) result += lakh + " Lakh ";
    if (thousand > 0) result += thousand + " Thousand ";
    if (remainder > 0) result += remainder;

    return result.trim() + " only.";
  } catch (error) {
    return "Amount in words not available";
  }
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  tableSubHeaderText: {
    fontSize: 10, 
    lineHeight: 1.35, 
    textAlign: "center",
    fontWeight: "bold",
  },
  border: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#000000",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  logoSection: {
    width: 200,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  headerRight: {
    flex: 1,
  },
  companyName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#DC2626",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  companyAddress: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  detailsGrid: {
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  detailRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  detailRowLast: {
    flexDirection: "row",
  },
  detailCell: {
    padding: 8,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
    flex: 1,
  },
  detailCellLast: {
    padding: 8,
    flex: 1,
  },
  detailLabel: {
    fontSize: 9,
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 9,
    marginTop: 2,
  },
  tableSection: {
    flexDirection: "row",
  },
  tableColumn: {
    flex: 1,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
  },
  tableColumnLast: {
    flex: 1,
  },
  tableHeader: {
    backgroundColor: "#F3F4F6",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  tableHeaderText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  tableSubHeader: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  tableSubHeaderCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
  },
  tableSubHeaderCellLast: {
    flex: 1,
    padding: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  tableRowLast: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
    fontSize: 9,
  },
  tableCellLast: {
    flex: 1,
    padding: 8,
    fontSize: 9,
    textAlign: "right",
  },
  totalRow: {
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  totalCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: "#000000",
    fontSize: 9,
    fontWeight: "bold",
  },
  totalCellLast: {
    flex: 1,
    padding: 8,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "right",
  },
  wordsCell: {
    padding: 10,
    fontSize: 9,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#000000",
  },
  footer: {
    borderTopWidth: 4,
    borderTopStyle: "solid",
    borderTopColor: "#2563EB",
    padding: 10,
    textAlign: "center",
  },
  footerText: {
    fontSize: 9,
    fontWeight: "bold",
  },
});

interface SalarySlipPDFProps {
  companyName: string;
  companyAddress: string;
  logo: string;
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

export const SalarySlipPDF = (props: SalarySlipPDFProps) => {
  const {
    logo,
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
  const companyAddress =
    "Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015";
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
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoSection}>
              {logo && logo.length > 0 ? (
                <Image src={logo} style={styles.logo} />
              ) : (
                <View style={styles.logo}>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Company Logo
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.companyName}>{companyName}</Text>
              <Text style={styles.companyAddress}>
                Office Address: {companyAddress}
              </Text>
              <Text style={styles.title}>
                Salary Slip for {month || "Month"} {year || "Year"}
              </Text>
            </View>
          </View>

          {/* Employee Details */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailRow}>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Employee Name:</Text>
                <Text style={styles.detailValue}>{employeeName || "Name"}</Text>
              </View>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Employee Type:</Text>
                <Text style={styles.detailValue}>{employeeType || "Type"}</Text>
              </View>
              <View style={styles.detailCellLast}>
                <Text style={styles.detailLabel}>Employee Code:</Text>
                <Text style={styles.detailValue}>{employeeCode || "Code"}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Designation:</Text>
                <Text style={styles.detailValue}>
                  {designation || "Designation"}
                </Text>
              </View>
              <View style={styles.detailCellLast}>
                <Text style={styles.detailLabel}>Date of Joining:</Text>
                <Text style={styles.detailValue}>
                  {dateOfJoining || "DD-MM-YYYY"}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Base Location:</Text>
                <Text style={styles.detailValue}>
                  {baseLocation || "Location"}
                </Text>
              </View>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>State:</Text>
                <Text style={styles.detailValue}>{state || "State"}</Text>
              </View>
              <View style={styles.detailCellLast}>
                <Text style={styles.detailLabel}>PAN No:</Text>
                <Text style={styles.detailValue}>{panNo || "PAN"}</Text>
              </View>
            </View>

            <View style={styles.detailRowLast}>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Bank Name:</Text>
                <Text style={styles.detailValue}>{bankName || "Bank"}</Text>
              </View>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>Account No:</Text>
                <Text style={styles.detailValue}>{accountNo || "Account"}</Text>
              </View>
              <View style={styles.detailCell}>
                <Text style={styles.detailLabel}>IFSC Code:</Text>
                <Text style={styles.detailValue}>{ifscCode || "IFSC"}</Text>
              </View>
              <View style={styles.detailCellLast}>
                <Text style={styles.detailLabel}>Branch Name:</Text>
                <Text style={styles.detailValue}>{branchName || ""}</Text>
              </View>
            </View>
          </View>

          {/* Earnings and Deductions */}
          <View style={styles.tableSection}>
            {/* Earnings Column */}
            <View style={styles.tableColumn}>
              <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderText, { textAlign: "center" }]}>
                  Earnings
                </Text>
              </View>
              <View style={styles.tableSubHeader}>
                <View style={styles.tableSubHeaderCell}>
                  <Text style={styles.tableSubHeaderText}>Components</Text>
                </View>
                <View style={styles.tableSubHeaderCellLast}>
                  <Text style={styles.tableSubHeaderText}>Amount (Rs.)</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Basic</Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(basicSalary || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>HRA</Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(hra || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Special Allowance</Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(specialAllowance || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Gross Earning (A)</Text>
                <Text style={styles.totalCellLast}>
                  {calculateGrossEarning().toLocaleString()}
                </Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Net Pay (A - B)</Text>
                <Text style={styles.totalCellLast}>
                  {calculateNetPay().toLocaleString()}
                </Text>
              </View>
              <View style={styles.tableRowLast}>
                <Text style={styles.totalCell}>Total Pay</Text>
                <Text style={styles.totalCellLast}>
                  {calculateNetPay().toLocaleString()}
                </Text>
              </View>
            </View>

            {/* Deductions Column */}
            <View style={styles.tableColumnLast}>
              <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderText, { textAlign: "center" }]}>
                  Deductions
                </Text>
              </View>
              <View style={styles.tableSubHeader}>
                <View style={styles.tableSubHeaderCell}>
                  <Text style={styles.tableSubHeaderText}>
                    Common Deductions
                  </Text>
                </View>
                <View style={styles.tableSubHeaderCellLast}>
                  <Text style={styles.tableSubHeaderText}>Amount (Rs.)</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>
                  Tax Deducted at Source (TDS)
                </Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(tds || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Professional Tax</Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(professionalTax || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Provident Fund (Employee)</Text>
                <Text style={[styles.tableCellLast]}>
                  {Number(providentFund || 0).toLocaleString()}
                </Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Total Deductions (B)</Text>
                <Text style={styles.totalCellLast}>
                  {calculateTotalDeductions().toLocaleString()}
                </Text>
              </View>
              <View style={styles.wordsCell}>
                <Text>{calculateNetPay().toLocaleString()}</Text>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Note: This is a Computer-Generated Slip and does not require
              signature
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
