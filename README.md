# Reference Client Agent

An open-source reference implementation for partners, developers, and external systems seeking to interact with **Michael A & Company’s** core API gateway (`https://api.michaela.company/v1`) and open training corpora.

This client serves as a working blueprint for interested parties building self-hosted financial agents capable of querying our inference endpoints, operating reliably in disconnected environments, and executing local-first workflows.

## Reference Capabilities

* **Corporate Gateway Integration:** Pre-configured to authenticate against `/v1/query` for structured vector retrieval and monitor node availability via `/v1/health`.
* **Natural Language Processing (NLP):** Parses prompts into structured financial queries compatible with Michael A & Company's `training_data.jsonl` schema.
* **Multimodal Interaction:** Supports both text and voice input/synthesis for operational queries and automated reporting.
* **Offline-First Resilience:** Caches responses locally, queues outbound API requests during network interruptions, and preserves execution state without centralized cloud lock-in.

## Quickstart & Integration

1. **Clone the reference agent:**
   ```bash
   git clone git@github.com:Michael-A-and-Company/ai-pwa-agent.git
   cd ai-pwa-agent
