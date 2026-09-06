# Research Catalog

Local-only Next.js catalog for twenty owner-reviewed research-material records.
All records are paused, and the site does not collect, persist, submit, or
transmit data.

## Run locally

```powershell
npm.cmd install
$env:NEXT_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000`.

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
chemical-specification details. Inquiry submission, pricing, quantities,
payment, and fulfillment workflows are not implemented.
