import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

// Runs before React hydration to prevent dark-mode flash
const darkModeScript = `(function(){
  if(localStorage.getItem('color-theme')==='dark'||(!('color-theme' in localStorage)&&window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark scroll-pt-24 scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-zinc-50 dark:bg-background text-zinc-600 dark:text-zinc-400 antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 overflow-x-hidden transition-colors duration-300`}
        suppressHydrationWarning
      >
        {/* Background decorations */}
        <div className="fixed inset-0 z-[-1] bg-zinc-50 dark:bg-background bg-grid transition-colors duration-300" />
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-zinc-300/30 dark:bg-zinc-600/10 rounded-full blur-[150px] z-[-1] pointer-events-none transition-colors duration-300" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-300/30 dark:bg-zinc-600/10 rounded-full blur-[150px] z-[-1] pointer-events-none transition-colors duration-300" />
        {children}
      </body>
    </html>
  );
}
