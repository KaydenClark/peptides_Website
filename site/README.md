# Research Catalog Prototype

Local-only Next.js prototype for the catalog visual system. It contains five
generic illustrative visuals, one neutral placeholder, and an in-browser
inquiry-list state only. It does not collect, persist, submit, or transmit data.

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

The canonical vial asset is stored at
`public/images/research-materials/canonical-vial.png`. The component renders
label text in HTML/CSS to keep reviewed catalog labels readable and consistent.

Real compound names, strengths, inquiry submission, pricing, quantities,
payment, and fulfillment workflows are outside this prototype.
