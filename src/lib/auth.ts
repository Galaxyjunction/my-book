import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: "./auth.db"
  },
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      background: {
        type: "string",
        required: false,
      },
      experience: {
        type: "string",
        required: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;