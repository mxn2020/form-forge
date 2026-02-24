import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    forms: defineTable({ name: v.string(), description: v.optional(v.string()), components: v.string(), status: v.string(), userId: v.string(), updatedAt: v.string() }),
    submissions: defineTable({ formId: v.id("forms"), payload: v.string(), status: v.string(), submittedAt: v.string() }).index("by_form", ["formId"]),
    webhooks: defineTable({ formId: v.id("forms"), targetUrl: v.string(), active: v.boolean() }).index("by_form", ["formId"])
});
