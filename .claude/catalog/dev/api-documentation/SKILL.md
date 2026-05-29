---
name: api-documentation
category: dev
description: >
  Generates API documentation from route handlers, code, or plain description.
  Covers endpoint, method, auth, params, request/response schema, examples, and error codes.
triggers:
  - "document this API"
  - "API docs"
  - "write API documentation"
  - "document endpoint"
  - "/api-documentation"
workflow_signals:
  - api docs
  - documentation
  - readme
  - endpoint
  - swagger
  - openapi
languages:
  - en
  - pt-br
---

# /api-documentation

Generates clear, complete API documentation from code or description.

---

## Step 1 — Gather input

If not provided, ask:

> "Paste the route handler(s) or describe the endpoint — I'll generate the docs."

---

## Step 2 — Generate documentation

For each endpoint, produce this structure:

````markdown
## {Method} {/path}

**Summary:** {One sentence describing what this endpoint does}

**Authentication:** {None / Bearer token / API key / OAuth2}

---

### Parameters

#### Path Parameters
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `{param}` | string | Yes | {Description} |

#### Query Parameters
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `{param}` | string | No | `{default}` | {Description} |

#### Request Body
Content-Type: `application/json`

```json
{
  "field1": "string",
  "field2": 123,
  "field3": {
    "nested": true
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `field1` | string | Yes | {Description} |
| `field2` | integer | No | {Description} |

---

### Responses

#### 200 OK
```json
{
  "id": "abc123",
  "status": "success",
  "data": {}
}
```

#### 400 Bad Request
```json
{
  "error": "invalid_input",
  "message": "field1 is required"
}
```

#### 401 Unauthorized
```json
{
  "error": "unauthorized",
  "message": "Valid Bearer token required"
}
```

#### 404 Not Found
```json
{
  "error": "not_found",
  "message": "{resource} not found"
}
```

---

### Example Request

```bash
curl -X {METHOD} https://api.example.com{/path} \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "field1": "value"
  }'
```

### Example Response

```json
{
  "id": "abc123",
  "status": "success"
}
```
````

---

## Step 3 — Multiple endpoints

If documenting several endpoints, group them by resource:

```markdown
# API Reference

## Authentication
[POST /auth/login]
[POST /auth/refresh]
[DELETE /auth/logout]

## Users
[GET /users]
[GET /users/:id]
[POST /users]
[PATCH /users/:id]
[DELETE /users/:id]
```

---

## Rules
- Always include at least the most common error codes (400, 401, 403, 404, 500)
- Request/response examples must be valid JSON — no ellipsis or placeholder that breaks JSON
- If auth is unknown, note it as "Authentication: See your API token configuration"
- Save to `outputs/docs/api-reference-{YYYY-MM-DD}.md` or the `wiki/Resources/` folder
