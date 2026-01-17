/**
 * DS DeFi - GraphQL Context
 * Request context for GraphQL resolvers
 */

import type { FastifyRequest, FastifyReply } from 'fastify';
import type { db } from '../database/connection.js';

export interface Context {
  db: typeof db;
  request: FastifyRequest;
  reply: FastifyReply;
  agentId?: string; // Authenticated agent ID
}

/**
 * Create context for each GraphQL request
 */
export async function createContext({
  request,
  reply,
}: {
  request: FastifyRequest;
  reply: FastifyReply;
}): Promise<Context> {
  // Extract agent ID from auth header (simplified for MVP)
  const authHeader = request.headers.authorization;
  let agentId: string | undefined;

  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7);
    // TODO: Validate token and extract agent ID
    // For MVP, token IS the agent ID
    agentId = token;
  }

  // Import db dynamically to avoid circular dependency
  const { db } = await import('../database/connection.js');

  return {
    db,
    request,
    reply,
    agentId,
  };
}
