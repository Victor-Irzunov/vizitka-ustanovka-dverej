import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Установка дверей в Минске по низким ценам',
  description: 'Доверьте нам установку межкомнатных дверей с опытным мастером. Качественные работы в срок. Различные варианты оплаты. Свяжитесь с нами для уточнения стоимости, сроков и назначения визита мастера.'
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
