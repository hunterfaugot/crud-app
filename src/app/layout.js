"use client";

import '../styles/globals.css'; // Global CSS
import { ItemsProvider } from '../context/ItemsContext'; // Correct path to the ItemsContext
import Layout from '../components/Layout'; // Correct path to the Layout component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemsProvider>
          <Layout>
            {children}
          </Layout>
        </ItemsProvider>
      </body>
    </html>
  );
}
