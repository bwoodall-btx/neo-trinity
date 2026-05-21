# TRINITY MEMORY
*Persistent context loaded on every session. Edit this file directly in GitHub to update Trinity's knowledge. Changes take effect immediately on next load.*

---

## Ongoing Instructions
*Behavioral rules and preferences that override defaults.*

- Keep voice responses brief — Ben prefers direct, concise answers
- Avoid asking multiple questions at once; ask one at a time if clarification is needed
- When referencing company documents, always include the MOD file path

---

## Active Task List
*Things Ben has asked Trinity to track or follow up on.*

- [ ] Wire calendar integration to Trinity (Google Calendar direct or Make.com once-per-session fetch)
- [ ] Re-enable splash screen intro once all core functionality is stable
- [ ] Re-enable auto-listen feature once reliability is confirmed
- [ ] Fix Make.com Scenario B module order (Module 7 must run before Module 8)
- [ ] Build Looker Studio Dashboard Page 2 (CSM metrics)
- [ ] Obtain Skyco GA4 access for Looker Dashboard Pages 1 and 3
- [ ] Build Make.com Scenario A — Trinity Daily Briefing (scheduled 7:45am weekdays)

---

## Agent Notes
*Status and context on NEO agents.*

- CSM v3 is LIVE as of May 20, 2026. 423 customers, ~42 min runtime. Watch timing — if customer list exceeds ~440, consider splitting or upgrading Make.com plan.
- Make.com Core plan has a 1-minute interval limit on instant webhook scenarios — not suitable for real-time voice. Trinity now calls Claude directly to bypass this.
- Chief Agent scenario is active in Make.com.
- Trinity Scenario B (Make.com) is kept active for future calendar/agentic integration but is no longer used for core conversation.

---

## Improvement Log
*Ideas and fixes to implement in future builds.*

- Add Google Calendar integration: fetch once on load, cache for session, inject into system prompt
- Add favicon.ico and icon-192.png to GitHub repo (currently returning 404)
- Add a "memory editor" UI panel in Trinity so Ben can update memory without going to GitHub
- Explore Scenario A (Daily Briefing) as a push notification or auto-trigger on morning load
- Consider upgrading Make.com to Pro plan for higher webhook rate limits as agent volume grows

---

## Learned Preferences
*Things Trinity has learned about how Ben likes to work.*

- Direct communication, no small talk or filler
- Prefers opportunity-focused framing (abundance, not scarcity)
- Does not want superlatives or corporate language
- Comfortable with technical detail but prefers plain language explanations first

---

## Reference Notes
*Quick reference data Trinity should know.*

- BTX email domain: @btxinc.com
- Shared email domain: @btxskyco.com (used for outbound agent emails like CSM)
- Pesca Holding email: @pescaholding.com
- ERP: ePIC by PIC Business Systems — picbusiness.com
- Make.com account: used for NEO automation scenarios
- GitHub repo (Trinity): https://github.com/bwoodall-btx/neo-trinity
- Trinity PWA: https://bwoodall-btx.github.io/neo-trinity/

---

*Last updated: May 20, 2026*
