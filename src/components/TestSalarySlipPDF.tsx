import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
});

interface TestPDFProps {
  employeeName: string;
  month: string;
  year: string;
}

export const TestSalarySlipPDF = ({ employeeName, month, year }: TestPDFProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Test Salary Slip</Text>
          <Text style={styles.text}>Employee: {employeeName || "Test Employee"}</Text>
          <Text style={styles.text}>Month: {month || "Test Month"}</Text>
          <Text style={styles.text}>Year: {year || "Test Year"}</Text>
          <Text style={styles.text}>This is a test PDF to check if basic PDF generation works.</Text>
        </View>
      </Page>
    </Document>
  );
};