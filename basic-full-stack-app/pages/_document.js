import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <a href = "/familyguy" className = "btn btn-primary mt-3">Family Guy Characters</a>
        <a href = "/" className = "btn btn-primary mt-3">Back to Home</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
