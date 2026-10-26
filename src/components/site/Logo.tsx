import kaarixLogo from "@/assets/kaarix-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={kaarixLogo}
      alt="Kaarix"
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}
