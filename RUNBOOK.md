# Peptide Research Catalog - Runbook

> Generated from LLM Workbench v3.1.1.

**Last reviewed:** 2026-09-05
**Runtime owner:** project owner
**Environment:** local planning bootstrap

## Ordinary Entry

Read `AGENTS.md`, this Runbook, and `LEXICON.md`, then select the applicable
ticket from its stable spec. Preserve private reference files and do not treat
them as public catalog data.

## Prerequisites

- Node.js 18 or later for Workbench checks.
- Git for local recovery. The configured `origin` remote is not an authorization
  to push or publish; either action still needs owner authorization.

No accounts, secrets, environment variables, or application database are
configured. The only product runtime is the local-only prototype in `site/`.

## Verify the planning bootstrap

Run from the repository root:

```powershell
node workbench/tools/workbench-layout.mjs validate --project . --genesis
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
git status --short --branch
```

Expected result: the layout validator, renderer, and doctor exit successfully;
Git shows private source material as ignored and no configured remote.

## Product implementation prerequisites

Before any public catalog entry, inquiry form, or deployment work begins:

1. Obtain qualified counsel's written review of the actual arrangement,
   jurisdictions, operator role, and allowable catalog content.
2. Obtain an owner-approved eligibility, retention/deletion, incident-response,
   and privacy policy.
3. Select a host and email provider that permit the disclosed activity.
4. Create a security design for authenticated administration, authorization,
   CSRF protection, rate limits, audit events, backups, and data deletion.

## Workbench lifecycle

```powershell
node workbench/tools/spec-workbench.mjs next --json
node workbench/tools/spec-workbench.mjs show S-001
node workbench/tools/spec-workbench.mjs claim S-001 --agent codex
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

For behavior changes, add a failing test first, run it to confirm failure,
implement the smallest correction, then run focused tests and the verification
commands above. The local prototype's focused content guard runs with
`Set-Location site; npm.cmd test`.

## Data and recovery

The `mixing info/` folder and `Mixing and dose info.zip` are local-only source
material. They are ignored by Git and must not be renamed, copied, imported, or
deleted by routine project work. Do not put personal inquiry data, verification
tokens, database exports, or mail content into Git.

If a future application stores inquiry data, it must document tested backup,
restoration, retention, and deletion procedures in this Runbook before launch.

## Version control

```powershell
git status --short --branch
git switch -c codex/short-description
git diff --check
```

Keep work on a task branch. A separate-context reviewer must review a verified
candidate before merge to `integration`. The owner alone merges `integration`
to `main`. Do not create a remote, push, or publish without explicit owner
authorization.
