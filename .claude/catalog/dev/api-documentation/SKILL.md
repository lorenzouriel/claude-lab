---
name: api-documentation
category: dev
description: >
  Generates API documentation from route handlers, code, OpenAPI specs, or plain
  description. Produces endpoint docs with parameters, request/response schemas,
  curl examples, error codes, and authentication notes. Decision-tree driven by
  input type (code / spec / description).
triggers:
  - "api documentation"
  - "api docs"
  - "document this api"
  - "document endpoints"
  - "openapi"
  - "swagger"
  - "/api-documentation"
workflow_signals:
  - documentation
  - api docs
  - readme
  - technical docs
  - swagger
  - openapi
  - endpoints
languages:
  - en
  - pt-br
---

# /api-documentation — API Endpoint Documentation

Produces documentation that developers can actually use — with curl examples, error codes, and auth notes.

---

## Phase 1 — Input Type Decision

Detect the input and pick the right approach:

**Code input (route handlers, controllers):**
- Read the code to extract: method, path, parameters, body schema, response structure, auth requirements
- Look for validation logic to document constraints
- Check error handling to document error codes

**OpenAPI / Swagger spec:**
- Parse the YAML/JSON to extract all endpoints
- Expand `$ref` references mentally
- Note deprecated endpoints

**Plain description:**
- Ask: "Is there a request body? What does a successful response look like? Any auth required?"
- Note that the output will be a draft needing developer verification

---

## Phase 2 — Per-Endpoint Documentation

For each endpoint, produce this structure:

```markdown
### [METHOD] /path/to/endpoint

> [One-sentence description of what this endpoint does]

**Authentication:** [None | Bearer token | API key | OAuth2 scope: write:resource]

---

#### Parameters

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| `user_id` | path | string | ✓ | Unique user identifier |
| `page` | query | integer | ✗ | Page number, default: 1 |
| `limit` | query | integer | ✗ | Results per page, default: 20, max: 100 |

---

#### Request Body

```json
{
  "name": "string",        // Required. Display name, max 100 chars.
  "email": "string",       // Required. Valid email address.
  "role": "admin | user",  // Optional. Default: "user".
  "metadata": {            // Optional. Arbitrary key-value pairs.
    "key": "value"
  }
}
```

---

#### Responses

**200 OK**
```json
{
  "id": "usr_abc123",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin",
  "created_at": "2024-01-15T10:30:00Z"
}
```

**400 Bad Request** — Validation error
```json
{ "error": "validation_failed", "message": "email is required", "field": "email" }
```

**401 Unauthorized** — Missing or invalid token
```json
{ "error": "unauthorized", "message": "Invalid or expired token" }
```

**404 Not Found** — Resource doesn't exist
```json
{ "error": "not_found", "message": "User not found" }
```

---

#### Example

```bash
curl -X POST https://api.example.com/v1/users \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com"
  }'
```
```

---

## Phase 3 — API Overview Section

Before individual endpoints, produce a top-level overview:

```markdown
# {API Name} API Reference

**Base URL:** `https://api.example.com/v1`
**Authentication:** [Describe auth scheme with example header]
**Rate limits:** [X requests per minute per IP / token]
**Content-Type:** `application/json` for all requests and responses
**Versioning:** [How the API is versioned]

## Error format

All errors follow this structure:
```json
{ "error": "error_code", "message": "Human-readable description" }
```

## Common error codes

| Code | HTTP | Meaning |
|---|---|---|
| `unauthorized` | 401 | Missing or invalid auth |
| `forbidden` | 403 | Authenticated but not allowed |
| `not_found` | 404 | Resource doesn't exist |
| `validation_failed` | 400 | Request body or params invalid |
| `rate_limited` | 429 | Too many requests |
| `internal_error` | 500 | Server error |
```

---

## Rules

- Never document fields that don't exist in the code — mark assumptions as `[TO VERIFY]`
- curl examples must be copy-pasteable: use `{placeholder}` syntax for values to replace
- Authentication notes go on EVERY endpoint, not just the overview
- Response examples must use realistic, non-sensitive example data (not `"string"` or `"value"`)
- Error codes: document every HTTP status code the endpoint can return
- Save to `outputs/docs/api-reference-{YYYY-MM-DD}.md`
