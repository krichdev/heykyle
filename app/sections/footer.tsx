import { content } from "@/lib/content";

export function Footer() {
  return (
    <section
      className="h-32 bg-bottom"
      style={{ backgroundImage: `url(${content.footer.image})` }}
    />
  );
}
