# Peptide Method

Local-only Next.js catalog for twenty owner-reviewed research-material records.
Each catalog detail page has a single-item "Contact about this item" form
(TK-012) that emails the owner through Resend; nothing is stored by the
application. No database, acknowledgments, policy versions, or owner queue
exist yet.

## Run locally

```powershell
npm.cmd install
$env:NEXT_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000`.

## Inquiry email (Resend)

Copy `.env` and fill in:

- `RESEND_API_KEY` — from the Resend account's API Keys page.
- `OWNER_NOTIFY_EMAIL` — the inbox that receives inquiries. Until a sending
  domain is verified in Resend, delivery only works if this matches the email
  the Resend account itself was signed up with.
- `INQUIRY_FROM_EMAIL` (optional) — a `Name <address@domain>` sender. Leave
  unset until the sending domain shows "Verified" at
  [resend.com/domains](https://resend.com/domains); until then sends fall back
  to `onboarding@resend.dev`.

## Verify

```powershell
npm.cmd test
npm.cmd run lint
$env:NEXT_TELEMETRY_DISABLED='1'; npm.cmd run build
```

The master vial asset is stored at
`public/images/research-materials/vial-master.png`, with one band variant per
product colour beside it. The component renders
label text in HTML/CSS to keep reviewed catalog labels readable and consistent.

The catalog shows only directly owner-provided identity, package-strength, and
chemical-specification details. Pricing, quantities, payment, and fulfillment
workflows are not implemented.
