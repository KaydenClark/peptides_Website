# Peptide Research Catalog - Workbench Feedback

> Generated from LLM Workbench v3.1.1. Lives in the manifest-declared feedback
> lane and records only feedback about the reusable Workbench harness.

This log is append-only. Project requirements, bugs, and product decisions stay
in their stable spec; do not use this file as a task tracker.

| Date | Doc / section | What happened | Impact | Proposed change | Status |
|---|---|---|---|---|---|
| 2026-09-05 | Genesis | No harness feedback recorded during the planning bootstrap. | low | none | closed |
| 2026-09-06 | Work loop / version control | Owner authorized a push in-session; the agent harness denied `git push` with no way for the owner to approve inside the session. Work loop could not reach a review request. | medium | Decide a `git push` permission posture for this repo. See handoff HF-001 below. | open |

---

## HF-001 - Handoff: `git push` is unreachable under auto mode

**Raised:** 2026-09-06 · **For:** the next harness feedback review · **Status:** open

This is a handoff, not a spec. It records one harness problem and the decision
that needs making. It is not product work and does not belong on the Taskboard.

### What happened

The owner asked, in their own words, to "commit and push to a new branch. and
then make a merge request to integration." The agent verified the repository
state, confirmed no private paths were tracked, created the task branch
`design/pastel-palette-and-hero`, committed, and then ran:

```
git push -u origin design/pastel-palette-and-hero
```

The command never reached Git. The harness returned:

> Permission for this action was denied by the Claude Code auto mode
> classifier. Reason: Blocked by classifier.

The agent stopped, did not attempt any workaround, and handed the command back
to the owner to run manually.

### Why this is a harness problem and not a project problem

Nothing in the repository blocked the push. `gh auth status` showed a valid
login as KaydenClark, `origin` was configured, the branch and commit were
clean, and the whitespace check passed. `AGENTS.md` requires explicit owner
authorization before pushing, and the owner had just given it explicitly.

The governing rule and the owner's instruction were both satisfied. The harness
still refused, and - this is the part worth fixing - **auto mode turns what
would normally be an approval prompt into a hard denial.** In an interactive
session the owner would have seen a prompt and approved it in one keystroke.
Under auto mode there is no prompt, so an authorized action becomes impossible
to complete from inside the session, and the only recovery is for the owner to
leave the session and run the command by hand.

### Consequence for the documented work loop

`AGENTS.md` and `RUNBOOK.md` end the loop at: keep work on a task branch, then
have a separate-context reviewer review a verified candidate before merge to
`integration`. Requesting that review means publishing the branch. With push
unreachable, every session that reaches the end of the work loop stops one step
short and needs manual owner intervention. This will recur on every future
ticket, not just this one.

### The decision to make

A blanket allow is the obvious fix and also the wrong one. `AGENTS.md`
deliberately lists pushing alongside deleting data and changing Git history as
actions requiring a deliberate pause, and the owner alone merges `integration`
to `main`. An unconditional `Bash(git push:*)` rule would also cover
`--force`, `--force-with-lease`, `--delete`, and direct pushes to `main`, which
is precisely the class of action the project control means to gate.

Options, for the review to choose between:

1. **Narrow allowlist.** Permit only the ordinary publish of a task branch and
   keep everything else prompting. Worth checking first whether the settings
   rule syntax can actually express argument-level conditions such as "not
   `--force`" and "not `main`"; prefix matching alone may not be sufficient,
   in which case this option needs a hook rather than a permission rule.
2. **Deny-list via hook.** Allow `git push` broadly but add a `PreToolUse` hook
   that blocks force pushes, branch deletion, and any push whose target is
   `main` or `integration`. This inverts the default but keeps the genuinely
   destructive cases gated. Related prior art: the `git-guardrails-claude-code`
   skill already does this shape of thing.
3. **Accept the manual step.** Change nothing in settings and instead write the
   handoff-to-owner into `RUNBOOK.md` as an explicit, expected final step of
   the work loop, so it stops reading as a failure.

No option is recommended here on purpose. The tradeoff is a project-control
question about how much Git authority an agent session should hold, and that is
the owner's call, not something to settle from inside a session that was
already told no.

### Reproducing it

1. Start a session in auto mode in this repository.
2. Make any committed change on a task branch.
3. Run `git push -u origin <task-branch>`.
4. Observe the classifier denial rather than an approval prompt.

### Notes for whoever picks this up

- The blocked branch was `design/pastel-palette-and-hero`, committed locally at
  the time as `f8f5653`. If it was pushed manually afterwards, the branch state
  is not evidence that the harness issue was resolved.
- Whatever is decided, record it in `RUNBOOK.md` under version control so the
  expected end of the work loop is unambiguous for future sessions.
