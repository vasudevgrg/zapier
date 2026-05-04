import Appbar from "../../components/Appbar/Appbar";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Appbar page="signup" />
      {children}{" "}
    </>
  );
}
