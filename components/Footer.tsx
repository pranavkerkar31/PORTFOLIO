export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container flex justify-center items-center">
        <p className="text-muted-foreground text-center">
          © {new Date().getFullYear()} Pranav Kerkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
