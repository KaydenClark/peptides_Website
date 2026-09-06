# Peptide Research Catalog

> Generated from LLM Workbench v3.1.1.

Planning repository for a non-transactional research-material catalog and
owner-reviewed inquiry flow. It is not an e-commerce, payment, order,
reservation, fulfillment, medical-information, or product-use website.

The detailed product specification is
[S-001](workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md). The site is
not implemented or deployed. Public work is blocked pending a qualified review
of the underlying arrangement, jurisdictional rules, privacy policy, and host
policy.

## Start here

- [AGENTS.md](AGENTS.md) - authority, private-source boundary, and delivery rules.
- [BLUEPRINT.md](BLUEPRINT.md) - product scope and cross-cutting decisions.
- [RUNBOOK.md](RUNBOOK.md) - exact local verification commands.
- [TASKBOARD.md](TASKBOARD.md) - current active work projection.
- [Room memory](workbench/wiki/MEMORY.md) - durable project routing.

## Verify

```powershell
node workbench/tools/workbench-layout.mjs validate --project . --genesis
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

Private source material is intentionally ignored by Git and is not website
content. No license has been selected for this planning repository.
