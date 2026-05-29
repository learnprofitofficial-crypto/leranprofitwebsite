// Web3Forms delivers form submissions straight to your inbox from the frontend —
// no backend or env vars needed. The access key is PUBLIC-SAFE by design
// (Web3Forms applies spam protection server-side), so it lives in the bundle.
//
// Get your free key at https://web3forms.com: enter learn.profit.official@gmail.com,
// and the access key is emailed to you in seconds. Paste it below.
export const WEB3FORMS_ACCESS_KEY = "15c40a4e-fa63-4a0e-b7e4-02f88e34a4e6";

export async function submitWeb3Forms(fields) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
  return data;
}
