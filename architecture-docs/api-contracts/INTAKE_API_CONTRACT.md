# ⚡ API CONTRACT SPECIFICATION
## LawRJ Founder Scoping & Intake API
**Document Reference:** `API-PRJ02-INTAKE-001`  
**High Systems Architect:** Dr. Richard Daystrom [Agent 04]  
**Endpoint:** `POST https://api.emailjs.com/api/v1.0/email/send` (or `/api/intake` proxy)  
**Authentication:** Public Token / Service Public Key  
**Content-Type:** `application/json`  

---

## 1. Request Schema (JSON Schema Draft-07)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "LawRJFounderIntakePayload",
  "type": "object",
  "required": [
    "service_id",
    "template_id",
    "user_id",
    "template_params"
  ],
  "properties": {
    "service_id": {
      "type": "string",
      "description": "EmailJS Service identifier"
    },
    "template_id": {
      "type": "string",
      "description": "EmailJS Template identifier"
    },
    "user_id": {
      "type": "string",
      "description": "Public API Key"
    },
    "template_params": {
      "type": "object",
      "required": [
        "founder_name",
        "company_name",
        "work_email",
        "company_stage",
        "primary_requirement",
        "target_jurisdictions",
        "execution_timeline",
        "disclaimer_acknowledged"
      ],
      "properties": {
        "founder_name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100
        },
        "company_name": {
          "type": "string",
          "minLength": 2,
          "maxLength": 100
        },
        "work_email": {
          "type": "string",
          "format": "email",
          "maxLength": 150
        },
        "phone_number": {
          "type": "string",
          "pattern": "^\\+?[0-9\\-\\s()]{7,20}$"
        },
        "company_stage": {
          "type": "string",
          "enum": [
            "Idea / Bootstrapped",
            "Pre-Seed",
            "Seed",
            "Series A+",
            "Enterprise"
          ]
        },
        "primary_requirement": {
          "type": "string",
          "enum": [
            "Global Holding Structuring",
            "Venture Capital / SAFE Financing",
            "Enterprise SaaS MSAs & Privacy",
            "Inbound India GCC Setup",
            "General Corporate Counsel"
          ]
        },
        "target_jurisdictions": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "execution_timeline": {
          "type": "string",
          "enum": [
            "Immediate (<14 Days)",
            "Within 30 Days",
            "Exploring Options"
          ]
        },
        "project_brief": {
          "type": "string",
          "maxLength": 3000
        },
        "mutual_nda_requested": {
          "type": "boolean",
          "default": false
        },
        "disclaimer_acknowledged": {
          "type": "boolean",
          "const": true
        },
        "honeypot_field": {
          "type": "string",
          "maxLength": 0
        }
      }
    }
  }
}
```

---

## 2. Response Status Codes & Error Protocol

| Status Code | Reason Phrase | Scenario & Payload Structure |
| :--- | :--- | :--- |
| **`200 OK`** | Briefing Received | Intake payload accepted and queued for Advocate review. `{"status": "success", "message": "Founder briefing received."}` |
| **`400 Bad Request`** | Validation Error | Mandatory fields missing or invalid email format. `{"error": "INVALID_PAYLOAD", "details": ["work_email is invalid"]}` |
| **`422 Unprocessable Entity`** | Disclaimer Unchecked | User failed to acknowledge Advocates Act disclaimer. `{"error": "DISCLAIMER_UNACKNOWLEDGED"}` |
| **`429 Too Many Requests`** | Rate Limit Tripped | More than 3 submissions per IP per 10-minute window. `{"error": "RATE_LIMIT_EXCEEDED", "retry_after": 600}` |

---

*Compiled by Dr. Richard Daystrom [Agent 04].*
