import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CompanyDetailsFormProps {
  companyName: string;
  setCompanyName: (value: string) => void;
  companyAddress: string;
  setCompanyAddress: (value: string) => void;
  logo: string;
  setLogo: (value: string) => void;
}

export const CompanyDetailsForm = ({
  companyName,
  setCompanyName,
  companyAddress,
  setCompanyAddress,
  logo,
  setLogo,
}: CompanyDetailsFormProps) => {
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyAddress">Company Address</Label>
          <Input
            id="companyAddress"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            placeholder="Enter company address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="logo">Company Logo</Label>
          <Input
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
          />
        </div>
      </CardContent>
    </Card>
  );
};
