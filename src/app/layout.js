import '../styles/globals.css';
import { ItemsProvider } from '../context/ItemsContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemsProvider>
          {children}
        </ItemsProvider>
      </body>
    </html>
  );
}
