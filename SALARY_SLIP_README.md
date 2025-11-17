# Salary Slip Generator

A React-based web application for generating professional salary slips with PDF download functionality.

## Features

- **Interactive Form**: Fill in employee details, salary components, and company information
- **Real-time Preview**: See how your salary slip will look before generating
- **PDF Generation**: Download professional PDF salary slips
- **Company Logo**: Includes Oliver Publications LLP logo
- **Professional Format**: Standard salary slip layout with earnings and deductions

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## Usage

1. **Fill Employee Details**: Enter employee information including name, code, designation, etc.
2. **Enter Salary Details**: Add basic salary, HRA, allowances, and deductions
3. **Preview**: Check the salary slip preview on the right side
4. **Generate PDF**: Click the "Generate PDF" button to download the salary slip

## PDF Generation

The application uses `@react-pdf/renderer` to generate high-quality PDF documents. The PDF includes:

- Company logo and header
- Employee details grid
- Earnings and deductions table
- Net pay calculation
- Amount in words
- Professional footer

## Technical Details

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **PDF Generation**: @react-pdf/renderer
- **Build Tool**: Vite
- **Form Handling**: React Hook Form with Zod validation

## File Structure

- `src/components/`: React components
  - `SalarySlipPDF.tsx`: PDF document component
  - `SalarySlipPreview.tsx`: Web preview component
  - Form components for data input
- `src/assets/`: Static assets including company logo
- `src/utils/`: Utility functions for number conversion and file handling

## Troubleshooting

### PDF Download Issues

If PDF download doesn't work:

1. Check browser popup blockers
2. Ensure JavaScript is enabled
3. Try a different browser
4. Check console for error messages

### Logo Display Issues

The logo is embedded as base64 data. If it doesn't display:

1. Check that `OLIVER_LOGO_BASE64` is properly imported
2. Verify the base64 string is valid
3. Check browser console for image loading errors

## Development

To add new features or modify the salary slip:

1. Update the form components in `src/components/`
2. Modify the PDF layout in `SalarySlipPDF.tsx`
3. Update the preview in `SalarySlipPreview.tsx`
4. Test PDF generation thoroughly

## Support

For issues or questions, please check the console for error messages and ensure all required fields are filled before generating the PDF.