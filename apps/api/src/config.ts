/* eslint-disable turbo/no-undeclared-env-vars */
import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 8000;
export const secret = `${process.env.SECRET || "secret"}`;
export const databaseURL = process.env.DATABASE_URL as string;
export const environment: string = process.env.NODE_ENV || "development";
export const arenaPort: number = +(process.env.ARENA_PORT || 4545);
export const redisHost: string = process.env.REDIS_HOST || "http://127.0.0.1";
export const redisPassword: string = process.env.REDIS_PASSWORD || "password";
export const redisPort: number = +(process.env.ARENA_PORT || 6379);
export const sendGridAPIKey: string =
  process.env.SENDGRID_API_KEY || "sendgrid";
export const fromEmailAddress =
  process.env.FROM_EMAIL_ADDRESS || "emmanuelgatwech@gmail.com";
export const host = process.env.HOST || "localhost:3000";

export const WebPushPublicVapidKey =
  process.env.WEB_PUSH_PUBLIC_VAPID_KEY || "";
export const WebPushPrivateVapidKey =
  process.env.WEB_PUSH_PRIVATE_VAPID_KEY || "";

export const hasuraEndpoint = process.env.HASURA_GRAPHQL_ENDPOINT || "";
export const hasuraAdminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET || "";

export const databaseHost = process.env?.DATABASE_HOST ?? "localhost";
export const databaseUser = process.env?.DATABASE_USER ?? "postgres";
export const databasePort = process.env?.DATABASE_PORT ?? "5432";
export const database = process.env?.DATABASE_NAME ?? "postgres";
export const databasePassword = process?.env?.DATABASE_PASSWORD ?? "password";
