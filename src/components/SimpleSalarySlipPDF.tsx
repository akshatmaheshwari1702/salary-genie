import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { convertNumberToWords } from "@/utils/numberToWords";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  border: {
    border: 2,
    borderColor: "#000000",
  },
  header: {
    borderBottom: 2,
    borderColor: "#000000",
    padding: 20,
  },
  companyName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#DC2626",
    marginBottom: 10,
  },
  companyAddress: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailRow: {
    flexDirection: "row",
    borderBottom: 1,
    borderColor: "#000000",
    padding: 8,
  },
  detailCell: {
    flex: 1,
    paddingRight: 10,
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
    marginTop: 20,
  },
  tableColumn: {
    flex: 1,
    borderRight: 1,
    borderColor: "#000000",
  },
  tableHeader: {
    backgroundColor: "#F3F4F6",
    padding: 8,
    borderBottom: 1,
    borderColor: "#000000",
    textAlign: "center",
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 1,
    borderColor: "#000000",
    padding: 8,
  },
  tableCell: {
    flex: 1,
    fontSize: 9,
  },
  tableCellRight: {
    flex: 1,
    fontSize: 9,
    textAlign: "right",
  },
  totalRow: {
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    padding: 8,
    borderBottom: 1,
    borderColor: "#000000",
  },
  totalCell: {
    flex: 1,
    fontSize: 9,
    fontWeight: "bold",
  },
  totalCellRight: {
    flex: 1,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "right",
  },
  wordsCell: {
    padding: 10,
    fontSize: 9,
    textAlign: "center",
    borderBottom: 1,
    borderColor: "#000000",
  },
  footer: {
    borderTop: 2,
    borderTopColor: "#2563EB",
    padding: 10,
    textAlign: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 9,
    fontWeight: "bold",
  },
});

interface SimpleSalarySlipPDFProps {
  employeeName: string;
  employeeCode: string;
  designation: string;
  month: string;
  year: string;
  basicSalary: string;
  hra: string;
  specialAllowance: string;
  tds: string;
  professionalTax: string;
  providentFund: string;
}

export const SimpleSalarySlipPDF = (props: SimpleSalarySlipPDFProps) => {
  const {
    employeeName,
    employeeCode,
    designation,
    month,
    year,
    basicSalary,
    hra,
    specialAllowance,
    tds,
    professionalTax,
    providentFund,
  } = props;

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

  const getAmountInWords = () => {
    try {
      const netPay = calculateNetPay();
      if (isNaN(netPay) || netPay < 0) {
        return "Amount in words not available";
      }
      return convertNumberToWords(netPay);
    } catch (error) {
      return "Amount in words not available";
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.companyName}>Oliver Publications LLP</Text>
            <Text style={styles.companyAddress}>
              Office Address: Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015
            </Text>
            <Text style={styles.title}>
              Salary Slip for {month || "Month"} {year || "Year"}
            </Text>
          </View>

          {/* Employee Details */}
          <View style={styles.detailRow}>
            <View style={styles.detailCell}>
              <Text style={styles.detailLabel}>Employee Name:</Text>
              <Text style={styles.detailValue}>{employeeName || "Name"}</Text>
            </View>
            <View style={styles.detailCell}>
              <Text style={styles.detailLabel}>Employee Code:</Text>
              <Text style={styles.detailValue}>{employeeCode || "Code"}</Text>
            </View>
            <View style={styles.detailCell}>
              <Text style={styles.detailLabel}>Designation:</Text>
              <Text style={styles.detailValue}>{designation || "Designation"}</Text>
            </View>
          </View>

          {/* Earnings and Deductions */}
          <View style={styles.tableSection}>
            {/* Earnings Column */}
            <View style={styles.tableColumn}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Earnings</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Basic</Text>
                <Text style={styles.tableCellRight}>{Number(basicSalary || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>HRA</Text>
                <Text style={styles.tableCellRight}>{Number(hra || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Special Allowance</Text>
                <Text style={styles.tableCellRight}>{Number(specialAllowance || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Gross Earning (A)</Text>
                <Text style={styles.totalCellRight}>{calculateGrossEarning().toLocaleString()}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Net Pay (A - B)</Text>
                <Text style={styles.totalCellRight}>{calculateNetPay().toLocaleString()}</Text>
              </View>
            </View>

            {/* Deductions Column */}
            <View style={styles.tableColumn}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Deductions</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>TDS</Text>
                <Text style={styles.tableCellRight}>{Number(tds || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Professional Tax</Text>
                <Text style={styles.tableCellRight}>{Number(professionalTax || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Provident Fund</Text>
                <Text style={styles.tableCellRight}>{Number(providentFund || 0).toLocaleString()}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalCell}>Total Deductions (B)</Text>
                <Text style={styles.totalCellRight}>{calculateTotalDeductions().toLocaleString()}</Text>
              </View>
              
              <View style={styles.wordsCell}>
                <Text>{getAmountInWords()}</Text>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Note: This is a Computer-Generated Slip and does not require signature
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};