
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoImg from "@/assets/Oliver Logo.jpeg";

interface CompanyDetailsFormProps {
  companyName: string;
  setCompanyName: (value: string) => void;
  companyAddress: string;
  setCompanyAddress: (value: string) => void;
  logo: string;
  setLogo: (value: string) => void;
}

export const CompanyDetailsForm = () => {
  const companyName = "Oliver Publications LLP";
  const companyAddress = "Plot No 21 Sector D 2 Industrial Area Sawer Road Indore 452015";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={companyName}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyAddress">Company Address</Label>
          <Input
            id="companyAddress"
            value={companyAddress}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label>Company Logo</Label>
          <img src={logoImg} alt="Company Logo" className="max-w-full max-h-32 object-contain border rounded" />
        </div>
      </CardContent>
    </Card>
  );
};
