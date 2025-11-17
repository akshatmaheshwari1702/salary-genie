import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Very minimal styles to avoid any styling issues
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    width: 120,
    fontSize: 10,
  },
  value: {
    fontSize: 10,
  },
});

interface MinimalSalarySlipPDFProps {
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

export const MinimalSalarySlipPDF = (props: MinimalSalarySlipPDFProps) => {
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
    const basic = parseFloat(basicSalary) || 0;
    const hraAmount = parseFloat(hra) || 0;
    const allowance = parseFloat(specialAllowance) || 0;
    return basic + hraAmount + allowance;
  };

  const calculateTotalDeductions = () => {
    const tdsAmount = parseFloat(tds) || 0;
    const ptAmount = parseFloat(professionalTax) || 0;
    const pfAmount = parseFloat(providentFund) || 0;
    return tdsAmount + ptAmount + pfAmount;
  };

  const calculateNetPay = () => {
    return calculateGrossEarning() - calculateTotalDeductions();
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Salary Slip</Text>
        
        <View style={styles.section}>
          <Text style={styles.text}>Oliver Publications LLP</Text>
          <Text style={styles.text}>Salary Slip for {month || "Month"} {year || "Year"}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Employee Name:</Text>
            <Text style={styles.value}>{employeeName || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Employee Code:</Text>
            <Text style={styles.value}>{employeeCode || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Designation:</Text>
            <Text style={styles.value}>{designation || "N/A"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Earnings:</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Basic:</Text>
            <Text style={styles.value}>{basicSalary || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>HRA:</Text>
            <Text style={styles.value}>{hra || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Special Allowance:</Text>
            <Text style={styles.value}>{specialAllowance || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gross Earning:</Text>
            <Text style={styles.value}>{calculateGrossEarning()}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Deductions:</Text>
          <View style={styles.row}>
            <Text style={styles.label}>TDS:</Text>
            <Text style={styles.value}>{tds || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Professional Tax:</Text>
            <Text style={styles.value}>{professionalTax || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Provident Fund:</Text>
            <Text style={styles.value}>{providentFund || "0"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Deductions:</Text>
            <Text style={styles.value}>{calculateTotalDeductions()}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Net Pay:</Text>
            <Text style={styles.value}>{calculateNetPay()}</Text>
          </View>
        </View>

        <Text style={styles.text}>This is a computer-generated slip and does not require signature.</Text>
      </Page>
    </Document>
  );
};