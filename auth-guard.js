// auth-guard.js
async function requireAuth() {
  const { data: { session } } = await window.sb.auth.getSession();
  if (!session) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}
window.requireAuth = requireAuth;
