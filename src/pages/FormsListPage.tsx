import { LayoutTemplate, Plus, Search, Eye, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
const forms = [
    { id: "1", name: "Customer Onboarding Tracker", status: "Active", views: 1250, submissions: 243, updated: "2 hours ago" },
    { id: "2", name: "Q3 Employee Satisfaction Survey", status: "Active", views: 89, submissions: 64, updated: "1 day ago" },
    { id: "3", name: "Waitlist Registration (Demo)", status: "Draft", views: 0, submissions: 0, updated: "3 days ago" },
    { id: "4", name: "Support Ticket Intake", status: "Active", views: 3400, submissions: 892, updated: "1 week ago" }
];
export default function FormsListPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><LayoutTemplate style={{ color: "var(--color-accent-primary)" }} /> My Forms</h1>
            <Link to="/builder" className="btn btn-primary"><Plus size={16} /> Create Form</Link>
        </div>

        <div className="card" style={{ padding: "var(--space-2)", marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Search size={18} style={{ color: "var(--color-text-tertiary)", marginLeft: "var(--space-3)" }} />
            <input type="text" placeholder="Search forms..." style={{ border: "none", background: "transparent", width: "100%", padding: "8px 16px", outline: "none", fontSize: "14px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "var(--space-4)" }}>
            {forms.map(f => (<div key={f.id} className="card" style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-4)" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 600 }}>{f.name}</h3>
                    <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: 999, fontWeight: 600, textTransform: "uppercase", background: f.status === "Active" ? "rgba(16,185,129,0.1)" : "var(--color-bg-secondary)", color: f.status === "Active" ? "#10B981" : "var(--color-text-secondary)" }}>{f.status}</span>
                </div>

                <div style={{ display: "flex", gap: "var(--space-4)", marginBottom: "var(--space-5)", marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-text-secondary)", fontSize: "13px" }}><Eye size={14} /> {f.views.toLocaleString()} views</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-text-secondary)", fontSize: "13px" }}><Inbox size={14} /> {f.submissions.toLocaleString()} replies</div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-border)" }}>
                    <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Updated {f.updated}</span>
                    <Link to="/builder" className="btn btn-ghost btn-sm">Edit</Link>
                </div>
            </div>))}
        </div>
    </div>);
}
