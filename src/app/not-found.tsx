import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 underline"
      >
        Return Home
      </Link>
    </div>
  );
}