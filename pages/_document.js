import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{backgroundColor:"black"}}>
      <Head>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="width=device-width"/>
        <title>Sartify : The smart HR software for Africa's Businesses</title>
        <meta name="description" content="Effortlessly save 200hrs for efficient and costless talent acquisition, interview, retention, payrolling, staffing, time-off, employee data, organizational development, and HR workflows in one place."/>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
