export const metadata = {
  title: "Product Listing Page | Appscrip Task",
  description: "Browse products with filters, search, and responsive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
