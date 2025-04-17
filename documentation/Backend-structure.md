<!-- File: Backend-structure.md -->

# Backend Structure

## 1. Architecture Overview

A serverless, API‑first backend powered by Supabase and Next.js API routes.

## 2. Core Services

| Service         | Responsibility                        |
| --------------- | ------------------------------------- |
| **Supabase**    | PostgreSQL database, Auth, Realtime   |
| **Next.js API** | Custom serverless endpoints (Node.js) |
| **Stripe**      | Payments & subscription management    |
| **Resend**      | Email delivery                        |
| **HelloSign**   | Digital contracts                     |

## 3. Data Models

- **User** (owner, breeder, admin)
- **BreederProfile**
- **Litter**
- **MessageThread**
- **Contract**
- **Payment**

## 4. Authentication & Authorization

- JWT via NextAuth.js (AuthJS)
- Role‑based access controls (owner vs. breeder vs. admin)

## 5. API Endpoints

    GET   /api/breeders
    POST  /api/breeders
    GET   /api/breeders/[id]
    POST  /api/search
    POST  /api/messages

## 6. Integrations

- Webhooks for Stripe events
- Realtime listeners for messaging
- HelloSign callback for contract status
