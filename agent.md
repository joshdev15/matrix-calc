<!-- MEMENTO_METADATA_START -->
# MEMENTO - CONTEXTO LOCAL
- **Proyecto:** matrix-calc (ID: 3)
<!-- MEMENTO_METADATA_END -->

# MEMENTO - LOCAL AGENT DOCUMENTATION

## Operation and Behavior
- **Resume:** Run `memento resume` at the start of work to load planning and sprint context.
- **Traceability:** Use `memento logs` if you detect inconsistencies.
- **Justifications:** If you move a normal task (`is_surprise: false`) with `memento task set --id <id> --moved-to <sprint_id>`, you must provide `--reason-id` and `--comment`.
- **Non-Negotiable Pre-Plan Gate (Highest Priority):** Whenever the user asks for a plan, roadmap, or step-by-step adjustments, you must ask this question first and wait for the user's answer before proposing any plan: `Do you want this plan to be tracked in Memento (Planning -> Sprints -> Tasks) for exact change traceability? (yes/no)`
- **No Bypass Allowed:** Do not skip, defer, or merge this question into a later step. If unanswered, ask again and stop plan generation until the user chooses.
- **Plan Structure Enforcement:** If the user answers `yes`, present and execute the plan strictly in Memento structure (Planning -> Sprints -> Tasks) with Memento statuses. If the user answers `no`, you may use your preferred planning style.

## Integrity Rules
- **Forbidden modifications:**
  - Plannings in `FINISHED` or `ARCHIVED` are locked.
  - Sprints in `COMPLETED` or `REJECTED` are locked.
  - Tasks in `DONE` or `BLOCKED` are read-only and cannot be modified.
