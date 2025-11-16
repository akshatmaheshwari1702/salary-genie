import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: 2,
    borderBottomColor: "#e5e7eb",
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 10,
    color: "#6b7280",
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    color: "#6b7280",
  },
  employeeDetails: {
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailColumn: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 11,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottom: 1,
    borderBottomColor: "#e5e7eb",
  },
  tableLabel: {
    fontSize: 10,
    color: "#6b7280",
  },
  tableValue: {
    fontSize: 10,
    fontWeight: "bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottom: 2,
    borderBottomColor: "#e5e7eb",
    fontWeight: "bold",
  },
  netSalaryBox: {
    backgroundColor: "#dbeafe",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  netSalaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  netSalaryLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  netSalaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3b82f6",
  },
  footer: {
    marginTop: 30,
    paddingTop: 15,
    borderTop: 1,
    borderTopColor: "#e5e7eb",
    textAlign: "center",
  },
  footerText: {
    fontSize: 8,
    color: "#6b7280",
  },
});

interface SalarySlipPDFProps {
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

export const SalarySlipPDF = ({
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
}: SalarySlipPDFProps) => {
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
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{companyName || "Company Name"}</Text>
            <Text style={styles.companyAddress}>{companyAddress || "Company Address"}</Text>
          </View>
          {logo && <Image src={logo} style={styles.logo} />}
        </View>

        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>SALARY SLIP</Text>
          <Text style={styles.subtitle}>
            For the month of {month || "Month"} {year || "Year"}
          </Text>
        </View>

        {/* Employee Details */}
        <View style={styles.employeeDetails}>
          <View style={styles.detailRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Employee Name</Text>
              <Text style={styles.detailValue}>{employeeName || "Name"}</Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Employee ID</Text>
              <Text style={styles.detailValue}>{employeeId || "ID"}</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Designation</Text>
              <Text style={styles.detailValue}>{designation || "Designation"}</Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Department</Text>
              <Text style={styles.detailValue}>{department || "Department"}</Text>
            </View>
          </View>
        </View>

        {/* Earnings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Basic Salary</Text>
            <Text style={styles.tableValue}>₹{Number(basicSalary || 0).toLocaleString()}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>HRA</Text>
            <Text style={styles.tableValue}>₹{Number(hra || 0).toLocaleString()}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Other Allowances</Text>
            <Text style={styles.tableValue}>₹{Number(otherAllowances || 0).toLocaleString()}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.tableLabel}>Gross Salary</Text>
            <Text style={styles.tableValue}>₹{calculateGross().toLocaleString()}</Text>
          </View>
        </View>

        {/* Deductions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deductions</Text>
          <View style={styles.totalRow}>
            <Text style={styles.tableLabel}>Total Deductions</Text>
            <Text style={styles.tableValue}>₹{Number(deductions || 0).toLocaleString()}</Text>
          </View>
        </View>

        {/* Net Salary */}
        <View style={styles.netSalaryBox}>
          <View style={styles.netSalaryRow}>
            <Text style={styles.netSalaryLabel}>NET SALARY</Text>
            <Text style={styles.netSalaryValue}>₹{calculateNet().toLocaleString()}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This is a computer generated salary slip and does not require signature
          </Text>
        </View>
      </Page>
    </Document>
  );
};
