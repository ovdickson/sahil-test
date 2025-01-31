import { z } from "zod";
import * as jwt from "jsonwebtoken";

export const userSchema = z.object({
  name: z.string(),
});

type UserAttr = z.infer<typeof userSchema>;

const HASURA_GRAPHQL_JWT_SECRET = {
  type: process.env.HASURA_JWT_SECRET_TYPE || "HS256",
  key:
    process.env.HASURA_JWT_SECRET_KEY ||
    "this-is-a-generic-HS256-secret-key-and-you-should-really-change-it",
};

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: HASURA_GRAPHQL_JWT_SECRET.type as "HS256" | "RS512",
  expiresIn: "10h",
};

interface GenerateJWTParams {
  defaultRole: string;
  allowedRoles: string[];
  otherClaims?: Record<string, string | string[]>;
}

export function generateJWT(params: GenerateJWTParams): string {
  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": params.allowedRoles,
      "x-hasura-default-role": params.defaultRole,
      ...params.otherClaims,
    },
  };
  return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET.key, JWT_CONFIG);
}

export const registerUser = (user: UserAttr) => {
  const token = {
    name: "Emmanuel",
    email: "emmanuelgatwech@gmail.com",
    id: 3,
  };
  // console.log(createJWT);
  // const claim = generateJWTClaim(token, user);
  // console.log(claim);
  // const jwt = generateJWT(claim, { secret: process.env.SECRET });
  // console.log(jwt);
  return user;
};
