import Link from "next/link";

export default function All() {
  return (
    <div>
      <h1>All Page</h1>
      <button>
        <Link href="auth/login">Login</Link>
      </button>
      <button>
        <Link href="auth/signup">Signup</Link>
      </button>
    </div>
  );
}
